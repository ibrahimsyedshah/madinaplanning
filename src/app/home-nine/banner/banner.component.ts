import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
    selector: 'app-banner',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './banner.component.html',
    styleUrl: './banner.component.scss'
})
export class BannerComponent {

    constructor(
        private viewportScroller: ViewportScroller
    ) {}

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

}