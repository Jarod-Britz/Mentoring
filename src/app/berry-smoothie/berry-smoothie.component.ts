import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {FormControl} from '@angular/forms';
import {TooltipPosition} from '@angular/material';

@Component({
  selector: 'app-berry-smoothie',
  templateUrl: './berry-smoothie.component.html',
  styleUrls: ['./berry-smoothie.component.css']
})
export class BerrySmoothieComponent implements OnInit {

  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

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
      this.router.navigate(['/strawberry-details']);
    }

}
