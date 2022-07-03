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

  constructor(private router:Router,private GetAllData:GetPriceService) { }

  ngOnInit(): void {
    const coin = this.router.url.split('/').pop();
    this.ticket=coin
    
    this.GetAllData.getAllInfo().subscribe((data:any)=>{
      if(data)
        this.data = data.data

        for(let i =0; i< this.data.length;i++){
          if(this.data[i].s === this.ticket)
            this.ticketData = this.data[i]
        }
    })
  }
  mainmenu(){
    this.router.navigate(['/'])
  }
}
