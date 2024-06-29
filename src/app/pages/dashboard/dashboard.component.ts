import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  userName = "Keylane";

  ngOnInit(){
    this.RenderPieChart();
    this.RenderBarChart()
  }

  RenderPieChart(){
    // const pieChart = new Chart( "piechart", {
    //   type: 'pie',
    //   data: {
    //     labels: [
    //       "VM's em uso",
    //       "VM's disponiveis"
    //     ],
    //     datasets: [{
    //       label: "Maquinas Virtuais",
    //       data: [3, 10],
    //       backgroundColor: [
    //         '#00BBFF',
    //         '#E8FFFE'
    //       ],
    //       hoverOffset: 4
    //     }]
    //   }
    // })

  }

  RenderBarChart(){
    // const barChart = new Chart( "barchart", {
    //   type: 'bar',
    //   data: {
    //     labels: ["RUNNING", "PAUSED", "STOP"],
    //     datasets: [{
    //       label: "Status das VM's",
    //       data: [1, 2, 3],
    //       backgroundColor: [
    //         '#FF8A08',
    //         '#FFBE76',
    //         '#FFB908'
    //       ],
    //       borderRadius: 5,
    //     }]
    //   },
    //   options: {
    //     indexAxis: 'y',
    //     // gridLinesX: {
    //     //   display: false
    //     // }
    //   },  
    // })

  }
}
