import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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


    getProduct(){
      this.productsService.getProducts();
      this.router.navigate(['/product-details']);
    }
  }


