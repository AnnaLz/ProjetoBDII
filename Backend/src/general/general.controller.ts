import { Body, Controller, Get, Post } from '@nestjs/common';
import { QueryDto, WordCloudDto } from './dto/return.dto';
import { GeneralService } from './general.service';

@Controller('general')
export class GeneralController {
  constructor(private readonly generalService: GeneralService) {}

  @Get('/all-columns')
  getAllColumns() {
    return this.generalService.getAllColumns();
  }

  @Post('/montar-query')
  consultaQuery(@Body() query: QueryDto) {
    return this.generalService.getQuery(query);
  }

  @Post('/word-cloud')
  worldCloud(@Body() qtd: WordCloudDto) {
    return this.generalService.getWorldCloud(qtd);
  }
}
