import { Component, Input } from "@angular/core";

@Component({
  selector: "timeline",
  template: `
              <div class="Timeline">
                <div class="grayLine"></div>
                <div class="timeline-content">
                  
                </div>
              </div>
            `
})

export class Timeline {
  @Input("icon") icon: string;
  @Input("title") title: string;
  @Input() data: Array<Object>;
}
