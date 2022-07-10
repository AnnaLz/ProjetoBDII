import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-avancado',
  templateUrl: './avancado.component.html',
  styleUrls: ['./avancado.component.scss']
})
export class AvancadoComponent implements OnInit {
  queryForm: FormGroup;

  constructor(private cdk: ChangeDetectorRef) { }

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
      order_by: new FormControl(false),
      limit: new FormControl(false),

      track_id_op: new FormControl({value: null, disabled: true}),
      track_name_op: new FormControl({value: null, disabled: true}),
      track_duration_op: new FormControl({value: null, disabled: true}),
      track_explicit_op: new FormControl({value: null, disabled: true}),
      track_track_number_op: new FormControl({value: null, disabled: true}),
      track_qtd_artistas_op: new FormControl({value: null, disabled: true}),
      artist_id_op: new FormControl({value: null, disabled: true}),
      artist_name_op: new FormControl({value: null, disabled: true}),
      artist_followers_op: new FormControl({value: null, disabled: true}),
      artist_popularity_op: new FormControl({value: null, disabled: true}),
      artist_img_op: new FormControl({value: null, disabled: true}),
      album_id_op: new FormControl({value: null, disabled: true}),
      album_name_op: new FormControl({value: null, disabled: true}),
      album_release_date_op: new FormControl({value: null, disabled: true}),
      album_qtd_tracks_op: new FormControl({value: null, disabled: true}),
      album_qtd_artists_op: new FormControl({value: null, disabled: true}),
      album_img_op: new FormControl({value: null, disabled: true}),
      order_by_op: new FormControl({value: null, disabled: true}),
      asc: new FormControl({value: false, disabled: true}),
      dsc: new FormControl({value: false, disabled: true}),

