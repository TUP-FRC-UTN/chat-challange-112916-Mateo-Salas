import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { UsuarioComponent } from '../usuario/usuario.component';

interface mensaje{
  usuario: string;
  contenido: string;
}


@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [CommonModule, UsuarioComponent],
  templateUrl: './sala.component.html',
  styleUrl: './sala.component.css'
})
export class SalaComponent {
  usuario1 : string = "Mateo";
  usuario2 : string = "Salas";
  @Output() mensajeEnt :string = "";
  listaMensajes: string[] = new Array();

}
