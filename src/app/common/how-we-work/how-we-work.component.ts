import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-how-we-work',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './how-we-work.component.html',
    styleUrls: ['./how-we-work.component.scss']
})
export class HowWeWorkComponent {

    constructor(
        private viewportScroller: ViewportScroller
    ) {}

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

}