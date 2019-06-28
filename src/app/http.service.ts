import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  testname;
  testdescription;
  testcountry;

  constructor(public httpClient: HttpClient) {}

  getPlace() {
    return this.httpClient.get(
      "https://wanmuz-rest-api-2019.herokuapp.com/api/places"
    );
  }
  postSave(data) {
    this.httpClient.post(
      "https://wanmuz-rest-api-2019.herokuapp.com/api/places",

      {
        testname: "Customer004",
        testdescription: "customer004@email.com",
        testcountry: "Vietnam"
      }
    );
  }
}
