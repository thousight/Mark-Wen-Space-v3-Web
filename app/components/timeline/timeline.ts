import { Component, Input } from "@angular/core";

@Component({
  selector: "timeline",
  template: `
              <div class="Timeline">

              </div>
            `
})

export class Timeline {
  @Input("icon") icon: string;
  @Input("title") title: string;
}
