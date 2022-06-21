import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtistModule } from './artist/artist.module';
import { TrackModule } from './track/track.module';
import { AlbumModule } from './album/album.module';
import { ArtistAlbumModule } from './artist_album/artist_album.module';
import { ArtistGenresModule } from './artist_genres/artist_genres.module';
import { ArtistTrackModule } from './artist_track/artist_track.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: (process.env.DB_SYNCHRONIZE === 'true'),
    }),
    ArtistModule,
    TrackModule,
    AlbumModule,
    ArtistAlbumModule,
    ArtistGenresModule,
    ArtistTrackModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
