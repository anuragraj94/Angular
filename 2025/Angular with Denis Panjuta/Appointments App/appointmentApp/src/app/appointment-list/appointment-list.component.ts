import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-appointment-list',
  imports: [DatePipe, FormsModule],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css',
})
export class AppointmentListComponent implements OnInit {
  ngOnInit(): void {
    let savedData = localStorage.getItem('appointment');

    this.appointments = savedData ? JSON.parse(savedData) : [];
    //alert('ngOnInit called')
  }

  appointment: Appointment = {
    id: 1,
    title: 'Take dog for a walk',
    date: new Date(),
  };

  newAppointmentTitle: string = '';
  newAppointmentDate: Date = new Date();
  appointments: Appointment[] = [];
  AddAppointment() {
    //alert(this.newAppointmentTitle + ' ' + this.newAppointmentDate);

    if (this.newAppointmentTitle.trim().length && this.newAppointmentDate) {
      let newAppointment: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate,
      };
      this.appointments.push(newAppointment);

      this.newAppointmentTitle = '';
      this.newAppointmentDate = new Date();
      //alert(this.appointments.length);

      localStorage.setItem('appointment', JSON.stringify(this.appointments));
    }
  }

  /*deleteAppointment(index: number) {
    alert('reached');
    this.appointments.splice(index, 1);
  }*/

  deleteAppointment(id: number) {
    this.appointments = this.appointments.filter((item) => item.id !== id);

    localStorage.setItem('appointment', JSON.stringify(this.appointments));
  }
}
