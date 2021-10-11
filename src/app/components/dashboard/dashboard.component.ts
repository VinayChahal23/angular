import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public products = []as any;
  constructor(private productService: ProductService) { }
  


  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe(data => this.products = data);
  }

}
