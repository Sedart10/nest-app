import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Group } from './entities/groups.entity';
import { CreateGroupDto } from 'src/users/dto/create-group.dto';
import { User } from '../users/entities/user.entity';

@Injectable()
export class GroupsService {
  [x: string]: any;
  constructor(
    @InjectRepository(Group) private groupsRepository: Repository<Group>,
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async create(
    createGroupDto: CreateGroupDto,
    userIds: number[],
  ): Promise<Group> {
    const group = this.groupsRepository.create(createGroupDto);

    // Kullanıcıları almak
    const users = await this.usersRepository.findByIds(userIds);
    group.users = users; // Grupları kullanıcılara bağlama

    return this.groupsRepository.save(group);
  }

  async findAll(): Promise<Group[]> {
    return this.groupsRepository.find({ relations: ['users'] }); // Kullanıcıları da getir
  }
}
export { CreateGroupDto };
