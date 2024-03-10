package com.motorbike_reservation_system.backend.Shop.Service.Impl;

import com.motorbike_reservation_system.backend.Admin.Dto.AdminDTO;
import com.motorbike_reservation_system.backend.Admin.Dto.AdminLoginDTO;
import com.motorbike_reservation_system.backend.Admin.Entity.Admin;
import com.motorbike_reservation_system.backend.Admin.Repo.AdminRepo;
import com.motorbike_reservation_system.backend.Admin.Response.AdminLoginResponse;
import com.motorbike_reservation_system.backend.Admin.Service.AdminService;
import com.motorbike_reservation_system.backend.Shop.Dto.ShopDTO;
import com.motorbike_reservation_system.backend.Shop.Dto.ShopLoginDTO;
import com.motorbike_reservation_system.backend.Shop.Entity.Shop;
import com.motorbike_reservation_system.backend.Shop.Repo.ShopRepo;
import com.motorbike_reservation_system.backend.Shop.Response.ShopLoginResponse;
import com.motorbike_reservation_system.backend.Shop.Service.ShopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ShopImpl implements ShopService {
    @Autowired
    private ShopRepo shopRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public String addShop(ShopDTO shopDTO) {

        Shop shop =new Shop(
                shopDTO.getShopId(),
                shopDTO.getShopName(),
                this.passwordEncoder.encode(shopDTO.getShopPassword()),
                shopDTO.getShopAddress(),
                shopDTO.getContactNumber(),
                shopDTO.getTaxId(),
                shopDTO.getEmail(),
                shopDTO.getSubscriptionPlan()

        );
        shopRepo.save(shop);
        return shop.getShopName();
       //        return "saved Successfully";
    }

    @Override
    public ShopLoginResponse loginShop(ShopLoginDTO shopLoginDTO) {
        String msg="";
        Shop shop1 = shopRepo.findByShopName(shopLoginDTO.getShopName());
        if(shop1!= null){
            String password = shopLoginDTO.getShopPassword();
            String encodePassword = shop1.getShopPassword();
            Boolean isPasswordRight = passwordEncoder.matches(password, encodePassword);
            if (isPasswordRight){
                Optional<Shop> shop = shopRepo.findOneByShopNameAndShopPassword(shopLoginDTO.getShopName(), encodePassword);
                if (shop.isPresent()){
                    return new ShopLoginResponse("Login Successfully",true );
                }
                else return new ShopLoginResponse("Login Failed",false);
            }
            else return new ShopLoginResponse("Password not Match", false);
        }
        else return new ShopLoginResponse("Email not Exists",false);
    }
}
