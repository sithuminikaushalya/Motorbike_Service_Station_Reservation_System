package com.motorbike_reservation_system.backend.Fault_Management;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FaultService {

    @Autowired
    private FaultRepository faultRepository;

    public Fault saveFault(Fault fault) {
        return faultRepository.save(fault);
    }

    public List<Fault> getFault() {
        return faultRepository.findAll();
    }

//    public Product getProductById(int id) {
//        return repository.findById(id).orElse(null);
//    }

    public Fault getFaultByFaultName(String faultName) {
        return faultRepository.findByFaultName(faultName);
    }

    public String deleteFault(int id) {
        faultRepository.deleteById(id);
        return "product removed !! " + id;
    }

    public Fault updateFault(Fault product) {
        Fault existingProduct = faultRepository.findById(product.getId()).orElse(null);
        existingProduct.setFaultName(product.getFaultName());
//        existingProduct.setQuantity(product.getQuantity());
//        existingProduct.setPrice(product.getPrice());
        return faultRepository.save(existingProduct);
    }
}
