package com.bullseye.tracker.configuration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

import javax.sql.DataSource;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableMethodSecurity
public class WebSecurityConfig {

    @Value("${spring.datasource.url}")
    private String jdbcURl;

    @Value("${spring.datasource.username}")
    private String dbUsername;

    @Value("${spring.datasource.password}")
    private String dbPassword;

    @Value("${spring.datasource.driver-class-name}")
    private String dbDriver;

    private static final String[] AUTH_WHITELIST = {
            "/login", "/register",
            "/index.html", "/static/**",
            "/*.ico", "/*.json", "/*.png", "/*.svg", "/assets/**"
//            "/user"
//            "/user/*/avatar"
    };

    @Bean
    public DataSource dataSource() {
        DataSourceBuilder<?> dataSourceBuilder = DataSourceBuilder.create();
        dataSourceBuilder.url(jdbcURl);
        dataSourceBuilder.username(dbUsername);
        dataSourceBuilder.driverClassName(dbDriver);
        dataSourceBuilder.password(dbPassword);
        return dataSourceBuilder.build();
    }

    @Bean
    public JdbcUserDetailsManager jdbcUserDetailsManager() {
        return new JdbcUserDetailsManager(dataSource());
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        return http
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(authz -> authz
                                .requestMatchers(AUTH_WHITELIST).permitAll()
                                .requestMatchers("/**").authenticated()
//                        .anyRequest().authenticated()
                )
//                .sessionManagement(sess -> sess.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
//                .cors(withDefaults())
                .httpBasic(withDefaults())
//                .formLogin(
//                        form -> form
//                                .loginPage("/login")
//                                .loginProcessingUrl("/login")
//                                .defaultSuccessUrl("/")
//                                .permitAll()
//                ).logout(
//                        logout -> logout
//                                .logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
//                                .permitAll()
//                )
                .build();
    }
}
