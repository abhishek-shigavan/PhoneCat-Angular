import { Component } from '@angular/core';

@Component({
  selector: 'hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent {
  message = "passing message from component"

  handleClick() {
    console.log("Clicked")
  }

  spanId = "demoSpan"
  spanColor = "#687869"
}
