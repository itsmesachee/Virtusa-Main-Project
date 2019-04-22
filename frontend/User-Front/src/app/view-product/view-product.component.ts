import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EcommerceService } from "src/app/service/EcommerceService";

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  public productReg;
  id: number;

  constructor(private route: ActivatedRoute, private service: EcommerceService) {
  }

  ngOnInit() {
    this.getItem(this.route.snapshot.params.id);
  }

  getItem(id: number) {
    this.service.getProduct(id).subscribe(
      data => {
        this.productReg = data;
      },
      err => {
        console.log(this.id);
        console.error(err)
      },
      () => console.log('Products loaded')
    );
  }

}
