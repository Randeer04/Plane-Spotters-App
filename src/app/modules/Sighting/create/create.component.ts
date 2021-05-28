import { Component, OnInit } from '@angular/core';
import { SightingService } from 'src/app/Services/sighting.service';
import {FormBuilder,FormGroup,Validators,FormControl} from '@angular/forms';
import { formatDate } from '@angular/common' ;
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  sightingForm:FormGroup;
  sighting = {
    make: '',
    model: '',
    registration: '',
    location :'',
    sightingDate: new Date
  };
  submitted = false;
  showError =false;
  errorText ="";

  constructor(private sightingService: SightingService,private fb: FormBuilder,  private router: Router) { }

  ngOnInit(): void {
    this.sightingForm =this.fb.group({
      make: ['', Validators.required],
      model: ['', Validators.required],
      registration: ['', Validators.required],
      location: ['', Validators.required],
      sightingDate: [formatDate(new Date(), 'yyyy-MM-dd', 'en'), [Validators.required]]
    });
  }

  saveSighting(form: FormGroup): void {
    const data = {
      make: form.value.make,
      model: form.value.model,
      registration:form.value.registration,
      location :form.value.location,
      sightingDate:formatDate( form.value.sightingDate.year + '/' + form.value.sightingDate.month + '/'+ form.value.sightingDate.day, 'yyyy-MM-dd', 'en')   
    };

    this.sightingService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.router.navigate(['/sightings']);
        },
        error => {
          this.errorText = error.error;
          this.showError =true;
          console.log(error);
        });
  }

  newSighting(): void {
    this.submitted = false;
    this.sighting = {
      make: '',
      model: '',
      registration: '',
      location :'',
      sightingDate: new Date
    };
  }

}
