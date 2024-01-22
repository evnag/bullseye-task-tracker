package com.bullseye.tracker.controller;

import com.bullseye.tracker.dto.CreateTaskDto;
import com.bullseye.tracker.model.Task;
import com.bullseye.tracker.service.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    @GetMapping("/find-by-name")
    public List<Task> findByName(@RequestParam(value = "taskName") String taskName) {
        return taskService.findTaskByName(taskName);
    }

//    @GetMapping("/search")
//    public ResponseEntity<Map<String, Object>> getAllOrFindByTaskName(
//            @RequestParam(required = false) String taskName,
//            @RequestParam(defaultValue = "0") int page,
//            @RequestParam(defaultValue = "2") int size
//    ) {
//        try {
//            Map<String, Object> response = taskService.getAllTasks(taskName, page, size);
//
//            return new ResponseEntity<>(response, HttpStatus.OK);
//        } catch (Exception e) {
//            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//
//    }

    @GetMapping("/search")
    public ResponseEntity<List<Task>> getAllOrFindByTaskName(
            @RequestParam(required = false) String taskName,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "2") int size
    ) {
        try {
            List<Task> response = taskService.getAllTasks(taskName, page, size);

            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
}
