import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card-product',
  imports: [],
  templateUrl: './card-product.html',
  styleUrl: './card-product.css',
})
export class CardProduct {
  postUrl = input<string>()
  title = input<string>()
  tag = input<string>()
  description = input<string>()
  button = input<string>()
}
