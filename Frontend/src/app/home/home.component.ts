import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { merge, Observable } from 'rxjs';
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
  displayedColumns: string [];
  dataSource: MatTableDataSource<ADHOC>;
  loading = true;
  show = false;
  body: any;

  @ViewChild('table', {static: false}) table: MatTable<ADHOC>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private generalService: GeralService, private cdk: ChangeDetectorRef) {}

  dadosRelatorio:FormGroup = new FormGroup({
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

  c1 = this.dadosRelatorio.get('track_id');
  c2 = this.dadosRelatorio.get('track_name');
  c3 = this.dadosRelatorio.get('track_duration');
  c4 = this.dadosRelatorio.get('track_explicit');
  c5 = this.dadosRelatorio.get('track_track_number');
  c6 = this.dadosRelatorio.get('track_qtd_artistas');
  c7 = this.dadosRelatorio.get('artist_id');
  c8 = this.dadosRelatorio.get('artist_name');
  c9 = this.dadosRelatorio.get('artist_followers');
  c10 = this.dadosRelatorio.get('artist_popularity');
  c11 = this.dadosRelatorio.get('artist_img');
  c12 = this.dadosRelatorio.get('album_id');
  c13 = this.dadosRelatorio.get('album_name');
  c14 = this.dadosRelatorio.get('album_release_date');
  c15 = this.dadosRelatorio.get('album_qtd_tracks');
  c16 = this.dadosRelatorio.get('album_qtd_artists');
  c17 = this.dadosRelatorio.get('album_img');

  columnDefinition = [
    {def: 'track_id', hide: this.c1?.value},
    {def: 'track_name', hide: this.c2?.value},
    {def: 'track_duration', hide: this.c3?.value},
    {def: 'track_explicit', hide: this.c4?.value},
    {def: 'track_track_number', hide: this.c5?.value},
    {def: 'track_qtd_artistas', hide: this.c6?.value},
    {def: 'artist_id', hide: this.c7?.value},
    {def: 'artist_name', hide: this.c8?.value},
    {def: 'artist_followers', hide: this.c9?.value},
    {def: 'artist_popularity', hide: this.c10?.value},
    {def: 'artist_img', hide: this.c11?.value},
    {def: 'album_id', hide: this.c12?.value},
    {def: 'album_name', hide: this.c13?.value},
    {def: 'album_release_date', hide: this.c14?.value},
    {def: 'album_qtd_tracks', hide: this.c15?.value},
    {def: 'album_qtd_artists', hide: this.c16?.value},
    {def: 'album_img', hide: this.c17?.value}
  ]

  getDisplayedColumns() {
    this.displayedColumns = this.columnDefinition.filter(c => c.hide).map(c => c.def);
    this.displayedColumns.length == 0 ? this.show = false : this.show = true;
  }

  ngOnInit(){
    this.generalService.getAll().subscribe(
      (response) => {
        this.loading = true;
        this.show = false;
        this.dataSource = new MatTableDataSource(response);
        this.cdk.detectChanges();
        this.loading = false;
        this.show = true;
    });
  }

  ngAfterViewInit() {
    let o1: Observable<boolean> = this.c1!.valueChanges;
    let o2: Observable<boolean> = this.c2!.valueChanges;
    let o3: Observable<boolean> = this.c3!.valueChanges;
    let o4: Observable<boolean> = this.c4!.valueChanges;
    let o5: Observable<boolean> = this.c5!.valueChanges;
    let o6: Observable<boolean> = this.c6!.valueChanges;
    let o7: Observable<boolean> = this.c7!.valueChanges;
    let o8: Observable<boolean> = this.c8!.valueChanges;
    let o9: Observable<boolean> = this.c9!.valueChanges;
    let o10: Observable<boolean> = this.c10!.valueChanges;
    let o11: Observable<boolean> = this.c11!.valueChanges;
    let o12: Observable<boolean> = this.c12!.valueChanges;
    let o13: Observable<boolean> = this.c13!.valueChanges;
    let o14: Observable<boolean> = this.c14!.valueChanges;
    let o15: Observable<boolean> = this.c15!.valueChanges;
    let o16: Observable<boolean> = this.c16!.valueChanges;
    let o17: Observable<boolean> = this.c17!.valueChanges;

    merge(o1, o2, o3, o4, o5, o6, o7, o8, o9, o10, o11, o12, o13, o14, o15, o16, o17).subscribe(() => {
      this.columnDefinition[0].hide = this.c1!.value;
      this.columnDefinition[1].hide = this.c2!.value;
      this.columnDefinition[2].hide = this.c3!.value;
      this.columnDefinition[3].hide = this.c4!.value;
      this.columnDefinition[4].hide = this.c5!.value;
      this.columnDefinition[5].hide = this.c6!.value;
      this.columnDefinition[6].hide = this.c7!.value;
      this.columnDefinition[7].hide = this.c8!.value;
      this.columnDefinition[8].hide = this.c9!.value;
      this.columnDefinition[9].hide = this.c10!.value;
      this.columnDefinition[10].hide = this.c11!.value;
      this.columnDefinition[11].hide = this.c12!.value;
      this.columnDefinition[12].hide = this.c13!.value;
      this.columnDefinition[13].hide = this.c14!.value;
      this.columnDefinition[14].hide = this.c15!.value;
      this.columnDefinition[15].hide = this.c16!.value;
      this.columnDefinition[16].hide = this.c17!.value;

      this.getDisplayedColumns();
    });

    this.getDisplayedColumns();

    this.cdk.detectChanges();
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;  
      this.dataSource.sort = this.sort; 
    }, 8000);
  }

}