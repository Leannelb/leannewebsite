import { Component } from '@angular/core';
import { CodeService } from './services/code.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CodeService]
})
export class AppComponent {
  title = 'leannewebsite';
}
