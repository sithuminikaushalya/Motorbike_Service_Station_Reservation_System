package com.motorbike_reservation_system.backend.Reservation;

import com.motorbike_reservation_system.backend.Authentication.Customer.Entity.Customer;
import com.motorbike_reservation_system.backend.Authentication.Shop.Entity.Shop;
import com.motorbike_reservation_system.backend.Fault_Management.Fault;
import com.motorbike_reservation_system.backend.Repair_Service.Repair;
import jakarta.persistence.*;

import java.sql.Time;
import java.util.Date;

@Entity
@Table(name = "Reservation")
public class Reservation {
    @Id
    private String reservationId;
    private String motorbikeNumber;
    private String faultId;
    private String service;
    private Date reservationDate;
    private Time reservationTime;
    private String advancePayment;

    @ManyToOne(cascade = {CascadeType.DETACH, CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH})
    @JoinColumn(name = "shop_id")
    private Shop shop;

    @ManyToOne(cascade = {CascadeType.DETACH, CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH})
    @JoinColumn(name = "customer_id")
    private Customer customer;



    @OneToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
    @JoinColumn(name = "repair_id")
    private Repair repair;

//    @OneToOne(mappedBy = "fault",
//            cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH})
//    private Fault fault;




    @OneToOne(mappedBy = "reservation",
            cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH})
    private Fault fault;




    public Reservation() {
    }

    public Reservation(String reservationId, String motorbikeNumber, String faultId, String service, Date reservationDate, Time reservationTime, String advancePayment, Shop shop, Repair repair, Customer customer, Fault fault) {
        this.reservationId = reservationId;
        this.motorbikeNumber = motorbikeNumber;
        this.faultId = faultId;
        this.service = service;
        this.reservationDate = reservationDate;
        this.reservationTime = reservationTime;
        this.advancePayment = advancePayment;
        this.shop = shop;
        this.repair = repair;
        this.customer = customer;
        this.fault = fault;

    }

    public Reservation(String motorbikeNumber, String faultId, String service, Date reservationDate, Time reservationTime, String advancePayment, Shop shop, Repair repair, Customer customer, Fault fault) {
        this.motorbikeNumber = motorbikeNumber;
        this.faultId = faultId;
        this.service = service;
        this.reservationDate = reservationDate;
        this.reservationTime = reservationTime;
        this.advancePayment = advancePayment;
        this.shop = shop;
        this.repair = repair;
        this.customer = customer;
        this.fault = fault;
    }

    @Override
    public String toString() {
        return "Reservation{" +
                "reservationId='" + reservationId + '\'' +
                ", motorbikeNumber='" + motorbikeNumber + '\'' +
                ", faultId='" + faultId + '\'' +
                ", service='" + service + '\'' +
                ", reservationDate=" + reservationDate +
                ", reservationTime=" + reservationTime +
                ", advancePayment='" + advancePayment + '\'' +
                ", shop=" + shop +
                ", repair=" + repair +
                ", customer=" + customer +
                ", fault=" + fault +
                '}';
    }

    public String getReservationId() {
        return reservationId;
    }

    public void setReservationId(String reservationId) {
        this.reservationId = reservationId;
    }

    public String getMotorbikeNumber() {
        return motorbikeNumber;
    }

    public void setMotorbikeNumber(String motorbikeNumber) {
        this.motorbikeNumber = motorbikeNumber;
    }

    public String getFaultId() {
        return faultId;
    }

    public void setFaultId(String faultId) {
        this.faultId = faultId;
    }

    public String getService() {
        return service;
    }

    public void setService(String service) {
        this.service = service;
    }

    public Date getReservationDate() {
        return reservationDate;
    }

    public void setReservationDate(Date reservationDate) {
        this.reservationDate = reservationDate;
    }

    public Time getReservationTime() {
        return reservationTime;
    }

    public void setReservationTime(Time reservationTime) {
        this.reservationTime = reservationTime;
    }

    public String getAdvancePayment() {
        return advancePayment;
    }

    public void setAdvancePayment(String advancePayment) {
        this.advancePayment = advancePayment;
    }

    public Shop getShop() {
        return shop;
    }

    public void setShop(Shop shop) {
        this.shop = shop;
    }

    public Repair getRepair() {
        return repair;
    }

    public void setRepair(Repair repair) {
        this.repair = repair;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Fault getFault() {
        return fault;
    }

    public void setFault(Fault fault) {
        this.fault = fault;
    }
}
