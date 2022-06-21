import { IsString, IsNotEmpty, IsInt, Min, IsBoolean } from "class-validator";

export class CreateTrackDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsInt()
    @Min(0)
    duration: number;

    @IsBoolean()
    explicit: boolean;

    @IsInt()
    @Min(0)
    track_number: number;

    @IsInt()
    @Min(0)
    qtd_artistas: number;

    // @IsString()
    // @IsNotEmpty()
    // album_id: string;

}
