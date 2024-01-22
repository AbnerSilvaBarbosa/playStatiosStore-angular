import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() public isExclusive: boolean = true;
  @Input() public consoles: string[] = ['PS4', 'PS3', 'PS Vita'];
  @Input() public imageUrl: string = '';
  @Input() public priceGame: string = '00.00';

  constructor() {}

  ngOnInit(): void {}
}
