import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Item } from "../../data/model/Item";
import { PageTemplateComponent } from "../page-template/page-template.component";
import { NgIf, NgForOf } from "@angular/common";
import {ItemRepository} from "../../data/repository/ItemRepository";

@Component({
  selector: 'app-item-details-page',
  standalone: true,
  imports: [
    PageTemplateComponent,
    NgIf,
    NgForOf
  ],
  templateUrl: './item-details-page.component.html',
  styleUrls: ['./item-details-page.component.css']
})
export class ItemDetailsPageComponent implements OnInit {
  item: Item | undefined;

  constructor(
    private route: ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit(): void {

    const itemId = this.route.snapshot.paramMap.get('id');
    if (itemId) {
      this.item = ItemRepository.findById(itemId);
    }
  }
  goBack(): void {
    this.router.navigate(['/items']);
  }
}
