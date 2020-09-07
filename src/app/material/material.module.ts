import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

const material: Array<any> = [
  FlexLayoutModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
];

@NgModule({
  declarations: [],
  imports: [material],
  exports: [material],
})
export class MaterialModule {}
