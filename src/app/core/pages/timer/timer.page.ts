import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../../../shared/services/items.service';
import { IItem } from '../../../shared/interfaces/interfaces';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ModalController, PopoverController, NavController, AlertController } from '@ionic/angular';
import { TimerEndPage } from '../../modals/timer-end/timer-end.page';
import { ConfigPopoverComponent } from 'src/app/shared/components/config-popover/config-popover.component';
import { Platform } from '@ionic/angular';
import { BackButtonService } from '../../../shared/services/back-button.service';
import { Plugins } from '@capacitor/core';
import { UiService } from '../../../shared/services/ui.service';

const { App } = Plugins;


const circleR = 80;
const circleDasharray = 2 * Math.PI * circleR;


@Component({
  selector: 'app-timer',
  templateUrl: './timer.page.html',
  styleUrls: ['./timer.page.scss'],
})
export class TimerPage implements OnInit {



  constructor() { }


  ngOnInit() {

    
  }

  






 
  

  
  

  


}
