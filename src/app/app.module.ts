import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatStepperModule, MatCardModule, MatTableModule, MatButtonModule, MatInputModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';

import {card} from './card';
import {table} from './table';

@NgModule({
  declarations: [
    card,
    table,
  ],
  imports: [
    BrowserAnimationsModule,
    MatStepperModule,
    MatCardModule,
    MatTableModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatTableModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [card, table]
})

export class AppModule { }
