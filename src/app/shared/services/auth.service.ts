import { AuxService } from './aux.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { IUsuario } from '../models/usuario';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Classe responsável por consultar os dados do usuário no firebase, como estado de login, realizar o login,
 * logout e etc.
 *
 * @export
 * @class AuthService
 */
@Injectable()
export class AuthService {

  constructor(private af: AngularFireAuth, private rota: Router, private auxService: AuxService) {

  }

  /**
   * Retorna uma promessa se o usuário foi cadastrado ou não. Em caso afirmativo retorna um objeto, caso
   * contrário retorna null.
   *
   * @param {IUsuario} usuario
   * @returns {Promise<{}>}
   * @memberof AuthService
   */
  public cadastarUsuario(usuario: IUsuario): Promise<{}>{

    return new Promise(res =>{
      console.log(usuario);
      const promise = this.af.auth.createUserWithEmailAndPassword(usuario.email, usuario.senha);

      promise.then(r => {
        //console.log(r);
        return new Promise(resolve => {
          res(r);
        });
      }).catch(er => {
        //console.log(er);
        return new Promise(resolve => {
          res(er);
        });
      });

    });

  }// Fim do cadastarUsuario

  /**
   * Faz o login no sistema.
   *
   * @param {IUsuario} usuario
   * @returns {Promise<{}>}
   * @memberof AuthService
   */
  public doLogin(usuario: IUsuario): Promise<{}>{

    return new Promise(res => {
      const promise = this.af.auth.signInWithEmailAndPassword(usuario.email, usuario.senha);
      promise.then(r => {
        //console.log(r);
        return new Promise(resolve => {
          res(r);
        });
      }).catch(er => {
        //console.log(er);
        return new Promise(resolve => {
          res(er);
        });
      });

    });

  }// doLogin

  /**
   * Verifica se um usuário está logado no sistema.
   *
   * @returns {Promise<{}>}
   * @memberof AuthService
   */
  public isLogged(): Promise<{}>{
    // Testa cripto.
    this.auxService.encriptaMsg('kaio');

    return new Promise(res => {
      this.af.auth.onAuthStateChanged(state => {
        console.log(state);
        res(state);
       });
    });
  }


  /**
   * Faz o logout do sistema
   *
   * @memberof AuthService
   */
  public doLogout(): void{
    this.af.auth.signOut();
    this.rota.navigate(['/login']);
  }


}// Fim do servico auth.
