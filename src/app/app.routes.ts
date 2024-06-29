import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { ListingVmComponent } from './pages/listing-vm/listing-vm.component';
import { RegisterVmComponent } from './pages/register-vm/register-vm.component';

export const routes: Routes = [
    {
        path: "",
        component: LoginComponent
    },
    {
        path: "home",
        component: DashboardComponent
    },
    {
        path: "visualizarVM",
        component: ListingVmComponent
    },
    {
        path: "cadastrarVM",
        component: RegisterVmComponent
    },
];
