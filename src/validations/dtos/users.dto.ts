import {IsEmail, IsString, MinLength, MaxLength} from "class-validator"

export class CreateUserDto {
  @IsEmail()
  public email: string

  @IsString()
  @MinLength(4)
  @MaxLength(44)
  public login?: string

  @IsString()
  @MinLength(5)
  public password: string

  @IsString()
  public name: string

  @IsString()
  public lastName?: string
}
