# pagination
A simple pagination made in javascript for html divs.
the divs pages are in  the html document    

<div class="page1">
      <div class="item"> item 1</div>
      <div class="item"> item 2</div>
      <div class="item"> item 3</div>
      <div class="item"> item 4</div>
      <div class="item"> item 5</div>
      <div class="item"> item 6</div>
      <div class="item"> item 7</div>
      <div class="item"> item 8</div>
      <div class="item"> item 9</div>
      <div class="item"> item 10</div>
    </div>
    <div class="page2">
      <div class="item"> item 11</div>
      <div class="item"> item 12</div>
      <div class="item"> item 13</div>
      <div class="item"> item 14</div>
      <div class="item"> item 15</div>
      <div class="item"> item 16</div>
      <div class="item"> item 17</div>
      <div class="item"> item 18</div>
      <div class="item"> item 19</div>
      <div class="item"> item 20</div>
    </div> 
    
javascript takes how many pages are in the html document, and puts all the divs inside an array each page element

const paginas = {
    pagina : [html.get('.list > .page' + 1).innerHTML]
}
for (i=2;;i++){
    try {
        paginas.pagina.push(html.get('.list > .page' + i).innerHTML)
        console.log(i)
    } catch (e) {
        break; 
    }
}

const state = {
    page: 1,
    totalPage: Math.ceil (paginas.pagina.length)
}

then javascript clears all pages of the html document and shows the current page
