package com.bullseye.tracker.mapper;


import com.bullseye.tracker.dto.UserDto;
import com.bullseye.tracker.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDto entityToDto(User entity);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "password", ignore = true)
    User dtoToEntity(UserDto dto);
}
