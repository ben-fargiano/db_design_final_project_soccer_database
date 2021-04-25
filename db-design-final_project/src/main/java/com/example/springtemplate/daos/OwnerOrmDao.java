package com.example.springtemplate.daos;


import com.example.springtemplate.models.Owner;
import com.example.springtemplate.repositories.OwnerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.sql.*;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
public class OwnerOrmDao {

    @Autowired
    OwnerRepository ownerRepository;

    @PostMapping("/api/owners")
    public Owner createOwner(@RequestBody Owner owner) {
        return ownerRepository.save(owner);
    }

    @GetMapping("/api/owners")
    public List<Owner> findAllOwners() {
        return ownerRepository.findAllOwners();
    }

    @GetMapping("/api/owners/{ownerId}")
    public Owner findOwnerById(
            @PathVariable("ownerId") Integer ownerId) {
        return ownerRepository.findOwnerById(ownerId);
    }

    @PutMapping("/api/owners/{ownerId}")
    public Owner updateOwner(
            @PathVariable("ownerId") Integer id,
            @RequestBody Owner ownerUpdates) {
        Owner owner = ownerRepository.findOwnerById(id);
        owner.setFirstName(ownerUpdates.getFirstName());
        owner.setLastName(ownerUpdates.getLastName());
        owner.setUsername(ownerUpdates.getUsername());
        owner.setPassword(ownerUpdates.getPassword());
        owner.setEmail(ownerUpdates.getEmail());
        owner.setDate_of_birth(ownerUpdates.getDate_of_birth());
        owner.setNet_worth(ownerUpdates.getNet_worth());

        return ownerRepository.save(owner);
    }

    @DeleteMapping("/api/owners/{ownerId}")
    public void deleteOwner(
            @PathVariable("ownerId") Integer id) {
        ownerRepository.deleteById(id);
    }

    public static void main(String[] args) throws SQLException, ClassNotFoundException {
        System.out.println("JDBC DAO");
        OwnerOrmDao orm = new OwnerOrmDao();

    }
}