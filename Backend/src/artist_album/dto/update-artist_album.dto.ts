import { PartialType } from '@nestjs/swagger';
import { CreateArtistAlbumDto } from './create-artist_album.dto';

export class UpdateArtistAlbumDto extends PartialType(CreateArtistAlbumDto) {}
