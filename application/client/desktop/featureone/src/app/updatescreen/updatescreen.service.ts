import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class UpdatescreenService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    GpUpdate(travel): Observable<any> {
        return this.http.put(this.sharedService.DESKTOP_API + '/travel', travel);
    }
}