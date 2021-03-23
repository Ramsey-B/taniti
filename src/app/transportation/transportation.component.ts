import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transportation',
  templateUrl: './transportation.component.html',
  styleUrls: ['./transportation.component.css']
})
export class TransportationComponent implements OnInit {

  toIslandData = [
    {
      img: "https://images.unsplash.com/photo-1579275164975-599d0923f3cf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2688&q=80",
      description: "Most visitors arrive to Taniti on one of many 2 hour long flights from Hawaii. Tickets range from 30$ to 150$. Most flights are on Turboprop planes, but as the new Airport is completed more Jet engine aircraft will be used."
    },
    {
      img: "https://images.unsplash.com/photo-1544537563-87448da7bd8a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      description: "Taniti International Airport is currently undergoing an expansion! In order to accomadate more air travel, Taniti's government has spent over 20 million US dollars upgrading the airport to improve the comfort for our guests and to allow for more Jet engine aircraft. The renovations are expected to complete in 2023!"
    },
    {
      img: "https://images.unsplash.com/photo-1504434026032-a7e440a30b68?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2851&q=80",
      description: "Many guests arrive on the Island Adventure Cruise. The Cruise stops by Taniti Island one night a week before heading off to Bora Bora."
    }
  ];

  constructor() { }

  toIsland: any = [[]];
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  ngOnInit() {
    this.toIsland = this.chunk(this.toIslandData, 3);
    console.log(this.toIsland);
  }

}
