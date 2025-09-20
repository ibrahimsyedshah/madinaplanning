import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-who-we-are',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './who-we-are.component.html',
    styleUrls: ['./who-we-are.component.scss']
})
export class WhoWeAreComponent {

    constructor(
        private viewportScroller: ViewportScroller
    ) {}

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

}