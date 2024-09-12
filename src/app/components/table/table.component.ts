import { Component } from '@angular/core';
import { ToDo, ToDoService } from '../../services';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { BaseModule } from '../../shared/base/base.module';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [BaseModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  displayedColumns: any[] = ['title', 'is done', 'actions'];
  dataSource: ToDo[] = [];

  constructor(private toDoService: ToDoService, private router: Router) {
    this.loadData();
  }

  loadData() {
    this.toDoService.getToDos().pipe(take(1)).subscribe(data => {
      this.dataSource = data;
    });
  }

  editToDo(element: ToDo) {
    this.router.navigate([`/actions`], { queryParams: element });
    this.dataSource = [];
  }

  deleteToDo(element: any) {
    this.toDoService.deleteToDo(element.id).subscribe({
      next: (res) => {
        this.loadData();
        console.log('response delete toDo:', res);
      },
      error: (err) => {
        console.log('delete toDo error:', err);
      }
    });
  }
}
