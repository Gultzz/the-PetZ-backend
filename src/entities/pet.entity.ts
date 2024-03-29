import { Gender } from 'src/enums/gender.enum';
import { Specie } from 'src/enums/specie.enum';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Client } from './client.entity';
import { Coat } from '@/enums/coat.enum';

@Entity({ name: 'pet' })
export class Pet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: Gender,
  })
  gender: Gender;

  @Column('boolean')
  sterilization: boolean;

  @Column('float')
  weight: number;

  @Column({
    type: 'enum',
    enum: Specie,
  })
  specie: Specie;

  @Column({
    type: 'enum',
    enum: Coat,
  })
  coat: Coat;

  @Column('datetime')
  birthdate: Date;

  @Column()
  breed: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Client, (client) => client.pet)
  client: Client;

  @Column({ default: false })
  deleted: boolean;
}
