import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArtistTrackService } from './artist_track.service';
import { CreateArtistTrackDto } from './dto/create-artist_track.dto';

@Controller('artist-track')
export class ArtistTrackController {
  constructor(private readonly artistTrackService: ArtistTrackService) {}

  @Post()
  create(@Body() createArtistTrackDto: CreateArtistTrackDto) {
    return this.artistTrackService.create(createArtistTrackDto);
  }

  @Get()
  findAll() {
    return this.artistTrackService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.artistTrackService.findOne(id);
  }
}
