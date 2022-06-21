import { Artist } from "src/artist/entities/artist.entity";
import { Track } from "src/track/entities/track.entity";
import { PrimaryColumn, OneToOne, JoinColumn, Column, Entity } from "typeorm";

@Entity()
export class ArtistTrack {
    @PrimaryColumn({ name: 'id_artist', type: 'varchar'})
    @OneToOne(() => Artist)
    @JoinColumn({ name: 'id_artist'})
    id_artist: string;

    @PrimaryColumn({ name: 'id_track', type: 'varchar'})    
    @OneToOne(() => Track)
    @JoinColumn({ name: 'id_track'})
    id_track: string;

    @Column({ name: 'main_artist', type: 'boolean'})
    main_artist: boolean;
}
