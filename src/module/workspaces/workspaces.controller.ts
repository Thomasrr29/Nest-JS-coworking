import { Controller, Get, Param} from '@nestjs/common';
import { WorkspacesService } from './workspaces.service';
import { Workspace } from './entities/workspace.entity';
import { ApiResponse, ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';

@ApiTags('workspaces') 
@Controller('/workspaces')
export class WorkspacesController {
  constructor(private readonly workspacesService: WorkspacesService) {}

  @Get('get/session/:sessionId/room/:roomId')
  @ApiOperation({ summary: 'Obtener espacios de trabajo disponibles en una sesión y sala específicas' })
  @ApiParam({ name: 'sessionId', type: Number, description: 'ID de la sesión' })
  @ApiParam({ name: 'roomId', type: Number, description: 'ID de la sala' })
  @ApiResponse({ status: 200, description: 'Espacios de trabajo encontrados con éxito.' })
  @ApiResponse({ status: 404, description: 'No se encontraron espacios de trabajo.' })
  async workspaceAvailableInSession(
    @Param('roomId') roomId: number,
    @Param('sessionId') sessionId: number
  ): Promise<Workspace[]> {
    return this.workspacesService.workspaceAvailableInSession(roomId, sessionId);
  }

  @Get('get/session/:session_id/room/:room_id/busy')
  @ApiOperation({ summary: 'Obtener espacios de trabajo ocupados en una sesión y sala específicas' })
  @ApiParam({ name: 'session_id', type: Number, description: 'ID de la sesión' })
  @ApiParam({ name: 'room_id', type: Number, description: 'ID de la sala' })
  @ApiResponse({ status: 200, description: 'Espacios de trabajo ocupados encontrados con éxito.' })
  @ApiResponse({ status: 404, description: 'No se encontraron espacios de trabajo ocupados.' })
  async workspaceBusyInSession(
    @Param('session_id') sessionId: number,
    @Param('room_id') roomId: number
  ): Promise<Workspace[]> {
    return this.workspacesService.workspaceBusyInSession(sessionId, roomId);
  }

  @Get('get/user/:userId')
  @ApiOperation({ summary: 'Obtener espacios de trabajo asignados a un usuario específico' })
  @ApiParam({ name: 'userId', type: Number, description: 'ID del usuario' })
  @ApiResponse({ status: 200, description: 'Espacios de trabajo encontrados con éxito.' })
  @ApiResponse({ status: 404, description: 'No se encontraron espacios de trabajo para el usuario especificado.' })
  async workspaceAssignedUser(
    @Param('userId') userId: number
  ): Promise<Workspace[]> {
    return this.workspacesService.workspaceAssignedUser(userId);
  }

  @Get('get/session/:sessionId')
  @ApiOperation({ summary: 'Obtener espacios de trabajo asignados a una sesión específica' })
  @ApiParam({ name: 'sessionId', type: Number, description: 'ID de la sesión' })
  @ApiResponse({ status: 200, description: 'Espacios de trabajo encontrados con éxito.' })
  @ApiResponse({ status: 404, description: 'No se encontraron espacios de trabajo para la sesión especificada.' })
  async workspaceAssignedSession(
    @Param('sessionId') sessionId: number
  ): Promise<Workspace[]> {
    return this.workspacesService.workspacesAssignedSession(sessionId);
  }
}


  // @Post()
  // create(@Body() createWorkspaceDto: CreateWorkspaceDto) {
  //   return this.workspacesService.create(createWorkspaceDto);
  // }

  // @Get()
  // findAll() {
  //   return this.workspacesService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.workspacesService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateWorkspaceDto: UpdateWorkspaceDto) {
  //   return this.workspacesService.update(+id, updateWorkspaceDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.workspacesService.remove(+id);
  // }

