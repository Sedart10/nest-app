import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { GroupsModule } from 'src/groups/entities/groups.module';
import { User } from './users/entities/user.entity';
import { Group } from './groups/entities/groups.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // Veritabanı tipini ayarlayın
      host: '127.0.0.1',
      username: 'root',
      password: '1234', // Şifrenizi ayarlayın
      database: 'root',
      entities: [User, Group], // Entity'leri burada listeleyin
      synchronize: true, // Geliştirme için true, production'da false
    }),
    UsersModule,
    GroupsModule,
  ],
})
export class AppModule {}
