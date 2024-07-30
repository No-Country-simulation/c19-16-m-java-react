package com.plat_bancaria.plataforma.Repository;

import com.plat_bancaria.plataforma.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
     Optional<User> findByPhoneNumber(String phoneNumber);
     Optional<User> findUserByEmail(String email);

     Optional<User> findByNumeroIBAN(String numeroIBAN);
}
