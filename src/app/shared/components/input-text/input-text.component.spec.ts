import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { InputTextComponent } from './input-text.component';


describe('GIVEN InputTextComponent', () => {
  let component: InputTextComponent;
  let fixture: ComponentFixture<InputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputTextComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        TranslateModule.forRoot(),
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTextComponent);
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
    const HTMLInput = fixture.debugElement.nativeElement.children[1];
    expect(HTMLInput.placeholder).toBe('Test placeholder');
  });


  // Alert init test
  it('WHEN init THEN alerts are not displayed', () => {
    const HTMLElements = fixture.debugElement.nativeElement.children.length;
    expect(HTMLElements).toBe(3);
  });


  // Show alert test
  it('WHEN submit THEN show the alert', () => {
    component.submit = true;
    fixture.detectChanges();
    const HTMLElements = fixture.debugElement.nativeElement.children.length;
    expect(HTMLElements).toBe(4);
  });


  // Hide alert test
  it('WHEN complete the form THEN does not show the alert', () => {
    component.control.setValue('true');
    component.submit = true;
    fixture.detectChanges();
    const HTMLElements = fixture.debugElement.nativeElement.children.length;
    expect(HTMLElements).toBe(3);
  });


  // Show alert message test
  it('WHEN submit THEN show the alert with the alert message', () => {
    component.submit = true;
    fixture.detectChanges();
    const HTMLAlert = fixture.debugElement.nativeElement.children[3];
    expect(HTMLAlert.textContent).toBe('inputAlerts.required');
  });


  // Input value test
  it('WHEN fill the form THEN value is saved in input', () => {
    component.control.setValue('true');
    fixture.detectChanges();
    const HTMLInput = fixture.debugElement.nativeElement.children[1];
    expect(HTMLInput.value).toBe('true');
  });

});
