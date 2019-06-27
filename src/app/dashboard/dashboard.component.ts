import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  apiProducts;
  constructor(public httpService: HttpService, public router: Router) {}

  ngOnInit() {
    this.httpService.getPlace().subscribe(resp => {
      this.apiProducts = resp["data"];
      console.log(resp);
    });
  }
}
