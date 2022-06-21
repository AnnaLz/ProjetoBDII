import { Album } from "src/album/entities/album.entity";
import { Artist } from "src/artist/entities/artist.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";

@Entity()
export class ArtistAlbum {
    @PrimaryColumn({ name: 'id_artist', type: 'varchar'})
    @OneToOne(() => Artist)
    @JoinColumn({ name: 'id_artist'})
    id_artist: string;

    @PrimaryColumn({ name: 'id_album', type: 'varchar'})    
    @OneToOne(() => Album)
    @JoinColumn({ name: 'id_album'})
    id_album: string;

    @Column({ name: 'main_artist', type: 'boolean'})
    main_artist: boolean;
}
