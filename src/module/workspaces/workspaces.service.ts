import { Injectable } from '@nestjs/common';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { UpdateWorkspaceDto } from './dto/update-workspace.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Workspace } from './entities/workspace.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WorkspacesService {

  constructor(@InjectRepository(Workspace) private readonly workspaceRepository: Repository<Workspace>){}


  async workspaceAvailableInSession(roomId: number, sessionId: number): Promise<Workspace[]> {
    try {
      const workspace = await this.workspaceRepository.createQueryBuilder('workspace')
        .leftJoin('workspace.reservation', 'reservation')
        .leftJoin('reservation.session', 'session')
        .where('workspace.room_id = :roomId', { roomId })
        .andWhere('session.id = :sessionId', { sessionId })
        .andWhere('workspace.status = :status', {status: 'Available'})
        .getMany();
  
      if (workspace.length === 0) {
        console.warn(`No workspace found for roomId: ${roomId} and sessionId: ${sessionId}`);
        return [];
      }
  
      return workspace;
      
    } catch (error) {
      console.error(`Error with the workspace session: ${error.message}`);
      throw new Error(`Error retrieving workspace for roomId: ${roomId} and sessionId: ${sessionId}`);
    }
  }

  async workspaceBusyInSession(session_id: number,room_id: number): Promise<Workspace[]>{

      try {
        const workspace = await this.workspaceRepository.createQueryBuilder('workspace')
        .innerJoinAndSelect('workspace.reservation', 'reservation')
        .innerJoinAndSelect('reservation.session', 'session')
        .where('workspace.room_id = :room_id', { room_id })
        .andWhere('session.id = :session_id', { session_id })
        .andWhere('workspace.status = :status', {status:"Busy"})
        .getMany();

        console.log('session_id:', session_id, 'room_id:', room_id);

        console.log(workspace)

        if(workspace.length === 0){

          console.warn(`The workspace with the session id ${session_id} and room id ${room_id} was not found`)
          return [];
        }

        return workspace

      } catch(error){
        console.error(`The process with the workspace busy wasn't running ${error}`)
      }
 
  }

  async workspaceAssignedUser(user_id: number): Promise<Workspace[]>{

    try {

      const workspace = await this.workspaceRepository.createQueryBuilder('workspace')
      .leftJoin('workspace.reservation', 'reservation')
      .leftJoin('reservation.user', 'user')
      .where('user.id = :user_id', {user_id})
      .getMany()

      if(workspace.length === 0){
        console.warn(`The workspace with the user id ${user_id} wasn't found`)
        return [];
      }

      console.log("workspace", workspace)

      return workspace

    } catch(error){
      console.error(`Error with the workspaces assigned user ${error}`)
    }
  
  }

  async workspacesAssignedSession(session_id: number): Promise<Workspace[]>{

    try{
      const workspace = await this.workspaceRepository.createQueryBuilder('workspace')
      .leftJoin('workspace.reservation', 'reservation')
      .leftJoin('reservation.session', 'session')
      .where('session.id = :session_id', {session_id})
      .getMany()

      if(workspace.length === 0){

        console.warn(`The workspace with the session ${session_id} wasn't found`)
        return [];
      }
  
      return workspace

    } catch(error){
      console.error(`Issue with the workspace assigned to the session ${error}`)
    }
   

  }


}
