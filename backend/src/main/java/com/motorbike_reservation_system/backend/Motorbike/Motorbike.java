package com.motorbike_reservation_system.backend.Motorbike;

import com.motorbike_reservation_system.backend.Authentication.Customer.Entity.Customer;
import jakarta.persistence.*;

@Entity
@Table(name = "motorbike")
public class Motorbike {

    @Id
    @GeneratedValue
    private int motorbikeId;
    private String motorbikeName;
    private String motorbikeType;
    private String motorbikeNumber;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;


    public Motorbike() {
    }

    public Motorbike(int motorbikeId, String motorbikeName, String motorbikeType, String motorbikeNumber, Customer customer) {
        this.motorbikeId = motorbikeId;
        this.motorbikeName = motorbikeName;
        this.motorbikeType = motorbikeType;
        this.motorbikeNumber = motorbikeNumber;
        this.customer = customer;
    }

    public Motorbike(String motorbikeName, String motorbikeType, String motorbikeNumber, Customer customer) {
        this.motorbikeName = motorbikeName;
        this.motorbikeType = motorbikeType;
        this.motorbikeNumber = motorbikeNumber;
        this.customer = customer;
    }

    public int getMotorbikeId() {
        return motorbikeId;
    }

    public void setMotorbikeId(int motorbikeId) {
        this.motorbikeId = motorbikeId;
    }

    public String getMotorbikeName() {
        return motorbikeName;
    }

    public void setMotorbikeName(String motorbikeName) {
        this.motorbikeName = motorbikeName;
    }

    public String getMotorbikeType() {
        return motorbikeType;
    }

    public void setMotorbikeType(String motorbikeType) {
        this.motorbikeType = motorbikeType;
    }

    public String getMotorbikeNumber() {
        return motorbikeNumber;
    }

    public void setMotorbikeNumber(String motorbikeNumber) {
        this.motorbikeNumber = motorbikeNumber;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    @Override
    public String toString() {
        return "Motorbike{" +
                "motorbikeId=" + motorbikeId +
                ", motorbikeName='" + motorbikeName + '\'' +
                ", motorbikeType='" + motorbikeType + '\'' +
                ", motorbikeNumber='" + motorbikeNumber + '\'' +
                ", customer=" + customer +
                '}';
    }


}
