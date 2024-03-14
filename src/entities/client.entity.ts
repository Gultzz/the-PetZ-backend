import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Pet } from './pet.entity';
import { Sale } from './sale.entity';

@Entity({ name: 'client' })
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('varchar')
  cpf: string;

  @Column('varchar')
  rg: string;

  @Column('datetime')
  birthdate: Date;

  @Column('varchar')
  phone: string;

  @Column()
  email: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => Pet, (pet) => pet.client, { cascade: true })
  pet: Pet[];

  @OneToMany(() => Sale, (sale) => sale.client)
  sale: Sale[];

  @Column({ default: false })
  deleted: boolean;
}
