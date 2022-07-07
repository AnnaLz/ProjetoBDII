import { Module } from '@nestjs/common';
import { GeneralService } from './general.service';
import { GeneralController } from './general.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtistGenres } from 'src/artist_genres/entities/artist_genres.entity';
import { Artist } from 'src/artist/entities/artist.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ArtistGenres]),
    TypeOrmModule.forFeature([Artist])
  ],
  controllers: [GeneralController],
  providers: [GeneralService]
})
export class GeneralModule {}
