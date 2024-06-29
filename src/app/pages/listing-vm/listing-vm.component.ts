import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-listing-vm',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './listing-vm.component.html',
  styleUrl: './listing-vm.component.scss'
})
export class ListingVmComponent {
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
