import { Component, OnInit, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  @Input() dataLogin!: string;
  userData: any;

  loginForm! : FormGroup;

  

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.userData = this.localStorageService.getItem('username');
    console.log(this.userData);

    this.loginForm = new FormGroup({
      campoEmail: new FormControl('', Validators.required),
      campoSenha: new FormControl('', Validators.required),
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

    console.log("enviou");
  }
}
