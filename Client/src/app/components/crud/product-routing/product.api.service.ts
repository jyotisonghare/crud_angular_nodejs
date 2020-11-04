import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../../core/data.service';

@Injectable({
    providedIn: 'root'
})

export class ProductApiService {
    moduleUrl: string;
  
    constructor(private dataService: DataService) { }

    getAllProduct(): Observable<any> {
        this.moduleUrl = '/getAllProduct';
        return this.dataService.postData(this.moduleUrl, '');
    }
    updateProduct(payload): Observable<any> {
        this.moduleUrl = '/updateProduct';
        return this.dataService.postData(this.moduleUrl, payload);
    }
    addProduct(payload): Observable<any> {
        this.moduleUrl = '/addProduct';
        return this.dataService.postData(this.moduleUrl, payload);
    }

}