import { Injectable, OnInit } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";

@Injectable()
export class AllDataService {
  private allDataUrl = "https://mark-wen-space-v3-server.herokuapp.com/allData";
  private loading;
  private Edu;
  private Exp;
  private Links;
  private Portfolio;
  private Skills;

  constructor(private http: Http) {
    this.loading = true;
    this.Edu = [];
    this.Exp = [];
    this.Links = [];
    this.Portfolio = [];
    this.Skills = [];
  }

  ngOnInit() {
    this.getAllData();
  }

  // Get data from api, aka "Set" methods
  getAllData() {
    return this.http.get(this.allDataUrl)
             .subscribe(
               data => {
                 this.Edu = data.Edu;
                 this.Exp = data.Exp;
                 this.Links = data.Links;
                 this.Portfolio = data.Portfolio;
                 this.Skills = data.Skills;
                 this.loading = false;
              },
               err => console.error(err)
             );
  }

  // “Get” methods
  getLoading() { return this.loading; }
  getEdu() { return this.Edu; }
  getExp() { return this.Exp; }
  getLinks() { return this.Links; }
  getPortfolio() { return this.Portfolio; }
  getSkills() { return this.Skills; }
}
