import { Routes } from '@angular/router';
import { HomeComponent, ErrorPageComponent } from './views';
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
        path: '**',
        component: ErrorPageComponent
    }
];
