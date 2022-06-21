import { IsBoolean } from "class-validator";

export class CreateArtistAlbumDto {
    @IsBoolean()
    main_artist: boolean;
}
