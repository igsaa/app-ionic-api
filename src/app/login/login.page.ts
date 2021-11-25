import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUserService } from '../services/login-user.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  listaUsuarios:{id: number, usuario:string,password:string}[]=[];
  
  formularioLogin: FormGroup;
  password ="";
  usuario = "";


  constructor(private router: Router, private servicio:LoginUserService, public toastController: ToastController) {
    
     //definir el grupo Formulario
     this.formularioLogin= new FormGroup({
      usuario: new FormControl('', [Validators.required, Validators.email, Validators.minLength(10)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)])
    });

  }

  ngOnInit() {
  }

  datosUsuarios(){ 
    
    if(this.usuario.length<4 || this.password.length<6){
      this.failToast();
    }
    else{
      this.presentToast();
    }
    
    console.log()
  }


  async failToast() {
    const toast = await this.toastController.create({
      message: 'Datos faltantes o erroneos',
      duration: 2000,
      color: "danger",
      position: "bottom",
      cssClass: 'toast-crear'
    });
    toast.present();
    
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Login correcto :D',
      duration: 2000,
      color: "success",
      position: "bottom",
      cssClass: 'toast-crear'
    });
    toast.present();
    this.router.navigate(['inicio']);
  }

}



