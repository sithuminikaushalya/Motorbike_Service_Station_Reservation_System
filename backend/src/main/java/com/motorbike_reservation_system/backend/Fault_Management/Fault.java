package com.motorbike_reservation_system.backend.Fault_Management;

import com.motorbike_reservation_system.backend.Reservation.Reservation;
import jakarta.persistence.*;

@Entity
@Table(name = "fault")
public class Fault {

    @Id
    @GeneratedValue
    private int id;
    private String faultName;
    private String bikeName;
    private String bikeType;
    private String motorbikeNumber;
    private String category;
    private String faultDescription;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "reservation", referencedColumnName = "reservationId")
    private Reservation reservation;

    public Fault() {
    }

    public Fault(int id, String faultName, String bikeName, String bikeType, String motorbikeNumber, String category, String faultDescription) {
        this.id = id;
        this.faultName = faultName;
        this.bikeName = bikeName;
        this.bikeType = bikeType;
        this.motorbikeNumber = motorbikeNumber;
        this.category = category;
        this.faultDescription = faultDescription;

    }

    public Fault(String faultName, String bikeName, String bikeType, String motorbikeNumber, String category, String faultDescription) {
        this.faultName = faultName;
        this.bikeName = bikeName;
        this.bikeType = bikeType;
        this.motorbikeNumber = motorbikeNumber;
        this.category = category;
        this.faultDescription = faultDescription;

    }

    @Override
    public String toString() {
        return "Fault{" +
                "id=" + id +
                ", faultName='" + faultName + '\'' +
                ", bikeName='" + bikeName + '\'' +
                ", bikeType='" + bikeType + '\'' +
                ", motorbikeNumber='" + motorbikeNumber + '\'' +
                ", category='" + category + '\'' +
                ", faultDescription='" + faultDescription + '\'' +

                '}';
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFaultName() {
        return faultName;
    }

    public void setFaultName(String faultName) {
        this.faultName = faultName;
    }

    public String getBikeName() {
        return bikeName;
    }

    public void setBikeName(String bikeName) {
        this.bikeName = bikeName;
    }

    public String getBikeType() {
        return bikeType;
    }

    public void setBikeType(String bikeType) {
        this.bikeType = bikeType;
    }

    public String getMotorbikeNumber() {
        return motorbikeNumber;
    }

    public void setMotorbikeNumber(String motorbikeNumber) {
        this.motorbikeNumber = motorbikeNumber;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getFaultDescription() {
        return faultDescription;
    }

    public void setFaultDescription(String faultDescription) {
        this.faultDescription = faultDescription;
    }



}
