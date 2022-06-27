import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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

const ELEMENT_DATA: ADHOC[] = [];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, AfterViewInit  {
  displayedColumns = [ 'track.id', 'track.name', 'track.duration', 'track.explicit', 'track.track_number', 'track.qtd_artistas', 'artist.id', 'artist.name', 'artist.followers', 'artist.popularity', 'artist.img', 'album.id', 'album.name', 'album.release_date', 'album.qtd_tracks', 'album.qtd_artists', 'album.img'];
  dataSource: MatTableDataSource<ADHOC>;
  loading = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private generalService: GeralService, private cdk: ChangeDetectorRef) {}

  ngOnInit(){
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

}