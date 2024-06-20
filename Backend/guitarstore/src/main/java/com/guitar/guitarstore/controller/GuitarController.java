package com.guitar.guitarstore.controller;

import java.io.IOException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.guitar.guitarstore.entity.Guitar;
import com.guitar.guitarstore.entity.GuitarType;
import com.guitar.guitarstore.services.FileService;
import com.guitar.guitarstore.services.GuitarService;

@CrossOrigin
@RestController
@RequestMapping("/guitars")
public class GuitarController {
    
    @Autowired
    private GuitarService guitarService;

    @Autowired
    private FileService fileService;

    @Value("${file.upload-dir}")
    private String uploadDir;

    @GetMapping("/search")
    ResponseEntity<List<Guitar>> search(@RequestParam String keywords){
        String[] keywordArray = keywords.split("\\s+");
        return new ResponseEntity<>(guitarService.search(keywordArray), HttpStatus.OK);
    }

    @PostMapping
    ResponseEntity<Guitar> addGuitar(@RequestBody Guitar guitar){
        return new ResponseEntity<>(guitarService.addGuitar(guitar), HttpStatus.CREATED);
    }

    @GetMapping("/type/{type}")
    ResponseEntity<List<Guitar>> getGuitarsByType(@PathVariable String type){
        GuitarType guitarType;
        guitarType = GuitarType.valueOf(type.toUpperCase());
        return new ResponseEntity<>(guitarService.getGuitarsByType(guitarType), HttpStatus.OK);
    }

    @GetMapping
    ResponseEntity<List<Guitar>> getAllGuitars(){
        return new ResponseEntity<>(guitarService.getAllGuitars(), HttpStatus.OK);
    }
    
    @PutMapping("/{id}")
    ResponseEntity<Guitar> updateGuitar(@RequestBody Guitar guitarDetails, @PathVariable int id){
        return new ResponseEntity<>(guitarService.updateGuitar(guitarDetails, id), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    ResponseEntity<Void> deleteGuitar(@PathVariable int id){
        guitarService.deleteGuitar(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/upload/{id}")
    ResponseEntity<Guitar> uploadImage(@RequestParam("image") MultipartFile file, @PathVariable int id) throws IOException{
        String filename = fileService.uploadImage(uploadDir, file);
        Guitar guitar = guitarService.getById(id);
        guitar.setImageUrl(filename);
        Guitar updatedGuitar = guitarService.updateGuitar(guitar, id);

        return new ResponseEntity<>(updatedGuitar, HttpStatus.OK);
    }

}
