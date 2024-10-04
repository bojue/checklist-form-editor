import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzResultModule } from 'ng-zorro-antd/result';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { HttpClientModule } from '@angular/common/http';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { RouterModule, Routes } from '@angular/router';
import { EditorComponent } from './pages/form-editor/editor/editor.component';
import { SNavComponent } from './components/s-nav/s-nav.component';
import { NoDataComponent } from './components/no-data/no-data.component';
import { EditorItemComponent } from './pages/form-editor/editor/editor-item/editor-item.component';
import { EditorItemControlComponent } from './pages/form-editor/editor/editor-item-control/editor-item-control.component';
import { EditorItemNameComponent } from './pages/form-editor/editor/editor-item-name/editor-item-name.component';
import { ItemInputComponent } from './components/item-input/item-input.component';
import { ItemTextareaComponent } from './components/item-textarea/item-textarea.component';
import { ItemSelectComponent } from './components/item-select/item-select.component';
import { EditorItemDataTypeComponent } from './pages/form-editor/editor/editor-item-data-type/editor-item-data-type.component';
import { EditorItemDataSourceTypeComponent } from './pages/form-editor/editor/editor-item-data-source-type/editor-item-data-source-type.component';
import { EditorItemDataConfigComponent } from './pages/form-editor/editor/editor-item-data-config/editor-item-data-config.component';


registerLocaleData(zh);


@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    SNavComponent,
    NoDataComponent,
    NoDataComponent,
    EditorItemComponent,
    EditorItemDataTypeComponent,
    EditorItemControlComponent,
    EditorItemDataSourceTypeComponent,
    EditorItemNameComponent,
    ItemInputComponent,
    ItemTextareaComponent,
    ItemSelectComponent,
    EditorItemDataConfigComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzTableModule,
    NzResultModule,
    NzIconModule,
    FormsModule,
    HttpClientModule,
    NzButtonModule,
    NzInputModule,
    NzSelectModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
