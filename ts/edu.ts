import { Component } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Title } from "./components/title";
import { Timeline } from "./components/timeline";

@Component({
  selector: "edu",
  template: `
            <div id="Edu" class="Edu content section scrollspy">
              <title [icon]="titleIcon" [title]="titleTitle"></title>
              <timeline [data]="edu"></timeline>
            </div>
            `,
  directives: [Title, Timeline]
})

export class Edu {
  private titleIcon = "briefcase";
  private titleTitle = "Education";
  public edu;
  private eduUrl = "http://mark-wen-space-v3-server.herokuapp.com/Edu";

  constructor(private http: Http) { }

  ngOnInit() {
    // Get Exp data from server
    this.http.get(this.eduUrl)
             .map((res: Response) => res.json())
             .subscribe(
               data => { this.edu = data; },
               err => console.error(err)
             );
  }
}
