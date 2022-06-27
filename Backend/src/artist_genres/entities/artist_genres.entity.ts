import { Artist } from "src/artist/entities/artist.entity";
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity()
export class ArtistGenres {
    @PrimaryColumn({ name: 'id_artist', type: 'varchar'})
    @ManyToOne(() => Artist, artist => artist.id)
    @JoinColumn({ name: 'id_artist'})
    id_artist: string;

    @PrimaryColumn({ name: 'genre', type: 'varchar'})
    genre: string;
}
