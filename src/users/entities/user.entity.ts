import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Group } from '../../groups/entities/groups.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Group, (group) => group.users)
  groups: Group[];
}
