package com.plat_bancaria.plataforma.Controller;

import com.plat_bancaria.plataforma.Model.User;
import com.plat_bancaria.plataforma.Service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping("/register")
    public String register(@RequestBody User user) {
        userService.saveUser(user);
        return "Usuario registrado";
    }

    @GetMapping("/verify")
    public String verifyAccount(@RequestParam String email, @RequestParam String token) {
        if (userService.verifyUser(email, token)) {
            return "Cuenta verificada. Puedes iniciar sesión.";
        }
        return "token invalido.";
    }

    @PostMapping("/login")
    public String login(@RequestParam String email, @RequestParam String password) {
        User user = userService.findUserByEmail(email);
        if (user != null && user.getPassword().equals(password)) {
            return "Bienvenido";
        } else {
            return null;
        }

    }
}
