import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http';
import { MedicenListComponent } from './medicen-list/medicen-list.component';
import { MedicenimajesComponent } from './medicenimajes/medicenimajes.component'
import { MedicenserviceService } from './medicenservice.service';
import { AddcustComponent } from './addcust/addcust.component';
import { CustdetailsComponent } from './custdetails/custdetails.component';
import { CuslistComponent } from './cuslist/cuslist.component';
import { EditcustComponent } from './editcust/editcust.component';
@NgModule({
  declarations: [
    AppComponent,
    MedicenListComponent,
    MedicenimajesComponent,
    AddcustComponent,
    CustdetailsComponent,
    CuslistComponent,
    EditcustComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MedicenserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
