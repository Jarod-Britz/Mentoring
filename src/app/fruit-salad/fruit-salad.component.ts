import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fruit-salad',
  templateUrl: './fruit-salad.component.html',
  styleUrls: ['./fruit-salad.component.css']
})
export class FruitSaladComponent implements OnInit {

  products: any;

  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    autoplay: true,
    autoplaySpeed: 1200,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }


  constructor(private productsService:ProductsService,private router: Router) { }

  ngOnInit() {
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


    getProduct(){
      this.productsService.getProducts();
      this.router.navigate(['/fruit-salad']);
    }

}
