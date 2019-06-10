import { Component } from '@angular/core';
import { createElement } from 'projects/ng-tsx/src/public-api'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tsx-project';

  handleClick() {
    const node = this.render();
    console.log(node);
  }

  render() {
    return (
      <div>
        <span>Hello</span>
      </div>
    )
  }
}
