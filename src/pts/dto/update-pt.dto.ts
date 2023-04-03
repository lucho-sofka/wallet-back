import { PartialType } from '@nestjs/mapped-types';
import { CreatePtDto } from './create-pt.dto';

export class UpdatePtDto extends PartialType(CreatePtDto) {}
