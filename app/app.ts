import { Component } from '@angular/core'
import { Home } from './home/home'

@Component({
  selector: 'app',
  template: `
              <home></home>
            `,
  directives: [Home]
})

export class App{}
