import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { HeaderComponent } from './components/header/header.component';
import { SharedTableComponent } from './components/shared-table/shared-table.component';
import {MaterialModule} from '../../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationPopupComponent } from './components/confirmation-popup/confirmation-popup.component';
import { CommonLayoutComponent } from './components/common-layout/common-layout.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { HttpClientModule } from '@angular/common/http';
// import { ConformationDialogComponent } from './components/conformation-dialog/conformation-dialog.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SharedTableComponent,
    // SharedSkeletonLoadingComponent,
    // SharedDialogOverlayComponent,
    ConfirmationPopupComponent,
    CommonLayoutComponent,
    BreadcrumbComponent,
    // ConformationDialogComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
  ],
  exports :
  [
    // SharedSkeletonLoadingComponent,
    BreadcrumbComponent,
    ReactiveFormsModule,
    FormsModule,
    SharedTableComponent,
    HttpClientModule,
  ],
  providers: []
})
export class SharedModule { }