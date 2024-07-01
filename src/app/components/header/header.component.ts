import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent{

  constructor(private localStorageService: LocalStorageService, private router: Router) { }

  userName = this.BuscarDados();

  isOpen = false;

  expand(){
    this.isOpen = !this.isOpen;
  }

  logout(){
    this.router.navigate(['']);
    alert("Logout realizado com sucesso!")
  }

  BuscarDados(): string{
    const userDataString = this.localStorageService.getItem('userData');
    if (userDataString === null || userDataString === undefined) {
      console.error('Dados do usuário não encontrados no localStorage');
      return 'error';
    }
    const userData = JSON.parse(userDataString);
    const userName = userData.name;
    console.log(userName)

    return userName;
  }
}
