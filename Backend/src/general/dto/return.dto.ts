import { IsNotEmpty, IsString } from "class-validator";

export class WordCloudDto {
    @IsString()
    @IsNotEmpty()
    qtd: string;
}

export class QueryDto {
    @IsString()
    @IsNotEmpty()
    query: string;
}