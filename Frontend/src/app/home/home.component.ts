import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { GeralService } from '../services/general.service';

export interface ADHOC {
  track_id: string;
  track_name: string;
  track_duration: number;
  track_explicit: boolean;
  track_track_number: number;
  track_qtd_artistas: number;
  artist_id: string;
  artist_name: string;
  artist_followers: number;
  artist_popularity: number;
  artist_img: string;
  album_id: string;
  album_name: string;
  album_release_date: Date;
  album_qtd_tracks: number;
  album_qtd_artists: number;
  album_img: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, AfterViewInit  {
  //displayedColumns = [ 'track.id', 'track.name', 'track.duration', 'track.explicit', 'track.track_number', 'track.qtd_artistas', 'artist.id', 'artist.name', 'artist.followers', 'artist.popularity', 'artist.img', 'album.id', 'album.name', 'album.release_date', 'album.qtd_tracks', 'album.qtd_artists', 'album.img'];
  displayedColumns = [];
  dataSource: MatTableDataSource<ADHOC>;
  loading = true;
  dadosRelatorio: FormGroup;

  @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private generalService: GeralService, private cdk: ChangeDetectorRef) {}

  ngOnInit(){
    this.loadForm();
    let body = [
      {nome: 'track.id', valor: this.dadosRelatorio.value.track_id},
      {nome: 'track.name', valor: this.dadosRelatorio.value.track_name},
      {nome: 'track.duration', valor: this.dadosRelatorio.value.track_duration},
      {nome: 'track.explicit', valor: this.dadosRelatorio.value.track_explicit},
      {nome: 'track.track_number', valor: this.dadosRelatorio.value.track_track_number},
      {nome: 'track.qtd_artistas', valor: this.dadosRelatorio.value.track_qtd_artistas},
      {nome: 'artist.id', valor: this.dadosRelatorio.value.artist_id},
      {nome: 'artist.name', valor: this.dadosRelatorio.value.artist_name},
      {nome: 'artist.followers', valor: this.dadosRelatorio.value.artist_followers},
      {nome: 'artist.popularity', valor: this.dadosRelatorio.value.artist_popularity},
      {nome: 'artist.img', valor:this.dadosRelatorio.value.artist_img},
      {nome: 'album.id', valor: this.dadosRelatorio.value.album_id},
      {nome: 'album.name', valor: this.dadosRelatorio.value.album_name},
      {nome: 'album.release_date', valor: this.dadosRelatorio.value.album_release_date},
      {nome: 'album.qtd_tracks', valor: this.dadosRelatorio.value.album_qtd_tracks},
      {nome: 'album.qtd_artists', valor: this.dadosRelatorio.value.album_qtd_artists},
      {nome: 'album.img', valor: this.dadosRelatorio.value.album_img}
    ];

    body.forEach((col: any) => {
      col.valor == true ? this.displayedColumns.push(col.nome as never) : {};
    });

    this.generalService.getAll().subscribe(
      (response) => {
        this.loading = true;
        this.dataSource = new MatTableDataSource(response);
        this.cdk.detectChanges();
        this.loading = false;
    });
  }

  ngAfterViewInit() {
    this.cdk.detectChanges();
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;  
      this.dataSource.sort = this.sort; 
    }, 8000);
  }

  loadForm() {
    this.dadosRelatorio = new FormGroup({
      track_id: new FormControl(true),
      track_name: new FormControl(true),
      track_duration: new FormControl(true),
      track_explicit: new FormControl(true),
      track_track_number: new FormControl(true),
      track_qtd_artistas: new FormControl(true),
      artist_id: new FormControl(true),
      artist_name: new FormControl(true),
      artist_followers: new FormControl(true),
      artist_popularity: new FormControl(true),
      artist_img: new FormControl(true),
      album_id: new FormControl(true),
      album_name: new FormControl(true),
      album_release_date: new FormControl(true),
      album_qtd_tracks: new FormControl(true),
      album_qtd_artists: new FormControl(true),
      album_img: new FormControl(true),
    });
  }

}