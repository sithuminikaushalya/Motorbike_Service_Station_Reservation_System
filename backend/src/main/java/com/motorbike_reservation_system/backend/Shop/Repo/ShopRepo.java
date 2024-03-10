package com.motorbike_reservation_system.backend.Shop.Repo;

import com.motorbike_reservation_system.backend.Shop.Entity.Shop;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@EnableJpaRepositories
@Repository
public interface ShopRepo extends JpaRepository<Shop,Integer> {

    Optional<Shop> findOneByShopNameAndShopPassword(String shopName, String ShopPassword);
    Shop findByShopName(String shopName);
}