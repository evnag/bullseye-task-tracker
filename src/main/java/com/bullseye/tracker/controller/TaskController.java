package com.bullseye.tracker.controller;

import com.bullseye.tracker.dto.CreateTaskDto;
import com.bullseye.tracker.model.Task;
import com.bullseye.tracker.service.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/task")
public class TaskController {

    private final TaskService taskService;

    @PostMapping
    public Task addTask(@RequestBody CreateTaskDto dto) {
        return taskService.addTask(dto);
    }

    @GetMapping("/search")
    public List<Task> findByName(@RequestParam(value = "taskName") String taskName) {
        return taskService.findTaskByName(taskName);
    }
}
