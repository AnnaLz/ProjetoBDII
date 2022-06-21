import { IsString, IsNotEmpty, IsInt, Min, IsDate } from "class-validator";

export class CreateAlbumDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsDate()
    @IsNotEmpty()
    release_date: Date;

    @IsInt()
    @Min(0)
    qts_artists: number;

    @IsInt()
    @Min(0)
    qtd_tracks: number;

    @IsString()
    @IsNotEmpty()
    img: string;
}
