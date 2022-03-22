import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    
    title = 'pa-starter-angular';
    recipeList: string = "There are no recipes to list";
    recipeName: string = "";
    recipeInstructions: string = "";
    showEntryDiv: boolean = false;
  
    clickAddRecipe() {
        this.showEntryDiv = true;
        //console.log("Clicked button!");
    }
    
    submitRecipe() {
        let rName = this.recipeName;
        this.showEntryDiv = false;
        this.recipeList = rName;
    }

}

