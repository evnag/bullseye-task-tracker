package com.bullseye.tracker.configuration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

import javax.sql.DataSource;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableMethodSecurity
//@EnableWebSecurity
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
//            "/login",
//            "/register",
            "/index*", "/static/**",
            "/*.ico", "/*.json", "/*.png", "/*.svg", "/assets/**"
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

        http
                .authorizeHttpRequests((authorizeRequests) ->
                        authorizeRequests
                                .requestMatchers(AUTH_WHITELIST).permitAll()
                                .requestMatchers("/**").authenticated()
                )
                .formLogin((formLogin) ->
                        formLogin
                                .usernameParameter("username")
                                .passwordParameter("password")
                                .defaultSuccessUrl("/api/v1/user", true)
//                                .failureUrl("/authentication/login?failed")
//                                .loginProcessingUrl("/authentication/login/process")
                );
        return http.build();

//        return http
//                .csrf(AbstractHttpConfigurer::disable)
//                .authorizeHttpRequests(authz -> authz
////                                .anyRequest().permitAll()
//                        .requestMatchers(AUTH_WHITELIST).permitAll()
//                                .anyRequest().authenticated()
//                )
////                .sessionManagement(sess -> sess.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
//                .cors(withDefaults())
////                .httpBasic(withDefaults())
//                .formLogin(
//                        form -> form
////                                .loginPage("/login")
//////                                .loginProcessingUrl("/login")
//                                .defaultSuccessUrl("/api/v1/user")
////                                .permitAll()
//                )
////                .logout(
////                        logout -> logout
////                                .logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
////                                .permitAll()
////                )
//                .build();
    }
}
