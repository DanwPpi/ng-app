// This line is a comment
// This statement imports Component class from an Angular package @angular/core
import { Component } from '@angular/core';
import { MyLibService } from '../../projects/my-lib/src/lib/my-lib.service';

/* 
You can put comments in block
Below @Component() is a decorator (function call), telling Angular about the AppComponent:
1. Its selector is app-root (see index.html for its use)
2. Its HTML template is in file app.component.html (see it in Windows File Explorer)
3. And its style is in file app.component.css
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// This statement declares class AppComponent (and export it). A class is a composite, user-defined type.
export class AppComponent {
  // It has only 1 data (or property) named title, and assign 'angular-tour-of-heroes' to it
  // The property is of type string, another composite but built-in type
  title = 'Tour of Heroes';

  constructor(private myLibService: MyLibService) {
    console.log("DW myLibService", myLibService)
  }
}
