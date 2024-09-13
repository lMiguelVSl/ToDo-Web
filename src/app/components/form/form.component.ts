import { Component } from '@angular/core';
import { MaterialModule } from '../../shared/material/material.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BaseModule } from '../../shared/base/base.module';
import { ToDo, ToDoService } from '../../services';

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
  ToDo: ToDo = { id: 0, title: '', isDone: false };
  ToDoForm: FormGroup;
  toDoId: number = 0;

  constructor(private formBuilder: FormBuilder, private toDoService: ToDoService, private router: Router, private route: ActivatedRoute) {
    this.ToDoForm = this.formBuilder.group({
      title: ['', Validators.required],
      isDone: [false, Validators.required]
    });

  }
  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      if (params['title'])  {
        this.isEditMode = true;
        this.toDoId = parseInt(params['id']);
        this.ToDoForm.patchValue({
          title: params['title'],
          isDone: params['isDone'] === 'true' ? true : false,
        });
      } else {
        this.ToDoForm.patchValue({
          title: '',
          isDone: false,
        });
      }
    });
  }

  addToDo() {
    if (this.ToDoForm.status === 'VALID') {
      this.ToDo.title = this.ToDoForm.value.title;
      this.ToDo.isDone = this.ToDoForm.value.isDone;

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
      this.ToDo.id = this.toDoId;
      this.ToDo.title = this.ToDoForm.value.title;
      this.ToDo.isDone = this.ToDoForm.value.isDone;

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
