package com.motorbike_reservation_system.backend.Fault_Management;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/fault")
public class FaultController {

    @Autowired
    private FaultService faultService;

    @PostMapping("/addfault")
    public Fault addFault(@RequestBody Fault fault) {
        return faultService.saveFault(fault);
    }

    @GetMapping("/getfault")
    public List<Fault> findAllFaults() {
        return faultService.getFault();
    }

   @GetMapping("/fault/{faultName}")
    public Fault findFaultByFaultName(@PathVariable String faultName) {
        return faultService.getFaultByFaultName(faultName);
    }

    @PutMapping("/updatefault")
    public Fault updateFault(@RequestBody Fault fault) {
        return faultService.updateFault(fault);
    }

    @DeleteMapping("/deletefault/{id}")
    public String deleteFault(@PathVariable int id) {
        return faultService.deleteFault(id);
    }
}
