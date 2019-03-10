import { NgModule } from '@angular/core';
import { 
    ModalModule, TabsModule, BsDatepickerModule,
 } from 'ngx-bootstrap';

@NgModule({
    imports:[
        ModalModule.forRoot(),
        TabsModule.forRoot(),
        BsDatepickerModule.forRoot()
    ],
    exports:[

        
    ]
})
export class ngxBoostarpModule{}