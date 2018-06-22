import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div style="text-align:center"><h2>Marvellous Infosystems</h2>
              <input type="text"></div>`,
  styles: [`input{
    background-color:blue;
    "text-align:center"
  }
  `]
})
export class AppComponent {
  title = 'App3';
}
