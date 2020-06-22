import { Component } from '@angular/core';

import { o, OdataQuery, OdataConfig } from 'o.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ojs';

  constructor() {
    var oHandler = o('http://localhost:4200/odata/');

    oHandler.get('People')
      .query()
      .then(data => {
        console.log(data);
      });

    // call unbound function
    var oHandler2 = o("http://localhost:4200/odata/");
    oHandler2.get('GetNearestAirport(lat = 33, lon = -118)')
      .query()
      .then(data => {
        console.log(data);
      });

    //  call bound function

    var oHandler3 = o("http://localhost:4200/odata/");
    oHandler3.get("People('russellwhyte')/Trips(0)/Microsoft.OData.Service.Sample.TrippinInMemory.Models.GetInvolvedPeople")
      .query()
      .then(data => {
        console.log(data);
      });


  }
}
