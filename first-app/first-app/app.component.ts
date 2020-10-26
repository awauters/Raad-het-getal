import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class appComponent {
  title = 'first-app';

  randomNumber: number = Math.ceil(Math.random() * 100);
  aantalBeurten: number = 10;

  feedback: string = null;

  valideerGok = (value) => {
    this.aantalBeurten = this.aantalBeurten - 1;
    if (value == this.randomNumber) {
      this.feedback = "Proficiat!";
    } else if (value < this.randomNumber) {
      this.feedback = "Je gok was te laag.";
    } else {
      this.feedback = "Gok een lager getal.";
    }
  }

  reset = () => {
    this.randomNumber = Math.ceil(Math.random() * 100);
    this.aantalBeurten = 10;
    this.feedback = null;
  }
}
