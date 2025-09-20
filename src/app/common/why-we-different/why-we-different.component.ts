import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-why-we-different',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './why-we-different.component.html',
    styleUrls: ['./why-we-different.component.scss']
})
export class WhyWeDifferentComponent {

    constructor(
        private viewportScroller: ViewportScroller
    ) {}

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

}