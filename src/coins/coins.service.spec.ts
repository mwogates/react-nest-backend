import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { CoinsController } from './coins.controller';
import { CoinsService } from './coins.service';
import { allowedAssetType } from '../helper/model/asset.model';

describe('CoinsController', () => {
  let coinsService: CoinsService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [CoinsController],
      providers: [CoinsService],
    }).compile();

    coinsService = moduleRef.get<CoinsService>(CoinsService);
  });

  describe('Testing coins controller', () => {
    it('testing getCoins', async () => {
      expect(typeof coinsService.getCoins(allowedAssetType.BTC)).not.toBe(null);
      expect(typeof coinsService.getCoins(allowedAssetType.ETH)).not.toBe(null);
    });
  });
});
