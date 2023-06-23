import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validator,
  FormBuilder,
  Validators,
} from '@angular/forms'
import { AlertController, NavController } from '@ionic/angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController){ 
    this.formularioLogin = this.fb.group({
      'correo': new FormControl("", Validators.required),
      'contrasena': new FormControl("", Validators.required)
    })

  }

  ngOnInit() {
  }

  async goToHome(){
    var formulario = this.formularioLogin.value;
    if(formulario.correo == 'laura' && formulario.contrasena == '123456'){
      this.navCtrl.navigateRoot('inicio');
    }else{
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Los datos que ingresaste no son correctos',
        buttons: ['Aceptar']
      });
      await alert.present();
    }
  }
 
}
