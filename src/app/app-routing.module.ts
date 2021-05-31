import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UtentiComponent } from './utenti/utenti.component';
import { FattureComponent } from './fatture/fatture.component';
import { DettagliComponent } from './fatture/dettagli/dettagli.component';
import { ClientiComponent } from './clienti/clienti.component';

import { DeleteComponent } from './fatture/delete/delete.component';
import { AddFatturaComponent } from './fatture/add-fattura/add-fattura.component';
import { AddClienteComponent } from './clienti/add-cliente/add-cliente.component';


import { FattureClienteComponent } from './clienti/fatture-cliente/fatture-cliente.component';
import { DeleteClienteComponent } from './clienti/delete-cliente/delete-cliente.component';
import { AddFatturaClienteComponent } from './clienti/add-fattura-cliente/add-fattura-cliente.component';
import { ModificaFatturaClienteComponent } from './clienti/modifica-fattura-cliente/modifica-fattura-cliente.component';
import { DeleteFatturaClienteComponent } from './clienti/delete-fattura-cliente/delete-fattura-cliente.component';
import { ModificaClienteComponent } from './clienti/modifica-cliente/modifica-cliente.component';

const routes: Routes = [
  // {path:'', redirectTo:'', pathMatch:'full'},
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignUpComponent},
  {path:'utenti', component: UtentiComponent},
  //Fatture
  {path:'fatture', component: FattureComponent}, 
  {path:'fatture/dettagli/:id', component: DettagliComponent},
  {path:'fatture/delete/:id', component: DeleteComponent},
  {path:'fatture/add', component: AddFatturaComponent},
  //Clienti
  {path:'clienti', component: ClientiComponent},
  {path:'clienti/addcliente', component: AddClienteComponent},
  {path:'clienti/modificacliente/:id', component: ModificaClienteComponent},

  {path:'clienti/addfatturacliente/:id', component: AddFatturaClienteComponent},
  {path:'clienti/modificafattcliente/:id', component: ModificaFatturaClienteComponent},
  {path:'clienti/fatturecliente/:id', component: FattureClienteComponent},
  {path:'clienti/deletefattcliente/:id', component: DeleteFatturaClienteComponent},
  {path:'clienti/deletecliente/:id', component: DeleteClienteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
