import { AfterViewInit, Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-product-description',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './product-description.component.html',
  styleUrl: './product-description.component.scss'
})
export class ProductDescriptionComponent implements AfterViewInit{
  @Input({ required: true }) description!: any;

  ngOnInit(){
   
  }

  ngAfterViewInit() {
    console.log('load post')
  }
}
