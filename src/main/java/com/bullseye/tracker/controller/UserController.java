package com.bullseye.tracker.controller;

import com.bullseye.tracker.dto.CreateUserDto;
import com.bullseye.tracker.dto.UserDto;
import com.bullseye.tracker.model.User;
import com.bullseye.tracker.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/user")
public class UserController {

    private final UserService userService;

    @PostMapping
    public User addUser(@RequestBody CreateUserDto user) {
        return userService.save(user);
    }

    @GetMapping(value = "/list", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<User> getAll() {
        return userService.findAll();
    }

    //    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @GetMapping("/me")
    public ResponseEntity<User> getUser(Authentication authentication) {
        return ResponseEntity.ok(userService.getUserByUserName(authentication.getName()));
    }

    @GetMapping("")
    public String getString() {
        return "ResponseEntity.ok(userService.getUserByUserName(authentication.getName()))";
    }

    @PatchMapping(produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<UserDto> updateUser(Authentication authentication, @RequestBody UserDto dto) {
        return ResponseEntity.ok(userService.update(authentication.getName(), dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        return userService.delete(id);
    }
}
