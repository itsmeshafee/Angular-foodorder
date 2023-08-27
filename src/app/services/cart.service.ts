import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { foods } from '../shared/models/food';
import { cartItem } from '../shared/models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart:Cart = new Cart();

  addToCart(food:foods) : void{
    let CartItem = this.cart.item.find(item => item.food.id === food.id);
    if(CartItem){
      this.changeQuantity(food.id, CartItem.quantity+1);
      return;
    }
    this.cart.item.push(new cartItem(food));
  }
  removeFromCart(foodId:number) : void{

    this.cart.item = this.cart.item.filter(item => item.food.id != foodId);
  }
  changeQuantity(quantity:number, foodId:number){
    let cartItem = this.cart.item.find(item => item.food.id === foodId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }
  getCart(): Cart{
    return this.cart;
  }
}
