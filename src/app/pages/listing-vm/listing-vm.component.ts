import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { RouterLink, Router } from '@angular/router';
import { AlertComponent } from '../../components/alert/alert.component';

@Component({
  selector: 'app-listing-vm',
  standalone: true,
  imports: [AlertComponent,CommonModule, HeaderComponent, RouterLink],
  templateUrl: './listing-vm.component.html',
  styleUrl: './listing-vm.component.scss'
})
export class ListingVmComponent {

  constructor(private router: Router) {}

  vm1Status = "RUNNING";
  vm2Status = "PAUSED";
  vm3Status = "STOP";

  vms = [
    { displayName: "vm1", cpu: 2, memory: 1024, status: "RUNNING"},
    { displayName: "vm2", cpu: 1, memory: 512, status: "PAUSED"},
    { displayName: "vm3", cpu: 4, memory: 2048, status: "STOP"},
  ];

  actionClick(vmIndex: number, actionName: string){
    switch (actionName){

      case "Iniciar":
        if (this.vms[vmIndex].status === "RUNNING"){
          alert("A VM já está em execução!")
          // this.router.navigate(['/teste'], { queryParams: { message: `VM ${this.vms[vmIndex].displayName} já está em execução!`, type: 'error' } });
          return;
        }
        this.vms[vmIndex].status = 'RUNNING';
        break;

      case 'Pausar':
        if (this.vms[vmIndex].status === 'PAUSED') {
          alert('A VM já está parada!');
          return;
        }
        else if(this.vms[vmIndex].status === 'STOP'){
          alert('Não é possivel Pausar uma VM em STOP!');
          return;
        }
        this.vms[vmIndex].status = 'PAUSED';
        break;

      case 'Parar':
        if (this.vms[vmIndex].status === 'STOP') {
          alert('A VM já está parada!');
          return;
        }
        this.vms[vmIndex].status = 'STOP';
        break;

      case 'Excluir':
        this.vms.splice(vmIndex, 1);
        break;
    }

  }
}
