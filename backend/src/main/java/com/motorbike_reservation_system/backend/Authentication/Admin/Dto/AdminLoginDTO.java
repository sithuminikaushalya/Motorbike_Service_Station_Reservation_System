package com.motorbike_reservation_system.backend.Authentication.Admin.Dto;

public class AdminLoginDTO {

    private String adminName;
    private String adminPassword;

    public AdminLoginDTO() {
    }

    public AdminLoginDTO(String adminName, String password) {
        this.adminName = adminName;
        this.adminPassword = adminPassword;
    }

    @Override
    public String toString() {
        return "AdminLoginDTO{" +
                "adminName='" + adminName + '\'' +
                ", adminPassword='" + adminPassword + '\'' +
                '}';
    }

    public String getAdminName() {
        return adminName;
    }

    public void setAdminName(String adminName) {
        this.adminName = adminName;
    }

    public String getAdminPassword() {
        return adminPassword;
    }

    public void setAdminPassword(String password) {
        this.adminPassword = adminPassword;
    }
}
