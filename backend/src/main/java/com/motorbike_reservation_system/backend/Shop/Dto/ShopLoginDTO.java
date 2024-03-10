package com.motorbike_reservation_system.backend.Shop.Dto;

public class ShopLoginDTO {
    private String shopName;
    private String shopPassword;

    public ShopLoginDTO() {
    }

    public ShopLoginDTO(String shopName, String shopPassword) {
        shopName = shopName;
        shopPassword = shopPassword;
    }

    @Override
    public String toString() {
        return "ShopLoginDTO{" +
                "ShopName='" + shopName + '\'' +
                ", ShopPassword='" + shopPassword + '\'' +
                '}';
    }

    public String getShopName() {
        return shopName;
    }

    public void setShopName(String shopName) {
        shopName = shopName;
    }

    public String getShopPassword() {
        return shopPassword;
    }

    public void setShopPassword(String shopPassword) {
        shopPassword = shopPassword;
    }
}