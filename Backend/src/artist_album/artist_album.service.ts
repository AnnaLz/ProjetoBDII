import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateArtistAlbumDto } from './dto/create-artist_album.dto';
import { ArtistAlbum } from './entities/artist_album.entity';

@Injectable()
export class ArtistAlbumService {
  constructor(@InjectRepository(ArtistAlbum) private readonly repository: Repository<ArtistAlbum>) {}
  
  create(createArtistAlbumDto: CreateArtistAlbumDto): Promise<ArtistAlbum> {
    const track = this.repository.create(createArtistAlbumDto);
    return this.repository.save(track);
  }

  findAll(): Promise<ArtistAlbum[]> {
    return this.repository.find();
  }

  async findOne(id: string): Promise<ArtistAlbum> {
    const albumOne = await this.repository.findOneBy({id_artist : id})
    return albumOne;
  }
}
