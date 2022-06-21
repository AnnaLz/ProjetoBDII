import { BaseEntity, Column, Entity, PrimaryColumn} from "typeorm";

@Entity()
export class Artist extends BaseEntity {
    @PrimaryColumn({ name: 'id', type: 'varchar'})
    id: string;

    @Column({ name: 'name', type: 'varchar'})
    name: string;

    @Column({ name: 'followers', type: 'int'})
    followers: number;

    @Column({ name: 'popularity', type: 'int' })
    popularity: number;

    @Column({ name: 'img', type: 'varchar' })
    img: string;
}