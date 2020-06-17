import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
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
          Name: e.payload.doc.data()['name'],
          Picture: e.payload.doc.data()['picture'],
          Price: e.payload.doc.data()['price'],
          Description: e.payload.doc.data()['description'],
          Ingredients: e.payload.doc.data()['ingredients'],
          nutritionalValue: e.payload.doc.data()['nutritional-value'],
        };
      })
      console.log(this.products);
      
    })
  
}

  

}
