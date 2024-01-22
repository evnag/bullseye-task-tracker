package com.bullseye.tracker.service;

import com.bullseye.tracker.dto.CreateTaskDto;
import com.bullseye.tracker.mapper.CreateTaskMapper;
import com.bullseye.tracker.model.Task;
import com.bullseye.tracker.repository.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.*;

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

    public List<Task> getAllTasks(String taskName, int page, int size) {
        Pageable paging = PageRequest.of(page, size);
        Page<Task> pageTask;
        if (taskName == null) {
            pageTask = repository.findAll(paging);
        } else {
            pageTask = repository.findByTaskNameContaining(taskName, paging);
        }
        return pageTask.getContent();
    }

//    public Map<String, Object> getAllTasks(String taskName, int page, int size
//    ) {
//        List<Task> tasks;
//        Pageable paging = PageRequest.of(page, size);
//
//        Page<Task> pageTask;
//        if (taskName == null) {
//            pageTask = repository.findAll(paging);
//        } else {
//            pageTask = repository.findByTaskNameContaining(taskName, paging);
//        }
//
//        tasks = pageTask.getContent();
//
//        Map<String, Object> map = new HashMap<>();
//        map.put("tasks", tasks);
//        map.put("currentPage", pageTask.getNumber());
//        map.put("totalItems", pageTask.getTotalElements());
//        map.put("totalPages", pageTask.getTotalPages());
//
//        return map;
//    }
}
