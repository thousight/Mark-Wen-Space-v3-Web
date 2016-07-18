import { Component } from "@angular/core";
import { AllDataService } from "./allDataService";
import { OnLoad } from "./onLoad";
import { Home } from "./home/home";

@Component({
  selector: "app",
  template: `
            <!-- List all the main components inside div -->
            <div *ngIf="allDataService.getLoading()">
              <home></home>
            </div>

            <!-- List other components here -->
            <onLoad *ngIf="allDataService.getLoading()"></onLoad>
            `,
  directives: [OnLoad, Home],
  providers: [AllDataService]
})

export class App {
  constructor(private allDataService: AllDataService) { }
}
