import { IsBoolean } from "class-validator";

export class CreateArtistTrackDto {
    @IsBoolean()
    main_artist: boolean;
}
