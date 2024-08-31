import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
@Input() nombreUsuario : string| undefined;
@Output() salida : string = "";
mensajeSalida : string| undefined;
mensaje : string ='';
  enviarMensaje(event:any) {
    debugger
    this.mensajeSalida = `${this.nombreUsuario}: ${this.mensaje}`;
    
    this.mensajeSalida = '';
    console.log(this.mensaje)
  }

  mostrarMensaje(event:any){
    this.mensaje = event.target.value;
    console.log(this.mensaje)
  }



}
