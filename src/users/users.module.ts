import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // User için TypeORM repository
  exports: [TypeOrmModule], // Diğer modüller kullanabilsin
})
export class UsersModule {}
