import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MymailsComponent } from "./mymails/mymails.component";
import { MycustomersComponent } from "./mycustomers/mycustomers.component";
import { MyproductsComponent } from "./myproducts/myproducts.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "mymails",
    component: MymailsComponent
  },

  {
    path: "mycustomers",
    component: MycustomersComponent
  },

  {
    path: "myproducts",
    component: MyproductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
