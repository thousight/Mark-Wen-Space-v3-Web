import { Component } from "@angular/core";

@Component({
  selector: "mwFooter",
  template: `
            <div id="Footer" class="Footer">
              <footer class="page-footer blue darken-3">
                <div class="container">
                  <h5 class="white-text">
                    Mark Wen Space
                    <a href="https://github.com/thousight/Mark-Wen-Space-v3-Web" target="_blank" style="color: white">
                      <span class="fa fa-github"></span>
                    </a>
                  </h5>

                  <h6 class="footer-subtitle white-text">References</h6>
                  <div class="footer-list row">
                    <div class="col s12 m4 l4">
                      <ul>
                        <li><a class="grey-text text-lighten-2" href="https://www.typescriptlang.org/" target="_blank">TypeScript</a></li>
                        <li><a class="grey-text text-lighten-2" href="http://materializecss.com/" target="_blank">Materializecss</a></li>
                        <li><a class="grey-text text-lighten-2" href="https://angular.io/" target="_blank">Angular 2</a></li>
                      </ul>
                    </div>
                    <div class="col s12 m4 l4">
                      <ul>
                        <li><a class="grey-text text-lighten-2" href="https://jquery.com/" target="_blank">jQuery</a></li>
                        <li><a class="grey-text text-lighten-2" href="https://expressjs.com/" target="_blank">Express</a></li>
                        <li><a class="grey-text text-lighten-2" href="http://mongoosejs.com/" target="_blank">Mongoose</a></li>
                      </ul>
                    </div>
                    <div class="col s12 m4 l4">
                      <ul>
                        <li><a class="grey-text text-lighten-2" href="https://nodejs.org/en/" target="_blank">NodeJS</a></li>
                        <li><a class="grey-text text-lighten-2" href="http://fontawesome.io/icons/" target="_blank">Fonticons</a></li>
                        <li><a class="grey-text text-lighten-2" href="https://angular-maps.com/" target="_blank">Angular2-Google-Maps</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="footer-copyright">
                  <div class="container">
                  The MIT License (MIT) Copyright (c) 2016 Mark Wen
                  </div>
                </div>
              </footer>
            </div>
            `
})

export class MWFooter { }
