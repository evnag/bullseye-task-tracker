package com.bullseye.tracker.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserDto {

    private String firstName;
    private String lastName;
    private String username;
    private String avatar;
    private String role;

}
