package com.motorbike_reservation_system.backend.Customer.Service;

import com.motorbike_reservation_system.backend.Admin.Dto.AdminDTO;
import com.motorbike_reservation_system.backend.Admin.Dto.AdminLoginDTO;
import com.motorbike_reservation_system.backend.Admin.Response.AdminLoginResponse;
import com.motorbike_reservation_system.backend.Customer.Dto.CustomerDTO;
import com.motorbike_reservation_system.backend.Customer.Dto.CustomerLoginDTO;
import com.motorbike_reservation_system.backend.Customer.Response.CustomerLoginResponse;
import org.springframework.stereotype.Service;

@Service
public interface CustomerService {

    String addCustomer(CustomerDTO customerDTO);

    CustomerLoginResponse loginCustomer(CustomerLoginDTO customerLoginDTO);
}
