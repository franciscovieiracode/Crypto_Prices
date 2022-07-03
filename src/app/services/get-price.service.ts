import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError  } from 'rxjs';


const endpoint = 'https://api.binance.com/api/v3/ticker/price?symbols=[%22BTCUSDT%22,%22ETHUSDT%22,%22BNBUSDT%22,%22XRPUSDT%22,%22ADAUSDT%22,%22SOLUSDT%22,%22DOGEUSDT%22,%22TRXUSDT%22,%22SHIBUSDT%22,%22AVAXUSDT%22,%22MATICUSDT%22,%22LTCUSDT%22,%22UNIUSDT%22,%22LINKUSDT%22,%22XLMUSDT%22,%22NEARUSDT%22,%22ATOMUSDT%22,%22ALGOUSDT%22,%22XMRUSDT%22,%22VETUSDT%22,%22MANAUSDT%22,%22SANDUSDT%22,%22APEUSDT%22,%22HBARUSDT%22,%22ICPUSDT%22,%22CAKEUSDT%22,%22EOSUSDT%22]';
const endpoint1 ='https://www.binance.com/exchange-api/v2/public/asset-service/product/get-products'
const httpOptions = {
  
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class GetPriceService {

  constructor(private http: HttpClient, private router:Router) { }


  getPrices(): Observable<any>{
    return this.http.get<any>(endpoint)
    .pipe(catchError(this.handleError));
  }

  getAllInfo():Observable<any>{
    return this.http.get<any>(endpoint1)
    .pipe(catchError(this.handleError))
  }


  private handleError(error: HttpErrorResponse){
    return throwError(error.status)
}


}
