import { Test, TestingModule } from '@nestjs/testing';
import { ArtistGenresService } from './artist_genres.service';

describe('ArtistGenresService', () => {
  let service: ArtistGenresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArtistGenresService],
    }).compile();

    service = module.get<ArtistGenresService>(ArtistGenresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
