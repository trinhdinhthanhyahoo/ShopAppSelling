import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  // selector: 'app-root',
  // selector: 'app-order',
  // selector: 'app-order-comfirm',
  // selector: 'app-login',
  selector: 'app-register',
  // selector: 'app-detail-product',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ShopAppSelling';
}
