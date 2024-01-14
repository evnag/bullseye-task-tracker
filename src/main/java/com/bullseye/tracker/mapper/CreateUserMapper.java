package com.bullseye.tracker.mapper;

import com.bullseye.tracker.dto.CreateUserDto;
import com.bullseye.tracker.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;

@Mapper(componentModel = "spring")
public abstract class CreateUserMapper {

    @Autowired
    PasswordEncoder encoder;

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "password", expression = "java(encoder.encode(dto.getPassword()))")
    public abstract User dtoToEntity(CreateUserDto dto);
}
