package com.app.services;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.CustomExcp;
import com.app.dao.ArtDao;
import com.app.dto.ArtReqDto;
import com.app.dto.ArtRespDto;
import com.app.entities.Art;

@Service
@Transactional
public class ArtServiceImpl implements ArtServices {

	@Autowired
	ArtDao artDao;
	
	@Autowired
	ModelMapper mapper;

	@Override
	public ArtReqDto addNewArtWithImage(ArtReqDto dto) {
		System.out.println("In art Service "+dto);
		Art art=mapper.map(dto, Art.class);
		artDao.save(art);
		return mapper.map(art, ArtReqDto.class);
	}

	@Override
	public String deleteArt(Long artId) {
		artDao.deleteById(artId);
		return "Art deleted successfully";
	}

	@Override
	public String updateArt(Long artId, ArtReqDto artDto) {
		
		Art art=artDao.findById(artId).orElseThrow(()->new CustomExcp("Id not found"));
		mapper.map(artDto, art);
		artDao.save(art);
		return "Art details are updated successfully";
	}

	@Override
	public List<ArtRespDto> getAllArt() {
		
		return artDao.findAll().stream().map(a->mapper.map(a, ArtRespDto.class)).collect(Collectors.toList());
	}

}
