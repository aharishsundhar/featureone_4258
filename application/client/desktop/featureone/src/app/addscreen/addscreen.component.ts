import { Component, OnInit } from '@angular/core';
import { AddscreenService } from './addscreen.service';

@Component({
  selector: 'app-addscreen',
  templateUrl: './addscreen.component.html',
  styleUrls: ['./addscreen.component.scss'],
})

export class AddscreenComponent implements OnInit {
    public travel = {
        name: '',
        email: '',
        age: '',
        address: '',
    }

    constructor (
        private addscreenService: AddscreenService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.addscreenService.GpCreate(this.travel).subscribe(data => {
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