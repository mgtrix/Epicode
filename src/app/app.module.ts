import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './filterpipe.pipe';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UtentiComponent } from './utenti/utenti.component';
import { FattureComponent } from './fatture/fatture.component';
import { ClientiComponent } from './clienti/clienti.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DettagliComponent } from './fatture/dettagli/dettagli.component';
import { DeleteComponent } from './fatture/delete/delete.component';
import { AddFatturaComponent } from './fatture/add-fattura/add-fattura.component';

import { AddClienteComponent } from './clienti/add-cliente/add-cliente.component';
import { FattureClienteComponent } from './clienti/fatture-cliente/fatture-cliente.component';
import { DeleteClienteComponent } from './clienti/delete-cliente/delete-cliente.component';
import { AddFatturaClienteComponent } from './clienti/add-fattura-cliente/add-fattura-cliente.component';
import { ModificaFatturaClienteComponent } from './clienti/modifica-fattura-cliente/modifica-fattura-cliente.component';
import { ModificaClienteComponent } from './clienti/modifica-cliente/modifica-cliente.component';
import { DeleteFatturaClienteComponent } from './clienti/delete-fattura-cliente/delete-fattura-cliente.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    UtentiComponent,
    FattureComponent,
    ClientiComponent,
    DettagliComponent,
    DeleteComponent,
    AddFatturaComponent,
    AddClienteComponent,
    FattureClienteComponent,
    DeleteClienteComponent,
    AddFatturaClienteComponent,
    ModificaFatturaClienteComponent,
    ModificaClienteComponent,
    DeleteFatturaClienteComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
