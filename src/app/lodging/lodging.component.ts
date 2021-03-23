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
      title: 'Janes\' Beachside Cabana',
      description: 'This is a wonderful little beachside home with 2 bedrooms and 2 bathrooms. It comes with a small pool and a Cabana by the water in a secluded part of the beach.',
      contactInfo: '555-323-2354',
      img: 'https://images.unsplash.com/photo-1602693680528-56cf5d238b34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80'
    },
    {
      title: 'Will\'s Beach house',
      description: '1 Bed & 1 Bath in the top floor of a beach house. Quick access to downtown and beach by walking. Comes with free breakfast and wifi.',
      contactInfo: 'will@taniti.com',
      img: 'https://images.unsplash.com/photo-1544143086-828f66ac3945?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    },
    {
      title: 'Jim\'s Large Rental',
      description: '4 bedrooms and 3 Baths near downtown Taniti City. Will provide breakfast and local advise. I\'m a tour guide afterall!',
      contactInfo: '555-123-4322',
      img: 'https://images.unsplash.com/photo-1591465709469-5de113a071cc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2704&q=80'
    },
    {
      title: 'Jungle Beach House',
      description: 'House on the far side of the island. Easy access to the Volcano and remote beaches but a bit further from the city.',
      contactInfo: '(555) 323-2345',
      img: 'https://images.unsplash.com/photo-1483541954964-dfd427f3dac7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80'
    },
    {
      title: 'House with a view',
      description: '3 Bedroom 2 Bath house on the hills outside on Taniti City. It\s a bit further from the beach and city but it makes up for it with an amazing view!',
      contactInfo: 'sarah@taniti.com',
      img: 'https://images.unsplash.com/photo-1613404021719-95d13398f86e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    },
    {
      title: 'Ryan\'s House with a dock',
      description: 'This is a beach house a bit outside of town. Will rent out the boat or give boat tours. Can provide breakfast.',
      contactInfo: 'ryan@tanit.com',
      img: 'https://images.unsplash.com/photo-1567018548889-6d7f0eaff046?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2696&q=80'
    }
  ];

  hotelData = [
    {
      title: 'Sunnyside Hostel',
      description: 'Local hostel on main street with easy walking access to the beaches and downtown. 10 total rooms all come with breakfast and wifi.',
      phone: '(555) 233-2344',
      email: 'sunnyside@hotel.com',
      address: '2342 w main st.',
      img: 'https://images.unsplash.com/photo-1561831710-3a8abd9657cf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80'
    },
    {
      title: 'Lagoona\'s Beach huts',
      description: '1 Bed and 1 Bath beach hut rentals. Amazing access to the Yellow Leaf Bay beaches. Affordable and comfortable!',
      phone: '(555) 545-3244',
      email: 'lagoona@hotel.com',
      address: '2343 w Waterview way',
      img: 'https://images.unsplash.com/photo-1474874055390-459bc92357f3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2292&q=80'
    },
    {
      title: 'The Granger\'s Hotel on the Bay',
      description: 'Granger\'s has been a family owned and operated luxury hotel for over 30 years! Right on the waters of Yello Leaf Bay, each room comes with central heating and air, a 60" HD TV, WiFi, and free breakfast.',
      phone: '(555) 253-6567',
      email: 'grangers@hotel.com',
      address: '4352 e Bay ln.',
      img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80'
    },
    {
      title: 'The Oasis Hotel and Spa',
      description: 'Located in the Jungles of Taniti, get away from it all at The Oasis. Send the day exploring the jugles on our guided tours and return home for a relaxing massage in the spa.',
      phone: '(555) 789-7867',
      email: 'oasis@hotel.com',
      address: '4534 e Jungle rd.',
      img: 'https://images.unsplash.com/photo-1561538774-cde185d56cd3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
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
