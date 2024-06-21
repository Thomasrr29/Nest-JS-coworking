import { Injectable } from '@nestjs/common';
import { Reservation } from './entities/reservation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ReservationService {

  constructor(@InjectRepository(Reservation) private readonly reservationRepository: Repository<Reservation>){}

  async findSessionMoreBusy(): Promise<{ session_id: number; count: number }[]> {
    try {
      const results = await this.reservationRepository.createQueryBuilder('reservation')
        .innerJoin('reservation.workspace', 'workspace')
        .select('reservation.session_id', 'session_id')
        .addSelect('COUNT(workspace.id)', 'count')
        .where('workspace.status = :status', { status:'Busy'})
        .groupBy('reservation.session_id')
        .orderBy('count', 'DESC')
        .getRawMany();

        if(results.length === 0){
          console.log(`There isn't sessions added to the database`)
        }

      console.log('Results:', results);
      return results;
    } catch (error) {
      console.error(`Error: ${error}`);
      throw new Error(`Failed to find busy sessions: ${error.message}`);
    }
  }

  async findSessionMoreAvailable(): Promise<{ session_id: number; count: number }[]> {
    try {

      const status = "Available"
      console.log('Status:', status, 'Type:', typeof status);


      const results = await this.reservationRepository.createQueryBuilder('reservation')
        .leftJoin('reservation.workspace', 'workspace')
        .select('reservation.session_id', 'session_id')
        .addSelect('COUNT(workspace.id)', 'count')
        .where('workspace.status = :status', {status})
        .groupBy('reservation.session_id')
        .orderBy('count', 'DESC')
        .getRawMany()

        if(results.length === 0){
          console.log(`There isn't sessions added to the database`)
        }

        return results
    } catch (error) {
      console.error(`Error: ${error}`);
      throw new Error(`Failed to find available sessions: ${error.message}`);
    }
  }

}
