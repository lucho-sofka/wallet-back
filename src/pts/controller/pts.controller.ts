import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PtsService } from '../service/pts.service';
import { CreatePtDto } from '../dto/create-pt.dto';
import { UpdatePtDto } from '../dto/update-pt.dto';

@Controller('pts')
export class PtsController {
  constructor(private readonly ptsService: PtsService) {}

  @Post()
  create(@Body() createPtDto: CreatePtDto) {
    return this.ptsService.create(createPtDto);
  }

  @Get()
  findAll() {
    return this.ptsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ptsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePtDto: UpdatePtDto) {
    return this.ptsService.update(+id, updatePtDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ptsService.remove(+id);
  }
}
