import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DepartmentComponent } from './department.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EmployeeService } from '../../Services/employee.service';
import { of } from 'rxjs';

class Mockemployeeservice{
  getDesignation(){
    return of({

    })
  }
}

describe('DepartmentComponent', () => {
  let component: DepartmentComponent;
  let fixture: ComponentFixture<DepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepartmentComponent],
      imports:[
        HttpClientTestingModule,
      ],
      providers:[
        {provide:EmployeeService,useClass:Mockemployeeservice}
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
