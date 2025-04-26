import { Component, OnInit, inject } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
import { HomeComponent } from '../home/home.component';

@Component({
  standalone: true,
  selector: 'app-reservation-form',
  imports: [FormsModule, ReactiveFormsModule, CommonModule, HomeComponent],
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css',
})
export class ReservationFormComponent implements OnInit {
  private fb = inject(FormBuilder); // Modern dependency injection
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  private reservationService = inject(ReservationService);

  reservationForm: FormGroup = this.fb.group({});

  ngOnInit(): void {
    this.reservationForm = this.fb.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]], // Fixed validator array
      roomNumber: ['', Validators.required],
    });

    let id = this.activatedRoute.snapshot.paramMap.get('id');

    //alert(id);
    if (id) {
      let reservation = this.reservationService.getReservation(id);

      if (reservation) this.reservationForm.patchValue(reservation);
    }
  }

  onSumbit() {
    if (this.reservationForm.valid) {
      //alert('valid');
      let reservation: Reservation = this.reservationForm.value;

      let id = this.activatedRoute.snapshot.paramMap.get('id');

      if (id) {
        // Update
        this.reservationService.updateReservation(id, reservation);
      } else {
        // New
        this.reservationService.addReservation(reservation);
      }

      this.router.navigate(['/list']);
    }
  }
}
