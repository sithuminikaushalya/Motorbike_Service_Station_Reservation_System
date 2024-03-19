package com.motorbike_reservation_system.backend.Spare_Parts;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PartsRepo extends JpaRepository<Parts,String> {
    Parts findByPartsName(String partsName);
}
