package com.guitar.guitarstore.services;

import java.util.List;

import com.guitar.guitarstore.entity.Guitar;
import com.guitar.guitarstore.entity.GuitarType;

public interface GuitarService {
    Guitar addGuitar(Guitar guitar);
    Guitar updateGuitar(Guitar guitar, int id);
    Guitar getById(int id);
    List<Guitar> getAllGuitars();
    List<Guitar> getGuitarsByType(GuitarType type);
    void deleteGuitar(int id);

    List<Guitar> search(String[] keyword);
}
