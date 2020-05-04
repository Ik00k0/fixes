import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoggerPage } from './logger.page';

describe('LoggerPage', () => {
  let component: LoggerPage;
  let fixture: ComponentFixture<LoggerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoggerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
