import { Component, OnInit, Input } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators, NgForm } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule, CommonModule, JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  @Input('loginForm') dataLogin!: string;
  
  userData: any = {
    email: '',
    senha: ''
  }

  loginForm! : FormGroup ;

  


  constructor(private localStorageService: LocalStorageService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      campoEmail: new FormControl('', [Validators.required, Validators.email]),
      campoSenha: new FormControl('', [Validators.required]),
    });
  }

  get campoEmail(){
    return this.loginForm.get('campoEmail')!;
  }

  get campoSenha(){
    return this.loginForm.get('campoSenha')!;
  }

  submit(){
    if(this.loginForm.invalid){
      return;
    }

    const userDataString = JSON.stringify(this.userData);
    this.localStorageService.setItem('userData', userDataString);

    this.router.navigate(['/home']);
    // console.log("Dados salvos no Local Storage!");
    // console.log(localStorage.getItem('userdata'));
    // console.log("enviou");
  }
}
