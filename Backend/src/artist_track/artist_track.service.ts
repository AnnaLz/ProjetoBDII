import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateArtistTrackDto } from './dto/create-artist_track.dto';
import { ArtistTrack } from './entities/artist_track.entity';

@Injectable()
export class ArtistTrackService {
  constructor(@InjectRepository(ArtistTrack) private readonly repository: Repository<ArtistTrack>) {}
  
  create(CreateArtistTrackDto: CreateArtistTrackDto): Promise<ArtistTrack> {
    const track = this.repository.create(CreateArtistTrackDto);
    return this.repository.save(track);
  }

  findAll(): Promise<ArtistTrack[]> {
    return this.repository.find();
  }

  async findOne(id: string): Promise<ArtistTrack> {
    const artistTrackOne = await this.repository.findOneBy({id_artist : id})
    return artistTrackOne;
  }
}
