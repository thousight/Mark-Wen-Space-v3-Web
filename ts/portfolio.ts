import { Component } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Title } from "./components/title";

@Component({
  selector: "portfolio",
  template: `
            <div id="Portfolio" class="Portfolio content section scrollspy">
              <title [icon]="titleIcon" [title]="titleTitle"></title>
            </div>
            `,
  directives: [Title]
})

export class Portfolio {
  private titleIcon = "briefcase";
  private titleTitle = "Portfolio";
  public portfolio;
  private portfolioUrl = "http://mark-wen-space-v3-server.herokuapp.com/Portfolio";

  constructor(private http: Http) { }

  ngOnInit() {
    // Get Exp data from server
    this.http.get(this.portfolioUrl)
             .map((res: Response) => res.json())
             .subscribe(
               data => { this.portfolio = data; },
               err => console.error(err)
             );
  }
}
