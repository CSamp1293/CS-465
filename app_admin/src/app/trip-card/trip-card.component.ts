import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from "@angular/router";
import { Trip } from "../models/trip";
import { Authentication } from '../services/authentication.service';
import { TripData } from '../services/trip-data.service';  // Import TripData

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.component.html',
  styleUrl: './trip-card.component.css'
})
export class TripCardComponent implements OnInit {

  @Input('trip') trip!: Trip;

  constructor(
    private router: Router,
    private authenticationService: Authentication,
    private tripData: TripData  // Inject TripData service
  ) {}

  ngOnInit(): void {}

  public editTrip(trip: Trip): void {
    localStorage.removeItem('tripCode');
    localStorage.setItem('tripCode', trip.code);
    this.router.navigate(["edit-trip"]);
  }

  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  public deleteTrip(tripCode: string): void {
    if(confirm('Are you sure you want to delete this trip?')) {
      this.tripData.deleteTrip(tripCode).subscribe({
        next: () => {
          alert('Trip deleted successfully!');
          // Reload page for simplicity:
          window.location.reload();
        },
        error: (err) => {
          alert('Failed to delete trip.');
          console.error(err);
        }
      });
    }
  }
}