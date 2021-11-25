import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import {  } from '../../app/services/login-user.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {

  formRegistro: FormGroup;
  password ="";
  usuario = "";
  
  


  constructor(private router: Router, private http: HttpClient, public toastController: ToastController) { 
    this.formRegistro=new FormGroup({
      usuario: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]), 
      pass: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)])
    });
  }

  ngOnInit() {
  }

  
  guardarUsuario(){
    
    if(this.usuario.length<4 || this.password.length<6){
      this.failToast();
    }
    else{
      this.presentToast();
    }
  
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
      message: 'Usuario Creado',
      duration: 2000,
      color: "success",
      position: "bottom",
      cssClass: 'toast-crear'
    });
    toast.present();
    this.router.navigate(['login']);
  }

}
