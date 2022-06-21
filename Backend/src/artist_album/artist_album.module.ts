import { Module } from '@nestjs/common';
import { ArtistAlbumService } from './artist_album.service';
import { ArtistAlbumController } from './artist_album.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtistAlbum } from './entities/artist_album.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ArtistAlbum])],
  controllers: [ArtistAlbumController],
  providers: [ArtistAlbumService]
})

export class ArtistAlbumModule {}
