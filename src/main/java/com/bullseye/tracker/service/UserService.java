package com.bullseye.tracker.service;

import com.bullseye.tracker.model.User;
import com.bullseye.tracker.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository repository;

    public User save(User user) {
        if (user == null) {
            return null;
        }
        return repository.save(user);
    }

    public List<User> findAll() {
        return repository.findAll();
    }

    public User getUserByUserName(String username) {
        return repository.findByUsername(username).orElseThrow(RuntimeException::new);
    }
}
