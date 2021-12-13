package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Drink;
import com.example.springtemplate.models.DrinkType;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface DrinkTypeRepository extends CrudRepository<DrinkType,String>{
    @Query(value = "SELECT * FROM drink_types", nativeQuery = true)
    List<DrinkType> findAllDrinkTypes();


}
