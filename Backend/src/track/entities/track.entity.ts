import { Album } from "src/album/entities/album.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";

@Entity()
export class Track {
    @PrimaryColumn({ name: 'id', type: 'varchar'})
    id: string;

    @Column({ name: 'name', type: 'varchar'})
    name: string;

    @Column({ name: 'duration', type: 'int'})
    duration: number;

    @Column({ name: 'explicit', type: 'boolean'})
    explicit: boolean;

    @Column({ name: 'track_number', type: 'int'})
    track_number: number;

    @Column({ name: 'qtd_artistas', type: 'int'})
    qtd_artistas: number;

    @OneToOne(() => Album)
    @JoinColumn({ name: 'album_id'})
    album_id: Album;
}
