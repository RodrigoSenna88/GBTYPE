import { startOfHour } from 'date-fns';

import Appointment from '../model/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepsitory';

interface Request {
  provider: string;
  date: Date;
}

class CreateAppointmentService {
  private appointmentsRepository: AppointmentsRepository;

  constructor(appointmentsRepository: AppointmentsRepository) {
    this.appointmentsRepository = appointmentsRepository;
  }

  public execute({ provider, date }: Request): Appointment {
    const appointmentDate = startOfHour(date);

    // Verificação se a data já foi agendada

    const findAppointmentInSameDate = this.appointmentsRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentInSameDate) {
      throw Error('This appointment is already booked');
    }

    // método de  criação do agendamento

    const appointment = this.appointmentsRepository.create({
      provider,
      date: appointmentDate,
    });

    return appointment;
  }
}

export default CreateAppointmentService;
