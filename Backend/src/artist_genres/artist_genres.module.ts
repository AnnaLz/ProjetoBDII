import { Module } from '@nestjs/common';
import { ArtistGenresService } from './artist_genres.service';
import { ArtistGenresController } from './artist_genres.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtistGenres } from './entities/artist_genres.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ArtistGenres])],
  controllers: [ArtistGenresController],
  providers: [ArtistGenresService]
})

export class ArtistGenresModule {}
