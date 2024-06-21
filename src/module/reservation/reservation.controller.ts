import { Controller, Get,Param, } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ApiOperation, ApiTags, ApiResponse, ApiParam } from '@nestjs/swagger';


@ApiTags('reservation') 
@Controller('/reservation')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  // @Post()
  // create(@Body() createReservationDto: CreateReservationDto) {
  //   return this.reservationService.create(createReservationDto);
  // }


  @Get('get/session/busy')
  @ApiOperation({ summary: 'Obtener sesiones más ocupadas' })
  @ApiResponse({ status: 200, description: 'Sesiones más ocupadas encontradas con éxito.' })
  @ApiResponse({ status: 404, description: 'No se encontraron sesiones ocupadas.' })
  async findSessionMoreBusy() {
    return await this.reservationService.findSessionMoreBusy();
  }

  @Get('get/session/available')
  @ApiOperation({ summary: 'Obtener sesiones disponibles por ID' })
  @ApiResponse({ status: 200, description: 'Sesiones disponibles encontradas con éxito.' })
  @ApiResponse({ status: 404, description: 'No se encontraron sesiones disponibles.' })
  async findSessionMoreAvailable() {
    return await this.reservationService.findSessionMoreAvailable();
  }

  // @Get()
  // findAll() {
  //   return this.reservationService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.reservationService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateReservationDto: UpdateReservationDto) {
  //   return this.reservationService.update(+id, updateReservationDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.reservationService.remove(+id);
  // }
}
