// setando valor de resultado por paginas e calculando o numero total de paginas
let perPage = 10
// método para pegar um elemento no documento html
const html = {
    get(element){
        return document.querySelector(element)
    }
}
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
    perPage,
    totalPage: Math.ceil (paginas.pagina.length)
}
// método para fazer os controles
const controls = {
    // função para avançar página
    next(){
        state.page++
        const lastPage = state.page > state.totalPage        
        if(lastPage){
            state.page--
        }
    },
    // função para regressar página
    prev(){
        state.page--

        if(state.page < 1){
            state.page++
        }
    },    
    // função para ir para uma página
    goTo(page){
        if (page < 1 ){
            page = 1
        }
        state.page = page

        if (page > state.totalPage){
            state.page = state.totalPage

        }
    },
    // função para fazer a conexão das funções com os elementos html
    createListeners(){
        html.get('.first').addEventListener('click', () => {
            controls.goTo(1)
            update()
        })
        html.get('.last').addEventListener('click', () => {
            controls.goTo(state.totalPage)
            update()

        })
        html.get('.next').addEventListener('click', () => {
            controls.next()
            update()

        })
        html.get('.prev').addEventListener('click', () => {
            controls.prev()
            update()

        })
    }
}
function executeFunctionByName(functionName, context /*, args */) {
    var args = Array.prototype.slice.call(arguments, 2);
    var namespaces = functionName.split(".");
    var func = namespaces.pop();
    for(var i = 0; i < namespaces.length; i++) {
      context = context[namespaces[i]];
    }
    return context[func].apply(context, args);
  }
// método para criar uma lista de itens no corpo do html
const list = {
    update(){       
        html.get('.list').innerHTML = ''
        html.get('.numbers >div ').innerHTML = state.page
        paginaAtual = paginas.pagina[state.page-1]
        html.get('.list').innerHTML += (paginaAtual)
    }
}
// função para chamar a atualização da página.
function update(){
    list.update()
}
// função para chamar a atualização da página.
function init(){
    list.update()
    controls.createListeners()
}
// função para chamar a atualização da página.
init()