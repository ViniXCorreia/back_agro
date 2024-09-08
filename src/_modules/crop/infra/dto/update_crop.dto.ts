import { PartialType } from '@nestjs/mapped-types';
import { CropEntity } from 'src/infra/database/entities/crop.entity';
import { CreateCropDto } from './create_crop.dto';

export class UpdateCropDto extends PartialType(CreateCropDto) {}
