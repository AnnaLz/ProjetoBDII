import { Test, TestingModule } from '@nestjs/testing';
import { ArtistTrackController } from './artist_track.controller';
import { ArtistTrackService } from './artist_track.service';

describe('ArtistTrackController', () => {
  let controller: ArtistTrackController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArtistTrackController],
      providers: [ArtistTrackService],
    }).compile();

    controller = module.get<ArtistTrackController>(ArtistTrackController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
