import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileComponentDisplayComponent } from './file-component-display.component';

describe('FileComponentDisplayComponent', () => {
  let component: FileComponentDisplayComponent;
  let fixture: ComponentFixture<FileComponentDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileComponentDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FileComponentDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
