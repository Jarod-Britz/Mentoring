import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  selectedProduct;
  products;
  productId;


 @Input()
 currentProduct;



  constructor(private productsService:ProductsService) { }

  ngOnInit(){
    // this.selectedProduct = this.productsService.selectedProduct;
    // this.products = this.selectedProduct;

    // console.log(this.products);
    // this.productsService.getProductID(this.productId);

    this.selectedProduct = this.productsService.selectedProduct;
    this.productId = this.selectedProduct;

    console.log(this.selectedProduct);
    
    this.productsService.getProductID(this.productId);


    // this.productsService.getProducts().subscribe(data => {
    //   this.products = data.map(e => {
    //     return {
    //       id: e.payload.doc.id,
    //       isEdit: false,
    //       name: e.payload.doc.data()['name'],
    //       picture: e.payload.doc.data()['picture'],
    //       price: e.payload.doc.data()['price'],
    //       description: e.payload.doc.data()['description'],
    //       ingredients: e.payload.doc.data()['ingredients'],
    //       nutritionalValue: e.payload.doc.data()['nutritional-value'],
    //     };
    //   })
    //   console.log(this.products);
      
    // })

}
}

