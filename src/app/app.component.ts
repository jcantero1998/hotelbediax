import { Component } from '@angular/core';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { SidebarComponent } from "./shared/components/sidebar/sidebar.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { SpinnerComponent } from "./shared/components/spinner/spinner.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ToolbarComponent, SidebarComponent, FooterComponent, SpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
