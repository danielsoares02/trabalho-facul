import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
    standalone: true,
    imports: [
        CommonModule,
        RouterModule
    ],
    selector: 'formation',
    templateUrl: './formation.component.html',
    styleUrls: ['./formation.component.css']
})
export class FormationComponent {
    
}