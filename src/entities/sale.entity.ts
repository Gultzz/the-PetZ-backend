import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Client } from './client.entity';
import { Service } from './service.entity';

@Entity({ name: 'sale' })
export class Sale {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Client, (client) => client.sale)
  client: Client;

  @ManyToMany(() => Service, (service) => service.sale, { eager: true })
  @JoinTable({
    name: 'sale_service',
    joinColumn: {
      name: 'sale_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'service_id',
      referencedColumnName: 'id',
    },
  })
  service: Service[];
}
