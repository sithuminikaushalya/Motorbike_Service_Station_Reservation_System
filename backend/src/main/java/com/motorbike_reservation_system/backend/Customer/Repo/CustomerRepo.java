package com.motorbike_reservation_system.backend.Customer.Repo;

import com.motorbike_reservation_system.backend.Admin.Entity.Admin;
import com.motorbike_reservation_system.backend.Customer.Entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@EnableJpaRepositories
@Repository
public interface CustomerRepo extends JpaRepository<Customer,Integer> {

    Optional<Customer> findOneByCustomerEmailAndCustomerPassword(String customerEmail, String customerPassword);
    Customer findByCustomerEmail(String customerEmail);
}
