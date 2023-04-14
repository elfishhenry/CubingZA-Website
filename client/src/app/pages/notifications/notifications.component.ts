import { Component } from '@angular/core';
import { faXmark, faCloudArrowUp, faArrowsRotate, faBellSlash } from '@fortawesome/free-solid-svg-icons';
import { ProvinceService, ProvinceSelection } from '../../services/province/province.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.less']
})
export class NotificationsComponent {

  faXmark = faXmark;
  faCloudArrowUp = faCloudArrowUp;
  faArrowsRotate = faArrowsRotate;
  faBellSlash = faBellSlash;

  constructor(
    private provinceService: ProvinceService,
    private authService: AuthService
  ) {
    this.provinceService.resetProvinceSelection();
  }

  hasVerifiedEmail() {
    return this.authService.hasVerifiedEmail();
  }

  getSelection() {
    return this.provinceService.getProvinceSelection();
  }

  clearSelection() {
    this.provinceService.unselectAll();
  }

  saveSelection() {
    this.provinceService.saveProvinceSelection();
  }

  resetSelection() {
    this.provinceService.resetProvinceSelection();
  }

  getSelectionString() {
    return JSON.stringify(this.getSelection());
  }

  isUnsaved() {
    return this.provinceService.unsavedChanges;
  }

  hasSelection() {
    return this.provinceService.getSelectedProvinces().length > 0;
  }
}
