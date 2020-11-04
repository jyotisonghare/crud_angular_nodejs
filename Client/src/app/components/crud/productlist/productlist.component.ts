import { Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {ProductApiService} from '../product-routing/product.api.service';
import { ToastrService } from 'ngx-toastr';
import {AddEditPopupComponent} from '../add-edit-popup/add-edit-popup.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';


export interface productModel {
  id: string;
  city: string;
  start_date: Date;
  end_date: Date;
  price: number;
  status: string,
  color: string
}

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})

export class ProductlistComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns: string[] = ['id', 'city', 'start_date', 'end_date', 'price','status','color','edit'];
  dataSource = new MatTableDataSource();
  

  constructor(public productApiService: ProductApiService,
    private toastr: ToastrService,
    private dialogBox: MatDialog,){

  }

  ngOnInit() {
    this.getAllProducts();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getAllProducts(){
    this.productApiService.getAllProduct().subscribe(data => {
      console.log("data #####", data);
      if(data.status == 'success'){
          this.dataSource = new MatTableDataSource(data.data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
      }else{
        this.toastr.error("Error!", 'Something went wrong!');
      }
    },
    (error) => { },
    () => { }
    )

  }

  editRow(element){
    console.log("EVENT ##########", element);
    let data = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.data = {
     rowData : data == 'add' ? [] :  data
    };
    const dialogRef = this.dialogBox.open(AddEditPopupComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result != false) {
        this.getAllProducts()
        // console.log(result);
        //this.createTeamMember(result);
      }
    });

  }
}

