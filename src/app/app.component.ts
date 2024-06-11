import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gestionempleados';
}

import { Component } from '@angular/core';
import { Empleado } from '';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  empleados: Empleado[] = [];

  agregarEmpleado(nuevoEmpleado: Empleado) {
    this.empleados.push(nuevoEmpleado);
  }
}