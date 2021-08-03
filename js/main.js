let library = [];

function Book(Title, Author, Pages, Status) {
    this.Title = Title;
    this.Author = Author;
    this.Pages = Pages;
    this.Status = Status;

    this.info = function() {
        return this.Title + " by " + this.Author + ", " + this.Pages + " pages, " + this.Status + ".";
      };
}

function addBook(b) {
    library.push(b);
}

function displayBooks() {
    const table = document.getElementById("table");
    for(let i = 0; i < library.length; i++) {
        const book = library[i];
        const card = buildCard(book);

        table.appendChild(card);
    }
}

function buildCard(book) {
    const card = document.createElement('DIV');
    card.classList.add('card');

    //Title
    const title = document.createElement('div');
    title.innerText = book.Title;
    title.style.fontSize = '20px';
    title.style.fontStyle = 'oblique';
    title.style.fontWeight = 'bold';
    title.style.flexShrink = 10;
    card.appendChild(title);
    
    //Author
    const author = document.createElement('div');
    author.innerText = 'by '+ book.Author;
    author.style.fontSize = '15px';
    author.style.fontStyle = 'italic';
    card.appendChild(author);

    //Pages
    const pages = document.createElement('div');
    pages.innerText = book.Pages + ' pages';
    pages.style.fontSize = '12px';
    pages.style.alignSelf = "space-around";
    card.appendChild(pages);

    //status
    const status = document.createElement('div');
    status.innerText = book.Status;
    status.style.alignSelf = "flex-end";
    status.style.position = 'absolute';
    status.style.right = 0;
    status.style.bottom = 0;
    card.appendChild(status);

    return card;
}

window.onload = function() {
    const IJ = new Book("Infinite Jest", "David Foster Wallace", 1451, "Unread");
    const JLB = new Book("Collected Fictions", "Jorge Luis Borges", 565, "In Progress");
    const FC = new Book("Forbidden Colors", "Yukio Mishima", 403, "In Progress");
    const fant = new Book("Fantomas versus the Multinational Vampires: An Attainable Utopia", 
    "Julio Cortazar", 87, "Read");
    const old = new Book("The Old Curiosity Shop", "Charles Dickens", 552, "Unread");
    const ss = new Book("Spring Snow", "Yukio Mishima", 399, "Read");
    addBook(IJ);
    addBook(JLB);
    addBook(FC);
    addBook(fant);
    addBook(old);
    addBook(ss);
    displayBooks();
};
