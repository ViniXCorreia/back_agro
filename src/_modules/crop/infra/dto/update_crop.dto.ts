import { PartialType } from '@nestjs/mapped-types';
import { CropEntity } from 'src/infra/database/entities/crop.entity';

export class UpdateCropDto extends PartialType(CropEntity) {}
