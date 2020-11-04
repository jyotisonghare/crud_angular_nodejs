import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingRoutingModule } from './product-routing';
import { ProductlistComponent } from '../productlist/productlist.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatInputModule} from '@angular/material/input';
import { AddEditPopupComponent } from '../add-edit-popup/add-edit-popup.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [ProductlistComponent, AddEditPopupComponent],
  imports: [
    CommonModule,
    ProductRoutingRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule, FormsModule ,
    MatButtonModule,
    MatDatepickerModule,
    NgxDaterangepickerMd.forRoot(),
    MatNativeDateModule ,
    BrowserAnimationsModule
  ],
  providers: [  
    MatDatepickerModule,  
  ],
  entryComponents: [AddEditPopupComponent]

})
export class ProductModule { }
