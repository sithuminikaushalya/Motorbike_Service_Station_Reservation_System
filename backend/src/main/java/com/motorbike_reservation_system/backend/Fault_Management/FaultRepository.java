package com.motorbike_reservation_system.backend.Fault_Management;


import org.springframework.data.jpa.repository.JpaRepository;

public interface FaultRepository extends JpaRepository<Fault,Integer> {
    Fault findByFaultName(String faultName);
}