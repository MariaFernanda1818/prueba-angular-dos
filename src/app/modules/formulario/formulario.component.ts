import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../shared/service/users.service';
import { UserCreate } from '../../shared/models/UserCreate';
import { catchError, finalize, of, tap } from 'rxjs';
import { UserCreateResponse } from '../../shared/models/UserCreateResponse';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {

  constructor(private formBuilder:FormBuilder, private userService:UsersService){}


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.crearFormulario()
  }

  crearUsuario(){
    const {name,job} = this.formCreate.value
    const usuario:UserCreate = {
      name: name,
      job: job
    }
    this.userService.createUsuario(usuario).pipe(

      catchError((err) => {
        console.log(err)
        return of(null)
      }),
      finalize(() => {
        console.log("Finalizo")
        alert("Se guardo")
      })
    )
  }

  crearFormulario(){
    this.formCreate = this.formBuilder.array(
      {
        job: new FormControl('', [Validators.required])
      }
    )
  }


}
