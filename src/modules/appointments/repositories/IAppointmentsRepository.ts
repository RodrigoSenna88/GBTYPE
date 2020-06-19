import Appointment from '../infra/typeorm/entities/Appointment';

import ICreateAppointmentDTO from '../dtos/ICrateAppointmentDTO';
// import AppointmentsRepository from '../infra/typeorm/repositories/AppointmentsRepsitory';

export default interface IAppointmentsRepository {
  create(data: ICreateAppointmentDTO): Promise<Appointment>;
  findByDate(date: Date): Promise<Appointment | undefined>;
  // findAll(): Promise<Appointment[] | undefined>;
}
