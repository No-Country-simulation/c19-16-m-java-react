package com.plat_bancaria.plataforma.Model;

import com.plat_bancaria.plataforma.Enum.EstadoTransferencia;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDateTime;


@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "transferencia")
public class Transferencia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "cuenta_origen_iban")
    private User cuentaOrigenIBAN;

    private String cuentaDestinoIBAN;
    private String nombreDestinatario;
    private String bancoDestinatario;
    private BigDecimal monto;
    private LocalDateTime fecha;
    private EstadoTransferencia estado;
    private String concepto;
}
