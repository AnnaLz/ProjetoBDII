import { PartialType } from '@nestjs/swagger';
import { CreateArtistGenresDto } from './create-artist_genres.dto';

export class UpdateArtistGenresDto extends PartialType(CreateArtistGenresDto) {}
