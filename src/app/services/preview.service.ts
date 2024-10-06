import { Injectable } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { FormEditorPreviewComponent } from '../pages/form-editor-preview/form-editor-preview.component';

@Injectable({
  providedIn: 'root'
})
export class PreviewService {

  constructor(
    private modalService: NzModalService
  ) { }

  preview(pageData: object) {
    console.log('pageData', pageData)
    const modal = this.modalService.create({
      nzTitle: '检查单移动端预览',
      nzWidth: 1000,
      nzContent: FormEditorPreviewComponent,
      nzComponentParams: {
        pageData
      }
    });

  }
}
