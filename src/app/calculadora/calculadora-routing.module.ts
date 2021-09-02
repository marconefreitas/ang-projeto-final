import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './components/calculadora.component';

export const CalculadoraRoutes: Routes = [

  {
    path: 'calculadora',
    component: CalculadoraComponent
  }

];

