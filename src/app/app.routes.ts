import { Routes } from '@angular/router';
import { HomeComponent, ErrorPageComponent, NotAuthPageComponent } from './views';
import { FormComponent, TableComponent } from './components';
import { AuthGuard } from './auth/guards/auth.guard';

export const routes: Routes = [
    {
        path: 'actions',
        component: FormComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'item-list',
        component: TableComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'Home',
        component: HomeComponent
    },
    {
        path: 'NotAuthorized',
        component: NotAuthPageComponent
    },
    {
        path: '**',
        component: ErrorPageComponent
    }
];
