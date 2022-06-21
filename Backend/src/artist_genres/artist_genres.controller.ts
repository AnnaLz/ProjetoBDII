import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArtistGenresService } from './artist_genres.service';
import { CreateArtistGenresDto } from './dto/create-artist_genres.dto';

@Controller('artist-genres')
export class ArtistGenresController {
  constructor(private readonly artistGenresService: ArtistGenresService) {}

  @Post()
  create(@Body() createArtistGenresDto: CreateArtistGenresDto) {
    return this.artistGenresService.create(createArtistGenresDto);
  }

  @Get()
  findAll() {
    return this.artistGenresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.artistGenresService.findOne(id);
  }
}
