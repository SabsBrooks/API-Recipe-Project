import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class RecipeService {
  favorites: any[] = [];

  constructor(private http: HttpClient) {}

  getFoodData(searchTerm: string, excluded: string): Observable<any> {
    console.log(excluded);
    return this.http.get(
      `https://api.edamam.com/search?app_id=f2710e02&app_key=a8ece75c13201d27f03d0f317a189495&q=${searchTerm}&excluded=${excluded}`
    );
  }
  moveToFavorites(love: object) {
    this.favorites.push(love);
    console.log(this.favorites);
  }

// created the method that the component will use to show the favorites list "get"
  getFavorites(): any[] {
    return this.favorites;
  }
}


// removeFromFavorites(love: object) {
  //   this.favorites.splice(love);
  //   console.log(this.favorites);
  // }