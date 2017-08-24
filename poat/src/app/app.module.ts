import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SuccesscdComponent } from './recipes/recipe-edit/src/app/successcd/successcd.component';
import { RecipeItemComponent } from './recipes/src/app/recipes/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/src/app/recipes/recipe-detail/recipe-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    SuccesscdComponent,
    RecipeItemComponent,
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
