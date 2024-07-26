package com.plat_bancaria.plataforma.Controller;

import com.plat_bancaria.plataforma.Domain.TransferenciaDTO;
import com.plat_bancaria.plataforma.Model.Transferencia;
import com.plat_bancaria.plataforma.Model.User;
import com.plat_bancaria.plataforma.Service.TransferenciasService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/transferencias")
@RequiredArgsConstructor
public class TransferenciaController {

    private final TransferenciasService transferenciasService;
    private final User user;

    @PostMapping("/crear-transferencia")
    public ResponseEntity<?> crearTransferencia(@RequestBody TransferenciaDTO transferenciaDTO) {
        long id = Long.parseLong(user.getNumeroIBAN());
        Transferencia transferencia = transferenciasService.crearTransferencia(id,transferenciaDTO);
        return ResponseEntity.ok(transferencia);
    }
    //
    @PostMapping("/confirmar-transferencia/{id}")
    public ResponseEntity<?> confirmarTransferencia(@PathVariable Long id) {
        transferenciasService.confirmarTransferencia(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/frecuentes")
    public ResponseEntity<List<Transferencia>> obtenerTransferenciasFrecuentes(@RequestParam String ibanOrigen) {
        List<Transferencia> transferencias = transferenciasService.obtenerTransferenciasFrecuentes(ibanOrigen);
        return new ResponseEntity<>(transferencias, HttpStatus.OK);
    }

    @GetMapping("/frecuentes/buscar")
    public ResponseEntity<List<Transferencia>> buscarTransferenciasFrecuentes(
            @RequestParam String ibanOrigen,
            @RequestParam String searchTerm) {
        List<Transferencia> transferencias = transferenciasService.buscarTransferenciasFrecuentes(ibanOrigen, searchTerm);
        return ResponseEntity.ok(transferencias);
    }
}
