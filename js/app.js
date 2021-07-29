const totalShop = {
  cookieLocation: '',
  minCust: 0,
  maxCust: 0,
  avgCookieTotal: 0,
  theCustomer: 0,
  avgHourCookie: 0,
  avgDay: [],
  totalAmount: 0,
  hoursInADay: 0,
  storeHours: [`6 a.m.`,`7 a.m.`,`8 a.m.`,`9 a.m.`,`10 a.m.`,`11 a.m.`,`12 p.m.`,`1 p.m.`,`2 p.m.`,`3 p.m.`,`4 p.m.`,`5 p.m.`,`6 p.m.`,`7 p.m.`],
  getRandomNumber: function(min, max) {
    let cookieCustomer = Math.floor(((Math.random() * (max - min)) + min) + 1);
    this.theCustomer = cookieCustomer;
  },
  getCustPerHour: function() {
    this.avgHourCookie = this.theCustomer * this.avgCookieTotal;
  },
  getTotalAmount: function() {
    console.log(this.hoursInADay)
    let avgCookiesSoldEachHourArray = [];
    for (let i = this.hoursInADay; i > 1; i--) {
      this.getRandomNumber(23, 65);
      let totalAmount = this.getCustPerHour();
      totalAmount = Math.floor(this.avgHourCookie);
      avgCookiesSoldEachHourArray.push(totalAmount);
    }
    this.avgDay = Array.from(avgCookiesSoldEachHourArray);
  },
  getTotalAmountofCookies: function() {
    let numCookies = 0;
    console.log(this.avgDay.length);
    for (let i = 0; i < this.avgDay.length; i++) {
      numCookies += this.avgDay[i];
    }
    this.totalAmount  = numCookies;
  },
  getBusinessHours: function(openHours, closeHours) {
    this.hoursInADay = Math.floor((closeHours - openHours)/100);
  }
}

function seattle () {
  totalShop.location = `Seattle`,
  totalShop.minCust = 23;
  totalShop.maxCust =65;
  totalShop.avgCookieTotal = 6.3;
  totalShop.getRandomNumber(totalShop.minCust, totalShop.maxCust);
  totalShop.getBusinessHours(0600, 1900);
  totalShop.getCustPerHour();
  totalShop.getTotalAmount();
  totalShop.getTotalAmountofCookies();
  return totalShop;
}

function tokyo () {
  totalShop.location = `Tokyo`,
  totalShop.minCust = 3;
  totalShop.maxCust =24;
  totalShop.avgCookieTotal = 1.2;
  totalShop.getRandomNumber(totalShop.minCust, totalShop.maxCust);
  totalShop.getBusinessHours(0600, 1900);
  totalShop.getCustPerHour();
  totalShop.getTotalAmount();
  totalShop.getTotalAmountofCookies();
  return totalShop;
}

function dubai () {
  totalShop.location = `Dubai`,
  totalShop.minCust = 11;
  totalShop.maxCust =38;
  totalShop.avgCookieTotal = 3.7;
  totalShop.getRandomNumber(totalShop.minCust, totalShop.maxCust);
  totalShop.getBusinessHours(0600, 1900);
  totalShop.getCustPerHour();
  totalShop.getTotalAmount();
  totalShop.getTotalAmountofCookies();
  return totalShop;
}

function paris () {
  totalShop.location = `Paris`,
  totalShop.minCust = 20;
  totalShop.maxCust = 38;
  totalShop.avgCookieTotal = 2.3;
  totalShop.getRandomNumber(totalShop.minCust, totalShop.maxCust);
  totalShop.getBusinessHours(0600, 1900);
  totalShop.getCustPerHour();
  totalShop.getTotalAmount();
  totalShop.getTotalAmountofCookies();
  return totalShop;
}

function lima () {
  totalShop.location = `Lima`,
  totalShop.minCust = 2;
  totalShop.maxCust = 16;
  totalShop.avgCookieTotal = 4.6;
  totalShop.getRandomNumber(totalShop.minCust, totalShop.maxCust);
  totalShop.getBusinessHours(0600, 1900);
  totalShop.getCustPerHour();
  totalShop.getTotalAmount();
  totalShop.getTotalAmountofCookies();
  return totalShop;
}

let totalShopArray = [];
totalShopArray.push(Object.assign({}, seattle()));
totalShopArray.push(Object.assign({}, tokyo()));
totalShopArray.push(Object.assign({}, dubai()));
totalShopArray.push(Object.assign({}, paris()));
totalShopArray.push(Object.assign({}, lima()));

console.log(totalShopArray);

const saleList = document.getElementById(`sales`);

for (let i = 0; i < totalShopArray.length; i++) {
  const h2 = document.createElement(`h2`);
  h2.textContent = `How many Cookies are sold per hour in : ${totalShopArray[i].location}`;
  saleList.appendChild(h2);

  const ulTag = document.createElement(`ul`);
  saleList.appendChild(ulTag);

  for (let j = 0; j < totalShopArray[i].avgDay.length; j++) {
    const liTag = document.createElement(`li`);
    console.log(j);
    liTag.textContent = `${totalShopArray[i].storeHours[j]}: ${totalShopArray[i].avgDay[j]}`;
    ulTag.appendChild(liTag);
  }

  const liTag = document.createElement(`li`);
  liTag.textContent = `The Total Amount of Cookies Sold: ` + totalShopArray[i].totalAmount;
  ulTag.appendChild(liTag);

}