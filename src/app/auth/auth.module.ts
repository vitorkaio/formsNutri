import { AuthRoutingModule } from './auth.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {DialogModule} from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VerificarEmailComponent } from './verificar-email/verificar-email.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    DialogModule,
    BrowserAnimationsModule
  ],
  declarations: [AuthComponent, CadastrarComponent, LoginComponent, VerificarEmailComponent],
  exports: [DialogModule, BrowserAnimationsModule]
})
export class AuthModule { }
