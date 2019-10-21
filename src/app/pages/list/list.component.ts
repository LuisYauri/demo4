import { Component, OnInit } from '@angular/core';
import {BusinessService} from '../../services/business.service';
import {businnes} from '../../model/business.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  listBusiness:businnes[]
  constructor(private businessService:BusinessService) { }

  ngOnInit() {
    this.getBusinessss()
  }

  async getBusinessss() {
    try {
      const response:any = await this.businessService.getBusiness().toPromise()
      this.listBusiness = response.data
    }catch (e) {
      console.log(e)
    }
  }


}
