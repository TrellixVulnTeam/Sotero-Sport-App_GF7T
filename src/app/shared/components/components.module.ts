import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { AvatarSelectComponent } from './avatar-select/avatar-select.component';
import { MenuComponent } from './_menu/menu.component';
import { RouterModule } from '@angular/router';
import { ConfigPopoverComponent } from './config-popover/config-popover.component';


@NgModule({
  declarations: [
    AvatarSelectComponent,
    MenuComponent,
    ConfigPopoverComponent
  ],
  exports: [
    AvatarSelectComponent,
    MenuComponent,
    ConfigPopoverComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
    RouterModule

  ]
})

export class ComponentsModule { }
