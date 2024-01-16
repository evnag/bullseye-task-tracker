package com.bullseye.tracker.repository;

import com.bullseye.tracker.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {

    @Query("select t from Task t where lower(t.taskName) like lower(concat('%', :taskName, '%') ) ")
    List<Task> findByTaskNameLike(@Param("taskName") String taskName);
}
