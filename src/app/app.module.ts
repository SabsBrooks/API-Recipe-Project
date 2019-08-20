import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { SearchCriteriaComponent } from '../app/search-criteria/search-criteria.component'
import { RecipeListComponent } from './search-criteria/recipe-list/recipe-list.component';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';
import { HomeComponent } from './home/home.component';
import { InvalidComponent } from './invalid/invalid.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const appRoutes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "recipe-list", component: RecipeListComponent },
    { path: "favorites", component: FavoritesPageComponent },
    { path: "home", component: HomeComponent },
    { path: "search", component: SearchCriteriaComponent },
    { path: "**", component: InvalidComponent }
]

@NgModule({
    declarations: [
        AppComponent,
        SearchCriteriaComponent,
        RecipeListComponent,
        FavoritesPageComponent,
        HomeComponent,
        InvalidComponent,
        NavBarComponent
    ],
    imports: [
        BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
