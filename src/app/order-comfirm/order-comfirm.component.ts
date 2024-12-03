import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-order-comfirm',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './order-comfirm.component.html',
  styleUrl: './order-comfirm.component.scss'
})
export class OrderComfirmComponent {

}
