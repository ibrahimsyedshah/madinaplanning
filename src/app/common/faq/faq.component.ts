import { Component } from '@angular/core';
import { NgClass, ViewportScroller } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-faq',
    standalone: true,
    imports: [RouterLink, NgClass],
    templateUrl: './faq.component.html',
    styleUrls: ['./faq.component.scss']
})
export class FaqComponent {

    constructor(
        private viewportScroller: ViewportScroller
    ) {}

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

    // Accordion
    contentHeight: number = 0;
    openSectionIndex: number = -1;
    toggleSection(index: number): void {
        if (this.openSectionIndex === index) {
            this.openSectionIndex = -1;
        } else {
            this.openSectionIndex = index;
            this.calculateContentHeight();
        }
    }
    isSectionOpen(index: number): boolean {
        return this.openSectionIndex === index;
    }
    calculateContentHeight(): void {
        const contentElement = document.querySelector('.accordion-content');
        if (contentElement) {
            this.contentHeight = contentElement.scrollHeight;
        }
    }

}