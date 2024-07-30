package com.plat_bancaria.plataforma.Controller;


import com.plat_bancaria.plataforma.Domain.LoginDTO;
import com.plat_bancaria.plataforma.Model.User;
import com.plat_bancaria.plataforma.Service.TokenService;
import com.plat_bancaria.plataforma.Service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/login")
@RequiredArgsConstructor
public class LoginController {

    private final UserService userService;
    private final TokenService tokenService;

    @PostMapping()
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
