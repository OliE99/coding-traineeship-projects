// Parent Class or Super Class: Media
class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    set isCheckedOut(value) {
        this._isCheckedOut = value;
    }

    get ratings() {
        return this._ratings;
    }

    toggleCheckOutStatus() {
        this.isCheckedOut = !this.isCheckedOut;
    }

    getAverageRating() {
        let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
        return ratingsSum / this.ratings.length;
    }

    addRating(inputValue) {
        this.ratings.push(inputValue);
    }
}

// Child or Sub Class: Book
class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }
}

// Child or Sub Class: Movie
class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    get director() {
        return this._director;
    }

    get runTime() {
        return this._runTime;
    }
}

// Child or Sub Class: CD
class CD extends Media {
    constructor(artist, title, songs) {
        super(title);
        this._artist = artist;
        this._songs = songs;
    }

    get artist() {
        return this._artist;
    }

    get songs() {
        return this._songs;
    }
}

// Create Book Instance
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

// Invoke toggleCheckOutStatus() method on Book Instance: historyOfEverything
historyOfEverything.toggleCheckOutStatus();

// Log the value saved to isCheckedOut method.
console.log(historyOfEverything.isCheckedOut);

// Call addRating on historyOfEverything with the following inputs.
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

// Call getAverageRating() on historyOfEverything and log the result.
console.log(historyOfEverything.getAverageRating());


// Create Movie Instance
const speed = new Movie('Jan de Bont', 'Speed', 116);

// Invoke toggleCheckOutStatus() method on Movie Instance: speed
speed.toggleCheckOutStatus();

// Log the value saved to isCheckedOut method.
console.log(speed.isCheckedOut);

// Call addRating on speed with the following inputs.
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

// Call getAverageRating() on speed and log the result.
console.log(speed.getAverageRating());