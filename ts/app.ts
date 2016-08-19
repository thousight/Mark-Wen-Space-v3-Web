import { Component } from "@angular/core";
import { Http, Response } from "@angular/http";
import { OnLoad } from "./components/onLoad";
import { NavBar } from "./components/navBar";
import { Home } from "./home";
import { About } from "./about";
import { Exp } from "./exp";
import { Portfolio } from "./portfolio";
import { Edu } from "./edu";
declare var $: any;

@Component({
  selector: "app",
  template: `
            <!-- List all the main components inside div -->
            <div class="app content" [hidden]="hidden">
              <home [data]="LinksData"></home>
              <navBar></navBar>
              <about></about>
              <exp [data]="ExpData"></exp>
              <portfolio [data]="PortfolioData"></portfolio>
              <edu [data]="EduData"></edu>
            </div>

            <!-- List other components here -->
            <onLoad [hidden]="!hidden"></onLoad>
            `,
  directives: [OnLoad, NavBar, Home, About, Exp, Portfolio, Edu]
})

export class App {
  private LinksData;
  private ExpData;
  private PortfolioData;
  private EduData;
  private SkillsData;
  private hidden = true;
  private serverLink = "http://mark-wen-space-v3-server.herokuapp.com/allData";
  public timeout = null;

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get(this.serverLink)
             .map((res: Response) => res.json())
             .subscribe(
               data => {
                 //  Grabbing all data and pass them to components
                 this.LinksData = data.Links.sort((a, b) => { return a.order - b.order; });
                 this.ExpData = data.Exp.sort((a, b) => { return a.order - b.order; });
                 this.PortfolioData = data.Portfolio.sort((a, b) => { return a.order - b.order; });
                 this.EduData = data.Edu.sort((a, b) => { return a.order - b.order; });
                 this.SkillsData = data.Skills.sort((a, b) => { return a.order - b.order; });
                 // Change loading screen to main content with 1s delay
                 this.timeout = setTimeout(() => {
                     this.hidden = false; // Dismiss loading screen
                     $(".app").fadeIn(1500); // Fading animation
                     clearTimeout(this.timeout); // Clear out timeout
                   }, 1500);
                },
               err => console.log(err)
             );
  }

  ngAfterContentInit() {
    // Initialize Spyscroll
    $(".scrollspy").scrollSpy({
      scrollOffset: 0
    });
  }
}
