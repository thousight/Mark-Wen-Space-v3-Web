import { Component } from '@angular/core'
import { HomeIcons } from './home-icons'

@Component({
  selector: 'home',
  template: `
            <div class="Home content section scrollspy">
              <h1 class="home-title no-select">Mark Wen</h1>
              <h3 class="home-subtitle no-select">Web and Mobile</h3><br />
              <h3 class="home-subtitle no-select">Developer</h3>
              <home-icons></home-icons>
            </div>
            `,
  directives: [HomeIcons]
})

export class Home{}
