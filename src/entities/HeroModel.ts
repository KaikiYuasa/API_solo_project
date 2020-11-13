import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'

@Entity()
export class Hero extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number

  @Column({ nullable: true })
  public name: string = ''

  @Column({ nullable: true })
  public gender: string = ''

  @Column({ nullable: true })
  public eyeColor: string = ''

  @Column({ nullable: true })
  public race: string = ''

  @Column({ nullable: true })
  public hairColor: string = ''

  @Column("float", { nullable: true })
  public height: number = 0

  @Column({ nullable: true })
  public publisher: string = ''

  @Column({ nullable: true })
  public skinColor: string = ''

  @Column({ nullable: true })
  public alignment: string = ''

  @Column("float",{ nullable: true })
  public weight:  number = 0
}

export default Hero