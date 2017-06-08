import { Component, Input } from '@angular/core';
import { Location } from './location';
import { LocationService } from '../location/location.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'location-display',
    providers: [LocationService],
  template: `
      <div class='row'>
          <div class='col-md-12 text-center'>
           
                <h2>My Locations</h2>                  
                    <ul class="locations">
                      <li *ngFor="let location of testLocations" (click)="onSelect(location)" [class.selected]="location === selectedLocation">
                      <span class="badge">{{location.id}}</span> {{location.name}} 
                    </li>
                  </ul>
            </div>
        </div>
  `
})
export class LocationDisplayComponent implements OnInit  {

    selectedLocation: Location;
    testLocations: Location[];
    testLocation: Location;
  
    ngOnInit(): void {
    this.locationService.getLocations().then(mockLocations => this.testLocations = mockLocations);
    this.testLocation = new Location();
    this.testLocation.id = 100;
    this.testLocation.name = "This is the name";
   }

   constructor(private locationService: LocationService) { }

    onSelect(location: Location): void {
      this.selectedLocation = location;
    }

}
