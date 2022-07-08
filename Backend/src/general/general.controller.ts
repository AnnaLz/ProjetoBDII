import { Body, Controller, Get, Post } from '@nestjs/common';
import { WordCloudDto } from './dto/return.dto';
import { GeneralService } from './general.service';

@Controller('general')
export class GeneralController {
  constructor(private readonly generalService: GeneralService) {}

  @Get('/all-columns')
  getAllColumns() {
    return this.generalService.getAllColumns();
  }

  @Post('/word-cloud')
  create(@Body() qtd: WordCloudDto) {
    return this.generalService.getWorldCloud(qtd);
  }
}
