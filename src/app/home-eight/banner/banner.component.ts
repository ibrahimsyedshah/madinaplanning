import { ViewportScroller } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { TypewriterComponent } from '../typewriter/typewriter.component';

@Component({
    selector: 'app-banner',
    standalone: true,
    imports: [RouterLink, TypewriterComponent],
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