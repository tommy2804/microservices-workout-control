import { IsEmail, IsString } from 'class-validator';
import { FeedPost } from '../interfaces/feet-post.inetrface';
import { Role } from '../helpers/roles.enum';

export class User {
  id?: number;
  firstName?: string;
  lastName?: string;
  @IsEmail()
  email?: string;
  @IsString()
  password?: string;
  imagePath?: string;
  role?: Role;
  posts?: FeedPost[];
}
