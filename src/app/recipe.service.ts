import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class RecipeService {
  favorites: any[] = [];

  constructor(private http: HttpClient) {}

  getFoodData(searchTerm: string): Observable<any> {
    return this.http.get(
      `https://api.edamam.com/search?q=${searchTerm}&app_id=f2710e02&app_key=6adff8e44e31929ebc5207d837ce5ccb`
    );
  }
  moveToFavorites(love: object) {
    this.favorites.push(love);
    console.log(this.favorites);
  }

  // removeFromFavorites(love: object) {
  //   this.favorites.splice(love);
  //   console.log(this.favorites);
  // }
  
  // created the method that the component will use to show the favorites list "get"
  getFavorites(): any[] {
    return this.favorites;
  }
}
