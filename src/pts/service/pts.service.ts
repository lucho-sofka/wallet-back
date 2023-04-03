import { Injectable } from '@nestjs/common';
import { CreatePtDto } from '../dto/create-pt.dto';
import { UpdatePtDto } from '../dto/update-pt.dto';

@Injectable()
export class PtsService {
  create(createPtDto: CreatePtDto) {
    return 'This action adds a new pt';
  }

  findAll() {
    return `This action returns all pts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pt`;
  }

  update(id: number, updatePtDto: UpdatePtDto) {
    return `This action updates a #${id} pt`;
  }

  remove(id: number) {
    return `This action removes a #${id} pt`;
  }
}
