import { Component } from '@angular/core';
import { Medicen } from '../medicen';
import { MedicenserviceService } from '../medicenservice.service';

@Component({
  selector: 'app-medicen-list',
  templateUrl: './medicen-list.component.html',
  styleUrls: ['./medicen-list.component.css']
})
export class MedicenListComponent {
     medic:Medicen[]=[]
    constructor( private service:MedicenserviceService){}

    ngOnInit(){
      this.service.getmedicenlist().subscribe(ob=>this.medic=ob);
    }

}
