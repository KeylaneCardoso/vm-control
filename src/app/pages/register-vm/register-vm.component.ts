import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register-vm',
  standalone: true,
  imports: [HeaderComponent, RouterLink],
  templateUrl: './register-vm.component.html',
  styleUrl: './register-vm.component.scss'
})
export class RegisterVmComponent {

}
