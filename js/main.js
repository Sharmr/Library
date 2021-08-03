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
        const card = document.createElement('div');
        card.classList.add('card');
        const front = buildCard(book);
        const back = getSummary(book);

        card.appendChild(front);
        card.appendChild(back);

        table.appendChild(card);
    }

    table.appendChild(createAddButton());

    animateCards();
}

function createAddButton() {
    const add = document.createElement("div");
    add.classList.add('add');

    const icon = document.createElement("span");
    icon.classList.add('material-icons');
    icon.innerText = 'library_add';
    add.appendChild(icon);
    add.style.justifyContent = 'center';
    icon.style.alignSelf = 'center';
    icon.style.transform = 'scale(2)';
    
    animateAddButton(add);
    add.addEventListener('click', addnewBook);

    return add;
}

function addnewBook() {
    formAnimation();
    displayForm();
    makeNewCard();
    rearrange();
}

function formAnimation() {
    const a = document.querySelector('.add');  
    a.classList.add('click');  
    a.style.backgroundColor = 'white';
    a.removeEventListener('click', addnewBook);
    
    while(a.firstChild) {
        a.removeChild(a.firstChild);
    }
}

function displayForm() {
    const a = document.querySelector('.add');
    const title = document.createElement('div');
    title.innerText = 'A New Book';
    title.style.fontSize = '20px';
    title.style.fontStyle = 'oblique';
    title.style.fontWeight = 'bold';
    a.appendChild(title);

    const form = document.createElement('form');

    form.setAttribute('method', 'post');
    form.setAttribute('action', 'submit.php');

    const book = document.createElement('input');
    book.setAttribute('type', 'text');
    book.setAttribute('name', 'Title');
    book.setAttribute('Placeholder', 'Title');

    const author = document.createElement('input');
    author.setAttribute('type', 'text');
    author.setAttribute('name', 'Author');
    author.setAttribute('Placeholder', 'Author');

    const pages = document.createElement('input');
    pages.setAttribute('type', 'text');
    pages.setAttribute('name', 'pages');
    pages.setAttribute('Placeholder', 'Pages');

    const status = document.createElement('select');
    status.setAttribute('Placeholder', 'Status');

    const read = document.createElement('option');
    const unread = document.createElement('option');
    const ip = document.createElement('option');

    read.setAttribute('value', 'Read');
    read.innerText = 'Read';

    unread.setAttribute('value', 'Unread');
    unread.innerText = 'Unread';

    ip.setAttribute('value', 'In Progress');
    ip.innerText = 'In Progress';

    status.appendChild(read);
    status.appendChild(unread);
    status.appendChild(ip);

    var s = document.createElement("input"); //input element, Submit button
    s.setAttribute('type',"submit");
    s.setAttribute('value',"Submit");

    form.appendChild(book);
    form.appendChild(author);
    form.appendChild(pages);
    form.appendChild(status);
    form.appendChild(s);
    
    a.appendChild(form);
}
function makeNewCard() {
    return;
}
function rearrange() {
    return;
}
function animateAddButton(button) {
    button.addEventListener('mouseenter', () => {
        button.classList.toggle('hover');
    });
    button.addEventListener('mouseleave',() => {
        button.classList.toggle('hover');
    });
}

function getSummary() {
    const card = document.createElement('DIV');
    card.classList.add('card__face');
    card.classList.add('card__face--back');
    const summary = document.createElement('div');
    summary.innerText = 'Summary of the book goes here.';
    summary.style.fontSize = '15px';
    summary.style.fontStyle = 'italic';
    card.appendChild(summary);
    return card;
}

function animateCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flip');
        });
    });
}



function buildCard(book) {
    const card = document.createElement('DIV');
    card.classList.add('card__face');
    card.classList.add('card__face--front');

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
    const something = new Book("Something", "No one", 0, "Read");
    addBook(IJ);
    addBook(JLB);
    addBook(FC);
    addBook(fant);
    addBook(old);
    addBook(ss);
    addBook(something);
    displayBooks();
};

