import { Request, Response } from 'express';
import { parseISO } from 'date-fns';
import { container } from 'tsyringe';

import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';

export default class AppointmentsController {
  // public async index(request: Request, response: Response): Promise<Response> {
  //   const appointments = container.resolve(CreateAppointmentService);

  //   return response.json(appointments.findAll());
  // }

  public async create(request: Request, response: Response): Promise<Response> {
    const { provider_id, date } = request.body;

    // para criar agendamentos em horas (zerando os minutos, segundos, milisegundos)

    const parsedDate = parseISO(date);

    const createAppointment = container.resolve(CreateAppointmentService);

    const appointment = await createAppointment.execute({
      provider_id,
      date: parsedDate,
    });

    return response.json(appointment);
  }
}