'use strict';

let storeHours = [`6 a.m.`,`7 a.m.`,`8 a.m.`,`9 a.m.`,`10 a.m.`,`11 a.m.`,`12 p.m.`,`1 p.m.`,`2 p.m.`,`3 p.m.`,`4 p.m.`,`5 p.m.`,`6 p.m.`,`7 p.m.`];

function Cookieshop(location, minCust, maxCust, avgCook) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCook = avgCook;
  this.cust = [];
  this.perHour = [];
  this.cookieTotal = 0;
  this.getRandomNumber = function(min,max) {
    let cookieCustomerArray = [];
    for (let i = 0; i < storeHours.length; i++) {
      let cookieCustomer = Math.floor(((Math.random() * (max - min)) + min) + 1);
      cookieCustomerArray.push(cookieCustomer);
    }
  this.cust = Array.from(cookieCustomerArray);
  console.log(this.cust);
  };
  this.getCustPerHour = function() {
      let cookieArray = [];
      for (let i = 0; i < this.cust.length; i++) {
        cookieArray.push(Math.floor(this.cust[i] * this.avgCook))
      }
      this.perHour = Array.from(cookieArray);
    };
  this.getTotalCookies = function() {
    let cookie = 0;
    for (let i = 0; i < this.perHour.length; i++) {
      cookie += this.perHour[i];
    }
    this.cookieTotal = cookie;
  };
  this.callUponAll = function() {
    this.getRandomNumber(minCust,maxCust);
    this.getCustPerHour();
    this.getTotalCookies();
  }
  this.callUponAll();
  this.shopArray.push(this);
}

Cookieshop.prototype.shopArray = [];

const seattle = new Cookieshop('Seattle', 23, 65, 6.3);
const tokyo = new Cookieshop('Tokyo', 3, 24, 1.2);
const dubai = new Cookieshop('Dubai', 11, 38, 3,7);
const paris = new Cookieshop('Paris', 20, 38, 2.3);
const lima = new Cookieshop('Lima', 2, 16, 0.6);

console.log(Cookieshop.prototype.shopArray);

const divElem = document.getElementById(`sales`);

const newTableElem = document.createElement('table');
divElem.appendChild(newTableElem);

function renderNewHeader() {
  const rowHeader = document.createElement('tr');
  newTableElem.appendChild(rowHeader);

  const rowCellHeader = document.createElement('th');
  newTableElem.appendChild(rowCellHeader);

  for (let i = 0; i < storeHours.length; i++) {
    const rowCellHeader = document.createElement('th');
    rowCellHeader.textContent = storeHours[i];
    newTableElem.appendChild(rowCellHeader);
  }
};

function renderActualTable() {
  for (let i = 0; i < Cookieshop.prototype.shopArray.length; i++) {
    let actualShop = Cookieshop.prototype.shopArray[i];
    const shopTableElem = document.createElement('tr');
    newTableElem.appendChild(shopTableElem);

    const shopCellElem = document.createElement('th');
    shopCellElem.textContent = actualShop.location;
    shopTableElem.appendChild(shopCellElem);

    for (let j = 0; j < actualShop.perHour.length; j++) {
      const shopCellElem2 = document.createElement('td');
      shopCellElem2.textContent = `${actualShop.perHour[j]}`;
      shopTableElem.appendChild(shopCellElem2);
    }
    const shopCellElem3 = document.createElement('td');
    shopCellElem3.textContent = 'Total Cookies: ' + actualShop.cookieTotal;
    shopTableElem.appendChild(shopCellElem3);
  }
}

function renderFooterTable() {
  const footerElem = document.createElement('tr');
  newTableElem.appendChild(footerElem);

  const rowFooterElem = document.createElement('th');
  rowFooterElem.textContent = 'Total Hourly Cookies Sold for Combined Cities';
  footerElem.appendChild(rowFooterElem);

  let dailyTotalCookies = [];
  for (let h = 0; h < storeHours.length; h++) {
    let cookieHourlyTotal = 0;
    for (let i = 0; i < Cookieshop.prototype.shopArray.length; i++) {
      let currentStore = Cookieshop.prototype.shopArray[i];
      cookieHourlyTotal += currentStore.perHour[h];
    }
    const shopCellElem2 = document.createElement('td');
    shopCellElem2.textContent = `${cookieHourlyTotal}`;
    footerElem.appendChild(shopCellElem2);
    dailyTotalCookies.push(cookieHourlyTotal);
  }
  let cookieDailyTotal = 0;
  for (let i =0; i < dailyTotalCookies.length; i++) {
    cookieDailyTotal += dailyTotalCookies[i];
  }
  const shopCellElem3 = document.createElement('td');
  shopCellElem3.textContent = `Ultimate Total: ` + cookieDailyTotal;
  footerElem.appendChild(shopCellElem3);
}

renderNewHeader();
renderActualTable();
renderFooterTable();
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
//     this.avgHourCookie = Math.ceil(this.theCustomer * this.avgCookieTotal);
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