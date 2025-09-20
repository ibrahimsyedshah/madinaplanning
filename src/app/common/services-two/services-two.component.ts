import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-services-two',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './services-two.component.html',
    styleUrls: ['./services-two.component.scss']
})
export class ServicesTwoComponent {

    constructor(
        private viewportScroller: ViewportScroller
    ) {}

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

}
