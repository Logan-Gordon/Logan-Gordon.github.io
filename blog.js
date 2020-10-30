var entries = [{
        "title": "Mistborn Series",
        "author": "Brandon Sanderson",
        "book": "The Final Empire",
        "desc": "Mistborn is a series of epic fantasy novels written by American author Brandon Sanderson and published by Tor Books. The first trilogy, published between 2006 and 2008, consists of The Final Empire, The Well of Ascension, and The Hero" +
            " of Ages. To prepare readers for the second series, Sanderson wrote a transitional sequel, The Alloy of Law, which then became the first installment in the Wax and Wayne tetralogy, set 300 years later. This was followed by Shadows" +
            " of Self, released on October 6, 2015; The Bands of Mourning, published on January 26, 2016; and The Lost Metal, to be written in the next few years. Sanderson also published a novella tied to the original trilogy, titled Mistborn:" +
            " Secret History, on January 26, 2016",
        "cover": "../Mistborn-cover.jpg"
    },
    {
        "title": "Discworld Series",
        "author": "Terry Pratchett",
        "book": "The Colour of Magic",
        "desc": "Discworld is a comic fantasy book series written by the English author Terry Pratchett, set on the Discworld, a flat planet balanced on the backs of four elephants which in turn stand on the back of a giant turtle. The series began" +
            " in 1983 with The Colour of Magic and continued until the final novel The Shepherd's Crown was published in 2015, following Pratchetts death. The books frequently parody or take inspiration from J. R. R. Tolkien, Robert E. Howard," +
            " H. P. Lovecraft, Charles Dickens and William Shakespeare, as well as mythology, folklore and fairy tales, often using them for satirical parallels with cultural, political and scientific issues",
        "cover": "../The_Colour_of_Magic_(cover_art).jpg"
    },
    {
        "title": "Lightbringer Series",
        "author": "Brent Weeks",
        "book": "The Black Prism",
        "desc": "The Lightbringer series takes place in the Seven Satrapies. A world ruled by drafters using magic known as Chromaturgy. Drafting is the act of turning light into a physical substance, called Luxin. Drafters are revered, and respected in the town where they live, and are trained, known as The Chromeria. Every color of luxin, has its own properties, and every color have their own representative in the council that rules the Seven Satrapies",
        "cover": "../TheBlackPrism.jpg"
    },
    {
        "title": "Malazan Series",
        "author": "Steven Erikson",
        "book": "Gardens of the Moon",
        "desc": "Malazan Book of the Fallen is a high fantasy book series by the Canadian author Steven Erikson. The series, published by Bantam Books in the U.K. and Tor Books in the U.S., consists of ten volumes, beginning with Gardens of the Moon" +
            " (1999) and concluding with The Crippled God (2011). Erikson's series is extremely complex with a wide scope, and presents the narratives of a large cast of characters spanning thousands of years across multiple continents.",
        "cover": "../Three_Gardens_of_the_Moon.jpg"
    }
];

var loadEntries = function() {
    var blog = document.getElementById("blog-post");
    for (entry of entries) {
        var elem = createEntry(entry.title, entry.author, entry.book, entry.desc, entry.cover);
        blog.appendChild(elem);
    }
    return;
}

var createEntry = function(title, author, book, desc, cover) {
    var div = document.createElement("div");
    var titleElem = document.createElement("h2");
    var descElem = document.createElement("p");
    var bookElem = document.createElement("p");
    var authorElem = document.createElement("p");
    var img = document.createElement("img");
    var clear = document.createElement("hr");
    bookElem.innerText = "First Book : " + book;
    authorElem.innerText = "Author : " + author;
    titleElem.innerText = title;
    descElem.innerText = desc;
    img.src = cover;
    img.style.float = "right";
    img.style.width = "200px";
    img.style.height = "250px";
    div.appendChild(img);
    div.appendChild(titleElem);
    div.appendChild(bookElem);
    div.appendChild(authorElem);
    div.appendChild(descElem);
    div.appendChild(clear);
    return div;
}

var show = function() {
    if (document.getElementById("blogForm").style.display == "block") {
        document.getElementById("blogForm").style.display = "none";
    } else {
        document.getElementById("blogForm").style.display = "block";
    }
    return;
}

var newEntry = function() {

    var blog2 = document.getElementById("blog-post");
    var title2 = "asfd";
    var book2 = "asdf";
    var author2 = "asdrf";
    var desc2 = "fdsa";
    var cover2 = "../fellowship.jpg";

    var div1 = document.createElement("div");
    var titleElem1 = document.createElement("h2");
    var descElem1 = document.createElement("p");
    var bookElem1 = document.createElement("p");
    var authorElem1 = document.createElement("p");
    var img1 = document.createElement("img");
    var clear1 = document.createElement("hr");
    bookElem1.innerText = "First Book : " + book2;
    authorElem1.innerText = "Author : " + author2;
    titleElem1.innerText = title2;
    descElem1.innerText = desc2;
    img1.src = cover2;
    img1.style.float = "right";
    img1.style.width = "50px";
    img1.style.height = "75px";
    div1.appendChild(img1);
    div1.appendChild(titleElem1);
    div1.appendChild(bookElem1);
    div1.appendChild(authorElem1);
    div1.appendChild(descElem1);
    div1.appendChild(clear1);

    blog2.appendChild(div1);

    return;

}