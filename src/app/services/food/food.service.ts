import { Injectable } from '@angular/core';
import { foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):foods{
    return this.getAll().find(food => food.id ==id)!;
  }

  getAllFoodByTag(tag:string): foods[]{

    return tag == "All"? this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAllTag():Tag[]{
    return[
      {name:'All', count:12},
      {name:'FastFood', count:3},
      {name:'Pizza', count:1},
      {name:'Lunch', count:6},
      {name:'SlowFood', count:2},
      // {name:'Hamburger', count:1},
      {name:'Fry', count:1},
      {name:'Soup', count:1},
    ]
  }

  getAll():foods[]{
    return[
      {
        id: 1,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 120,
        favorite: false,
        origins: ['Italy'],
        star: 4.5,
        imageUrl: 'assets/food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch']
      },
      {
        id: 2,
        name: 'Burger Deluxe',
        cookTime: '15-25',
        price: 150,
        favorite: false,
        origins: ['USA'],
        star: 4.2,
        imageUrl: 'assets/food-2.jpg',
        tags: ['FastFood', 'Burger', 'Lunch', 'Dinner']
      },
      {
        id: 3,
        name: 'Pasta Carbonara',
        cookTime: '20-30',
        price: 180,
        favorite: false,
        origins: ['Italy'],
        star: 4.7,
        imageUrl: 'assets/food-3.jpg',
        tags: ['Italian', 'Pasta', 'Dinner']
      },
      {
        id: 4,
        name: 'Sushi Platter',
        cookTime: '30-40',
        price: 220,
        favorite: false,
        origins: ['Japan'],
        star: 4.8,
        imageUrl: 'assets/food-4.jpg',
        tags: ['Japanese', 'SlowFood', 'Dinner']
      },
      {
        id: 5,
        name: 'Biryani Special',
        cookTime: '25-35',
        price: 200,
        favorite: false,
        origins: ['India'],
        star: 4.6,
        imageUrl: 'assets/food-5.jpg',
        tags: ['Indian', 'SlowFood', 'Lunch', 'Dinner']
      },
      {
        id: 6,
        name: 'Chicken 65',
        cookTime: '20-40',
        price: 200,
        favorite: false,
        origins: ['India'],
        star: 4.9,
        imageUrl: 'assets/food-6.jpg',
        tags: ['FastFood', 'Dinner','Fry']
      },
      {
        id: 7,
        name: 'Fish Tacos',
        cookTime: '15-25',
        price: 130,
        favorite: false,
        origins: ['Mexico'],
        star: 4.3,
        imageUrl: 'assets/food-7.jpg',
        tags: ['Mexican', 'Seafood', 'Lunch', 'Dinner']
      },
      {
        id: 8,
        name: 'Miso Soup',
        cookTime: '10-15',
        price: 80,
        favorite: false,
        origins: ['Japan'],
        star: 4.0,
        imageUrl: 'assets/food-8.jpg',
        tags: ['Japanese', 'Soup', 'Appetizer']
      },
      {
        id: 9,
        name: 'Caesar Salad',
        cookTime: '10-15',
        price: 100,
        favorite: false,
        origins: ['Mexico'],
        star: 4.4,
        imageUrl: 'assets/food-9.jpg',
        tags: ['Salad', 'Lunch', 'Dinner', 'Healthy']
      },
      {
        id: 10,
        name: 'Pad Thai',
        cookTime: '20-30',
        price: 160,
        favorite: false,
        origins: ['Thailand'],
        star: 4.7,
        imageUrl: 'assets/food-10.jpg',
        tags: ['Thai', 'Noodles', 'Dinner']
      },
      {
        id: 11,
        name: 'Tandoori Chicken',
        cookTime: '30-40',
        price: 180,
        favorite: false,
        origins: ['India'],
        star: 4.5,
        imageUrl: 'assets/food-11.jpg',
        tags: ['Indian', 'Chicken', 'Dinner']
      },
      {
        id: 12,
        name: 'Greek Salad',
        cookTime: '10-15',
        price: 110,
        favorite: false,
        origins: ['Greece'],
        star: 4.2,
        imageUrl: 'assets/food-12.jpg',
        tags: ['Salad', 'Lunch', 'Dinner', 'Healthy']
      }
    // {
    //   id:1,
    //   name:'Pizza Pepperoni',
    //   cookTime:'10-20',
    //   price:120,
    //   favorite:false,
    //   origins:['italy'],
    //   star:4.5,
    //   imageUrl:'assets/food-1.jpg',
    //   tags:['FastFood', 'Pizza', 'Lunch']
    // },
    // {
    //   id:2,
    //   name:'Meatballs',
    //   cookTime:'10-20',
    //   price:120,
    //   favorite:false,
    //   origins:['italy'],
    //   star:4.5,
    //   imageUrl:'assets/food-2.jpg',
    //   tags:['FastFood', 'Pizza', 'Lunch']
    // },
    // {
    //   id:3,
    //   name:'Burger',
    //   cookTime:'10-20',
    //   price:120,
    //   favorite:false,
    //   origins:['italy'],
    //   star:4.5,
    //   imageUrl:'assets/food-3.jpg',
    //   tags:['FastFood', 'Pizza', 'Lunch']
    // },
    // {
    //   id:4,
    //   name:'Pizza Pepperoni',
    //   cookTime:'10-20',
    //   price:120,
    //   favorite:false,
    //   origins:['italy'],
    //   star:4.5,
    //   imageUrl:'assets/food-4.jpg',
    //   tags:['FastFood', 'Pizza', 'Lunch']
    // },
    // {
    //   id:5,
    //   name:'Pizza Pepperoni',
    //   cookTime:'10-20',
    //   price:120,
    //   favorite:false,
    //   origins:['italy'],
    //   star:4.5,
    //   imageUrl:'assets/food-5.jpg',
    //   tags:['FastFood', 'Pizza', 'Lunch']
    // },
    // {
    //   id:6,
    //   name:'Pizza Pepperoni',
    //   cookTime:'10-20',
    //   price:120,
    //   favorite:false,
    //   origins:['italy'],
    //   star:4.5,
    //   imageUrl:'assets/food-6.jpg',
    //   tags:['FastFood', 'Pizza', 'Lunch']
    // },
    // {
    //   id:7,
    //   name:'Meatballs',
    //   cookTime:'10-20',
    //   price:120,
    //   favorite:false,
    //   origins:['italy'],
    //   star:4.5,
    //   imageUrl:'assets/food-7.jpg',
    //   tags:['FastFood', 'Pizza', 'Lunch']
    // },
    // {
    //   id:8,
    //   name:'Burger',
    //   cookTime:'10-20',
    //   price:120,
    //   favorite:false,
    //   origins:['italy'],
    //   star:4.5,
    //   imageUrl:'assets/food-8.jpg',
    //   tags:['FastFood', 'Pizza', 'Lunch']
    // }
    ]
  }
}
