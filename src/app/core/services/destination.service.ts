import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Destination, DestinationType, DestinationTypes } from '../models/destination.model';
import { Observable, of } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DestinationService {
  private destinations: WritableSignal<Destination[]> = signal([]);
  private _destinationTypes: DestinationTypes[] = [];
  private _http = inject(HttpClient);

  constructor() {
    this._destinationTypes = Object.keys(DestinationType)
      .filter((key) => isNaN(Number(key)))
      .map((key) => ({
        key,
        value: DestinationType[key as keyof typeof DestinationType],
      }));
  }

  getDestinationTypes(): { key: string; value: DestinationType }[] {
    return this._destinationTypes;
  }

  getDestinations(): Observable<Destination[]> {
    this._http
      .get<Destination[]>('/assets/fake-data.json')
      .subscribe((data) => {
        this.destinations.set(data);
      });
    return toObservable(this.destinations);
  }

  //TODO: Implement pagination when using a real api
  // getNextDestinations(): Observable<Destination[]> {
  // }

  deleteDestinationById(id: number): Observable<boolean> {
    const index = this.destinations().findIndex((dest) => dest.Id === id);
    if (index == -1) return of(false);
    const updatedDestinations = this.destinations().filter(
      (destination) => destination.Id !== id
    );
    this.destinations.set(updatedDestinations);
    return of(true);
  }

  updateDestination(destination: Destination): Observable<boolean> {
    const index = this.destinations().findIndex(
      (dest) => dest.Id === destination.Id
    );
    if (index == -1) return of(false);
    const updatedDestinations = this.destinations().map((dest) =>
      dest.Id === destination.Id
        ? { ...destination, LastModify: new Date() }
        : dest
    );
    this.destinations.set(updatedDestinations);
    return of(true);
  }

  createDestination(destination: Destination): Observable<boolean> {
    const newId =
      this.destinations().length > 0
        ? Math.max(...this.destinations().map((dest) => dest.Id)) + 1
        : 1;
    destination.Id = newId;
    this.destinations.update((values) => {
      return [...values, destination];
    });
    return of(true);
  }

  getFlagUrl(countryCode: string): string {
    return `https://flagsapi.com/${countryCode}/flat/64.png`;
  }
}
