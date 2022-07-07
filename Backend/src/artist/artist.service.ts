import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateArtistDto } from './dto/create-artist.dto';
import { Artist } from './entities/artist.entity';

@Injectable()
export class ArtistService {
  constructor(@InjectRepository(Artist) private readonly repository: Repository<Artist>) {}

  create(createArtistDto: CreateArtistDto): Promise<Artist> {
    const artist = this.repository.create(createArtistDto);
    return this.repository.save(artist);
  }

  findAll(): Promise<Artist[]> {
    return this.repository.find()
  }

  async findOne(id: string): Promise<Artist> {
    const artistOne = await this.repository.findOneBy({id : id})
    return artistOne;
  }
}
