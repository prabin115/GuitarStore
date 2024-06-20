package com.guitar.guitarstore.controller;

import java.io.IOException;
import java.io.InputStream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.guitar.guitarstore.payload.FileResponse;
import com.guitar.guitarstore.services.FileService;

import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/file")
public class FileController {
    
    @Autowired
    private FileService fileService;

    @Value("${file.upload-dir}")
    private String uploadDir;

    @GetMapping("/{imageName}")
    void downloadImage(@PathVariable("imageName") String imageName, HttpServletResponse response) throws IOException{
        InputStream resource = fileService.getResource(uploadDir, imageName);
        response.setContentType(MediaType.ALL_VALUE);
        StreamUtils.copy(resource, response.getOutputStream());
    }

    @PostMapping("/uploads")
    ResponseEntity<FileResponse> fileUpload(@RequestParam("image") MultipartFile file) throws IOException{
        this.fileService.uploadImage(uploadDir, file);
        return new ResponseEntity<>(new FileResponse(file.getOriginalFilename(), "Successfully uploaded"), HttpStatus.OK);
    }
}
