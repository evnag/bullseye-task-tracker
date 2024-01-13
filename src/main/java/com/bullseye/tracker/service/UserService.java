package com.bullseye.tracker.service;

import com.bullseye.tracker.dto.UserDto;
import com.bullseye.tracker.mapper.UserMapper;
import com.bullseye.tracker.model.User;
import com.bullseye.tracker.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository repository;
    private final UserMapper mapper;

    public User save(User user) {
        if (user == null) {
            return null;
        }
        return repository.save(user);
    }

    public List<User> findAll() {
        return repository.findAll();
    }

    //TODO: change return value to UserDto
    public User getUserByUserName(String username) {
        return repository.findByUsername(username).orElseThrow(RuntimeException::new);
    }

    public UserDto update(String username, UserDto userDto) {

        User newUser = mapper.dtoToEntity(userDto);
        User userToUpdate = repository.findByUsername(username)
                .orElseThrow(RuntimeException::new);

        if (newUser.getFirstName() != null) {
            userToUpdate.setFirstName(newUser.getFirstName());
        }
        if (newUser.getLastName() != null) {
            userToUpdate.setFirstName(newUser.getLastName());
        }
        if (newUser.getRole() != null) {
            userToUpdate.setRole(newUser.getRole());
        }

        repository.save(userToUpdate);

        return mapper.entityToDto(userToUpdate);

    }

    public ResponseEntity<Void> delete(Long userId) {
        User userToDelete = repository.findById(userId)
                .orElseThrow(RuntimeException::new);
        repository.delete(userToDelete);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
