package com.plat_bancaria.plataforma.Repository;

import com.plat_bancaria.plataforma.Model.VerificationToken;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VerificationTokenRespository extends JpaRepository<VerificationToken, Long> {

    VerificationToken findByToken(String token);
}
