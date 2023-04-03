import { Injectable } from '@nestjs/common';
import { CreateMambuDto } from '../dto/create-mambu.dto';
import { UpdateMambuDto } from '../dto/update-mambu.dto';

@Injectable()
export class MambuService {
  create(createMambuDto: CreateMambuDto) {
    return 'This action adds a new mambu';
  }

  findAll() {
    return `This action returns all mambu`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mambu`;
  }

  update(id: number, updateMambuDto: UpdateMambuDto) {
    return `This action updates a #${id} mambu`;
  }

  remove(id: number) {
    return `This action removes a #${id} mambu`;
  }
}
