import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-skill',
    standalone: true,
    imports: [RouterLink, NgIf],
    templateUrl: './skill.component.html',
    styleUrls: ['./skill.component.scss']
})
export class SkillComponent {

    // Video Popup
    isOpen = false;
    openPopup(): void {
        this.isOpen = true;
    }
    closePopup(): void {
        this.isOpen = false;
    }

}