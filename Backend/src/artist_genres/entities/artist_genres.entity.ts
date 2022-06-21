import { Artist } from "src/artist/entities/artist.entity";
import { Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";

@Entity()
export class ArtistGenres {
    @PrimaryColumn({ name: 'id_artist', type: 'varchar'})
    @OneToOne(() => Artist)
    @JoinColumn({ name: 'id_artist'})
    id_artist: string;

    @PrimaryColumn({ name: 'genre', type: 'varchar'})
    genre: string;
}
