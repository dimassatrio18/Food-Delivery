import { Injectable } from '@angular/core';
import { Food } from '../models/food.model';

@Injectable({
    providedIn: 'root',
})
export class FoodService {
    getFoods(): Food[] {
        return [
            {
                id: 1,
                title: 'Sea Food',
                price: 12,
                image: 'assets/images/seafood.png',
                description: 
                    'In addition to the freset seafood, there are corn, cilantro, and tomatoes: their first'
            },
            {
                id: 2,
                title: 'Hamburger',
                price: 21,
                image: 'assets/images/hamburger.png',
                description: 
                    'In addition to the freset seafood, there are corn, cilantro, and tomatoes: their first'
            },
            {
                id: 3,
                title: 'Mussels',
                price: 16,
                image: 'assets/images/mussel.png',
                description: 
                    'In addition to the freset seafood, there are corn, cilantro, and tomatoes: their first'
            },
            {
                id: 4,
                title: 'Pizza',
                price: 20,
                image: 'assets/images/pizza.png',
                description: 
                    'In addition to the freset seafood, there are corn, cilantro, and tomatoes: their first'
            },
            {
                id: 5,
                title: 'Breakfast',
                price: 10,
                image: 'assets/images/scottish-breakfast.png',
                description: 
                    'In addition to the freset seafood, there are corn, cilantro, and tomatoes: their first'
            },
            {
                id: 6,
                title: 'Tambi',
                price: 13,
                image: 'assets/images/tambi.png',
                description: 
                    'In addition to the freset seafood, there are corn, cilantro, and tomatoes: their first'
            },
        ];
    }

    getFood(id: number): Food | undefined {
        return this.getFoods().find((food) => food.id === id);
    }
}