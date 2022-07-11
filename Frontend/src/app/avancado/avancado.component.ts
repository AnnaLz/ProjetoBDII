import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GeralService } from '../services/general.service';

@Component({
  selector: 'app-avancado',
  templateUrl: './avancado.component.html',
  styleUrls: ['./avancado.component.scss']
})
export class AvancadoComponent implements OnInit {
  queryForm: FormGroup;
  selecionados:any[] = [];
  show = false;
  dataSource: any;
  displayedColumns: any[] = [];

  constructor(private cdk: ChangeDetectorRef, private generalService: GeralService) { }

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
        if(this.queryForm.value.track_id == true){
          this.queryForm.get('track_id_op')?.disable();
          this.queryForm.get('track_id_inp')?.disable();
          this.queryForm.patchValue({
            track_id_op: null,
            track_id_inp: ''
          });
          this.selecionados.splice(this.selecionados.indexOf('track.id'), 1);
        } else {
          this.queryForm.get('track_id_op')?.enable();
          this.queryForm.get('track_id_inp')?.enable();
          this.selecionados.push({coluna: 'track.id'});
        }
        break;

      case 2:
        if(this.queryForm.value.track_name == true){
          this.queryForm.get('track_name_op')?.disable();
          this.queryForm.get('track_name_inp')?.disable();
          this.queryForm.patchValue({
            track_name_op: null,
            track_name_inp: ''
          });
          this.selecionados.splice(this.selecionados.indexOf('track.name'), 1);
        } else {
          this.queryForm.get('track_name_op')?.enable();
          this.queryForm.get('track_name_inp')?.enable();
          this.selecionados.push({coluna: 'track.name'});
        }
        break;

      case 3:
        if(this.queryForm.value.track_duration == true){
          this.queryForm.get('track_duration_op')?.disable();
          this.queryForm.get('track_duration_inp')?.disable();
          this.queryForm.patchValue({
            track_duration_op: null,
            track_duration_inp: ''
          });
          this.selecionados.splice(this.selecionados.indexOf('track.duration'), 1);
        } else {
          this.queryForm.get('track_duration_op')?.enable();
          this.queryForm.get('track_duration_inp')?.enable();
          this.selecionados.push({coluna: 'track.duration'});
        }
        break;

      case 4:
        if(this.queryForm.value.track_explicit == true){
          this.queryForm.get('track_explicit_op')?.disable();
          this.queryForm.get('track_explicit_inp')?.disable();
          this.queryForm.patchValue({
            track_explicit_op: null,
            track_explicit_inp: ''
          });
          this.selecionados.splice(this.selecionados.indexOf('track.explicit'), 1);
        } else {
          this.queryForm.get('track_explicit_op')?.enable();
          this.queryForm.get('track_explicit_inp')?.enable();
          this.queryForm.patchValue({track_explicit_inp: 'TRUE'});
          this.selecionados.push({coluna: 'track.explicit'});
        }
        break;

      case 5:
        if(this.queryForm.value.track_track_number == true){
          this.queryForm.get('track_track_number_op')?.disable();
          this.queryForm.get('track_track_number_inp')?.disable();
          this.queryForm.patchValue({
            track_track_number_op: null,
            track_track_number_inp: ''
          });
          this.selecionados.splice(this.selecionados.indexOf('track.track_number'), 1);
        } else {
          this.queryForm.get('track_track_number_op')?.enable();
          this.queryForm.get('track_track_number_inp')?.enable();
          this.selecionados.push({coluna: 'track.track_number'});
        }
        break;

      case 6:
        if(this.queryForm.value.track_qtd_artistas == true){
          this.queryForm.get('track_qtd_artistas_op')?.disable();
          this.queryForm.get('track_qtd_artistas_inp')?.disable();
          this.queryForm.patchValue({
            track_qtd_artistas_op: null,
            track_qtd_artistas_inp: ''
          });
          this.selecionados.splice(this.selecionados.indexOf('track.qtd_artistas'), 1);
        } else {
          this.queryForm.get('track_qtd_artistas_op')?.enable();
          this.queryForm.get('track_qtd_artistas_inp')?.enable();
          this.selecionados.push({coluna: 'track.qtd_artistas'});
        }
        break;

