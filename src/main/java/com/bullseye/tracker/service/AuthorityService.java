package com.bullseye.tracker.service;

import com.bullseye.tracker.model.Authority;
import com.bullseye.tracker.model.Role;
import com.bullseye.tracker.model.User;
import com.bullseye.tracker.repository.AuthorityRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthorityService {

    private final AuthorityRepository authorityRepository;

    public Authority addAuthority(User user, Role role) {
        Authority authority = new Authority();
        authority.setAuthority(role.getRole());
        authority.setUsername(user.getUsername());
        return authorityRepository.save(authority);
    }

}
