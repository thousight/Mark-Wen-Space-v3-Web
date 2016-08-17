import { Component } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Title } from "../components/title/title";
import { Timeline } from "../components/timeline/timeline";

@Component({
  selector: "exp",
  template: `
            <div id="Exp" class="Exp content section scrollspy">
              <title [icon]="titleIcon" [title]="titleTitle"></title>
              <timeline [data]="exp"></timeline>
            </div>
            `,
  directives: [Title, Timeline]
})

export class Exp {
  private titleIcon = "briefcase";
  private titleTitle = "Experience";
  public exp;
  private expUrl = "http://mark-wen-space-v3-server.herokuapp.com/Exp";

  constructor(private http: Http) { }

  ngOnInit() {
    // Get Exp data from server
    this.http.get(this.expUrl)
             .map((res: Response) => res.json())
             .subscribe(
               data => { this.exp = data; },
               err => console.error(err)
             );
  }
}
