package com.bullseye.tracker.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CreateUserDto {
    private String firstName;
    private String lastName;
    private String username;
    private String password;
    private String avatar;
    private String role;
}
