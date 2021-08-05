storeHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
controlCurve = [0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4];//, 0.6];

function Shop(location, averageCookies, minCustomers, maxCustomers) {
  this.location = location;
  this.averageCookies = averageCookies;
  this.customers = [];
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.cookiesPerHour = [];
  this.totalCookies = 0;

  this.getCustomers = function(min, max) {
    let customerArray = [];
    for (let i = 0; i < storeHours.length; i++) {
      let customerCount = Math.floor(((Math.random() * (max - min)) + min) + 1);
      customerArray.push(customerCount)
    }
    this.customers = Array.from(customerArray);
    console.log(this.customers)

    //Apply control curve--------
    // let tempArray = [];
    // for (let i = 0; i < controlCurve.length; i++) {
    //   tempArray.push(this.customers[i] * controlCurve[i]);
    // }
    // this.customers = Array.from(tempArray);
    // //---------------------------
  };
  this.getCookiesPerHour = function() {
    let cookiesArray = []
    for (let i = 0; i < this.customers.length; i++) {
      cookiesArray.push(Math.floor(this.customers[i] * this.averageCookies))
    }
    this.cookiesPerHour = Array.from(cookiesArray);
  };
  this.getTotalCookies = function() {
    let cookies = 0;
    for (let i = 0; i < this.cookiesPerHour.length; i++) {
      cookies += this.cookiesPerHour[i];
    }
    this.totalCookies = cookies;
  };
  this.init = function() {
    this.getCustomers(minCustomers, maxCustomers);
    this.getCookiesPerHour();
    this.getTotalCookies();
  }

  this.init();
  this.shopArray.push(this);
}

Shop.prototype.shopArray = [];

const seattle = new Shop('Seattle', 6.3, 23, 65);
const tokyo = new Shop('Tokyo', 1.2, 3, 24);
const dubai = new Shop('Dubai', 3.7, 11, 38);
const paris = new Shop('Paris', 2.3, 20, 38);
const lima = new Shop('Lima', 0.6, 2, 16);



console.log(Shop.prototype.shopArray);

// const divElem = document.getElementById('sales')

// const tableSalesElem = document.createElement('table')
// divElem.appendChild(tableSalesElem);

// function renderSalesHeader() {
//   const rowHoursElem = document.createElement('tr');
//   tableSalesElem.appendChild(rowHoursElem);
//   //Add a blank cell at the beginning of the row
//   const rowHoursCellElem = document.createElement('th');
//   rowHoursElem.appendChild(rowHoursCellElem);
//   //--------------------------------------------
//   for (let i = 0; i < storeHours.length; i++) { 
//     const rowHoursCellElem = document.createElement('th');
//     rowHoursCellElem.textContent = storeHours[i];
//     rowHoursElem.appendChild(rowHoursCellElem);
//   }
// }

// function renderSalesTable() {
//   for (let i = 0; i < Shop.prototype.shopArray.length; i++) { 
//     currentShop = Shop.prototype.shopArray[i]
//     const rowStoreElem = document.createElement('tr');
//     tableSalesElem.appendChild(rowStoreElem);
//     const rowCellElem = document.createElement('th');
//     rowCellElem.textContent = currentShop.location;
//     rowStoreElem.appendChild(rowCellElem);

//     for (let j = 0; j < currentShop.cookiesPerHour.length; j++) {
//       const rowCellElem2 = document.createElement('td');
//       rowCellElem2.textContent = `${currentShop.cookiesPerHour[j]}`;
//       rowStoreElem.appendChild(rowCellElem2);
//     }

//     const rowCellElem3 = document.createElement('td');
//     rowCellElem3.textContent = 'Total Cookies: ' + currentShop.totalCookies;
//     rowStoreElem.appendChild(rowCellElem3);

//   }
// }

// function renderSalesFooter() {
//     const rowHourlyTotalElem = document.createElement('tr');
//     tableSalesElem.appendChild(rowHourlyTotalElem);
//     const rowCellElem = document.createElement('th');
//     rowCellElem.textContent = 'Totals';
//     rowHourlyTotalElem.appendChild(rowCellElem);

