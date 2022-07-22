import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { GetPriceService } from '../services/get-price.service';


@Component({
  selector: 'app-detailed-crypto',
  templateUrl: './detailed-crypto.component.html',
  styleUrls: ['./detailed-crypto.component.css']
})
export class DetailedCryptoComponent implements OnInit {

  ticket:any
  data:any
  ticketData:any
  notFound:boolean = false

  constructor(private router:Router,private GetAllData:GetPriceService) { }

  ngOnInit(): void {
    const coin = this.router.url.split('/').pop();
    this.ticket=coin    
    
    this.GetAllData.getAllInfo().subscribe((data:any)=>{
      if(data){
        this.data = data.data

        for(let i =0; i< this.data.length;i++){
          if(this.data[i].s === this.ticket)
             return this.ticketData = this.data[i]
        }
        this.notFound = true
      }
    })
  }
  mainmenu(){
    this.router.navigate(['/'])
  }
}
