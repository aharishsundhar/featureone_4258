import { Component, OnInit } from '@angular/core';
import { UpdatescreenService } from './updatescreen.service';

@Component({
  selector: 'app-updatescreen',
  templateUrl: './updatescreen.component.html',
  styleUrls: ['./updatescreen.component.scss'],
})

export class UpdatescreenComponent implements OnInit {
    public travel = {
        name: '',
        email: '',
        age: '',
        address: '',
    }

    constructor (
        private updatescreenService: UpdatescreenService,
    ) { }

    ngOnInit() {
    }
    GpUpdate() {
        this.updatescreenService.GpUpdate(this.travel).subscribe(data => {
            this.travel.name = ''
 	 	this.travel.email = ''
 	 	this.travel.age = ''
 	 	this.travel.address = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}