      track_id_inp: new FormControl({value: '', disabled: true}),
      track_name_inp: new FormControl({value: '', disabled: true}),
      track_duration_inp: new FormControl({value: '', disabled: true}),
      track_explicit_inp: new FormControl({value: '', disabled: true}),
      track_track_number_inp: new FormControl({value: '', disabled: true}),
      track_qtd_artistas_inp: new FormControl({value: '', disabled: true}),
      artist_id_inp: new FormControl({value: '', disabled: true}),
      artist_name_inp: new FormControl({value: '', disabled: true}),
      artist_followers_inp: new FormControl({value: '', disabled: true}),
      artist_popularity_inp: new FormControl({value: '', disabled: true}),
      artist_img_inp: new FormControl({value: '', disabled: true}),
      album_id_inp: new FormControl({value: '', disabled: true}),
      album_name_inp: new FormControl({value: '', disabled: true}),
      album_release_date_inp: new FormControl({value: '', disabled: true}),
      album_qtd_tracks_inp: new FormControl({value: '', disabled: true}),
      album_qtd_artists_inp: new FormControl({value: '', disabled: true}),
      album_img_inp: new FormControl({value: '', disabled: true}),
      limit_inp: new FormControl({value: '', disabled: true}),
    });
  }

  disabled(key: any){
    switch (key) {
      case 1:
        this.queryForm.value.track_id == true ? this.queryForm.get('track_id_op')?.disable() : this.queryForm.get('track_id_op')?.enable();
        this.queryForm.value.track_id == true ? this.queryForm.get('track_id_inp')?.disable() : this.queryForm.get('track_id_inp')?.enable();
        break;

      case 2:
        this.queryForm.value.track_name == true ? this.queryForm.get('track_name_op')?.disable() : this.queryForm.get('track_name_op')?.enable();
        this.queryForm.value.track_name == true ? this.queryForm.get('track_name_inp')?.disable() : this.queryForm.get('track_name_inp')?.enable();
        break;

      case 3:
        this.queryForm.value.track_duration == true ? this.queryForm.get('track_duration_op')?.disable() : this.queryForm.get('track_duration_op')?.enable();
        this.queryForm.value.track_duration == true ? this.queryForm.get('track_duration_inp')?.disable() : this.queryForm.get('track_duration_inp')?.enable();
        break;

      case 4:
        this.queryForm.value.track_explicit == true ? this.queryForm.get('track_explicit_op')?.disable() : this.queryForm.get('track_explicit_op')?.enable();
        this.queryForm.value.track_explicit == true ? this.queryForm.get('track_explicit_inp')?.disable() : this.queryForm.get('track_explicit_inp')?.enable();
        this.queryForm.patchValue({track_explicit_inp: 'TRUE'});
        break;

      case 5:
        this.queryForm.value.track_track_number == true ? this.queryForm.get('track_track_number_op')?.disable() : this.queryForm.get('track_track_number_op')?.enable();
        this.queryForm.value.track_track_number == true ? this.queryForm.get('track_track_number_inp')?.disable() : this.queryForm.get('track_track_number_inp')?.enable();
        break;

      case 6:
        this.queryForm.value.track_qtd_artistas == true ? this.queryForm.get('track_qtd_artistas_op')?.disable() : this.queryForm.get('track_qtd_artistas_op')?.enable();
        this.queryForm.value.track_qtd_artistas == true ? this.queryForm.get('track_qtd_artistas_inp')?.disable() : this.queryForm.get('track_qtd_artistas_inp')?.enable();
        break;

      case 7:
        this.queryForm.value.artist_id == true ? this.queryForm.get('artist_id_op')?.disable() : this.queryForm.get('artist_id_op')?.enable();
        this.queryForm.value.artist_id == true ? this.queryForm.get('artist_id_inp')?.disable() : this.queryForm.get('artist_id_inp')?.enable();
        break;

      case 8:
        this.queryForm.value.artist_name == true ? this.queryForm.get('artist_name_op')?.disable() : this.queryForm.get('artist_name_op')?.enable();
        this.queryForm.value.artist_name == true ? this.queryForm.get('artist_name_inp')?.disable() : this.queryForm.get('artist_name_inp')?.enable();
        break;

      case 9:
        this.queryForm.value.artist_followers == true ? this.queryForm.get('artist_followers_op')?.disable() : this.queryForm.get('artist_followers_op')?.enable();
        this.queryForm.value.artist_followers == true ? this.queryForm.get('artist_followers_inp')?.disable() : this.queryForm.get('artist_followers_inp')?.enable();
        break;

      case 10:
        this.queryForm.value.artist_popularity == true ? this.queryForm.get('artist_popularity_op')?.disable() : this.queryForm.get('artist_popularity_op')?.enable();
        this.queryForm.value.artist_popularity == true ? this.queryForm.get('artist_popularity_inp')?.disable() : this.queryForm.get('artist_popularity_inp')?.enable();
        break;

      case 11:
        this.queryForm.value.artist_img == true ? this.queryForm.get('artist_img_op')?.disable() : this.queryForm.get('artist_img_op')?.enable();
        this.queryForm.value.artist_img == true ? this.queryForm.get('artist_img_inp')?.disable() : this.queryForm.get('artist_img_inp')?.enable();
        break;

      case 12:
        this.queryForm.value.album_id == true ? this.queryForm.get('album_id_op')?.disable() : this.queryForm.get('album_id_op')?.enable();
        this.queryForm.value.album_id == true ? this.queryForm.get('album_id_inp')?.disable() : this.queryForm.get('album_id_inp')?.enable();
        break;

      case 13:
        this.queryForm.value.album_name == true ? this.queryForm.get('album_name_op')?.disable() : this.queryForm.get('album_name_op')?.enable();
        this.queryForm.value.album_name == true ? this.queryForm.get('album_name_inp')?.disable() : this.queryForm.get('album_name_inp')?.enable();
        break;

      case 14:
        this.queryForm.value.album_release_date == true ? this.queryForm.get('album_release_date_op')?.disable() : this.queryForm.get('album_release_date_op')?.enable();
        this.queryForm.value.album_release_date == true ? this.queryForm.get('album_release_date_inp')?.disable() : this.queryForm.get('album_release_date_inp')?.enable();
        break;

      case 15:
        this.queryForm.value.album_qtd_tracks == true ? this.queryForm.get('album_qtd_tracks_op')?.disable() : this.queryForm.get('album_qtd_tracks_op')?.enable();
        this.queryForm.value.album_qtd_tracks == true ? this.queryForm.get('album_qtd_tracks_inp')?.disable() : this.queryForm.get('album_qtd_tracks_inp')?.enable();
        break;

      case 16:
        this.queryForm.value.album_qtd_artists == true ? this.queryForm.get('album_qtd_artists_op')?.disable() : this.queryForm.get('album_qtd_artists_op')?.enable();
        this.queryForm.value.album_qtd_artists == true ? this.queryForm.get('album_qtd_artists_inp')?.disable() : this.queryForm.get('album_qtd_artists_inp')?.enable();
        break;

      case 17:
        this.queryForm.value.album_img == true ? this.queryForm.get('album_img_op')?.disable() : this.queryForm.get('album_img_op')?.enable();
        this.queryForm.value.album_img == true ? this.queryForm.get('album_img_inp')?.disable() : this.queryForm.get('album_img_inp')?.enable();
        break;

      case 18:
        this.queryForm.value.order_by == true ? this.queryForm.get('order_by_op')?.disable() : this.queryForm.get('order_by_op')?.enable();
        this.queryForm.value.order_by == true ? this.queryForm.get('asc')?.disable() : this.queryForm.get('asc')?.enable();
        this.queryForm.value.order_by == true ? this.queryForm.get('dsc')?.disable() : this.queryForm.get('dsc')?.enable();
        break;

      case 19:
        this.cdk.detectChanges();
        this.queryForm.get('dsc')?.setValue(false);
        break;

      case 20:
        this.cdk.detectChanges();
        this.queryForm.get('asc')?.setValue(false);
        break;

      case 21:
        this.queryForm.value.limit == true ? this.queryForm.get('limit_inp')?.disable() : this.queryForm.get('limit_inp')?.enable();
        break;
    }
  }

  montarQuery(){
    let query = 'SELECT '

    if(this.queryForm.value.track_id == true){
      if(this.queryForm.value.track_id_op != null && this.queryForm.value.track_id_inp != ''){
        query = query + 'track.id' + ' ' + this.queryForm.value.track_id_op + ' ' + this.queryForm.value.track_id_inp + ' AND '
      }
    }

    if(this.queryForm.value.track_name == true){
      if(this.queryForm.value.track_name_op != null && this.queryForm.value.track_name_inp != ''){
        query = query + 'track.name' + ' ' + this.queryForm.value.track_name_op + ' ' + this.queryForm.value.track_name_inp + ' AND '
      }
    }

    if(this.queryForm.value.track_duration == true){
      if(this.queryForm.value.track_duration_op != null && this.queryForm.value.track_duration_inp != ''){
        query = query + 'track.duration' + ' ' + this.queryForm.value.track_duration_op + ' ' + this.queryForm.value.track_duration_inp + ' AND '
      }
    }

    if(this.queryForm.value.track_explicit == true){
      if(this.queryForm.value.track_explicit_op != null && this.queryForm.value.track_explicit_inp != ''){
        query = query + 'track.explicit' + ' ' + this.queryForm.value.track_explicit_op + ' ' + this.queryForm.value.track_explicit_inp + ' AND '
      }
    }

    if(this.queryForm.value.track_track_number == true){
      if(this.queryForm.value.track_track_number_op != null && this.queryForm.value.track_track_number_inp != ''){
        query = query + 'track.track_number' + ' ' + this.queryForm.value.track_track_number_op + ' ' + this.queryForm.value.track_track_number_inp + ' AND '
      }
    }

    if(this.queryForm.value.track_qtd_artistas == true){
      if(this.queryForm.value.track_qtd_artistas_op != null && this.queryForm.value.track_qtd_artistas_inp != ''){
        query = query + 'track.qtd_artistas' + ' ' + this.queryForm.value.track_qtd_artistas_op + ' ' + this.queryForm.value.track_qtd_artistas_inp + ' AND '
      }
    }

    if(this.queryForm.value.artist_id == true){
      if(this.queryForm.value.artist_id_op != null && this.queryForm.value.artist_id_inp != ''){
        query = query + 'artist.id' + ' ' + this.queryForm.value.artist_id_op + ' ' + this.queryForm.value.artist_id_inp + ' AND '
      }
    }

    if(this.queryForm.value.artist_name == true){
      if(this.queryForm.value.artist_name_op != null && this.queryForm.value.artist_name_inp != ''){
        query = query + 'artist.name' + ' ' + this.queryForm.value.artist_name_op + ' ' + this.queryForm.value.artist_name_inp + ' AND '
      }
    }

    if(this.queryForm.value.artist_followers == true){
      if(this.queryForm.value.artist_followers_op != null && this.queryForm.value.artist_followers_inp != ''){
        query = query + 'artist.followers' + ' ' + this.queryForm.value.artist_followers_op + ' ' + this.queryForm.value.artist_followers_inp + ' AND '
      }
    }

    if(this.queryForm.value.artist_popularity == true){
      if(this.queryForm.value.artist_popularity_op != null && this.queryForm.value.artist_popularity_inp != ''){
        query = query + 'artist.popularity' + ' ' + this.queryForm.value.artist_popularity_op + ' ' + this.queryForm.value.artist_popularity_inp + ' AND '
      }
    }

    if(this.queryForm.value.artist_img == true){
      if(this.queryForm.value.artist_img_op != null && this.queryForm.value.artist_img_inp != ''){
        query = query + 'artist.img' + ' ' + this.queryForm.value.artist_img_op + ' ' + this.queryForm.value.artist_img_inp + ' AND '
      }
    }

    if(this.queryForm.value.album_id == true){
      if(this.queryForm.value.album_id_op != null && this.queryForm.value.album_id_inp != ''){
        query = query + 'album.id' + ' ' + this.queryForm.value.album_id_op + ' ' + this.queryForm.value.album_id_inp + ' AND '
      }
    }

    if(this.queryForm.value.album_name == true){
      if(this.queryForm.value.album_name_op != null && this.queryForm.value.album_name_inp != ''){
        query = query + 'album.name' + ' ' + this.queryForm.value.album_name_op + ' ' + this.queryForm.value.album_name_inp + ' AND '
      }
    }

    if(this.queryForm.value.album_release_date == true){
      if(this.queryForm.value.album_release_date_op != null && this.queryForm.value.album_release_date_inp != ''){
        query = query + 'album.release_date' + ' ' + this.queryForm.value.album_release_date_op + ' ' + this.queryForm.value.album_release_date_inp + ' AND '
      }
    }

    if(this.queryForm.value.album_qtd_tracks == true){
      if(this.queryForm.value.album_qtd_tracks_op != null && this.queryForm.value.album_qtd_tracks_inp != ''){
        query = query + 'album.qtd_tracks' + ' ' + this.queryForm.value.album_qtd_tracks_op + ' ' + this.queryForm.value.album_qtd_tracks_inp + ' AND '
      }
    }

    if(this.queryForm.value.album_qtd_artists == true){
      if(this.queryForm.value.album_qtd_artists_op != null && this.queryForm.value.album_qtd_artists_inp != ''){
        query = query + 'album.qtd_artists' + ' ' + this.queryForm.value.album_qtd_artists_op + ' ' + this.queryForm.value.album_qtd_artists_inp + ' AND '
      }
    }

    if(this.queryForm.value.album_img == true){
      if(this.queryForm.value.album_img_op != null && this.queryForm.value.album_img_inp != ''){
        query = query + 'album_img.img' + ' ' + this.queryForm.value.album_img_op + ' ' + this.queryForm.value.album_img_inp + ' AND '
      }
    }

    if(this.queryForm.value.order_by == true){
      if(this.queryForm.value.limit == true){
        query = query.substring(0, query.length - 4);
        if(this.queryForm.value.asc == true) query = query + ' ORDER BY ' + this.queryForm.value.order_by_op + ' ASC';
        if (this.queryForm.value.dsc == true) query = query + ' ORDER BY ' + this.queryForm.value.order_by_op + ' DSC';
        if(this.queryForm.value.limit_inp != '')  query = query + ' LIMIT ' + this.queryForm.value.limit_inp;
        this.loadQuery(query);
      } else {
        query = query.substring(0, query.length - 4);
        if(this.queryForm.value.asc == true) query = query + ' ORDER BY ' + this.queryForm.value.order_by_op + ' ASC';
        if (this.queryForm.value.dsc == true) query = query + ' ORDER BY ' + this.queryForm.value.order_by_op + ' DSC';
        this.loadQuery(query);
      } 
    } else {
        if(this.queryForm.value.limit == true){
          query = query.substring(0, query.length - 4);
          if(this.queryForm.value.limit_inp != '')  query = query + ' LIMIT ' + this.queryForm.value.limit_inp;
          this.loadQuery(query);
        } else {
          query = query.substring(0, query.length - 4);
          this.loadQuery(query);
        }
      }
  }

  loadQuery(query: string){
    console.log(query)
  }
}