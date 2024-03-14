import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Sale } from './sale.entity';

@Entity({ name: 'service' })
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('float')
  price: number;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ default: false })
  deleted: boolean;

  @ManyToMany(() => Sale, (sale) => sale.service)
  @JoinTable({
    name: 'sale_service',
    joinColumn: {
      name: 'service_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'sale_id',
      referencedColumnName: 'id',
    },
  })
  sale: Sale[];
}
