import { Test, TestingModule } from '@nestjs/testing';
import { ArtistTrackService } from './artist_track.service';

describe('ArtistTrackService', () => {
  let service: ArtistTrackService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArtistTrackService],
    }).compile();

    service = module.get<ArtistTrackService>(ArtistTrackService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
