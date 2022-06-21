import { Test, TestingModule } from '@nestjs/testing';
import { ArtistGenresController } from './artist_genres.controller';
import { ArtistGenresService } from './artist_genres.service';

describe('ArtistGenresController', () => {
  let controller: ArtistGenresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArtistGenresController],
      providers: [ArtistGenresService],
    }).compile();

    controller = module.get<ArtistGenresController>(ArtistGenresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
