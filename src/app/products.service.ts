import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
selectedProduct: any;

  constructor(private firestore: AngularFirestore) { }


getProducts() {
    return this.firestore.collection('Products').snapshotChanges();
    
}

}
