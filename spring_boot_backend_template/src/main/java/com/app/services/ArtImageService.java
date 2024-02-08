package com.app.services;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

public interface ArtImageService {
	
	public String upLoadImage(Long artId,MultipartFile image);
	
	public byte[] serveImage(Long artId) throws IOException;
}
