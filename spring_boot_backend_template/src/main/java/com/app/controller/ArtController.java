package com.app.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
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

import com.app.dto.ArtReqDto;
import com.app.services.ArtImageService;
import com.app.services.ArtServices;

@RestController
@RequestMapping("/Art")
public class ArtController {
	
	@Autowired
	ArtServices artService;
	
	@Autowired
	ArtImageService artImageService;
	
	@PostMapping
	public ResponseEntity<?> addNewArt(@RequestBody ArtReqDto artDto){
		System.out.println("Inside Art Controller");
		return ResponseEntity.status(HttpStatus.CREATED).body(artService.addNewArtWithImage(artDto));
	}
	
	@PostMapping(value="/image/{artId}",consumes = "multipart/form-data")
	public ResponseEntity<?> upLoadImage(@PathVariable Long artId,@RequestParam MultipartFile imageFile){
		return ResponseEntity.status(HttpStatus.CREATED).body(artImageService.upLoadImage(artId, imageFile));
	}
	
	@DeleteMapping("/{artId}")
	public ResponseEntity<?> deleteArt(@PathVariable Long artId){
		return ResponseEntity.ok(artService.deleteArt(artId));
	}
	
	@PutMapping("/{artId}")
	public ResponseEntity<?> updateArt(@PathVariable Long artId,@RequestBody ArtReqDto artDto){
		return ResponseEntity.status(HttpStatus.OK).body(artService.updateArt(artId, artDto));
	}
	
	@GetMapping(value = "/images/{artId}",produces = {MediaType.IMAGE_GIF_VALUE,MediaType.IMAGE_JPEG_VALUE,MediaType.IMAGE_PNG_VALUE})
	public ResponseEntity<?> downloadImage(@PathVariable Long artId) throws IOException{
		return ResponseEntity.ok(artImageService.serveImage(artId));
	}
	
	@GetMapping(value = "/getAllArts")
	public ResponseEntity<?> getAllArt(){
		return ResponseEntity.ok(artService.getAllArt());
	}
	
	
	
	
}
