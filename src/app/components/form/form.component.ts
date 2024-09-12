import { Component } from '@angular/core';
import { MaterialModule } from '../../shared/material/material.module';
import { ToDoService } from '../../services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToDo } from '../../services/Models/ToDo.Type';
import { BaseModule } from '../../shared/base/base.module';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [MaterialModule, BaseModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  selectedItem: any;
  isEditMode: boolean = false;
  ToDo: ToDo = { Id: 0, Title: '', IsDone: false };
  ToDoForm: FormGroup;
  toDoId: number = 0;

  constructor(private formBuilder: FormBuilder, private toDoService: ToDoService, private router: Router, private route: ActivatedRoute) {
    this.ToDoForm = this.formBuilder.group({
      title: ['', Validators.required],
      isDone: ['', Validators.required]
    });

  }
  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      if (params['Title']) {
        this.isEditMode = true;
        this.toDoId = params['Id'];
        this.ToDoForm.patchValue({
          title: params['Title'],
          position: params['IsDone'],
        });
      }
    });
  }

  addToDo() {
    if (this.ToDoForm.status === 'VALID') {
      this.ToDo.Title = this.ToDoForm.value.title;
      this.ToDo.IsDone = this.ToDoForm.value.isDone;

      this.toDoService.createToDo(this.ToDo).pipe().subscribe(
        {
          next: (id) => {
            if (id != 0) this.nagivate('grid');
          },
          error: (err) => {
            console.group('Error Adding toDo:', err);
          }
        }
      );
    }
  }

  updateToDo() {
    if (this.ToDoForm.status === 'VALID') {
      this.ToDo.Id = this.toDoId;
      this.ToDo.Title = this.ToDoForm.value.firstName;
      this.ToDo.IsDone = this.ToDoForm.value.position;

      this.toDoService.updateToDo(this.ToDo).subscribe({
        next: (res) => {
          console.log('update response', res);
          this.router.navigate(['/item-list']);
        },
        error: (err) => {
          console.log('error updating toDo:', err);
        }
      });
    }
    this.isEditMode = false;
  }

  nagivate(page: string) {
    switch (page) {
      case 'grid':
        this.router.navigate(['/item-list']);
        break;
    }
  }
}
