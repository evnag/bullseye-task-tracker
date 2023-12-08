package com.bullseye.tracker.service;

import com.bullseye.tracker.model.Authority;
import com.bullseye.tracker.model.Role;
import com.bullseye.tracker.model.User;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.util.Pair;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UserDetailsManager manager;
    private final PasswordEncoder encoder;
    private final UserService userService;

    public final static String PAS_PREFIX = "{bcrypt}";
    public final static int PAS_PREFIX_COUNT = PAS_PREFIX.length();

    public AuthService(
            @Qualifier("jdbcUserDetailsManager") UserDetailsManager manager, UserService userService) {
        this.manager = manager;
        this.userService = userService;
        this.encoder = new BCryptPasswordEncoder();
    }

    public boolean login(String username, String password) {
        if (!manager.userExists(username)) {
//            throw new UserNotFoundException(login);
            throw new RuntimeException();
        }

        UserDetails userDetail = manager.loadUserByUsername(username);

        String encryptedPassword = userDetail.getPassword();
        String encryptedPasswordWithoutEncryptionType = encryptedPassword.substring(PAS_PREFIX_COUNT);

        boolean isLoggedIn = encoder.matches(password, encryptedPasswordWithoutEncryptionType);
        if (!isLoggedIn) {
//            throw new UserNotFoundException(login);
            throw new RuntimeException();
        }
        return true;
    }

    public boolean register(User user) {

        if (manager.userExists(user.getUsername())) {
//            throw new UserAlreadyExists(user.getLogin());
            throw new RuntimeException();
        }

        Pair<User, Authority> pair =
                userService.addUser(user, PAS_PREFIX + encoder.encode(user.getPassword()));
        if (pair != null
                && pair.getFirst().getUsername() != null
                && pair.getFirst().getUsername().equals(user.getUsername())
                && pair.getSecond().getUsername() != null
                && pair.getSecond().getUsername().equals(user.getUsername())
                && pair.getSecond().getAuthority() != null
                && pair.getSecond().getAuthority().equals(Role.USER.getRole())) {
            return true;
        } else {
            return false;
        }
    }
}
