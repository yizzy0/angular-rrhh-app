import { Component, OnInit, Output, EventEmitter } from '@angular/core';

// ...
@Component({})
export class EmpleadoFormComponent implements OnInit {
    // ...
    @Output() nuevoEmpleado = new EventEmitter<EmpleadoFormComponent>();

    onSubmit() {
        if (this.empleadoForm.valid) {
            const nuevoEmpleado: EmpleadoFormComponent = this.empleadoForm.value;
            this.nuevoEmpleado.emit(nuevoEmpleado);
            // Resetear el formulario después de enviar
            this.empleadoForm.reset();
        }
    }
}
