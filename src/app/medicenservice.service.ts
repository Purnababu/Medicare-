import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicen } from './medicen';


@Injectable({
  providedIn: 'root'
})
export class MedicenserviceService {
    baseUrl:string="http://localhost:8080/api/det"
  constructor(private http:HttpClient) { }

  getmedicenlist():Observable<Medicen[]>{
    return this.http.get<Medicen[]>(this.baseUrl);
  }

  
}
