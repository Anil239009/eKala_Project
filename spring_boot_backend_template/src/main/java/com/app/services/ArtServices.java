package com.app.services;

import java.util.List;
import com.app.dto.ArtReqDto;
import com.app.dto.ArtRespDto;

public interface ArtServices {
	
	public ArtReqDto addNewArtWithImage(ArtReqDto artdto);
	
	public String deleteArt(Long artId);
	
	public String updateArt(Long artId, ArtReqDto artDto);
	
	public List<ArtRespDto> getAllArt();
}
