package com.motorbike_reservation_system.backend.Admin.Dto;

public class AdminDTO {

    private int adminId;
    private String adminName;
    private String adminPassword;
    private String adminRole;

    public AdminDTO() {
    }

    public AdminDTO(int adminId, String adminName, String password, String adminRole) {
        adminId = adminId;
        this.adminName = adminName;
        this.adminPassword = adminPassword;
        adminRole = adminRole;
    }

    public AdminDTO(String adminName, String password, String adminRole) {
        this.adminName = adminName;
        this.adminPassword = adminPassword;
        adminRole = adminRole;
    }

    @Override
    public String toString() {
        return "AdminDTO{" +
                "AdminId=" + adminId +
                ", adminName='" + adminName + '\'' +
                ", adminPassword='" + adminPassword + '\'' +
                ", AdminRole='" + adminRole + '\'' +
                '}';
    }

    public int getAdminId() {
        return adminId;
    }

    public void setAdminId(int adminId) {
        adminId = adminId;
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
        this.adminPassword = password;
    }

    public String getAdminRole() {
        return adminRole;
    }

    public void setAdminRole(String adminRole) {
        adminRole = adminRole;
    }
}
