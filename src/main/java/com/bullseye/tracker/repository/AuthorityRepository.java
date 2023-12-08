package com.bullseye.tracker.repository;

import com.bullseye.tracker.model.Authority;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;


public interface AuthorityRepository extends JpaRepository<Authority, String>  {

    @Query(value = "select * from authorities where user_id=:userId and authority=:authority"
            , nativeQuery = true)
    Optional<Authority> findByUserIdAndAuthority(Long userId, String authority);

    @Query(value = "select * from authorities where user_id=:userId"
            , nativeQuery = true)
    List<Authority> getAllByUserId(Long userId);
}
