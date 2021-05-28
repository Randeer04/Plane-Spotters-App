import { Component, OnInit } from '@angular/core';
import { SightingService } from 'src/app/Services/sighting.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  sightings: any;
  currentSighting :any;
  currentIndex = -1;
  make = "";
  model="";
  registration="";

  constructor(private sightingService: SightingService,private router: Router) { }

  ngOnInit(): void {
    this.retrieveSightings();
  }

  retrieveSightings(): void {
    this.sightingService.getAll()
      .subscribe(
        data => {
          this.sightings = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveSightings();
    this.currentSighting = null;
    this.currentIndex = -1;
  }

  setActiveSighting(sighting:any, index:number): void {
    this.currentSighting = sighting;
    this.currentIndex = index;
  }


  searchTitle(): void {
    const data = {
      make: this.make,
      model: this.model,
      registration:this.registration,
     
    };

    this.sightingService.search(data)
      .subscribe(
        data => {
          this.sightings = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  addNew():void{
    this.router.navigate(['/add']);
  }
}
