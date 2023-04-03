import { PartialType } from '@nestjs/mapped-types';
import { CreateMambuDto } from './create-mambu.dto';

export class UpdateMambuDto extends PartialType(CreateMambuDto) {}
