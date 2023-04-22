package com.example.be.repository;

import com.example.be.model.Student;
import com.example.be.service.Impl.StudentServiceImpl;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;



@Repository
public interface IStudentRepository extends JpaRepository<Student, Long> {
    @Query(value = "select * from Student where name like %:name% or '%' ;", nativeQuery = true,
            countQuery = "select * from Student where name like %:name% or '%';")
    Page<Student> findAllWithPage(Pageable pageable, @Param("name") String name);

}
