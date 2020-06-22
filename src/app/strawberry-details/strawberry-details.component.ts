import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import {FormControl} from '@angular/forms';
import {TooltipPosition} from '@angular/material';

@Component({
  selector: 'app-strawberry-details',
  templateUrl: './strawberry-details.component.html',
  styleUrls: ['./strawberry-details.component.css']
})
export class StrawberryDetailsComponent implements OnInit {

positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

selectedProduct;
products;

  constructor(private productsService:ProductsService) { }

  ngOnInit() {
//     this.selectedProduct = this.productsService.selectedProduct;
//     this.productId = this.selectedProduct.id;

// console.log(this.productId);
// this.productsService.getProducts().subscribe(data => {
//   console.log(data);

this.productsService.getProducts().subscribe(data => {
      this.products = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          name: e.payload.doc.data()['name'],
          picture: e.payload.doc.data()['picture'],
          price: e.payload.doc.data()['price'],
          description: e.payload.doc.data()['description'],
          ingredients: e.payload.doc.data()['ingredients'],
          nutritionalValue: e.payload.doc.data()['nutritional-value'],
        };
      })
      console.log(this.products);
      
    })
  
}

  

}
