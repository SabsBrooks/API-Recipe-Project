import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// imported output and eventemitter 

import { RecipeService } from '../recipe.service';
// imported service

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css']
})
export class FavoritesPageComponent implements OnInit {

// created this so that we could store our favorites
favorites: any[] = [];

  constructor(private recipeService: RecipeService) { }
// injected recipe service from the service


  ngOnInit() {
    this.favorites = this.recipeService.getFavorites();
    // put this inside on ngOnInit so that this would come up on initialization of the page 
  }

  removeFavorite(index: number): void {
    this.favorites.splice(index, 1);
  }
}
