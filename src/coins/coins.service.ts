import { BadRequestException, Injectable } from '@nestjs/common';
import { allowedAssetType } from '../helper/model/asset.model';
import axios from 'axios';
@Injectable()
export class CoinsService {
  public async getCoins(asset: allowedAssetType) {
    let value: string = '';
    if (asset === allowedAssetType.BTC) {
      value = await axios
        .get('https://api.coingecko.com/api/v3/coins/bitcoin')
        .then(res => res.data.market_data.current_price.usd)
        .catch(err => null);
    } else {
      value = await axios
        .get('https://api.coingecko.com/api/v3/coins/ethereum')
        .then(res => res.data.market_data.current_price.usd)
        .catch(err => null);
    }
    if (value)
      return { asset: asset, value: Math.round(parseFloat(value) * 10) / 10 };
    else throw new BadRequestException('Not Found');
  }
}
