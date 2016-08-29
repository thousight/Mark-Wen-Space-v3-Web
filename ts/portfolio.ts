import { Component, Input } from "@angular/core";
import { Title } from "./components/title";

@Component({
  selector: "portfolio",
  template: `
            <div id="Portfolio" class="Portfolio content section scrollspy">
              <title [icon]="titleIcon" [title]="titleTitle"></title>
              <div class="portfolio-list row">
                <div class="col s12 m12 l8 offset-l2">
                  <div class="portfolio-card col s12 m5 l5 card hoverable" [ngClass]="{ 'offset-l1 offset-m1': even }" *ngFor="let portfolio of portfolios; let even = even">
                    <div class="card-image">
                      <img src="../img/home.jpg">
                      <span class="card-title">{{portfolio.title}}</span>
                    </div>
                    <div class="portfolio-card-content card-content">
                      <p>{{portfolio.purpose}}</p>
                    </div>
                    <div class="card-action">
                      <a href="#">Details</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            `,
  directives: [Title]
})

export class Portfolio {
  private titleIcon = "folder-open";
  private titleTitle = "Portfolio";
  @Input("data") portfolios: Array<Object>;
}
