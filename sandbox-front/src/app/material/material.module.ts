import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule,
  MatCardModule, MatListModule, MatTableModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatListModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatListModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule],
})
export class MaterialModule { }
