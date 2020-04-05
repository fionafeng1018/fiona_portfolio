  // <li class="cards__item">
  //             <div class="my_card">
  //               <div class="card__image card__image--fence"></div>
  //               <div class="card__content">
  //                 <div class="card__title">JAB Website</div>
  //                 <p class="card__text">This is the shorthand for flex-grow, flex-shrink and flex-basis combined. The
  //                   second
  //                   and
  //                   third parameters (flex-shrink and flex-basis) are optional. Default is 0 1 auto. </p>
  //               </div>
  //             </div>
  //           </li>



const list_item_class = 'card__item';
const card_div_class = 'my_card';
const card_img_class = 'card__image';
const card_content_class = 'card__content';
const card_title_class = 'card__title';
const card_text_class = 'card__text';

class Card{

    constructor(image,title,text,link){
        this.imgage = image;
        this.title = title;
        this.text = text;
        this.link = link;
    }

    createCard(){
        let list_item = document.createElement('li');
        let card_div = createDiv();
        let card_img_div = createDiv();
        let card_content_div = createDiv();
        let card_title_div = createDiv();
        let card_text_p = document.createElement('p');

        this.appendClass(list_item, list_item_class);
        this.appendClass(card_div, card_div_class);

    }

    appendClass(elements, classes){
        elements.array.forEach(element => {
            
        });
        element.className = classes.join(" ")
        return element.className;
    }

    createDiv(){
        return document.createElement('div');
    }

}
