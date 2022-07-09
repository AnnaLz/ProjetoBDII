import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-avancado',
  templateUrl: './avancado.component.html',
  styleUrls: ['./avancado.component.scss']
})
export class AvancadoComponent implements OnInit {
  queryForm: FormGroup;
  selected = 'op2';

  checked = false;
  checked1 = false;
  checked2 = false;
  checked3 = false;
  checked4 = false;

  constructor() { }

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm() {
    this.queryForm = new FormGroup({
      track_id: new FormControl(false),
      track_name: new FormControl(false),
      track_duration: new FormControl(false),
      track_explicit: new FormControl(false),
      track_track_number: new FormControl(false),
      track_qtd_artistas: new FormControl(false),
      artist_id: new FormControl(false),
      artist_name: new FormControl(false),
      artist_followers: new FormControl(false),
      artist_popularity: new FormControl(false),
      artist_img: new FormControl(false),
      album_id: new FormControl(false),
      album_name: new FormControl(false),
      album_release_date: new FormControl(false),
      album_qtd_tracks: new FormControl(false),
      album_qtd_artists: new FormControl(false),
      album_img: new FormControl(false),
    })
  }

}
