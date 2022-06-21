import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAlbumDto } from './dto/create-album.dto';
import { Album } from './entities/album.entity';

@Injectable()
export class AlbumService {
  constructor(@InjectRepository(Album) private readonly repository: Repository<Album>) {}
  
  create(createAlbumDto: CreateAlbumDto): Promise<Album> {
    const track = this.repository.create(createAlbumDto);
    return this.repository.save(track);
  }

  findAll(): Promise<Album[]> {
    return this.repository.find();
  }

  async findOne(id: string): Promise<Album> {
    const albumOne = await this.repository.findOneBy({id : id})
    return albumOne;
  }
}
