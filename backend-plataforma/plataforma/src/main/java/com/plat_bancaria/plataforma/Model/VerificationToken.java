package com.plat_bancaria.plataforma.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.security.SecureRandom;
import java.util.UUID;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class VerificationToken {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String token;
    private String email;

    public VerificationToken(String email) {
        this.token = generateVerificationCode();
        this.email = email;
    }

    private String generateVerificationCode() {
        SecureRandom random = new SecureRandom();
        int num = random.nextInt(999999);
        return String.format("%06d", num);
    }
}
