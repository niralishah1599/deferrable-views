import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ProductDetailsComponent,
    ProgressSpinnerModule,
    ProductDescriptionComponent,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent implements AfterViewInit {
  title = 'deferrable-views';
  post$!: Observable<any>;
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.http.get('https://dummyjson.com/products').subscribe((res: any) => {
      this.post$ = of(res.products);
    });
  }
}
