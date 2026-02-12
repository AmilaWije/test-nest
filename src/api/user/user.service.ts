import { BadRequestException, HttpException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/config/prisma/prisma.service';
import { threadCpuUsage } from 'node:process';
import { LoginUserData } from './dto/user-request-dto';
import { JwtAuthService } from 'src/config/jwt/jwt.service';
import { promises } from 'node:dns';

@Injectable()
export class UserService {
  constructor(private readonly DB:PrismaService, private readonly jwt:JwtAuthService){}

  async login(userLoginData:LoginUserData) {
    try {
      const user = await this.DB.user.findUnique({
        where:{
          username:userLoginData.username
        }
      })
      if(!user)throw new NotFoundException(`${userLoginData.username} not found.`);
      if(userLoginData.password !== user.password)throw new BadRequestException(`password not matched`);
      return this.jwt.getToken();
    } catch (e) {
      console.log(e);
      if(e instanceof HttpException) throw e;
      throw new InternalServerErrorException('Internal server error exceptn');
    }
  }

  async verifyToken(token: string): Promise<boolean> {
    return this.jwt.verifyToken(token);
  }

  async create(userData: CreateUserDto) {
    try {
      const newUser = await this.DB.user.create({
        data: userData,
        select:{
          name:true,
          age:true,
          username:true,
          city: true,
          phone:true,
          email:true,
        }
      });
      return {
        success: true,
        message: 'User registration successfully',
        data: newUser
      };
    } catch (e) {
      console.log(e);
      if(e.code == 'P2002')throw new BadRequestException(`${userData.username} is already in use`)
      throw new InternalServerErrorException('internal server error')
    }
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
