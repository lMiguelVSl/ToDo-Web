import { Routes } from '@angular/router';
import { HomeComponent, ErrorPageComponent, NotAuthPageComponent } from './views';
import { FormComponent, TableComponent } from './components';

export const routes: Routes = [
    {
        path: 'actions',
        component: FormComponent
    },
    {
        path: 'item-list',
        component: TableComponent
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
