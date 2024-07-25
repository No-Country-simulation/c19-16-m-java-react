package com.plat_bancaria.plataforma.Service;
import com.plat_bancaria.plataforma.Model.User;
import com.plat_bancaria.plataforma.Model.VerificationToken;
import com.plat_bancaria.plataforma.Repository.UserRepository;
import com.plat_bancaria.plataforma.Repository.VerificationTokenRespository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
@RequiredArgsConstructor
@Slf4j
public class UserService {

    private final UserRepository userRepository;
    private final EmailServiceImpl emailService;
    private final VerificationTokenRespository verificationTokenRespository;

    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User deleteUser(Long id) {
        Optional<User> optionalUser = userRepository.findById(id);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            userRepository.delete(user);
            return user;
        }
        return null;
    }

    public Optional<User> findUserByPhoneNumber(String phoneNumber) {
        return userRepository.findByPhoneNumber(phoneNumber);
    }

    public Optional<User> findUserByEmail(String email) {
        return userRepository.findUserByEmail(email);
    }

    public User saveUser(User user) {
        user.setEnabled(false);
        User savedUser = userRepository.save(user);
        VerificationToken verificationToken = new VerificationToken(user.getEmail());
        verificationTokenRespository.save(verificationToken);
        log.info("Token: " + verificationToken.getToken());
        emailService.sendEmail(user.getEmail(), "Verificación de correo", "Tu token es: " + verificationToken.getToken());
        //smsService.sendSms(user.getPhoneNumber(), "Tu codigo de verificación es: " + verificationToken.getToken());
        //String message = smsService.sendSms("tu codigo de verificación es: " + verificationToken.getToken());
        //log.info(message);
        return savedUser;
    }

    public boolean verifyUser(String email, String token) {
        VerificationToken verificationToken = verificationTokenRespository.findByToken(token);
        if (verificationToken != null && verificationToken.getEmail().equals(email)) {
            Optional<User> user = userRepository.findUserByEmail(verificationToken.getEmail());
            user.get().setEnabled(true);
            userRepository.save(user.get());
            verificationTokenRespository.delete(verificationToken);
            return true;
        }
        return false;
    }

    public boolean setPassword(String email, String password) {
        Optional<User> optionalUser = userRepository.findUserByEmail(email);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            String hashedPassword = BCrypt.hashpw(password, BCrypt.gensalt());
            user.setPassword(hashedPassword);
            userRepository.save(user);
            return true;
        }
        return false;
    }

    public boolean verifyUserCredentials(String email, String password) {
        Optional<User> optionalUser = userRepository.findUserByEmail(email);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            return BCrypt.checkpw(password, user.getPassword());
        }
        return false;
    }

    /*public User getAllUsers() {
        Optional<User> user = userRepository.findAll()
        return userRepository.findAll();
    }*/
}
