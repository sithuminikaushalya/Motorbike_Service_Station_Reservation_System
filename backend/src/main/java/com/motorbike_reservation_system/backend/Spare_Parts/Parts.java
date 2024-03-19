package com.motorbike_reservation_system.backend.Spare_Parts;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Spare Parts")
public class Parts {

    @Id
    private String partsId;
    private String partsName;
    private String partsType;
    private String partsPrice;
    private String partsNumber;

    public Parts() {
    }

    public Parts(String partsId, String partsName, String partsType, String partsPrice, String partsNumber) {
        this.partsId = partsId;
        this.partsName = partsName;
        this.partsType = partsType;
        this.partsPrice = partsPrice;
        this.partsNumber = partsNumber;
    }

    public Parts(String partsName, String partsType, String partsPrice, String partsNumber) {
        this.partsName = partsName;
        this.partsType = partsType;
        this.partsPrice = partsPrice;
        this.partsNumber = partsNumber;
    }

    @Override
    public String toString() {
        return "Parts{" +
                "partsId='" + partsId + '\'' +
                ", partsName='" + partsName + '\'' +
                ", partsType='" + partsType + '\'' +
                ", partsPrice='" + partsPrice + '\'' +
                ", partsNumber='" + partsNumber + '\'' +
                '}';
    }

    public String getPartsId() {
        return partsId;
    }

    public void setPartsId(String partsId) {
        this.partsId = partsId;
    }

    public String getPartsName() {
        return partsName;
    }

    public void setPartsName(String partsName) {
        this.partsName = partsName;
    }

    public String getPartsType() {
        return partsType;
    }

    public void setPartsType(String partsType) {
        this.partsType = partsType;
    }

    public String getPartsPrice() {
        return partsPrice;
    }

    public void setPartsPrice(String partsPrice) {
        this.partsPrice = partsPrice;
    }

    public String getPartsNumber() {
        return partsNumber;
    }

    public void setPartsNumber(String partsNumber) {
        this.partsNumber = partsNumber;
    }
}
