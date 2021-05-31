import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MyaccessService } from './myaccess.service';

@Injectable({
  providedIn: 'root'
})
export class ClientiService {

  constructor(private myHttp: HttpClient, public router: Router, public access: MyaccessService) { }

  urlClienti = "https://epicode.online/epicodebeserviceunauth/api/clienti?page=0&size=400&sort=id,ASC" ;
  urlGetIdFattura = 'https://epicode.online/epicodebeserviceunauth/api/fatture/cliente/';
  urlSingolaFattura = 'https://epicode.online/epicodebeserviceunauth/api/fatture/'
  urlAddCliente = "https://epicode.online/epicodebeserviceunauth/api/clienti";

  urlInfoCliente = "https://epicode.online/epicodebeserviceunauth/api/clienti/";
  urlDeleteCliente = "https://epicode.online/epicodebeserviceunauth/api/clienti";

  urlDeleteFatturaCliente = 'https://epicode.online/epicodebeserviceunauth/api/fatture';
  urlAddFattura = 'https://epicode.online/epicodebeserviceunauth/api/fatture';
  urlModificaFattura = 'https://epicode.online/epicodebeserviceunauth/api/fatture/';


  myToken= this.access.myToken;
  myHeader = new HttpHeaders().set('Authorization', 'Bearer' + this.myToken)


  page;
  getClienti(event?) {
    if (event != null) {
      this.page = event - 1
      this.urlClienti = "https://epicode.online/epicodebeserviceunauth/api/clienti?page=" + this.page + "&size=20&sort=id", {headers: this.myHeader};
    }
    return this.myHttp.get(this.urlClienti)
  }
  getFattureCliente(id: number) {
    return this.myHttp.get(this.urlGetIdFattura + id +'?page=0&size=400&sort=id,ASC', {headers: this.myHeader});
  }
  getFatturaSingolaCliente(id: number) {
    return this.myHttp.get(this.urlSingolaFattura + id, {headers: this.myHeader});
  }
  getInfoCliente(id: number) {
    return this.myHttp.get(this.urlInfoCliente + id , {headers: this.myHeader})
  }

  ///PUT SINGOLA FATTURA 
  putSingolaFatturaCliente(id: number, fatture: any) {
    if (window.confirm('Sei sicuro di voler salvare?') && id === 0) {
      this.router.navigate(['clienti'])
    } else {
      this.myHttp.put(this.urlModificaFattura + id, fatture)
        .subscribe(
          response => {
            console.log('CHIAMATA PUT ' + JSON.stringify(response),
              this.router.navigate(["clienti"])
            )
            error => { console.log(error) }
          }
        )
    }
  }
  //AGGIUNGI SINGOLA FATTURA CLIENTE
  addFatturaCliente(id, data, numero, anno, importo, stato, cliente) {
    const datiFattura = {
      id: id,
      data: data,
      numero: numero,
      anno: anno,
      importo: importo,
      stato: stato,
      cliente: cliente
    }
    return this.myHttp.post(this.urlAddFattura, datiFattura)

  }
  ///DELETE SINGOLA FATTURA CLIENTE
  deleteFatturaCliente(id: number, fatturacliente: any) {
    window.confirm('Sei sicuro di voler eliminare definitivamente questo elemento?');
    console.log(this.myHttp.delete(this.urlDeleteFatturaCliente, fatturacliente));

    this.myHttp.delete(this.urlDeleteFatturaCliente + '/' + id, fatturacliente)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['clienti'])
        }
      )
  }

  //PUT MODIFICA CLIENTE
  putModificaCliente(id: number, cliente: any) {
    if (window.confirm('Sei sicuro di voler salvare?') && id === 0) {
      this.router.navigate(['clienti'])
    } else {
      this.myHttp.put(this.urlInfoCliente + id, cliente)
        .subscribe(
          response => {
            console.log('CHIAMATA PUT ' + JSON.stringify(response),
              this.router.navigate(["clienti"])
            )
            error => { console.log(error) }
          }
        )
    }
  }
  ///DELETE CLIENTE
  deleteCliente(id: number, cliente: any) {
    window.confirm('Sei sicuro di voler eliminare definitivamente questo elemento?');
    console.log(this.myHttp.delete(this.urlDeleteCliente, cliente));

    this.myHttp.delete(this.urlDeleteCliente + '/' + id, cliente)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['clienti'])
        }
      )
  }

  //AGGIUNGI CLIENTE
  addClient(id, ragioneSociale, partitaIva, tipoCliente, email, pec, telefono, nomeContatto, cognomeContatto, telefonoContatto, emailContatto, indirizzo, numerocivico, cap, localita, comune, provincia) {

    const datiCliente = {
      id: id,
      ragioneSociale: ragioneSociale,
      partitaIva: partitaIva,
      tipoCliente: tipoCliente,
      email: email,
      pec: pec,
      telefono: telefono,
      nomeContatto: nomeContatto,
      cognomeContatto: cognomeContatto,
      telefonoContatto: telefonoContatto,
      emailContatto: emailContatto,
      indirizzo: indirizzo,
      numerocivico: numerocivico,
      cap: cap,
      localita: localita,
      comune: comune,
      provincia: provincia
    }
    return this.myHttp.post(this.urlAddCliente, datiCliente)
  }


  ngOnInit() {

  }


}
