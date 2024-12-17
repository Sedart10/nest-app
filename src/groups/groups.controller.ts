import { Controller, Post, Body } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { CreateGroupDto } from 'src/users/dto/create-group.dto';

@Controller('groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Post()
  async create(@Body() createGroupDto: CreateGroupDto) {
    const userIds = createGroupDto.userIds; // userIds'yi DTO'dan al
    return this.groupsService.create(createGroupDto, userIds);
  }
}
