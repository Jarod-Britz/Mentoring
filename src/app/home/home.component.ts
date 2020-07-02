import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
products;
productId;

  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    autoplay: false,
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
      console.log(data);
      
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
      for (let index = 0; index < this.products.length; index++) {
        $('.background-image-{{product[index].name}}').css('background-image','url(' + this.products[index].picture +')')
        
      }
    })
    
  }
    


    getProductID(product){
      this.productsService.getProductID(product);
      this.router.navigate(['/product-details']);
    }

  }


