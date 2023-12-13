package com.bullseye.tracker.repository;

import com.bullseye.tracker.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    @Query(value = "select * from users where username=:login"
            , nativeQuery = true)
    Optional<User> findByUserName(String login);
}
