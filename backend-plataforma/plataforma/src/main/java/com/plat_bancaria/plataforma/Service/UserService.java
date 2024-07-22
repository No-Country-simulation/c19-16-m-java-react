package com.plat_bancaria.plataforma.Service;
import com.plat_bancaria.plataforma.Model.User;
import com.plat_bancaria.plataforma.Model.VerificationToken;
import com.plat_bancaria.plataforma.Repository.UserRepository;
import com.plat_bancaria.plataforma.Repository.VerificationTokenRespository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final EmailService emailService;
    private final VerificationTokenRespository verificationTokenRespository;

    public User findUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public User saveUser(User user) {
        user.setEnabled(false);
        User savedUser = userRepository.save(user);
        VerificationToken verificationToken = new VerificationToken(user.getEmail());
        verificationTokenRespository.save(verificationToken);
        emailService.sendVerificationEmail(user.getEmail(), verificationToken.getToken());
        return savedUser;
    }

    public boolean verifyUser(String email, String token) {
        VerificationToken verificationToken = verificationTokenRespository.findByToken(token);
        if (verificationToken != null && verificationToken.getEmail().equals(email)) {
            User user = userRepository.findByEmail(verificationToken.getEmail());
            user.setEnabled(true);
            userRepository.save(user);
            verificationTokenRespository.delete(verificationToken);
            return true;
        }
        return false;
    }
}
