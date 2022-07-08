import { IsNotEmpty, IsString } from "class-validator";

export class WordCloudDto {
    @IsString()
    @IsNotEmpty()
    qtd: string;
}