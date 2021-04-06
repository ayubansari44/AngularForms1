import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FormControl} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button'; 
import { MatSliderModule } from '@angular/material/slider';
import {ThemePalette} from '@angular/material/core';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formGroup1: FormGroup;
  formGroup2: FormGroup;
  formGroup3: FormGroup;
  formGroup4: FormGroup;
  formGroup5: FormGroup;
  inOptional: boolean=false;

  toppings = new FormControl();

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  constructor(private _formBuilder: FormBuilder){}

    ngOnInit() {
      this.formGroup1 = this._formBuilder.group({
        firstCtlr: ['',Validators.required]
      });

      this.formGroup2 = this._formBuilder.group({
        secondCtlr: ['',Validators.required]
      });   
      
      this.formGroup3 = this._formBuilder.group({
        thirdCtlr: ['',Validators.required]
      }); 

      this.formGroup4 = this._formBuilder.group({
        forthCtlr: ['',Validators.required]
      }); 

      this.formGroup5 = this._formBuilder.group({
        fiveCtlr: ['',Validators.required]
      }); 
    }

    

    
}