//     totalCookiesPerDay = [];
//     for (let h = 0; h < storeHours.length; h++) {
//       let cookieHourlyTotal = 0;
//       for (let i = 0; i < Shop.prototype.shopArray.length; i++) { 
//         currentStore = Shop.prototype.shopArray[i]
//         cookieHourlyTotal += currentStore.cookiesPerHour[h]
//       }
//       const rowCellElem2 = document.createElement('td');
//       rowCellElem2.textContent = `${cookieHourlyTotal}`;
//       rowHourlyTotalElem.appendChild(rowCellElem2);
//       totalCookiesPerDay.push(cookieHourlyTotal);
//     }

//     let totalDaily = 0;
//     for (i = 0; i < totalCookiesPerDay.length; i++) {
//       totalDaily += totalCookiesPerDay[i];
//     }
//       const rowCellElem3 = document.createElement('td');
//       rowCellElem3.textContent = 'Daily Total: ' + totalDaily;
//       rowHourlyTotalElem.appendChild(rowCellElem3);

//   // }
// }

// renderSalesHeader();
// renderSalesTable();
// renderSalesFooter()

// const divElem2 = document.getElementById('employee')

// const tableEmployeesElem = document.createElement('table')
// divElem2.appendChild(tableEmployeesElem);

// function renderEmployeeHeader() {
//   const rowHoursElem = document.createElement('tr');
//   tableEmployeesElem.appendChild(rowHoursElem);
//   const rowHoursCellElem = document.createElement('th');
//   rowHoursElem.appendChild(rowHoursCellElem);
//   for (let i = 0; i < storeHours.length; i++) { 
//     const rowHoursCellElem = document.createElement('th');
//     rowHoursCellElem.textContent = storeHours[i];
//     rowHoursElem.appendChild(rowHoursCellElem);
//   }
// }

// function renderEmployeeTable() {
//   for (let i = 0; i < Shop.prototype.shopArray.length; i++) { 
//     currentShop = Shop.prototype.shopArray[i]
//     const rowEmployeeElem = document.createElement('tr');
//     tableEmployeesElem.appendChild(rowEmployeeElem);
//     const rowEmployeeCellElem = document.createElement('th');
//     rowEmployeeCellElem.textContent = currentShop.location;
//     rowEmployeeElem.appendChild(rowEmployeeCellElem);

//     for (let j = 0; j < currentShop.employees.length; j++) {
//       const row2EmployeeCellElem = document.createElement('td');
//       row2EmployeeCellElem.textContent = `${currentShop.employees[j]}`;
//       rowEmployeeElem.appendChild(row2EmployeeCellElem);
//     }
//   }
// }

// renderEmployeeHeader();
// renderEmployeeTable();


// const totalShop = {
//   cookieLocation: '',
//   minCust: 0,
//   maxCust: 0,
//   avgCookieTotal: 0,
//   theCustomer: 0,
//   avgHourCookie: 0,
//   avgDay: [],
//   totalAmount: 0,
//   hoursInADay: 0,
//   storeHours: [`6 a.m.`,`7 a.m.`,`8 a.m.`,`9 a.m.`,`10 a.m.`,`11 a.m.`,`12 p.m.`,`1 p.m.`,`2 p.m.`,`3 p.m.`,`4 p.m.`,`5 p.m.`,`6 p.m.`,`7 p.m.`],
//   getRandomNumber: function(min, max) {
//     let cookieCustomer = Math.floor(((Math.random() * (max - min)) + min) + 1);
//     this.theCustomer = cookieCustomer;
//   },
//   getCustPerHour: function() {
//     this.avgHourCookie = this.theCustomer * this.avgCookieTotal;
//   },
//   getTotalAmount: function() {
//     console.log(this.hoursInADay)
//     let avgCookiesSoldEachHourArray = [];
//     for (let i = this.hoursInADay; i > 1; i--) {
//       this.getRandomNumber(23, 65);
//       let totalAmount = this.getCustPerHour();
//       totalAmount = Math.floor(this.avgHourCookie);
//       avgCookiesSoldEachHourArray.push(totalAmount);
//     }
//     this.avgDay = Array.from(avgCookiesSoldEachHourArray);
//   },
//   getTotalAmountofCookies: function() {
//     let numCookies = 0;
//     console.log(this.avgDay.length);
//     for (let i = 0; i < this.avgDay.length; i++) {
//       numCookies += this.avgDay[i];
//     }
//     this.totalAmount  = numCookies;
//   },
//   getBusinessHours: function(openHours, closeHours) {
//     this.hoursInADay = Math.floor((closeHours - openHours)/100);
//   }
// }

