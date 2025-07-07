import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillageOverview } from './village-overview';

describe('VillageOverview', () => {
  let component: VillageOverview;
  let fixture: ComponentFixture<VillageOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VillageOverview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VillageOverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
