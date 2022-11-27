import {
  Controller,
  Delete,
  Get,
  Next,
  ParseIntPipe,
  Patch,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { ParsedQs } from 'qs';
import { UsersService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Post('/')
  async create(
    @Req() req: Request,
    @Res() res: Response,
    @Next() next: NextFunction,
  ) {
    const data = await this.userService.create(req.body);
    res.status(200).json(data);
  }

  @Patch('/')
  async update(
    @Req() req: Request,
    @Res() res: Response,
    @Next() next: NextFunction,
  ) {
    const data = await this.userService.update(req.body);
    res.status(200).json(data);
  }
  @Get()
  async gets(
    @Req() req: Request,
    @Res() res: Response,
    @Next() next: NextFunction,
  ) {
    const data = await this.userService.findAll();
    res.status(200).json(data);
  }
  @Get('/:id')
  async get(
    @Req() req: Request,
    @Res() res: Response,
    @Next() next: NextFunction,
  ) {

    const data = await this.userService.findOne(Number(req.params.id));
    res.status(200).json(data);
  }
  @Delete('/:id')
  async remove(
    @Req() req: Request,
    @Res() res: Response,
    @Next() next: NextFunction,
  ) {
    const data = await this.userService.remove(Number(req.params.id));
    res.status(200).json(data);
  }
}
