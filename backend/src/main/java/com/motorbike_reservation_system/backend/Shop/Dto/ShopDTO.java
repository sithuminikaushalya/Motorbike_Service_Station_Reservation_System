package com.motorbike_reservation_system.backend.Shop.Dto;

public class ShopDTO {

    private int ShopId;
    private String shopName;
    private String shopPassword;
    private String ShopAddress;
    private String ContactNumber;
    private String TaxId;
    private String Email;
    private String SubscriptionPlan;

    public ShopDTO() {
    }

    public ShopDTO(int shopId, String shopName, String shopPassword, String shopAddress, String contactNumber, String taxId, String email, String subscriptionPlan) {
        ShopId = shopId;
        shopName = shopName;
        shopPassword = shopPassword;
        ShopAddress = shopAddress;
        ContactNumber = contactNumber;
        TaxId = taxId;
        Email = email;
        SubscriptionPlan = subscriptionPlan;
    }

    public ShopDTO(String shopName, String shopPassword, String shopAddress, String contactNumber, String taxId, String email, String subscriptionPlan) {
        shopName = shopName;
        shopPassword = shopPassword;
        ShopAddress = shopAddress;
        ContactNumber = contactNumber;
        TaxId = taxId;
        Email = email;
        SubscriptionPlan = subscriptionPlan;
    }

    @Override
    public String toString() {
        return "ShopDTO{" +
                "ShopId=" + ShopId +
                ", ShopName='" + shopName + '\'' +
                ", ShopPassword='" + shopPassword + '\'' +
                ", ShopAddress='" + ShopAddress + '\'' +
                ", ContactNumber='" + ContactNumber + '\'' +
                ", TaxId='" + TaxId + '\'' +
                ", Email='" + Email + '\'' +
                ", SubscriptionPlan='" + SubscriptionPlan + '\'' +
                '}';
    }

    public int getShopId() {
        return ShopId;
    }

    public void setShopId(int shopId) {
        ShopId = shopId;
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

    public String getShopAddress() {
        return ShopAddress;
    }

    public void setShopAddress(String shopAddress) {
        ShopAddress = shopAddress;
    }

    public String getContactNumber() {
        return ContactNumber;
    }

    public void setContactNumber(String contactNumber) {
        ContactNumber = contactNumber;
    }

    public String getTaxId() {
        return TaxId;
    }

    public void setTaxId(String taxId) {
        TaxId = taxId;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public String getSubscriptionPlan() {
        return SubscriptionPlan;
    }

    public void setSubscriptionPlan(String subscriptionPlan) {
        SubscriptionPlan = subscriptionPlan;
    }
}