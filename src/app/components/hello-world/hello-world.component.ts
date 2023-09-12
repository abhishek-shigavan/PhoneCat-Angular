import { Component } from '@angular/core';

@Component({
  selector: 'hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent {
  message = "passing message from component"
  visibility = true
  handleClick() {
    console.log("Clicked")
  }

  spanId = "demoSpan"
  spanColor = "#687869"
  name = ""
  display = "block"

  handleToggleVisibility() {
    if(this.visibility) { 
      this.visibility = false
      this.display = "none"
    } else {
      this.visibility = true
      this.display = "block"
    }
  }

  handlePrintName() {
    this.name = "xyz"
    if(!this.visibility) {
      this.visibility = true
      this.display = "block"
    }
  }
}
