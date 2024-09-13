import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ToDoService } from '../../services';
import { of } from 'rxjs';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let toDoServiceMock = {
    getToDos: jasmine.createSpy('getToDos').and.returnValue(of([
      { id: 1, title: 'Test ToDo 1', isDone: false },
      { id: 2, title: 'Test ToDo 2', isDone: true }
    ]))
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableComponent, RouterTestingModule],
      providers: [
        {
          provide: ToDoService,
          useValue: toDoServiceMock
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
