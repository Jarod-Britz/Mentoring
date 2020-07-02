import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private userInput = new BehaviorSubject("");
  currentInput = this.userInput.asObservable();
  selectedProduct: any;
  productID: (product: any) => void;

  constructor(private firestore: AngularFirestore) { }


getProducts() {
    return this.firestore.collection('Products').snapshotChanges();
}

getProductID(product) {
    this.selectedProduct = product;
  }



}
