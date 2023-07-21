
import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/model/products';
import { ProductsService } from 'src/app/service/products.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  // attributi 
  products:Products []|undefined; //undefined , questo attributo non è stato ancora inizializzato ,se l'API non ha risposto l'array rimane indefinito 
  serverError:any;

  // costruttore , viene chiamato a creazione del componente 
  // fa l'iniezione , quando l'admindashcompinent gli verra iniettata un istanza della classe author Service che potra accedere alle varie funzionalità 
  constructor(private productsService:ProductsService){ }

  ngOnInit(): void {
      this.productsService.getProducts()
        .subscribe({
          next: response => this.products = response,
          error: e => this.serverError = e.message
        })
      // effettuiamo l'iscrizione al servizio 
  }
}
