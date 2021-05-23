let bookUri = "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=yqMoVi326swL7zmTH0CsddG9LHGtqAoZ"

//FETCHING DATA FROM API :
let books = async ()=>{
    let respone = await fetch(bookUri);
    let res = await respone.json();
    let data = res.results.books.map(a =>{
        return a;
    });

    display(data)
}

books();
//DOM ELEMENT CREATION :
let display = function (d){
    
    var container = document.querySelector(".container");
    var conHead= document.createElement('h1');
    conHead.setAttribute('class','text-white text-center p-5')
    conHead.innerText = 'THE NEW YORK TIMES BEST SELLERS LISTS'
    container.append(conHead)
    d.forEach(element => {
        //CARD
        let card  = document.createElement('card')
        card.setAttribute('class','card mb-3 bg-light pb-3')
        card.setAttribute('style','height: auto')
        //ROW
        let row = document.createElement('row')
        row.setAttribute('class','row g-0')
        //COLUMN 1 :
        let column1 = document.createElement('div');
        column1.setAttribute('class','col-lg-3 ')
        var image = document.createElement('img')
        image.setAttribute('class',' img-fluid')
        image.setAttribute('style','height: 20rem')
        image.src = element.book_image;
        image.alt = "no image"
        column1.append(image);
        //COLUMN 2 :
        let column2 = document.createElement('div')
        column2.setAttribute('class',' col-lg-9');
        let cardBody = document.createElement('div')
        cardBody.setAttribute('class','card-body');
        //HEADER :
        let header = document.createElement('h3');
        header.setAttribute('class','card-title mt-5 fw-bold')
        header.innerText = element.title;
              
        //RANK
        let rank = document.createElement('h4');
        rank.setAttribute('class','badge bg-primary');
        rank.innerText = `Rank : ${element.rank}`
        //AUTHOR:
        let author = document.createElement('h5');
        author.setAttribute('class','text-muted');
        author.innerText =`- ${element.author}`;
        //DESCRIPTION
        let para1 = document.createElement('p');
        para1.setAttribute('class','card-text');
        para1.innerText = element.description;
        //PUBLISHER
        let publisher = document.createElement('span');
        publisher.setAttribute('class','text-dark bg-white fw-bolder fs-3')
        publisher.innerText = `Publisher : `;

        let publisherName = document.createElement('span')
        publisherName.setAttribute('class','fs-2 fw-bolder')
        publisherName.innerText = element.publisher;
        
        let b = document.createElement('br')
        let b1 = document.createElement('br')

        let clickHere = document.createElement('span');
        clickHere.setAttribute('class','fw-bold');
        clickHere.innerHTML = `Click here to buy : <a href="element.amazon_product_url">${element.amazon_product_url}</a> `; 

        //APPENDING TO PARENT ELEMENT :
        column2.append(header);
        column2.append(rank);
        column2.append(author);
        column2.append(para1);
        column2.append(publisher);
        column2.append(publisherName);
        column2.append(b);
        column2.append(b1);
        column2.append(clickHere)
        // column2.append(link);        
        row.append(column1);
        row.append(column2);
        card.append(row);
        container.append(card)
       
    });
   
}


