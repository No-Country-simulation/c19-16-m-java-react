package com.plat_bancaria.plataforma.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.math.BigDecimal;
import java.util.Date;
import java.util.Random;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "\"user_table\"")
public class User {
    private static final Random random = new Random();

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @Column(name = "last_name")
    private String lastName;
    private String dni;

    @Column(unique = true)
    private String email;

    @Column(name = "birth_date")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date birthDate;

    @Column(name = "phone_number", unique = true)
    private String phoneNumber;
    private String password;

    @Column(name = "number_iban", unique = true)
    private String numeroIBAN = generarNumeroIBAN();
    @Column(name = "banco")
    private String banco = "BBVA";
    private BigDecimal saldo = BigDecimal.valueOf(10000.0);

    private boolean enabled;



    private static String generarNumeroIBAN() {
        String iban = "ES";
        for (int i = 0; i < 22; i++) {
            iban += random.nextInt(10); 
        }
        return iban;
    }
}
