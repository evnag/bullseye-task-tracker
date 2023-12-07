package com.bullseye.tracker.service;

import com.bullseye.tracker.model.Authority;
import com.bullseye.tracker.model.Role;
import com.bullseye.tracker.model.User;
import com.bullseye.tracker.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.util.Pair;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository repository;
    private final AuthorityService authorityService;

    public User save(User user) {
        if (user == null) {
            return null;
        }
        return repository.save(user);
    }

    public List<User> findAll() {
        return repository.findAll();
    }

    public Pair<User, Authority> addUser(User user, String password) {
        user.setPassword(password);
        user = repository.save(user);
        Authority authority = authorityService.addAuthority(user, Role.USER);
        return Pair.of(user, authority);
    }
}
