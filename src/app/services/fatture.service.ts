import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login';
import { MyaccessService } from './myaccess.service';

@Injectable({
  providedIn: 'root'
})
export class FattureService {

  constructor(private myHttp: HttpClient , public router: Router, public login: LoginService) { }


 

  urlFatture = "https://epicode.online/epicodebeserviceunauth/api/fatture?page=0&size=20&sort=id,ASC";
  urlPutFattura = 'https://epicode.online/epicodebeserviceunauth/api/fatture/';
  urlPostFattura = 'https://epicode.online/epicodebeserviceunauth/api/fatture/';
  urlDelete= "https://epicode.online/epicodebeserviceunauth/api/fatture";

  
  page;

  myToken= this.login.myToken;
  myHeader = new Headers({
    'Authorization': 'Bearer' + this.myToken
  })

  headers = new HttpHeaders({'Content-Type': 'application/json'});
  options = {headers: this.myHeader}
  
  getFatture(event?){
    if(event != null) { 
      this.page = event -1
      this.urlFatture = "https://epicode.online/epicodebeserviceunauth/api/fatture?page="+ this.page +"&size=20&sort=id" ,{headers: this.myHeader} ;
      console.log(this.page)
      }
  
    return this.myHttp.get(this.urlFatture)
  }



  putSingolaFattura(id: number, fattura: any) {
    if (window.confirm('Sei sicuro di voler salvare?') && id === 0) {
      this.router.navigate(['fatture'])
    } else {
      this.myHttp.put(this.urlPutFattura + id, fattura)
        .subscribe(
          response => {
            console.log('CHIAMATA PUT ' + JSON.stringify(response),
              this.router.navigate(["fatture"])
            )
           
          }
        )
    }
  }

  ///DELETE
  deleteFattura(id:number, fattura:any) {
    window.confirm('Sei sicuro di voler eliminare definitivamente questo elemento?');
    console.log(this.myHttp.delete(this.urlDelete, fattura) );
    
    this.myHttp.delete(this.urlDelete +'/'+ id , fattura)
    .subscribe(
      response => {
        console.log(response);
        this.router.navigate(['fatture'])
      }
    )
  }

  addFatturaCliente(data, numero, anno, importo, stato, cliente){
    const datiFattura={
      data:data,
      numero: numero,
      anno: anno,
      importo: importo,
      stato: stato,
      cliente: cliente
    }
     return this.myHttp.post(this.urlPostFattura, datiFattura)

  }

}

