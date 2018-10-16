import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { TimelinePage } from '../timeline/timeline';
import { ShowcasePage } from '../showcase/showcase';
import { AccountPage } from '../account/account';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TimelinePage;
  tab3Root = ShowcasePage;
  tab4Root = AccountPage;

  constructor() {

  }
}
