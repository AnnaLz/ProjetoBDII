import { PartialType } from '@nestjs/swagger';
import { CreateArtistTrackDto } from './create-artist_track.dto';

export class UpdateArtistTrackDto extends PartialType(CreateArtistTrackDto) {}
