import { Component, OnInit } from "@angular/core";
import { RecipeService } from "../recipe.service";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-search-criteria",
  templateUrl: "./search-criteria.component.html",
  styleUrls: ["./search-criteria.component.css"]
})
export class SearchCriteriaComponent implements OnInit {
  foodData: any;

  constructor(private recipeService: RecipeService, router: Router) {}

  ngOnInit() {}

  getData(form: NgForm) {
    this.recipeService
      .getFoodData(form.value.searchTerm, form.value.excluded)
      .subscribe(response => {
        console.log(response.hits);
        this.foodData = response.hits;
      });
  }

  addToFavorites(favorite: object) {
    this.recipeService.moveToFavorites(favorite);
  }
}
