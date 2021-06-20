import { IsEnum, IsNotEmpty, ValidateNested } from 'class-validator';
import { allowedAssetType } from '../../helper/model/asset.model';
import { Expose } from 'class-transformer';
export class GetCoinsDto {
  @Expose()
  @IsEnum(allowedAssetType, { message: 'This asset is not supported' })
  @IsNotEmpty({ message: 'asset should be either BTC or ETH, not empty' })
  readonly asset: allowedAssetType;
}
