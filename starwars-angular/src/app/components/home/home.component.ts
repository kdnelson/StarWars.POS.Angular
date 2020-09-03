import { Component } from '@angular/core';
import { CategoryFilterComponent } from '../category-filter/category-filter.component';
import { CartComponent } from '../cart/cart.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [  
    './home.component-xs.css', // Smartphone portrait 
    './home.component-s.css',  // Smartphone landscape (not supported)
    './home.component-m.css',  // Tablet portrait
    './home.component-l.css',  // Tablet landscape
    './home.component-xl.css', // Desktop landscape
  ],
  providers: [CategoryFilterComponent, CartComponent],
})
export class HomeComponent {
  title = 'Home';

  public constructor(
    public categoryFilterComponent: CategoryFilterComponent,
    public cartComponent: CartComponent,
  ) {}

  get getMenuItemDetailsPerCategory() : any[] {
    let methodName: string = 'getMenuItemDetailsPerCategory';

    // try {
    //   this.toggleIsFilterSet();
    //   this.searchMenuItemDetailsPerCategory();
    // } catch (errMsg) {
    //   let errorMsg = new ErrorMsg(this.className, methodName, this.errorType.parseException, errMsg);
    //   this.errorMsgComponent.loadModal(errorMsg);
    // }
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
      11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
      31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
      41, 42, 43, 44, 45, 46, 47, 48, 49, 50];
  }

  openCategoryFilterModal() {
    let methodName: string = 'openCategoryFilterModal';

    try {
      this.categoryFilterComponent.loadModal();
    } catch (errMsg) {
      // let errorMsg = new ErrorMsg(this.className, methodName, this.errorType.parseException, errMsg);
      // this.errorMsgComponent.loadModal(errorMsg);
    }
  }

  openCartModal() {
    let methodName: string = 'openCartModal';

    try {
      this.cartComponent.loadModal();
    } catch (errMsg) {
      // let errorMsg = new ErrorMsg(this.className, methodName, this.errorType.parseException, errMsg);
      // this.errorMsgComponent.loadModal(errorMsg);
    }
  }
}