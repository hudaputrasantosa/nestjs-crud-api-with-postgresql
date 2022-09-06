import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
   signin() {
      return `berhasil masuk!`;
   }

   signup() {
      return `berhasil daftar!`;
   }
}