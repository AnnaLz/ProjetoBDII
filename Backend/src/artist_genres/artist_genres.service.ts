import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateArtistGenresDto } from './dto/create-artist_genres.dto';
import { ArtistGenres } from './entities/artist_genres.entity';

@Injectable()
export class ArtistGenresService {
  constructor(@InjectRepository(ArtistGenres) private readonly repository: Repository<ArtistGenres>) {}
  
  create(CreateArtistGenresDto: CreateArtistGenresDto): Promise<ArtistGenres> {
    const track = this.repository.create(CreateArtistGenresDto);
    return this.repository.save(track);
  }

  findAll(): Promise<ArtistGenres[]> {
    return this.repository.find();
  }

  async findOne(id: string): Promise<ArtistGenres> {
    const artistGenresOne = await this.repository.findOneBy({id_artist : id})
    return artistGenresOne;
  }
}
