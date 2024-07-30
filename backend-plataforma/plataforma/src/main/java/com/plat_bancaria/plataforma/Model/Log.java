package com.plat_bancaria.plataforma.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "log_table")
public class Log {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private long id;
    @Column(nullable = false)
    private String message;
    @Column(nullable = false)
    private String error_trace;
    @Column(nullable = true)
    private String file;
    @Column(nullable = true)
    private String line;
    @Column(nullable = true)
    private String request;

}
