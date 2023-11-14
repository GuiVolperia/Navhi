import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';  // Você precisa criar este componente

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule, RouterModule.forChild([
    { path: '', component: AdminComponent },
   
  ])],
})
export class AdminModule { }
