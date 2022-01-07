import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarFixedComponent } from './core/navbar-fixed/navbar-fixed.component';
import { ChildComponent } from './emittest/child/child.component';
import { FormsModule } from '@angular/forms';
import { LoadingStencilModule } from './loading-stencil/loading-stencil.module';
import { TranslationTestComponent } from './translation-test/translation-test.component';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    NavbarFixedComponent,
    TranslationTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    
    LoadingStencilModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
