package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Owner;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface OwnerRepository
        extends CrudRepository<Owner, Integer> {
    @Query(value = "SELECT * FROM owners",
            nativeQuery = true)
    public List<Owner> findAllOwners();
    @Query(value = "SELECT * FROM owners WHERE id=:ownerId",
            nativeQuery = true)
    public Owner findOwnerById(@Param("ownerId") Integer ownerId);

}
