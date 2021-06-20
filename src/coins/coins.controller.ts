import { Controller, Get, Post, Param, Query, Body } from '@nestjs/common';
import { allowedAssetType } from 'src/helper/model/asset.model';
import { CoinsService } from './coins.service';
import { GetCoinsDto } from './dto/getCoins.dto';

@Controller('price')
export class CoinsController {
  constructor(private coinsService: CoinsService) {}

  @Get()
  public async getCoins(@Query() query: GetCoinsDto) {
    return await this.coinsService.getCoins(query.asset);
  }
}
