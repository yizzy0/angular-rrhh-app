import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Empleado } from '';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent {
  @Input() empleados: Empleado[] = [];
  @Output() eliminarEmpleado = new EventEmitter<Empleado>();
  @Output() actualizarEmpleado = new EventEmitter<Empleado>();

  eliminar(empleado: EmpleadoListComponent) {
    this.eliminarEmpleado.emit(empleado);
  }

  marcarRemoto(empleado: Empleado) {
    empleado.remoto = !empleado.remoto;
    this.actualizarEmpleado.emit(empleado);
  }
}