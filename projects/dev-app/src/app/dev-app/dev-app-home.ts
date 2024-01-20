/** Home component which includes a welcome message for the dev-app. */
import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

interface Food {
    value: string;
    viewValue: string;
}

@Component({
    standalone: true,
    imports: [MatFormFieldModule, MatSelectModule, NgFor, FormsModule],
    template: `
        <p>Welcome to the development demos for Angular Material!</p>
        <p>Open the sidenav to select a demo.</p>

        <mat-form-field>
            <mat-label>Favorite food</mat-label>
            <mat-select>
                <mat-option *ngFor="let food of foods" [value]="food.value">
                    {{ food.viewValue }}
                </mat-option>
            </mat-select>
        </mat-form-field>
    `,
})
export default class DevAppHome {
    foods: Food[] = [
        { value: 'steak-0', viewValue: 'Steak' },
        { value: 'pizza-1', viewValue: 'Pizza' },
        { value: 'tacos-2', viewValue: 'Tacos' },
    ];
}
