import { Component } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";
import { AllDataService } from "../allDataService";

@Component({
  selector: "home-icons",
  template: `
            <div class="home-icons-wrapper">
              <ul class="home-icons-ul no-select">
                <li class="home-icons-li"
                *ngFor="let link of links" >
                  <a href={{link.url}} target="_blank">
                    <span class="home-icons-icon {{link.icon}}"></span>
                  </a>
                </li>
              </ul>
            </div>
            `,
  providers: [AllDataService]
})

export class HomeIcons {
  public links;
  private linksUrl = "http://mark-wen-space-v3-server.herokuapp.com/links";

  constructor(private http: Http, private allDataService: AllDataService) { }

  ngOnInit() {
    // this.getLinks();
    this.links = this.allDataService.getLinks();
  }

  getLinks() {
    return this.http.get(this.linksUrl)
             .map((res: Response) => res.json())
             .subscribe(
               data => { this.links = data; },
               err => console.error(err)
             );
  }
}
