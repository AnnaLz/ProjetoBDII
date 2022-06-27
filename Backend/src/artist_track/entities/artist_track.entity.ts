import { Artist } from "src/artist/entities/artist.entity";
import { Track } from "src/track/entities/track.entity";
import { PrimaryColumn, JoinColumn, Column, Entity, OneToMany, ManyToOne } from "typeorm";

@Entity()
export class ArtistTrack {
    @PrimaryColumn({ name: 'id_artist', type: 'varchar'})
    @ManyToOne(() => Artist, artist => artist.id)
    @JoinColumn({ name: 'id_artist'})
    id_artist: string;

    @PrimaryColumn({ name: 'id_track', type: 'varchar'})    
    @ManyToOne(() => Track, track => track.id)
    @JoinColumn({ name: 'id_track'})
    id_track: string;

    @Column({ name: 'main_artist', type: 'boolean'})
    main_artist: boolean;
}
