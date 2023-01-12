import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basics'
  name = 'Luis';
  imgURL = 'https://picsum.photos/id/237/500/500'

  changeImage(e: KeyboardEvent) {
    this.imgURL = (e.target as HTMLInputElement).value
  }

  getName() {
    return this.name
  }

  logImg(event: string) {
    console.log(event)
  }
}
