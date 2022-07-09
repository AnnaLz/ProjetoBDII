import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { forkJoin, merge, Observable } from 'rxjs';
import { GeralService } from '../services/general.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, AfterViewInit  {
  showGrafico = false;
  data = new Array();
  dataChart: any;
  dataTable: any;
  body: any;

  constructor(private generalService: GeralService, private cdk: ChangeDetectorRef) {}

  qtdPalavras = new FormControl("40", [Validators.max(1000), Validators.min(1), Validators.required]);
  matcher = new MyErrorStateMatcher();
  
  ngOnInit(){
    let body = {
      qtd: this.qtdPalavras.value.toString()
    }

    forkJoin([
      this.generalService.getWordCloud(body),
      this.generalService.getAll()
    ]).subscribe(response => {
      response[0].forEach((element: any) => {
        element.weight = parseInt(element.weight);
        this.data.push([element.name, element.weight]);
      });

      this.dataChart = this.data;
      this.dataTable = response[1];
     
      this.showGrafico = true;
    });
  }

  ngAfterViewInit() {}  

  loadCloud(){
    this.data = [];
    this.showGrafico = false;

    let body = {
      qtd: this.qtdPalavras.value.toString()
    }

    this.generalService.getWordCloud(body)
      .subscribe(response => {
        response.forEach((element: any) => {
          element.weight = parseInt(element.weight);
          this.data.push([element.name, element.weight]);
        });

        this.dataChart = this.data; 
        this.showGrafico = true;
      });
  }

}