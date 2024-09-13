import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { FormComponent } from './form.component';
import { ToDoService } from '../../services';
import { ActivatedRoute } from '@angular/router';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let toDoServiceMock: any;

  beforeEach(async () => {
    toDoServiceMock = {
      createToDo: jasmine.createSpy('createToDo').and.returnValue(of(1)),
      updateToDo: jasmine.createSpy('updateToDo').and.returnValue(of({}))
    };

    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormComponent],
      providers: [
        { provide: ToDoService, useValue: toDoServiceMock },
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({ id: '1', title: 'Test Title', isDone: 'true' })
          }
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});