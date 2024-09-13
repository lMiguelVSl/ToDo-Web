import { Component } from '@angular/core';
import { ToDo, ToDoService } from '../../services';
import { Router } from '@angular/router';
import { filter, take } from 'rxjs/operators';
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
    this.toDoService.getToDos().pipe(filter(x => x != undefined), take(1)).subscribe(data => {
      if(data.length === 0) this.router.navigate([`/actions`]);
      this.dataSource = data;
    });
  }

  editToDo(element: ToDo) {
    this.router.navigate([`/actions`], { queryParams: element });
    this.dataSource = [];
  }

  deleteToDo(element: ToDo) {
    this.toDoService.deleteToDo(element.id).subscribe({
      next: () => {
        this.loadData();
      },
      error: (err) => {
        console.error('delete toDo error:', err);
      }
    });
  }
}
