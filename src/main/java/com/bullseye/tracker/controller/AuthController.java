package com.bullseye.tracker.controller;

import com.bullseye.tracker.dto.LoginDto;
import com.bullseye.tracker.model.User;
import com.bullseye.tracker.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping(value = "/login",
            produces = {"*/*"},
            consumes = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<Void> login(@RequestBody @Validated LoginDto loginDto) {
        try {
            if (authService.login(loginDto.getUsername(), loginDto.getPassword())) {
                return ResponseEntity.ok().build();
            }
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
    }

    @PostMapping(value = "/register",
            consumes = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<Void> register(@RequestBody @Validated User user) {
        if (authService.register(user)) {
            return ResponseEntity.status(HttpStatus.CREATED).build();
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
