import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private auth: ApiService) { }

  ngOnInit() {
  }

}
