package com.app.services;

import java.io.File;
import java.io.IOException;

import javax.annotation.PostConstruct;
import javax.transaction.Transactional;

import org.apache.commons.io.FileUtils;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.app.custom_exceptions.CustomExcp;
import com.app.dao.ArtDao;
import com.app.entities.Art;
@Service
@Transactional
public class ArtImageServiceImpl implements ArtImageService {
	@Autowired
	ArtDao artDao;
	
	@Autowired
	ModelMapper mapper;
	
	@Value("${folder.location}") //using SPEL: Spring expr Language
	String folderLocation;
	
	@PostConstruct
	public void init() {
		System.out.println("In init "+folderLocation);
//		it will check if folder is exist or not
		File folder=new File(folderLocation);
		if(folder.exists()) {
			System.out.println("folder exist already..!");
		}
		else {
//			create folder
			folder.mkdir();
			System.out.println("Folder created..!");
		}
	}
	@Override
	public String upLoadImage(Long artId, MultipartFile image) {
		Art art=artDao.findById(artId).orElseThrow(()->new CustomExcp("Id not found..!"));
		String path=folderLocation.concat(image.getOriginalFilename());
		try {
			FileUtils.writeByteArrayToFile(new File(path), image.getBytes());
			art.setArtImagePath(path);
		} catch (IOException e) {
			e.printStackTrace();
		}
		return "image added successfully..!";
	}
	
	@Override
	public byte[] serveImage(Long artId) throws IOException {
		Art art=artDao.findById(artId).orElseThrow(()->new CustomExcp("Id not found..!"));
		String path=art.getArtImagePath();
		if(path!=null) {
			return FileUtils.readFileToByteArray(new File(path));
		}
		else {
			throw new CustomExcp("Image not assigned yet");
		}	
	}
	
}
