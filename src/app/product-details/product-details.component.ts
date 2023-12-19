import { Component, Input } from '@angular/core';
import { ProductDescriptionComponent } from '../product-description/product-description.component';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CardModule,ButtonModule,ProductDescriptionComponent,ImageModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  @Input({ required: true }) post!: any;

  ngOnInit(){
   
  }

  ngAfterViewInit() {
    console.log('load post')
  }
}
