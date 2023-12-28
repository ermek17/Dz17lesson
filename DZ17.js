const library = {
    "Война и мир": {
      name: "Война и мир",
      author: "Лев Толстой",
      janr: "роман",
      year: 1800,
      find: function () {
        console.log(`Название: ${this.name}`);
        console.log(`Автор: ${this.author}`);
        console.log(`Жанр: ${this.janr}`);
        console.log(`Год: ${this.year}`);
      }
    },
    "Преступление и наказание": {
      name: "Преступление и наказание",
      author: "Федор Достоевский",
      janr: "роман",
      year: 1900,
      find: function () {
        console.log(`Название: ${this.name}`);
        console.log(`Автор: ${this.author}`);
        console.log(`Жанр: ${this.janr}`);
        console.log(`Год: ${this.year}`);
      }
    },
  };
  
  
  library["Война и мир"].find();
  library["Преступление и наказание"].find();
  