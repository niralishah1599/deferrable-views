import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { ProductDescriptionComponent } from '../product-description/product-description.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CardModule,ButtonModule,ImageModule,ProductDescriptionComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  @Input({ required: true }) post!: any;
  count = 0;
  ngOnInit(){
   
  }

  ngAfterViewInit() {
    console.log('load post')
  }
}
