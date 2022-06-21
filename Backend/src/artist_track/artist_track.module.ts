import { Module } from '@nestjs/common';
import { ArtistTrackService } from './artist_track.service';
import { ArtistTrackController } from './artist_track.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtistTrack } from './entities/artist_track.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ArtistTrack])],
  controllers: [ArtistTrackController],
  providers: [ArtistTrackService]
})

export class ArtistTrackModule {}
