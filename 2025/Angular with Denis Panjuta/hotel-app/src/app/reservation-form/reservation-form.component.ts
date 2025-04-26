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

@Component({
  standalone: true,
  selector: 'app-reservation-form',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css',
})
export class ReservationFormComponent implements OnInit {
  /* reservationForm: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', Validators.required, Validators.email],
      roomNumber: ['', Validators.required],
    });
  }
*/

  private fb = inject(FormBuilder); // Modern dependency injection
  private activatedRoute = inject(ActivatedRoute); // Modern dependency injection
  private router = inject(Router); // Modern dependency injection
  private reservationService = inject(ReservationService); // Modern dependency injection

  reservationForm: FormGroup = this.fb.group({});
  ngOnInit(): void {
    // Initialize form directly (no need for ngOnInit)
    this.reservationForm = this.fb.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]], // Fixed validator array
      roomNumber: ['', Validators.required],
    });

    let id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      let reservation = this.reservationService.getReservation(id);

      if (reservation) this.reservationForm.patchValue(reservation);
    }
  }

  onSumbit() {
    if (this.reservationForm.valid) {
      alert('valid');
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
