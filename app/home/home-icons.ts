import { Component } from '@angular/core'

@Component({
  selector: 'home-icons',
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
            `
})

export class HomeIcons{
  public links = [
  {
    "_id": "57757874766de7744a26bdd4",
    "title": "Resume",
    "url": "../../file/Guojie Wen Resume.pdf",
    "icon": "fa fa-file-text",
    "__v": 0
  },
  {
    "_id": "5776aafd97fdc3804d613002",
    "title": "LinkedIn",
    "url": "https://www.linkedin.com/in/guojiewen",
    "icon": "fa fa-linkedin-square",
    "__v": 0
  },
  {
    "_id": "5776ab6797fdc3804d613003",
    "title": "GitHub",
    "url": "https://github.com/thousight",
    "icon": "fa fa-github",
    "__v": 0
  },
  {
    "_id": "5776ab8097fdc3804d613004",
    "title": "500px",
    "url": "https://500px.com/markwenguojie94",
    "icon": "fa fa-500px",
    "__v": 0
  },
  {
    "_id": "5776aba097fdc3804d613005",
    "title": "ACTRA",
    "url": "http://space.bilibili.com/20501466/#!/index/",
    "icon": "fa fa-video-camera",
    "__v": 0
  }]
}
