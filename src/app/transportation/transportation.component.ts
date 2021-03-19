import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transportation',
  templateUrl: './transportation.component.html',
  styleUrls: ['./transportation.component.css']
})
export class TransportationComponent implements OnInit {

  toIslandData = [
    {
      img: "https://via.placeholder.com/400x250.png?text=Plane+Image",
      description: "A description about the air travel to Taniti"
    },
    {
      img: "https://via.placeholder.com/400x250.png?text=Airport+Image",
      description: "A description about the Taniti International airport"
    },
    {
      img: "https://via.placeholder.com/400x250.png?text=Cruise+Image",
      description: "A description about the taking a Cruise ship to Taniti"
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
