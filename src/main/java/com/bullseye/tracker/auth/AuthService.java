package com.bullseye.tracker.auth;

import com.bullseye.tracker.configuration.JwtService;
import com.bullseye.tracker.dto.UserDto;
import com.bullseye.tracker.model.Role;
import com.bullseye.tracker.model.User;
import com.bullseye.tracker.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder encoder;
    private final JwtService jwtService;

    public AuthResponse register(RegisterRequest request) {
        User user = User.builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .username(request.getUsername())
                .password(encoder.encode(request.getPassword()))
                .role(Role.USER)
                .build();
        userRepository.save(user);
        String jwtToken = jwtService.generateToken(user);
        return AuthResponse.builder()
                .token(jwtToken)
                .build();
    }

    public UserDto login(AuthRequest request, Authentication authentication) {

        SecurityContextHolder.getContext().setAuthentication(authentication);
        User userDetails = (User) authentication.getPrincipal();

        List<String> roles = new ArrayList<>();
        for (GrantedAuthority item : userDetails.getAuthorities()) {
            String authority = item.getAuthority();
            roles.add(authority);
        }

        return UserDto.builder()
                .username(userDetails.getUsername())
                .firstName(userDetails.getFirstName())
                .lastName(userDetails.getLastName())
                .roles(roles)
                .build();
    }

    // login without cookies
//    public AuthResponse login(AuthRequest request) {
//        authenticationManager.authenticate(
//                new UsernamePasswordAuthenticationToken(
//                        request.getUsername(),
//                        request.getPassword()
//                )
//        );
//
//        User user = userRepository.findByUsername(request.getUsername()).orElseThrow();
//        String jwtToken = jwtService.generateToken(user);
//        return AuthResponse.builder()
//                .token(jwtToken)
//                .build();
//    }

}
