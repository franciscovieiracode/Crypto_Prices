import { Component, OnInit } from '@angular/core';
import { GetPriceService } from '../services/get-price.service';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  prices:any
  search:string
  sorted:any

  constructor(private GetPriceService:GetPriceService, private router:Router) { 
    this.search=""
    this.sorted=""
  }

  ngOnInit(): void {
    this.GetPriceService.getPrices().subscribe((cryptoDetails:any)=>{
      if(cryptoDetails)
        this.sorted = cryptoDetails.sort((a:any, b:any) => parseFloat(b.price) - parseFloat(a.price));
        this.prices = this.sorted
        console.log(this.prices);
        
              
        setInterval(() => {         
          this.GetPriceService.getPrices().subscribe((cryptoDetails:any)=>{
            if(cryptoDetails)
              this.sorted = cryptoDetails.sort((a:any, b:any) => parseFloat(b.price) - parseFloat(a.price));
              this.prices = this.sorted
          }
        )}, 5000);}
    
  )}
  
  detailed(detailed:any){
    this.router.navigate(["/detailed/",detailed])
  }

}
