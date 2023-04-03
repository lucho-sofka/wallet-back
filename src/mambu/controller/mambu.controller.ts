import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';


@Controller('mambu')
export class MambuController {
  constructor(private readonly mambuService: MambuService) {}

  @Post()
  create(@Body() createMambuDto: CreateMambuDto) {
    return this.mambuService.create(createMambuDto);
  }

  @Get()
  findAll() {
    return this.mambuService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mambuService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMambuDto: UpdateMambuDto) {
    return this.mambuService.update(+id, updateMambuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mambuService.remove(+id);
  }
}
