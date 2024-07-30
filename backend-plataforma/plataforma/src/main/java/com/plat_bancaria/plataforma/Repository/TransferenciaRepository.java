package com.plat_bancaria.plataforma.Repository;

import com.plat_bancaria.plataforma.Model.Transferencia;
import com.plat_bancaria.plataforma.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface TransferenciaRepository extends JpaRepository<Transferencia, Long> {
    List<Transferencia> findByCuentaOrigenIBANOrderByFechaDesc(User cuentaOrigenIBAN);

    @Query("SELECT t FROM Transferencia t WHERE t.cuentaOrigenIBAN = :cuentaOrigenIBAN AND " +
            "(t.cuentaDestinoIBAN LIKE %:searchTerm% OR " +
            "LOWER(t.nombreDestinatario) LIKE LOWER(CONCAT('%', :searchTerm, '%')) OR " +
            "LOWER(t.bancoDestinatario) LIKE LOWER(CONCAT('%', :searchTerm, '%')))")
    List<Transferencia> buscarTransferenciasFrecuentes(@Param("cuentaOrigenIBAN") User cuentaOrigenIBAN, @Param("searchTerm") String searchTerm);

}
