import { NgModule } from "@angular/core";
import { NbProgressBarModule, NbButtonModule } from '@nebular/theme';

@NgModule({
imports:[
    NbProgressBarModule,
    NbButtonModule
],
exports:[
    NbProgressBarModule,
    NbButtonModule
]
})
export class nebularModule{}