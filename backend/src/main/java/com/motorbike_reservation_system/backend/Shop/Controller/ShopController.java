package com.motorbike_reservation_system.backend.Shop.Controller;

import com.motorbike_reservation_system.backend.Admin.Dto.AdminDTO;
import com.motorbike_reservation_system.backend.Admin.Dto.AdminLoginDTO;
import com.motorbike_reservation_system.backend.Admin.Response.AdminLoginResponse;
import com.motorbike_reservation_system.backend.Admin.Service.AdminService;
import com.motorbike_reservation_system.backend.Shop.Dto.ShopDTO;
import com.motorbike_reservation_system.backend.Shop.Dto.ShopLoginDTO;
import com.motorbike_reservation_system.backend.Shop.Response.ShopLoginResponse;
import com.motorbike_reservation_system.backend.Shop.Service.ShopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/shop")
public class ShopController {
    @Autowired
    private ShopService shopService;
    @PostMapping(path= "/save")
    public String saveShop(@RequestBody ShopDTO shopDTO){
        String id = shopService.addShop(shopDTO);
        return id;
    }

    @PostMapping(path = "/login")
    public ResponseEntity<?> loginShop(@RequestBody ShopLoginDTO shopLoginDTO){
        ShopLoginResponse shopLoginResponse = shopService.loginShop(shopLoginDTO);
        return ResponseEntity.ok(shopLoginResponse);
    }
}
