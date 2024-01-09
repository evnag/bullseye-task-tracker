package com.bullseye.tracker.auth;

import com.bullseye.tracker.configuration.JwtService;
import com.bullseye.tracker.dto.UserDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/auth")
public class AuthController {

    private final AuthService authService;
    private final JwtService jwtService;

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(
            @RequestBody RegisterRequest request
    ) {
        return ResponseEntity.ok(authService.register(request));
    }

//    @PostMapping("/login")
//    public ResponseEntity<AuthResponse> login(
//            @RequestBody AuthRequest request
//    ) {
//        return ResponseEntity.ok(authService.login(request));
//    }

    @PostMapping(value = "/login", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<UserDto> login(
            @RequestBody AuthRequest request
    ) {
        Authentication authentication = jwtService.getAuthentication(request);
        ResponseCookie jwtCookie = jwtService.generateJwtCookie((UserDetails) authentication.getPrincipal());
        return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, jwtCookie.toString())
                .body(authService.login(request, authentication));
    }
}
