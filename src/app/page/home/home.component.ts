import { Component, OnInit } from '@angular/core';

type TCard = {
  imageURL: string;
  isExclusive: boolean;
  consoles: string[];
  priceGame: string;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public cards: TCard[] = [
    {
      imageURL: 'assets/ac-cover.jpg',
      consoles: ['PS4', 'PS3'],
      isExclusive: false,
      priceGame: '55.99',
    },
    {
      imageURL: 'assets/bt-1.jpg',
      consoles: ['PS4', 'PS3'],
      isExclusive: true,
      priceGame: '55.99',
    },
    {
      imageURL: 'assets/bt-4.jpg',
      consoles: ['PS4', 'PS3'],
      isExclusive: false,
      priceGame: '55.99',
    },
    {
      imageURL: 'assets/bt-5.jpg',
      consoles: ['PS4', 'PS3'],
      isExclusive: true,
      priceGame: '55.99',
    },
    {
      imageURL: 'assets/bt-bad-company-2.jpg',
      consoles: ['PS4', 'PS3'],
      isExclusive: false,
      priceGame: '55.99',
    },
    {
      imageURL: 'assets/bt-hardline.jpg',
      consoles: ['PS4', 'PS3'],
      isExclusive: true,
      priceGame: '55.99',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
