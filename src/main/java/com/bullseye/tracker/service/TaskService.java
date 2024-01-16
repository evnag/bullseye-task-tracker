package com.bullseye.tracker.service;

import com.bullseye.tracker.dto.CreateTaskDto;
import com.bullseye.tracker.mapper.CreateTaskMapper;
import com.bullseye.tracker.model.Task;
import com.bullseye.tracker.repository.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TaskService {

    private final TaskRepository repository;
    private final CreateTaskMapper mapper;

    public Task addTask(CreateTaskDto dto) {
        if (dto == null) {
            return null;
        }
        return repository.save(mapper.dtoToEntity(dto));
    }

    public List<Task> findTaskByName(String taskName) {
        return Collections.unmodifiableList(repository.findByTaskNameLike(taskName));
    }
}
