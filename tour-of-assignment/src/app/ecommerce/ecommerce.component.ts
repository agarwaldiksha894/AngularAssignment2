import { Component, OnInit } from '@angular/core';
import { Product } from './Product';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css']
})
export class EcommerceComponent implements OnInit {

  priceRange : number[]=[30,60,90];
  products: Product[] = [
    {
      productName: "Regular White T-Shirt",
      category: "Topwear",
      price: 30,
      productImage: "assets/images/black-leather-jacket.jpg",
    },
    {
      productName: "Beige Short Skirt",
      category: "Bottomwear",
      price: 49,
      productImage: "assets/images/short-skirt.jpg",
    },
    {
      productName: "Sporty SmartWatch",
      category: "Watch",
      price: 99,
      productImage: "assets/images/sporty-smartwatch.jpg",
    },
    {
      productName: "Basic Knitted Top",
      category: "Topwear",
      price: 29,
      productImage: "assets/images/knitted-top.jpg",
    },
    {
      productName: "Black Leather Jacket",
      category: "Jacket",
      price: 129,
      productImage: "assets/images/brown-jacket.jpg",
    },
    {
      productName: "Stylish Pink Trousers",
      category: "Bottomwear",
      price: 89,
      productImage: "assets/images/pink-trousers.jpg",
    },
    {
      productName: "Brown Men's Jacket",
      category: "Jacket",
      price: 189,
      productImage: "assets/images/brown-jacket.jpg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Bottomwear",
      price: 49,
      productImage: "assets/images/comfy-gray-pants.jpg",
    }
  ];


  //filteredItems: Product[] = [];
  selectedCategory: string = 'All';
  selectedPrice : number =0;
  filteredItems = [...this.products];

  constructor() { }

  ngOnInit(): void {
  }

  filterItems(): void {
    console.log('selectedCategory ');
    console.log(this.selectedCategory);
    if (this.selectedCategory === 'All') {
      this.filteredItems = this.products;
    } else {
      this.filteredItems = this.products.filter(prod => prod.category === this.selectedCategory);
      console.log('filteredItems');
      console.log(this.filteredItems);
    }
  }

  filterItemsViaPrice(): void{

    console.log('price range ');
    console.log(this.selectedPrice);
    if (this.selectedPrice == 0) {
      this.filteredItems = this.products;
      console.log('non filteredItems');
    } else {
      this.filteredItems = this.products.filter(prod => prod.price <= this.selectedPrice);
      console.log('filteredItems');
      console.log(this.filteredItems);
    }
  }

  getUniqueCategories(): string[] {
    const categories = this.products.map(prod => prod.category);
    return [...new Set(categories)];
  }
   getPriceRange(): number[]{
    return this.priceRange;
   }
}
