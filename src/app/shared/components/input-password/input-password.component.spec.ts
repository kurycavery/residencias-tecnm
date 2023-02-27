import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { InputPasswordComponent } from './input-password.component';

describe('GIVEN InputPasswordComponent', () => {
  let component: InputPasswordComponent;
  let fixture: ComponentFixture<InputPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputPasswordComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        TranslateModule.forRoot(),
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPasswordComponent);
    component = fixture.componentInstance;
    component.label = 'Test label';
    component.placeholder = 'Test placeholder';
    component.control = new FormControl(null, Validators.required);
    component.submit = false;
    fixture.detectChanges();
  });

  // Init test
  it('WHEN init THEN should create', () => {
    expect(component).toBeTruthy();
  });


  // Placeholder test
  it('WHEN init THEN displays the given placeholder', () => {
    const HTMLInput = fixture.debugElement.nativeElement.children[1].children[0].children[0];
    expect(HTMLInput.placeholder).toBe('Test placeholder');
  });


  // Alert init test
  it('WHEN init THEN alerts are not displayed', () => {
    const HTMLElements = fixture.debugElement.nativeElement.children.length;
    expect(HTMLElements).toBe(2);
  });


  // Show alert test
  it('WHEN submit THEN show the alert', () => {
    component.submit = true;
    fixture.detectChanges();
    const HTMLElements = fixture.debugElement.nativeElement.children.length;
    expect(HTMLElements).toBe(3);
  });


  // Hide alert test
  it('WHEN complete the form THEN does not show the alert', () => {
    component.control.setValue('true');
    component.submit = true;
    fixture.detectChanges();
    const HTMLElements = fixture.debugElement.nativeElement.children.length;
    expect(HTMLElements).toBe(2);
  });


  // Show alert message test
  it('WHEN submit THEN show the alert with the alert message', () => {
    component.submit = true;
    fixture.detectChanges();
    const HTMLAlert = fixture.debugElement.nativeElement.children[2];
    expect(HTMLAlert.textContent).toBe('inputAlerts.required');
  });


  // Input value test
  it('WHEN fill the form THEN value is saved in input', () => {
    component.control.setValue('true');
    fixture.detectChanges();
    const HTMLInput = fixture.debugElement.nativeElement.children[1].children[0].children[0];
    expect(HTMLInput.value).toBe('true');
  });


  // Change vision test
  it('WHEN press eye button THEN toogle password type', () => {
    component.showPassword = false;
    expect(fixture.debugElement.nativeElement.children[1].children[0].children[0].type).toBe('password');
    component.changeVision();
    fixture.detectChanges();
    expect(component.showPassword).toBe(true);
    expect(fixture.debugElement.nativeElement.children[1].children[0].children[0].type).toBe('text');
  });
});
