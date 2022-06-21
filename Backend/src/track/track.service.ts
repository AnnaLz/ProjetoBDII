import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTrackDto } from './dto/create-track.dto';
import { Track } from './entities/track.entity';

@Injectable()
export class TrackService {
  constructor(@InjectRepository(Track) private readonly repository: Repository<Track>) {}
  
  create(createTrackDto: CreateTrackDto): Promise<Track> {
    const track = this.repository.create(createTrackDto);
    return this.repository.save(track);
  }

  findAll(): Promise<Track[]> {
    return this.repository.find();
  }

  async findOne(id: string): Promise<Track> {
    const trackOne = await this.repository.findOneBy({id : id})
    return trackOne;
  }
}
