import { Component, OnInit, inject } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reservation-list',
  imports: [HomeComponent, RouterLink],
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.css',
})
export class ReservationListComponent implements OnInit {
  reservations: Reservation[] = [];

  private reservationService = inject(ReservationService); // Modern dependency injection

  ngOnInit(): void {
    this.reservations = this.reservationService.getReservations();
  }

  deleteReservation(id: string) {
    alert('deleteReservation called');
    this.reservationService.deleteReservation(id);
  }
 
}