      case 7:
        if(this.queryForm.value.artist_id == true){
          this.queryForm.get('artist_id_op')?.disable();
          this.queryForm.get('artist_id_inp')?.disable();
          this.queryForm.patchValue({
            artist_id_op: null,
            artist_id_inp: ''
          });
          this.selecionados.splice(this.selecionados.indexOf('artist.id'), 1);
        } else {
          this.queryForm.get('artist_id_op')?.enable();
          this.queryForm.get('artist_id_inp')?.enable();
          this.selecionados.push({coluna: 'artist.id'});
        }
        break;

      case 8:
        if(this.queryForm.value.artist_name == true){
          this.queryForm.get('artist_name_op')?.disable();
          this.queryForm.get('artist_name_inp')?.disable();
          this.queryForm.patchValue({
            artist_name_op: null,
            artist_name_inp: ''
          });
          this.selecionados.splice(this.selecionados.indexOf('artist.name'), 1);
        } else {
          this.queryForm.get('artist_name_op')?.enable();
          this.queryForm.get('artist_name_inp')?.enable();
          this.selecionados.push({coluna: 'artist.name'});
        }
        break;

      case 9:
        if(this.queryForm.value.artist_followers == true){
          this.queryForm.get('artist_followers_op')?.disable();
          this.queryForm.get('artist_followers_inp')?.disable();
          this.queryForm.patchValue({
            artist_followers_op: null,
            artist_followers_inp: ''
          });
          this.selecionados.splice(this.selecionados.indexOf('artist.followers'), 1);
        } else {
          this.queryForm.get('artist_followers_op')?.enable();
          this.queryForm.get('artist_followers_inp')?.enable();
          this.selecionados.push({coluna: 'artist.followers'});
        }
        break;

      case 10:
        if(this.queryForm.value.artist_popularity == true){
          this.queryForm.get('artist_popularity_op')?.disable();
          this.queryForm.get('artist_popularity_inp')?.disable();
          this.queryForm.patchValue({
            artist_popularity_op: null,
            artist_popularity_inp: ''
          });
          this.selecionados.splice(this.selecionados.indexOf('artist.popularity'), 1);
        } else {
          this.queryForm.get('artist_popularity_op')?.enable();
          this.queryForm.get('artist_popularity_inp')?.enable();
          this.selecionados.push({coluna: 'artist.popularity'});
        }
        break;

      case 11:
        if(this.queryForm.value.artist_img == true){
          this.queryForm.get('artist_img_op')?.disable();
          this.queryForm.get('artist_img_inp')?.disable();
          this.queryForm.patchValue({
            artist_img_op: null,
            artist_img_inp: ''
          });
          this.selecionados.splice(this.selecionados.indexOf('artist.img'), 1);
        } else {
          this.queryForm.get('artist_img_op')?.enable();
          this.queryForm.get('artist_img_inp')?.enable();
          this.selecionados.push({coluna: 'artist.img'});
        }
        break;

      case 12:
        if(this.queryForm.value.album_id == true){
          this.queryForm.get('album_id_op')?.disable();
          this.queryForm.get('album_id_inp')?.disable();
          this.queryForm.patchValue({
            album_id_op: null,
            album_id_inp: ''
          });
          this.selecionados.splice(this.selecionados.indexOf('album.id'), 1);
        } else {
          this.queryForm.get('album_id_op')?.enable();
          this.queryForm.get('album_id_inp')?.enable();
          this.selecionados.push({coluna: 'album.id'});
        }
        break;

      case 13:
        if(this.queryForm.value.album_name == true){
          this.queryForm.get('album_name_op')?.disable();
          this.queryForm.get('album_name_inp')?.disable();
          this.queryForm.patchValue({
            album_name_op: null,
            album_name_inp: ''
          });
          this.selecionados.splice(this.selecionados.indexOf('album.name'), 1);
        } else {
          this.queryForm.get('album_name_op')?.enable();
          this.queryForm.get('album_name_inp')?.enable();
          this.selecionados.push({coluna: 'album.name'});
        }
        break;

