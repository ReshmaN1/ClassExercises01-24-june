// Define your Book class here:
class Book {
   constructor(title, author, copyrightdate, isbn, pages, timesCheckedOut, discarded){
      this.title = title;
      this.author = author;
      this.copyrightdate = copyrightdate;
      this.isbn = isbn;
      this.pages = pages;
      this.timesCheckedOut = timesCheckedOut;
      this.discarded = discarded;
   }

   checkout(uses=1) {
      this.timesCheckedOut += uses;
   }
}



// Define your Manual and Novel classes here:
class Manual extends Book {
   constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
      super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
   }

   dispose(currentYear){
      if (currentYear-this.copyright > 5) {
         this.discarded = 'Yes';
      }
   }
}

class Novel extends Book {
   constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
      super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
   }

   dispose(){
      if (this.timesCheckedOut > 100) {
         this.discarded = 'Yes';
      }
   }
}

// Declare the objects for exercises 2 and 3 here:
let makingTheShip = new Novel('Pride and Prejudice','Jane Austen', '1813', '1111111111111', '432', '32','No' );

let makingTheShip1 = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, 'No');


// Code exercises 4 & 5 here:
makingTheShip.checkout(5);
makingTheShip.dispose(100);
 console.log(makingTheShip);
 makingTheShip1.checkout(5);
makingTheShip1.dispose(100);
console.log(makingTheShip1);