package com.guitar.guitarstore.services.Impl;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.guitar.guitarstore.dao.GuitarRepository;
import com.guitar.guitarstore.entity.Guitar;
import com.guitar.guitarstore.entity.GuitarType;
import com.guitar.guitarstore.services.GuitarService;

@Service
public class GuitarServiceImpl implements GuitarService {

    @Autowired
    private GuitarRepository guitarRepository;

    @Override
    public Guitar addGuitar(Guitar guitar) {
        return this.guitarRepository.save(guitar);
    }

    @Override
    public List<Guitar> getAllGuitars() {
        return this.guitarRepository.findAll();
    }

    @Override
    public void deleteGuitar(int id) {
        this.guitarRepository.deleteById(id);
    }

    @Override
    public Guitar updateGuitar(Guitar guitarDetails, int id) {
        Optional<Guitar> guitar = guitarRepository.findById(id);
        if (guitar.isPresent()) {
            Guitar existingGuitar = guitar.get();
            existingGuitar.setBrand(guitarDetails.getBrand());
            existingGuitar.setName(guitarDetails.getName());
            existingGuitar.setPrice(guitarDetails.getPrice());
            existingGuitar.setType(guitarDetails.getType());
            existingGuitar.setDescription(guitarDetails.getDescription());
            existingGuitar.setImageUrl(guitarDetails.getImageUrl());
            existingGuitar.setHighlights(guitarDetails.getHighlights());
            existingGuitar.setQuantity(guitarDetails.getQuantity());
            return guitarRepository.save(existingGuitar);
        } else {
            return null;
        }
    }

    @Override
    public Guitar getById(int id) {
        Optional<Guitar> guitar = guitarRepository.findById(id);
        return guitar.get();
    }

    @Override
    public List<Guitar> getGuitarsByType(GuitarType type) {
        return guitarRepository.findByType(type);
    }

    @Override
    public List<Guitar> search(String[] keywords) {
        Set<Guitar> resultSet = new HashSet<>();
        for (String keyword : keywords) {
            List<Guitar> guitars = guitarRepository.findByBrandOrNameContaining(keyword);
            resultSet.addAll(guitars);
        }
        // List to store final results matching all keywords
        List<Guitar> finalResults = new ArrayList<>();

        // Iterate over resultSet to find guitars containing all keywords
        for (Guitar guitar : resultSet) {
            boolean containsAllKeywords = true;
            for (String keyword : keywords) {
                // Check if guitar contains current keyword in brand or name
                if (!guitar.getBrand().toLowerCase().contains(keyword.toLowerCase()) &&
                        !guitar.getName().toLowerCase().contains(keyword.toLowerCase())) {
                    containsAllKeywords = false;
                    break;
                }
            }
            // If guitar contains all keywords, add to finalResults
            if (containsAllKeywords) {
                finalResults.add(guitar);
            }
        }

        return finalResults;
    }
    
}
