import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
   constructor(private authservice: AuthService) { }
   @Post('signin')
   signin() {
      return this.authservice.signin();
   }

   @Post('signup')
   signup() {
      return this.authservice.signup();
   }

}