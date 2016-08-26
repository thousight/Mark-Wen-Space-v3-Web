import { Component } from "@angular/core";
import { Http, Response } from "@angular/http";
import { OnLoad } from "./components/onLoad";
import { NavBar } from "./components/navBar";
import { Home } from "./home";
import { About } from "./about";
import { Exp } from "./exp";
import { Portfolio } from "./portfolio";
import { Edu } from "./edu";
import { Skills } from "./skills";
import { Contact } from "./contact";
import { MWFooter } from "./footer";
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
              <!-- <portfolio [data]="PortfolioData"></portfolio> -->
              <edu [data]="EduData"></edu>
              <skills [data]="SkillsData"></skills>
              <div class="parallax-container">
                <div class="parallax"><img src="../img/parallax.jpg"></div>
                <div class="parallax-text">
                  "Love is patient, love is kind. It does not envy, it does not boast, it is not proud.
                  It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs.
                  Love does not delight in evil but rejoices with the truth.
                  It always protects, always trusts, always hopes, always perseveres."
                  <div>-- NIV, 1 Corithians 13: 4~7</div>
                </div>
              </div>
              <contact></contact>
              <mwFooter></mwFooter>
            </div>

            <!-- List other components here -->
            <onLoad [hidden]="!hidden"></onLoad>
            `,
  directives: [OnLoad, NavBar, Home, About, Exp, Portfolio, Edu, Skills, Contact, MWFooter]
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
    // Initialize Parallax
    $(".parallax").parallax();
  }
}
