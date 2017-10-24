import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   <div class="container">
      <h1>StarCraft Builds {{month}}/{{day}}/{{year}}</h1>
      <h3>{{currentFocus}}</h3>
      <ul>
       <li [class]="priorityColor(currentBuild)" *ngFor="let currentBuild of builds">{{currentBuild.title}} <button (click)="editBuild(currentBuild)">Edit!</button></li>
     </ul>
     <hr>
      <div *ngIf="selectedBuild">
        <h3>{{selectedBuild.title}}</h3>
        <h3>Edit Build</h3>
        <label>Enter New Build Title:</label>
        <input [(ngModel)]="selectedBuild.title">
        <label>Enter Build Priority (1-3):</label>
        <br>
        <input type="radio" [(ngModel)]="selectedBuild.priority" [value]="1">1 (Low Priority)<br>
        <input type="radio" [(ngModel)]="selectedBuild.priority" [value]="2">2 (Medium Priority)<br>
        <input type="radio" [(ngModel)]="selectedBuild.priority" [value]="3">3 (High Priority)
        <button (click)="finishedEditing()">Done</button> <!--this is calling57  -->
     </div>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Angular Starcraft Builds';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1; //7
  day: number = this.currentTime.getDate(); //7
  year: number = this.currentTime.getFullYear(); //7
  builds: Build[] = [
    new Build ('Javi Rice', ['marines', 'thors', 'siege tanks'], ['1. Barracks ', '2. Armory ', '3. Factory '], 1),
    new Build ('Keegan Soup', ['starcraft', 'carriers', 'stalkers'], ['1. starport', '2. get carriers fast', '3. Keegan wins'], 2),
    new Build ('Andy Special', ['marines', 'medivacs', 'marauders'], ['1. Expands', '2. Tells Keegan to get upgrades', '3. We good guys'], 3)
  ];
  selectedBuild = null;

  //function that connects public priority with it's class priorityColor
  priorityColor(currentBuild){
   if (currentBuild.priority === 3){
     return "bg-danger";
   } else if (currentBuild.priority === 2) {
     return  "bg-warning";
   } else {
     return "bg-info";
   }
 }

 editBuild(clickedBuild) {
    this.selectedBuild = clickedBuild;
  }

  finishedEditing() {
    this.selectedBuild = null;
  }

}

export class Build{
  constructor(public title: string, public units: string[], public buildOrder: string[], public priority: number){
  }
}
