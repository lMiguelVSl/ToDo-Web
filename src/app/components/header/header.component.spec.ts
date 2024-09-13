import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { HeaderFacade } from './facade/header.facade';
import { TruncatePipe } from '../../shared/pipes/truncate.pipe';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../../shared/material/material.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MaterialModule, RouterOutlet, RouterModule, TruncatePipe, HeaderComponent],
      providers: [
        {
          provide: HeaderFacade,
          useValue: {
            GetToken: () => {
              return {
                subscribe: () => {}
              };
            }
          }
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
