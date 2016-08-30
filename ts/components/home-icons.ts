import { Component, Input } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

@Component({
  selector: "home-icons",
  template: `
            <div class="home-icons-wrapper">
              <ul class="home-icons-ul no-select">
                <li class="home-icons-li"
                *ngFor="let link of links">
                  <a href={{link.url}} target="_blank">
                    <span class="home-icons-icon {{link.icon}}"></span>
                  </a>
                </li>
              </ul>
            </div>
            `
})

export class HomeIcons {
  @Input("data") links: Array<Object>;
}
