import { Component, OnInit, Input } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { RouterLink, RouterModule, Router } from '@angular/router';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-vm',
  standalone: true,
  imports: [HeaderComponent, RouterLink, CommonModule, JsonPipe, FormsModule, ReactiveFormsModule],
  templateUrl: './register-vm.component.html',
  styleUrl: './register-vm.component.scss'
})
export class RegisterVmComponent implements OnInit {
  // @Input('registerForm') dataVM!: string;

  registerForm! : FormGroup ;

  // isFormSubmited: boolean = false;

  vmData: any = {
    displayName: '',
    cpu: '',
    memory: '',
    status: 'RUNNING'
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      campoDisplayName: new FormControl('', [Validators.required]),
      campoCPU: new FormControl('', [Validators.required]),
      campoMemory: new FormControl('', [Validators.required]),
    });
  }

  get campoDisplayName(){
    return this.registerForm.get('campoDisplayName')!;
  }

  get campoCPU(){
    return this.registerForm.get('campoCPU')!;
  }

  get campoMemory(){
    return this.registerForm.get('campoMemory')!;
  }

  submit(){
    if(this.registerForm.invalid){
      return;
    }


    this.router.navigate(['/visualizarVM']);
    alert("A Maquina Virtual foi cadastrada com sucesso!")
  }

  reset(){
    this.router.navigate(['/visualizarVM']);
  }

}
