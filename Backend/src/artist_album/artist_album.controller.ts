import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArtistAlbumService } from './artist_album.service';
import { CreateArtistAlbumDto } from './dto/create-artist_album.dto';

@Controller('artist-album')
export class ArtistAlbumController {
  constructor(private readonly artistAlbumService: ArtistAlbumService) {}

  @Post()
  create(@Body() createArtistAlbumDto: CreateArtistAlbumDto) {
    return this.artistAlbumService.create(createArtistAlbumDto);
  }

  @Get()
  findAll() {
    return this.artistAlbumService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.artistAlbumService.findOne(id);
  }
}
