import { Component, Input } from "@angular/core";

@Component({
  selector: "title",
  template: `
              <h3 class="title"><i class="fa fa-{{icon}} titleIcon" aria-hidden="true"></i> {{title}}</h3>
            `
})

export class Title {
  @Input("icon") icon: string;
  @Input("title") title: string;
}
