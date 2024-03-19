package com.motorbike_reservation_system.backend.Reservation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReservationService {
    @Autowired
    private ReservationRepo reservationRepo;



    @Autowired
    public ReservationService(ReservationRepo reservationRepo) {
        this.reservationRepo = reservationRepo;
    }
    public Reservation saveReservation(Reservation reservation) {
        return reservationRepo.save(reservation);
    }

    public List<Reservation> saveReservation(List<Reservation> reservationList) {
        return reservationRepo.saveAll(reservationList);
    }

    public List<Reservation> getReservation() {
        return reservationRepo.findAll();
    }

    public Reservation getReservationByReservationId(String reservationId) {
        return reservationRepo.findByReservationId(reservationId);
        //.orElse(null);
    }



    public String deleteReservation(String reservationId) {
        reservationRepo.deleteById(reservationId);
        return "Reservation removed !! " + reservationId;
    }

    public List<Reservation> listAll() {
        return reservationRepo.findAll();
    }

//    public Reservation updateReservation(Reservation product) {
//        Reservation existingProduct = reservationRepo.findById(product.getId()).orElse(null);
//        existingProduct.setName(product.getName());
//        existingProduct.setQuantity(product.getQuantity());
//        existingProduct.setPrice(product.getPrice());
//        return reservationRepo.save(existingProduct);
//    }


}
