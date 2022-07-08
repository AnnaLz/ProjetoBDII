import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Artist } from 'src/artist/entities/artist.entity';
import { ArtistGenres } from 'src/artist_genres/entities/artist_genres.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GeneralService {
    constructor(
        @InjectRepository(Artist) private readonly artisRepository: Repository<Artist>,
        @InjectRepository(ArtistGenres) private readonly artistGenreRepository: Repository<ArtistGenres>
    ) {}

    getAllColumns(): Promise<any[]> {
        let query = 
        `SELECT
        track.id AS "track_id",
        track.name AS "track_name",
        track.duration AS "track_duration",
        track.explicit AS "track_explicit",
        track.track_number AS "track_track_number",
        track.qtd_artistas AS "track_qtd_artistas",
        -- track.album_id AS "track_album_id",
        -- artist_track.main_artist AS "artist_track_main_artist",
        -- artist_track.id_artist AS "artist_track_id_artist",
        artist.id AS "artist_id",
        artist.name AS "artist_name",
        artist.followers AS "artist_followers",
        artist.popularity AS "artist_popularity",
        artist.img AS "artist_img",
        album.id AS "album_id",
        album.name AS "album_name",
        album.release_date AS "album_release_date",
        album.qtd_tracks AS "album_qtd_tracks",
        album.qtd_artists AS "album_qtd_artists",
        album.img AS "album_img"
        FROM public.track AS track
        JOIN public.artist_track artist_track ON artist_track.id_track = track.id
        JOIN public.artist artist ON artist.id = artist_track.id_artist
        JOIN public.album album ON album.id = track.album_id
        WHERE artist_track.main_artist IS TRUE
        -- AND track.id <> '5joHCyw0OAC36CVqvLVzvy'
        -- AND track.name LIKE 'Crazy T%'
        -- AND track.duration > 300000
        -- AND track.explicit IS FALSE
        -- AND track.track_number <> 12
        -- AND track.qtd_artistas = 1
        -- AND artist.id <> '3TkWygOTDBZXAdFDh9HOkG'
        -- AND artist.name LIKE '%zzy%'
        -- AND artist.followers > 1000
        -- AND artist.popularity > 10
        -- AND artist.img IS NOT NULL
        -- AND album.id <> '39NEMnQvr4Mn5Pv3cQnIX3'
        -- AND album.name NOT LIKE '%Live%'
        -- AND album.release_date::date > '2020-09-17'
        -- AND album.qtd_tracks > 10
        -- AND album.qtd_artists = 1
        -- AND album.img IS NOT NULL
        ORDER BY album.id ASC
        LIMIT 100;`
    
        return this.artisRepository.query(query)
    }

    async getWorldCloud(body: any): Promise<any[]> {
        let limite = body.qtd.toString();

        let query = 
        `SELECT G.genre AS name, COUNT(*) AS weight
        FROM public.artist_genres AS G
        GROUP BY G.genre
        ORDER BY 2 DESC
        LIMIT ` + limite;

       return this.artistGenreRepository.query(query);   
    }


}
