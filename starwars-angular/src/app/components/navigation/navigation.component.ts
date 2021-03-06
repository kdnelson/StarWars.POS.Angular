import { Component, OnInit } from '@angular/core';
import { ErrorMsg } from 'src/app/models/errorMsg';
import { ErrorType } from 'src/app/models/errorType';
import { LogService } from '../../services/log.service';

@Component({
  selector: 'app-nav',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  providers: [ErrorType, LogService]
})
export class NavigationComponent implements OnInit {
  private className: "NavigationComponent";

  constructor(
    public errorType: ErrorType,
    public logService: LogService
  ) { }

  ngOnInit(): void {
    let methodName: string = 'ngOnInit';

    try {
    } catch (errMsg) {
      let errorMsg = new ErrorMsg(this.className, methodName, this.errorType.parseException, errMsg);
      this.logService.logHandler(errorMsg);
    }
  }
}