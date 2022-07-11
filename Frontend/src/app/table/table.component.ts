import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { Observable, merge } from 'rxjs';
import { ADHOC } from '../adhoc/adhoc.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() data;
  @Input() displayedColumns;

  dataSource: MatTableDataSource<ADHOC>;
  dataLength: number;
  dataChart: any;
  body: any;

  @ViewChild(MatTable) table: MatTable<ADHOC>;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(private cdk: ChangeDetectorRef) {}

  ngOnInit(){
      this.dataSource = new MatTableDataSource(this.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      this.cdk.detectChanges();
  }

  ngAfterViewInit() { 
    this.cdk.detectChanges();

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort; 
  }

}