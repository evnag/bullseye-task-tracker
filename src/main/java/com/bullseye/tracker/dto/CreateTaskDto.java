package com.bullseye.tracker.dto;

import lombok.Data;

@Data
public class CreateTaskDto {
    private String taskName;
    private String priority;
    private String status;
    private String description;
    private String difficulty;
    private String executor;
}
