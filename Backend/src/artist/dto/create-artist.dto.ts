import { IsInt, IsNotEmpty, IsString, Min } from "class-validator";

export class CreateArtistDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsInt()
    @Min(0)
    followers: number;

    @IsInt()
    @Min(0)
    popularity: number;

    @IsString()
    @IsNotEmpty()
    img: string;
}
