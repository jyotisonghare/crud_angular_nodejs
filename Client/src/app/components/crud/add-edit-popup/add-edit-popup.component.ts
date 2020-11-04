import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { ProductApiService } from '../product-routing/product.api.service';


@Component({
  selector: 'app-add-edit-popup',
  templateUrl: './add-edit-popup.component.html',
  styleUrls: ['./add-edit-popup.component.scss']
})
export class AddEditPopupComponent implements OnInit {
  loaderPage = false;
  addEditDialogForm: FormGroup;
  allData: any;
  editId: any;
  popupLabel: string;
  popupBtnLabel: string;



  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddEditPopupComponent>,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private productApiService: ProductApiService,
  ) { }



  // city = new FormControl('The Weeknd', [Validators.required]);


  ngOnInit(): void {
    console.log("data ########", this.data);
    this.allData = this.data.rowData;
    this.editId = this.allData ? this.allData.id : 0;
    this.popupLabel = this.editId ? 'Edit' : 'Add';
    this.popupBtnLabel = this.editId ? 'Update' : 'Save';

    this.addEditDialogForm = this.fb.group({
      city: ['', [Validators.required]],
      start_date: ['', [Validators.required]],
      end_date: ['', [Validators.required]],
      price: ['', [Validators.required]],
      status: ['', [Validators.required]],
      color: ['', [Validators.required]],
    })

    if (this.editId) {
      this.addEditDialogForm.patchValue(this.allData);
    } else {
      this.addEditDialogForm.reset();
    }


  }

  addEditFun() {
    console.log("form value ###", this.addEditDialogForm.value);
    let formValues = this.addEditDialogForm.value;
    /**edit product */
    if (this.editId) {
      this.productApiService.updateProduct({ id: this.editId, formValues: formValues }).subscribe(data => {
        if(data.status == 'success'){
          this.dialogRef.close();
          this.toastr.success("success!", "Product Updated SuccessFully");
        }else{
          this.dialogRef.close();

          this.toastr.error("error!", "Something went wrong!");
        }
      })

    } else {
      this.productApiService.addProduct({ id: this.editId, formValues: formValues }).subscribe(data => {
        if(data.status == 'success'){
          this.dialogRef.close();
          this.toastr.success("success!", "Product Added SuccessFully");
        }else{
          this.dialogRef.close();
          this.toastr.error("error!", "Something went wrong!");
        }
      })
    }
  }


}


// https://stackoverflow.com/questions/55863881/how-to-update-a-json-object-value-in-node-js