      case 14:
        if(this.queryForm.value.album_release_date == true){
          this.queryForm.get('album_release_date_op')?.disable();
          this.queryForm.get('album_release_date_inp')?.disable();
          this.queryForm.patchValue({
            album_release_date_op: null,
            album_release_date_inp: ''
          });
          this.selecionados.splice(this.selecionados.indexOf('album.release_date'), 1);
        } else {
          this.queryForm.get('album_release_date_op')?.enable();
          this.queryForm.get('album_release_date_inp')?.enable();
          this.selecionados.push({coluna: 'album.release_date'});
        }
        break;

      case 15:
        if(this.queryForm.value.album_qtd_tracks == true){
          this.queryForm.get('album_qtd_tracks_op')?.disable();
          this.queryForm.get('album_qtd_tracks_inp')?.disable();
          this.queryForm.patchValue({
            album_qtd_tracks_op: null,
            album_qtd_tracks_inp: ''
          });
          this.selecionados.splice(this.selecionados.indexOf('album.qtd_tracks'), 1);
        } else {
          this.queryForm.get('album_qtd_tracks_op')?.enable();
          this.queryForm.get('album_qtd_tracks_inp')?.enable();
          this.selecionados.push({coluna: 'album.qtd_tracks'});
        }
        break;

      case 16:
        if(this.queryForm.value.album_qtd_artists == true){
          this.queryForm.get('album_qtd_artists_op')?.disable();
          this.queryForm.get('album_qtd_artists_inp')?.disable();
          this.queryForm.patchValue({
            album_qtd_artists_op: null,
            album_qtd_artists_inp: ''
          });
          this.selecionados.splice(this.selecionados.indexOf('album.qtd_artists'), 1);
        } else {
          this.queryForm.get('album_qtd_artists_op')?.enable();
          this.queryForm.get('album_qtd_artists_inp')?.enable();
          this.selecionados.push({coluna: 'album.qtd_artists'});
        }
        break;

      case 17:
        if(this.queryForm.value.album_img == true){
          this.queryForm.get('album_img_op')?.disable();
          this.queryForm.get('album_img_inp')?.disable();
          this.queryForm.patchValue({
            album_img_op: null,
            album_img_inp: ''
          });
          this.selecionados.splice(this.selecionados.indexOf('album.img'), 1);
        } else {
          this.queryForm.get('album_img_op')?.enable();
          this.queryForm.get('album_img_inp')?.enable();
          this.selecionados.push({coluna: 'album.img'});
        }
        break;

