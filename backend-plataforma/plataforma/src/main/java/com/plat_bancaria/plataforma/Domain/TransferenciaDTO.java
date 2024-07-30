package com.plat_bancaria.plataforma.Domain;

import java.math.BigDecimal;

public record TransferenciaDTO (Long userId, String ibanDestino, String nombreDestinatario, String bancoDestinatario, BigDecimal monto) {
}
