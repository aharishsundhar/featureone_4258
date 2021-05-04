import { Component, OnInit } from '@angular/core';
import { AllscreenService } from './allscreen.service';

@Component({
  selector: 'app-allscreen',
  templateUrl: './allscreen.component.html',
  styleUrls: ['./allscreen.component.scss'],
})

export class AllscreenComponent implements OnInit {
    columnDefs: any = [{ headerName: 'Name', field: 'name'  },{ headerName: 'email', field: 'email'  },{ headerName: 'age', field: 'age'  },{ headerName: 'address', field: 'address'  },];
    public travel = {
        name: '',
        email: '',
        age: '',
        address: '',
    }
    paginationPageSize = 10;
 	page=1;
 	rowData: any = [];

    constructor (
        private allscreenService: AllscreenService,
    ) { }

    ngOnInit() {
        this.GpGetAllValues();
    }
    GpGetAllValues() {
        this.allscreenService.GpGetAllValues().subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
}