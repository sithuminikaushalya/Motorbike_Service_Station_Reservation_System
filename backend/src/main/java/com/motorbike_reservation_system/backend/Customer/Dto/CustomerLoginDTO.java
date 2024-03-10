package com.motorbike_reservation_system.backend.Customer.Dto;

public class CustomerLoginDTO {
    private String customerEmail;
    private String customerPassword;

    public CustomerLoginDTO() {
    }

    public CustomerLoginDTO(String customerEmail) {
        this.customerEmail = customerEmail;
    }

    @Override
    public String toString() {
        return "CustomerLoginDTO{" +
                "customerEmail='" + customerEmail + '\'' +
                ", customerPassword='" + customerPassword + '\'' +
                '}';
    }

    public String getCustomerEmail() {
        return customerEmail;
    }

    public void setCustomerEmail(String customerEmail) {
        this.customerEmail = customerEmail;
    }

    public String getCustomerPassword() {
        return customerPassword;
    }

    public void setCustomerPassword(String customerPassword) {
        this.customerPassword = customerPassword;
    }
}
