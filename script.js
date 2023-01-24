class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  //creo il metodo compareAge che compara l'età dell'istanza che lo invoca con l'età di un'altra istanza
  compareAge(otherPerson) {
    if (this.age > otherPerson.age) {
      return `${this.name} è più vecchio di ${otherPerson.name}.`;
    } else if (this.age < otherPerson.age) {
      return `${this.name} è più giovane di ${otherPerson.name}.`;
    } else {
      return `${this.name} ha la stessa età di ${otherPerson.name}.`;
    }
  }
}

class Page {
  constructor(items = [], pageSize = 10) {
    this.items = items;
    this.pageSize = pageSize;
    this.pages = this.getPages();
  }

  getPages() {
    var pages = [];
    for (let i = 0; i < this.items.length; i += this.pageSize) {
      pages.push(this.items.slice(i, i + this.pageSize));
    }
    return pages;
  }
  pageNumber_shows(pageNumber) {
    if (pageNumber <= 0 || pageNumber > this.pages.length) {
      return null;
    }
    return this.pages[pageNumber - 1];
  }
}

let items = [
  "item1",
  "item2",
  "item3",
  "item4",
  "item5",
  "item6",
  "item7",
  "item8",
  "item9",
  "item10",
  "item11",
];
let page = new Page(items, 4);
let currentPage = 1;

function showPage(pageNumber) {
  let pageItems = page.pageNumber_shows(pageNumber);
  if (pageItems === null) {
    return;
  }

  let carousel = document.getElementById("carousel");
  carousel.innerHTML = "";

  pageItems.forEach((element) => {
    let itemElement = document.createElement("div");
    itemElement.innerHTML = element;
    carousel.appendChild(itemElement);
  });
}

showPage(currentPage);
