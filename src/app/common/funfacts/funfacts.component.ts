import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-funfacts',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './funfacts.component.html',
    styleUrls: ['./funfacts.component.scss']
})
export class FunfactsComponent {

    constructor(
        private viewportScroller: ViewportScroller
    ) {}

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

}