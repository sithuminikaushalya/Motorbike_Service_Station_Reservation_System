package com.motorbike_reservation_system.backend.Shop.Entity;

import jakarta.persistence.*;




@Entity
@Table(name="shop")
public class Shop {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "shopId", length = 255)
    private int ShopId;
//    //@Column(name = "employeeName", length = 255)
    private String shopName;
    private String shopPassword;
//   // @Column(name = "email", length = 255)
    private String ShopAddress;
//    ;
//    //@Column(name = "password", length = 255)
//
    private String ContactNumber;
    private String TaxId;
    private String Email;
    private String SubscriptionPlan;

    public Shop() {
    }

    public Shop(int shopId, String shopName, String shopPassword, String shopAddress, String contactNumber, String taxId, String email, String subscriptionPlan) {
        ShopId = shopId;
        shopName = shopName;
        shopPassword = shopPassword;
        ShopAddress = shopAddress;
        ContactNumber = contactNumber;
        TaxId = taxId;
        Email = email;
        SubscriptionPlan = subscriptionPlan;
    }

    public Shop(String shopName, String shopPassword, String shopAddress, String contactNumber, String taxId, String email, String subscriptionPlan) {
        shopName = shopName;
        shopPassword = shopPassword;
        ShopAddress = shopAddress;
        ContactNumber = contactNumber;
        TaxId = taxId;
        Email = email;
        SubscriptionPlan = subscriptionPlan;
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