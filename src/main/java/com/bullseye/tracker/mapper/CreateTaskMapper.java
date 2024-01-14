package com.bullseye.tracker.mapper;

import com.bullseye.tracker.dto.CreateTaskDto;
import com.bullseye.tracker.model.Task;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface CreateTaskMapper {

    @Mapping(target = "id", ignore = true)
    Task dtoToEntity(CreateTaskDto dto);
}
