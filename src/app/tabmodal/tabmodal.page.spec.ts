import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabmodalPage } from './tabmodal.page';

describe('TabmodalPage', () => {
  let component: TabmodalPage;
  let fixture: ComponentFixture<TabmodalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TabmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
