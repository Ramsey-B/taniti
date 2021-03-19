import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-lodging',
  templateUrl: './lodging.component.html',
  styleUrls: ['./lodging.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LodgingComponent implements OnInit {
  bedData = [
    {
      title: 'Bed & Breakfast 1',
      description: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      contactInfo: 'Number or email',
      img: 'https://via.placeholder.com/400x250.png?text=B+And+B+Image'
    },
    {
      title: 'Bed & Breakfast 2',
      description: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      contactInfo: 'Number or email',
      img: 'https://via.placeholder.com/400x250.png?text=B+And+B+Image'
    },
    {
      title: 'Bed & Breakfast 3',
      description: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      contactInfo: 'Number or email',
      img: 'https://via.placeholder.com/400x250.png?text=B+And+B+Image'
    },
    {
      title: 'Bed & Breakfast 4',
      description: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      contactInfo: 'Number or email',
      img: 'https://via.placeholder.com/400x250.png?text=B+And+B+Image'
    },
    {
      title: 'Bed & Breakfast 5',
      description: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      contactInfo: 'Number or email',
      img: 'https://via.placeholder.com/400x250.png?text=B+And+B+Image'
    },
    {
      title: 'Bed & Breakfast 6',
      description: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      contactInfo: 'Number or email',
      img: 'https://via.placeholder.com/400x250.png?text=B+And+B+Image'
    },
    {
      title: 'Bed & Breakfast 7',
      description: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      contactInfo: 'Number or email',
      img: 'https://via.placeholder.com/400x250.png?text=B+And+B+Image'
    },
    {
      title: 'Bed & Breakfast 8',
      description: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      contactInfo: 'Number or email',
      img: 'https://via.placeholder.com/400x250.png?text=B+And+B+Image'
    },
    {
      title: 'Bed & Breakfast 9',
      description: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      contactInfo: 'Number or email',
      img: 'https://via.placeholder.com/400x250.png?text=B+And+B+Image'
    },
  ];

  hotelData = [
    {
      title: 'Hotel 1',
      description: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      phone: '(555) 123-1234',
      email: 'book@hotel.com',
      address: 'hotel address',
      img: 'https://via.placeholder.com/400x250.png?text=Hotel+Image'
    },
    {
      title: 'Hotel 2',
      description: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      phone: '(555) 123-1234',
      email: 'book@hotel.com',
      address: 'hotel address',
      img: 'https://via.placeholder.com/400x250.png?text=Hotel+Image'
    },
    {
      title: 'Hotel 3',
      description: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      phone: '(555) 123-1234',
      email: 'book@hotel.com',
      address: 'hotel address',
      img: 'https://via.placeholder.com/400x250.png?text=Hotel+Image'
    }
  ]

  hotels: any = [[]];
  beds: any = [[]];
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  ngOnInit() {
    this.beds = this.chunk(this.bedData, 3);
    this.hotels = this.chunk(this.hotelData, 3);
  }

}
