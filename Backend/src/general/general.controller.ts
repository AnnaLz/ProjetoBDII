import { Controller, Get } from '@nestjs/common';
import { GeneralService } from './general.service';

@Controller('general')
export class GeneralController {
  constructor(private readonly generalService: GeneralService) {}

  @Get('/all-columns')
  getAllColumns() {
    return this.generalService.getWorldCloud();
  }

  @Get('/word-cloud')
  getWorldCloud() {
    return this.generalService.getWorldCloud();
  }
}
