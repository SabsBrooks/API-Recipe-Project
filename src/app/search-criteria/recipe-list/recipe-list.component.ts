import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  @Input() searchResults;
  @Output() loveEvent = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  addToFavorites(favorite: object) {
    this.loveEvent.emit(favorite);
  }
}
