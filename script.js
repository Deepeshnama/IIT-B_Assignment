const bigCats = [
  {
    name: "Asiatic Lion",
    size: "Large",
    location: "Africa",
    image: "https://images.hdqwalls.com/wallpapers/adult-lion-gr.jpg",
  },
  {
    name: "Bengal Tiger",
    size: "small",
    location: "India",
    image:
      "https://tse4.mm.bing.net/th?id=OIP.toJQoLwJJGfLZCCMexr2cAHaD5&pid=Api&P=0&h=180",
  },
  {
    name: "Cheetah",
    size: "Medium",
    location: "Asia",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.naeAsHXJmyxNybO96cANCwHaEK&pid=Api&P=0&h=180",
  },
];

const dogs = [
  {
    name: "French Bulldog",
    size: "small",
    location: "UK",
    image:
      "https://www.dogbreedslist.info/uploads/dog-pictures/french-bulldog-2.jpg",
  },
  {
    name: "Labrador Retriever",
    size: "Medium",
    location: "USA",
    image:
      "https://www.dogbreedslist.info/uploads/dog-pictures/labrador-retriever-2.jpg",
  },
];

const bigFish = [
  {
    name: "Basking Shark",
    size: "Large",
    location: "Ocean",
    image:
      "https://cdn0.animalwised.com/en/posts/4/9/3/whale_shark_rhincodon_typus_5394_0_600.webp",
  },
  {
    name: "Blue Whale",
    size: "Large",
    location: "Ocean",
    image:
      "https://3.bp.blogspot.com/-KrSlRqEQv30/UmZa1I6UenI/AAAAAAAAFRU/7c9WjJBjr3k/s1600/Blue-Whale-2.jpg",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  class Animal {
    constructor(name, size, location, image) {
      this.name = name;
      this.size = size;
      this.location = location;
      this.image = image;
    }
  }

  class AnimalTable {
    constructor(tableId, sortableFields) {
      this.animals = [];
      this.tableId = tableId;
      this.sortableFields = sortableFields;
    }

    addAnimal(animal) {
      this.animals.push(animal);
      this.renderTable();
    }

    deleteAnimal(name) {
      this.animals = this.animals.filter((animal) => animal.name !== name);
      this.renderTable();
    }

    renderTable() {

      const table = document.getElementById(this.tableId);

      table.querySelector("tbody").innerHTML = "";

      this.animals.forEach((animal) => {

        const row = document.createElement("tr");

        row.innerHTML = `
                    <td>${animal.name}</td>
                    <td>${animal.size}</td>
                    <td>${animal.location}</td>
                    <td><img src="${animal.image}" width="70" height="50" alt="${animal.name}"></td>
                    <td>                 
                        <button onclick="${this.tableId}.deleteAnimal('${animal.name}')">Delete</button>
                    </td>
                `;
        
        table.querySelector("tbody").appendChild(row);
      });
    }
  }

  window.bigCatsTable = new AnimalTable("bigCatsTable", [
    "name",
    "size",
    "location",
  ]);

  bigCats.forEach((cat) =>
    bigCatsTable.addAnimal(
      new Animal(cat.name, cat.size, cat.location, cat.image)
    )
  );


  window.dogsTable = new AnimalTable("dogsTable", ["name", "location"]);


  dogs.forEach((dog) =>
    dogsTable.addAnimal(new Animal(dog.name, dog.size, dog.location, dog.image))
  );


  window.bigFishTable = new AnimalTable("bigFishTable", ["size"]);


  bigFish.forEach((fish) =>
    bigFishTable.addAnimal(
      new Animal(fish.name, fish.size, fish.location, fish.image)
    )
  );

  bigCatsTable.renderTable();
  dogsTable.renderTable();
  bigFishTable.renderTable();
});
