import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MycustomersComponent } from "./mycustomers/mycustomers.component";
import { MyproductsComponent } from "./myproducts/myproducts.component";
import { MymailsComponent } from "./mymails/mymails.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { HttpService } from "./http.service";
import { HttpClientModule } from "@angular/common/http";
// import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
// import { FormsModule } from "@angular/forms/forms";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,

    MycustomersComponent,
    MyproductsComponent,
    MymailsComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    // CKEditorModule
    // FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
