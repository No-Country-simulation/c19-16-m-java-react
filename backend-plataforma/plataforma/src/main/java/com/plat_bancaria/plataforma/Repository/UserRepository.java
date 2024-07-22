package com.plat_bancaria.plataforma.Repository;

import com.plat_bancaria.plataforma.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
     User findByEmail(String email);
}
