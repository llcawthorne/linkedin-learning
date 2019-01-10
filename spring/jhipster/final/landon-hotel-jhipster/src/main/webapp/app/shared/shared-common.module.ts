import { NgModule } from '@angular/core';

import { LandonhotelSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [LandonhotelSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [LandonhotelSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class LandonhotelSharedCommonModule {}
