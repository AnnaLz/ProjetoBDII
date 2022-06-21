import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Album {
    @PrimaryColumn({ name: 'id', type: 'varchar'})
    id: string;
    
    @Column({ name: 'name', type: 'varchar'})
    name: string;

    @Column({ name: 'release_date', type: 'date'})
    release_date: Date;

    @Column({ name: 'qtd_artists', type: 'int'})
    qtd_artists: number;

    @Column({ name: 'qtd_tracks', type: 'int'})
    qtd_tracks: number;

    @Column({ name: 'img', type: 'varchar'})
    img: string;
}