package com.plat_bancaria.plataforma.Service;

import com.plat_bancaria.plataforma.Domain.TransferenciaDTO;
import com.plat_bancaria.plataforma.Enum.EstadoTransferencia;
import com.plat_bancaria.plataforma.Model.Transferencia;
import com.plat_bancaria.plataforma.Model.User;
import com.plat_bancaria.plataforma.Repository.TransferenciaRepository;
import com.plat_bancaria.plataforma.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;


@Service
@RequiredArgsConstructor
public class TransferenciasService {
    private final TransferenciaRepository transferenciaRepository;
    private final UserRepository userRepository;

    @Transactional
    public Transferencia crearTransferencia(String ibanOrigen, TransferenciaDTO transferenciaDTO) {
        User cuentaOrigen = userRepository.findByNumeroIBAN(ibanOrigen)
                .orElseThrow(() -> new RuntimeException("Cuenta origen no encontrada"));


        if (cuentaOrigen.getSaldo().compareTo(transferenciaDTO.monto()) < 0 ) {
            throw new RuntimeException("Saldo insuficiente");
        }

        Transferencia transferencia = new Transferencia();
        transferencia.setFecha(LocalDateTime.now());
        transferencia.setCuentaOrigenIBAN(cuentaOrigen);
        transferencia.setCuentaDestinoIBAN(transferenciaDTO.ibanDestino());
        transferencia.setNombreDestinatario(transferenciaDTO.nombreDestinatario());
        transferencia.setBancoDestinatario(transferenciaDTO.bancoDestinatario());
        transferencia.setMonto(transferenciaDTO.monto());
        transferencia.setEstado(EstadoTransferencia.PENDIENTE);

        return transferenciaRepository.save(transferencia);

    }

    @Transactional
    public void confirmarTransferencia(Long transferenciaId) {
        Transferencia transaccion = transferenciaRepository.findById(transferenciaId)
                .orElseThrow(() -> new RuntimeException("Transacción no encontrada"));
        if (!EstadoTransferencia.PENDIENTE.equals(transaccion.getEstado())) {
            throw new RuntimeException("La transacción no está pendiente");
        }

        User cuentaOrigen = transaccion.getCuentaOrigenIBAN();

        cuentaOrigen.setSaldo(cuentaOrigen.getSaldo().subtract(transaccion.getMonto()));

        transaccion.setEstado(EstadoTransferencia.COMPLETADA);

        userRepository.save(cuentaOrigen);

        transferenciaRepository.save(transaccion);
    }

    public List<Transferencia> obtenerTransferenciasFrecuentes(String cuentaOrigenIBAN) {
        User cuentaOrigen = userRepository.findByNumeroIBAN(cuentaOrigenIBAN)
                .orElseThrow(() -> new RuntimeException("Cuenta origen no encontrada"));
        return transferenciaRepository.findByCuentaOrigenIBANOrderByFechaDesc(cuentaOrigen);
    }

    public List<Transferencia> buscarTransferenciasFrecuentes(String ibanOrigen, String searchTerm) {
        User origen = userRepository.findByNumeroIBAN(ibanOrigen)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
        return transferenciaRepository.buscarTransferenciasFrecuentes(origen, searchTerm);
    }
}
