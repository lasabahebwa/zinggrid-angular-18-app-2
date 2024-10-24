import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
    standalone: true,
    selector: 'my-home',
    templateUrl: './home.component.html',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent {
    title = "Angular 18 Integration with child component";

    datastore = [
        { "breed": "Chow Chow", "name": "Butter" },
        { "breed": "Dachshund", "name": "Sousage" },
        { "breed": "Pug", "name": "Potat" },
        { "breed": "Corgi", "name": "Plop" },
        { "breed": "Pomeranian", "name": "Floof" }
    ]
}