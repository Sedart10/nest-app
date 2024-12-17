import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from './groups.entity';
import { UsersModule } from 'src/users/users.module';
import { GroupsService } from '../groups.service';

@Module({
  imports: [TypeOrmModule.forFeature([Group]), UsersModule], // Group için repository ve UsersModule
  providers: [GroupsService],
  exports: [GroupsService],
})
export class GroupsModule {}
