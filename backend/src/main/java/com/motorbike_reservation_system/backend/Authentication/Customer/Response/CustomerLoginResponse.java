package com.motorbike_reservation_system.backend.Authentication.Customer.Response;

public class CustomerLoginResponse {
    String message;
    Boolean status;

    public CustomerLoginResponse() {
    }

    public CustomerLoginResponse(String message, Boolean status) {
        this.message = message;
        this.status = status;
    }

    @Override
    public String toString() {
        return "CustomerLoginResponse{" +
                "message='" + message + '\'' +
                ", status=" + status +
                '}';
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }
}