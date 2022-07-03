import { Component, OnInit } from '@angular/core';
import { GetPriceService } from '../services/get-price.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  prices:any
  search:string

  constructor(private GetPriceService:GetPriceService, private router:Router) { 
    this.search=""
  }

  ngOnInit(): void {
    this.GetPriceService.getPrices().subscribe((cryptoDetails:any)=>{
      if(cryptoDetails)
        this.prices = cryptoDetails      
        setInterval(() => {         
          this.GetPriceService.getPrices().subscribe((cryptoDetails:any)=>{
            if(cryptoDetails)
              this.prices = cryptoDetails
          }
        )}, 5000);}
    
  )}
  
  detailed(detailed:any){
    this.router.navigate(["/detailed/",detailed])
  }

}
