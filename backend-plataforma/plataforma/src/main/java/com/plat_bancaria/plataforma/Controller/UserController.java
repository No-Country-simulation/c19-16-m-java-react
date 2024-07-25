package com.plat_bancaria.plataforma.Controller;

import com.plat_bancaria.plataforma.Domain.LoginDTO;
import com.plat_bancaria.plataforma.Model.Log;
import com.plat_bancaria.plataforma.Model.User;
import com.plat_bancaria.plataforma.Service.TokenService;
import com.plat_bancaria.plataforma.Service.UserService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    private final TokenService tokenService;
    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.ok("Usuario eliminado");
    }
    @GetMapping("/search/{id}")
    public ResponseEntity<User> getUser(@PathVariable Long id) {
        return ResponseEntity.ok(userService.getUserById(id));
    }
    @GetMapping("/all")
    public ResponseEntity<Iterable<User>> getUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody User user) {
        try {
            userService.saveUser(user);
            return ResponseEntity.ok(user);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    @PostMapping("/verify")
    public ResponseEntity<String> verifyAccount(@RequestParam String email, @RequestParam String token) {
        try {
            if (userService.verifyUser(email, token)) {
                return ResponseEntity.ok("Cuenta verificada. Puedes iniciar sesión.");
            } else {
                throw new Exception("Error al verificar cuenta");
            }
        } catch (Exception e) {
            ArrayList<String> errors = new ArrayList<>();
            errors.add(email);
            errors.add(token);
            //Guardar lot en base de datos
            Log log = new Log();
            log.setMessage(e.getMessage());
            log.setFile(e.getClass().getName());
            log.setLine(e.getClass().getName());
            log.setRequest(errors.toString());
            return ResponseEntity.badRequest().body(e.getMessage());

        }
    }

    @PostMapping("/set-password")
    public ResponseEntity<Map<String, String>> setPassword(@RequestBody Map<String, String> payload) {
        try {
            String email = payload.get("email");
            String password = payload.get("password");

            if (userService.setPassword(email, password)) {
                String token = tokenService.generateToken(email);

                Map<String, String> response = new HashMap<>();
                response.put("message", "Contraseña establecida exitosamente.");
                response.put("token", token);
                return ResponseEntity.ok(response);
            } else {
                return ResponseEntity.badRequest().body(Map.of("error", "Error al establecer la contraseña."));
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("error", "Error al procesar la solicitud."));
        }
    }


    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginDTO loginRequest) {
        String email = loginRequest.email();
        String password = loginRequest.password();

        Optional<User> user = userService.findUserByEmail(email);
        boolean isValid = userService.verifyUserCredentials(email, password);

        if (user.isPresent()) {
            if (isValid) {
                String token = tokenService.generateToken(email);
                Map<String, Object> response = new HashMap<>();
                response.put("user", user.get());
                response.put("token", token);
                return ResponseEntity.ok(response);
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
}
