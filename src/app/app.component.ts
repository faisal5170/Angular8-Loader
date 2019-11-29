import { Component } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular8Loader';


  constructor(private loaderService: LoaderService) {
  }

  show() {
    this.loaderService.show();
  }

  stop() {
    this.loaderService.hide();
  }

}
