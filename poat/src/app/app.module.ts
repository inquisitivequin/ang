import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/app-header.component'
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-item/recipe-item.component';
import { RecipeList } from './recipes/recipe-list.component'
import { EditList } from './shopping-list/edit-list/edit-list.component'
import { ShoppingList } from './shopping-list/shoppinglist.component';
import { RecipesComponent } from './recipes/recipes.component'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeList,
    EditList,
    ShoppingList,
    RecipesComponent

    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
