package com.motorbike_reservation_system.backend.Shop.Service;

import com.motorbike_reservation_system.backend.Admin.Dto.AdminDTO;
import com.motorbike_reservation_system.backend.Admin.Dto.AdminLoginDTO;
import com.motorbike_reservation_system.backend.Admin.Response.AdminLoginResponse;
import com.motorbike_reservation_system.backend.Shop.Dto.ShopDTO;
import com.motorbike_reservation_system.backend.Shop.Dto.ShopLoginDTO;
import com.motorbike_reservation_system.backend.Shop.Response.ShopLoginResponse;
import org.springframework.stereotype.Service;

@Service
public interface ShopService {

    String addShop(ShopDTO shopDTO);

    ShopLoginResponse loginShop(ShopLoginDTO shopLoginDTO);
}