// function seattle () {
//   totalShop.location = `Seattle`,
//   totalShop.minCust = 23;
//   totalShop.maxCust =65;
//   totalShop.avgCookieTotal = 6.3;
//   totalShop.getRandomNumber(totalShop.minCust, totalShop.maxCust);
//   totalShop.getBusinessHours(0600, 1900);
//   totalShop.getCustPerHour();
//   totalShop.getTotalAmount();
//   totalShop.getTotalAmountofCookies();
//   return totalShop;
// }

// function tokyo () {
//   totalShop.location = `Tokyo`,
//   totalShop.minCust = 3;
//   totalShop.maxCust =24;
//   totalShop.avgCookieTotal = 1.2;
//   totalShop.getRandomNumber(totalShop.minCust, totalShop.maxCust);
//   totalShop.getBusinessHours(0600, 1900);
//   totalShop.getCustPerHour();
//   totalShop.getTotalAmount();
//   totalShop.getTotalAmountofCookies();
//   return totalShop;
// }

// function dubai () {
//   totalShop.location = `Dubai`,
//   totalShop.minCust = 11;
//   totalShop.maxCust =38;
//   totalShop.avgCookieTotal = 3.7;
//   totalShop.getRandomNumber(totalShop.minCust, totalShop.maxCust);
//   totalShop.getBusinessHours(0600, 1900);
//   totalShop.getCustPerHour();
//   totalShop.getTotalAmount();
//   totalShop.getTotalAmountofCookies();
//   return totalShop;
// }

// function paris () {
//   totalShop.location = `Paris`,
//   totalShop.minCust = 20;
//   totalShop.maxCust = 38;
//   totalShop.avgCookieTotal = 2.3;
//   totalShop.getRandomNumber(totalShop.minCust, totalShop.maxCust);
//   totalShop.getBusinessHours(0600, 1900);
//   totalShop.getCustPerHour();
//   totalShop.getTotalAmount();
//   totalShop.getTotalAmountofCookies();
//   return totalShop;
// }

// function lima () {
//   totalShop.location = `Lima`,
//   totalShop.minCust = 2;
//   totalShop.maxCust = 16;
//   totalShop.avgCookieTotal = 4.6;
//   totalShop.getRandomNumber(totalShop.minCust, totalShop.maxCust);
//   totalShop.getBusinessHours(0600, 1900);
//   totalShop.getCustPerHour();
//   totalShop.getTotalAmount();
//   totalShop.getTotalAmountofCookies();
//   return totalShop;
// }

// let totalShopArray = [];
// totalShopArray.push(Object.assign({}, seattle()));
// totalShopArray.push(Object.assign({}, tokyo()));
// totalShopArray.push(Object.assign({}, dubai()));
// totalShopArray.push(Object.assign({}, paris()));
// totalShopArray.push(Object.assign({}, lima()));

// console.log(totalShopArray);

// const saleList = document.getElementById(`sales`);

// for (let i = 0; i < totalShopArray.length; i++) {
//   const h2 = document.createElement(`h2`);
//   h2.textContent = `How many Cookies are sold per hour in : ${totalShopArray[i].location}`;
//   saleList.appendChild(h2);

//   const ulTag = document.createElement(`ul`);
//   saleList.appendChild(ulTag);

//   for (let j = 0; j < totalShopArray[i].avgDay.length; j++) {
//     const liTag = document.createElement(`li`);
//     console.log(j);
//     liTag.textContent = `${totalShopArray[i].storeHours[j]}: ${totalShopArray[i].avgDay[j]}`;
//     ulTag.appendChild(liTag);
//   }

//   const liTag = document.createElement(`li`);
//   liTag.textContent = `The Total Amount of Cookies Sold: ` + totalShopArray[i].totalAmount;
//   ulTag.appendChild(liTag);

// }