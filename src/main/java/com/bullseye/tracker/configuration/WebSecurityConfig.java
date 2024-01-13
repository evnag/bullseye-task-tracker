package com.bullseye.tracker.configuration;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

@Configuration
@RequiredArgsConstructor
public class WebSecurityConfig {

    private final JwtAuthFilter jwtAuthFilter;
    private final AuthenticationProvider authenticationProvider;
    private final AuthEntryPointJwt unauthorizedHandler;

    private static final String[] WHITE_LIST_URL = {
            "/",
            "/api/v1/auth/**",
            "/index.html", "/static/**", "/assets/**",
            "/*.ico", "/*.json", "/*.png", "/*.svg",
            "/swagger-resources",
            "/swagger-resources/**",
            "/swagger-ui/**",
            "/webjars/**",
            "/swagger-ui.html"};

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(AbstractHttpConfigurer::disable)
//                .exceptionHandling(exeption -> exeption.authenticationEntryPoint(unauthorizedHandler))
                .authorizeHttpRequests(authz -> authz
//                                .requestMatchers(WHITE_LIST_URL)
//                                .permitAll()
//                                .requestMatchers("/api/**").authenticated()
//                                .requestMatchers(WHITE_LIST_URL).permitAll()
                                .anyRequest().permitAll()
//                                .anyRequest().authenticated()
                )
                .sessionManagement(sess -> sess.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .addFilterAfter(new SpaWebFilter(), BasicAuthenticationFilter.class)
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}