      case 18:
        if(this.queryForm.value.order_by == true){
          this.queryForm.get('order_by_op')?.disable();
          this.queryForm.get('asc')?.disable();
          this.queryForm.get('dsc')?.disable();
          this.queryForm.patchValue({
            asc: false,
            dsc: false
          });
        } else {
          this.selecionados.length != 0 ? this.queryForm.get('order_by_op')?.enable() : this.queryForm.get('order_by_op')?.disable();
          this.selecionados.length != 0 ? this.queryForm.get('asc')?.enable() : this.queryForm.get('asc')?.disable();
          this.selecionados.length != 0 ? this.queryForm.get('dsc')?.enable() : this.queryForm.get('dsc')?.disable();
        }
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
        if(this.queryForm.value.limit == true){
          this.queryForm.get('limit_inp')?.disable();
          this.queryForm.patchValue({
            limit_inp: ''
          });
        } else {
          this.queryForm.get('limit_inp')?.enable();
        }
        break;
    }
  }

  montarQuery(){
    let query = `SELECT `;

    this.queryForm.value.track_id == true ? query = query + 'track.id AS track_id, ' : {};
    this.queryForm.value.track_name == true ? query = query + 'track.name AS track_name, ' : {};
    this.queryForm.value.track_duration == true ? query = query + 'track.duration AS track_duration, ' : {};
    this.queryForm.value.track_explicit == true ? query = query + 'track.explicit AS track_explicit, ' : {};
    this.queryForm.value.track_track_number == true ? query = query + 'track.track_number AS track_track_number, ' : {};
    this.queryForm.value.track_qtd_artistas == true ? query = query + 'track.qtd_artistas AS track_qtd_artistas, ' : {};
    this.queryForm.value.artist_id == true ? query = query + 'artist.id AS artist_id, ' : {};
    this.queryForm.value.artist_name == true ? query = query + 'artist.name AS artist_name, ' : {};
    this.queryForm.value.artist_followers == true ? query = query + 'artist.followers AS artist_followers, ' : {};
    this.queryForm.value.artist_popularity == true ? query = query + 'artist.popularity AS artist_popularity, ' : {};
    this.queryForm.value.artist_img == true ? query = query + 'artist.img.id AS artist_img, ' : {};
    this.queryForm.value.album_id == true ? query = query + 'album.id AS album_id, ' : {};
    this.queryForm.value.album_name == true ? query = query + 'album.name AS album_name, ' : {};
    this.queryForm.value.album_release_date == true ? query = query + 'album.release_date AS album_release_date, ' : {};
    this.queryForm.value.album_qtd_tracks == true ? query = query + 'album.qtd_tracks AS album_qtd_tracks, ' : {};
    this.queryForm.value.album_qtd_artists == true ? query = query + 'album.qtd_artists AS album_qtd_artists, ' : {};
    this.queryForm.value.album_img == true ? query = query + 'album.img AS album_img, ' : {};

    query = query.substring(0, query.length - 2);

    query = query + 
    ` FROM public.track AS track JOIN public.artist_track artist_track ON artist_track.id_track = track.id JOIN public.artist artist ON artist.id = artist_track.id_artist JOIN public.album album ON album.id = track.album_id WHERE artist_track.main_artist IS TRUE`;

    this.complementQuery(query);
  }

  complementQuery(query: string){
    query = query + ' AND '
    if(this.queryForm.value.track_id == true){
      if(this.queryForm.value.track_id_op != null && this.queryForm.value.track_id_inp != ''){
        query = query + 'track.id' + ' ' + this.queryForm.value.track_id_op + ` '` + this.queryForm.value.track_id_inp + `' AND `
      }
    }

    if(this.queryForm.value.track_name == true){
      if(this.queryForm.value.track_name_op != null && this.queryForm.value.track_name_inp != ''){
        query = query + 'track.name' + ' ' + this.queryForm.value.track_name_op + ` '` + this.queryForm.value.track_name_inp + `' AND `
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
        query = query + 'artist.id' + ' ' + this.queryForm.value.artist_id_op + ` '` + this.queryForm.value.artist_id_inp + `' AND `
      }
    }

    if(this.queryForm.value.artist_name == true){
      if(this.queryForm.value.artist_name_op != null && this.queryForm.value.artist_name_inp != ''){
        query = query + 'artist.name' + ' ' + this.queryForm.value.artist_name_op + ` '` + this.queryForm.value.artist_name_inp + `' AND `
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
        query = query + 'album.id' + ' ' + this.queryForm.value.album_id_op + ` '` + this.queryForm.value.album_id_inp + `' AND `
      }
    }

    if(this.queryForm.value.album_name == true){
      if(this.queryForm.value.album_name_op != null && this.queryForm.value.album_name_inp != ''){
        query = query + 'album.name' + ' ' + this.queryForm.value.album_name_op + ` '` + this.queryForm.value.album_name_inp + `' AND `
      }
    }

    if(this.queryForm.value.album_release_date == true){
      if(this.queryForm.value.album_release_date_op != null && this.queryForm.value.album_release_date_inp != ''){
        query = query + 'album.release_date' + ' ' + this.queryForm.value.album_release_date_op +  ` '` + this.queryForm.value.album_release_date_inp + `' AND `
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
    let body = { query: query };
    this.generalService.getQuery(body).subscribe(response => {
      this.selecionados.forEach(element => {
        let col = element.coluna.replace('.', '_');
        this.displayedColumns.push(col);
      });
      this.dataSource = response;
      this.show = true;
    }); 
  }

  back(){
    this.show = false;
  }
}