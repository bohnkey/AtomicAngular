// app.component.ts
import {AfterViewInit, Component} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const searchInterface = document.querySelector('atomic-search-interface');
    searchInterface
      ?.initialize({
        accessToken: 'xxc23ce82a-3733-496e-b37e-9736168c4fd9',
        organizationId: 'electronicscoveodemocomo0n2fu8v',
      })
      .then(() => {
        searchInterface.executeFirstSearch();
      });
  }
}
