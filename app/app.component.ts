import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="parallax-container">
    <div class="parallax"><img src="images/parallax1.jpg"></div>
    </div>
    <div class="section white">
    <div class="row container">
      <h2 class="header">Drew Nase</h2>
      <p class="grey-text text-darken-3 lighten-3">I am going to put some stuff here.</p>
    </div>
    </div>
    <div class="parallax-container">
      <div class="parallax"><img src="images/parallax2.jpg"></div>
    </div>
    <div class="row container">
      <h2 class="header">MOAR STUFF</h2>
      <p class="grey-text text-darken-3 lighten-3">This is more text and stuff.</p>
    </div>
    `
})

export class AppComponent implements AfterViewInit {
  ngAfterViewInit() {
    $('.parallax').parallax();
  }
}
