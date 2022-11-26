// BARRA CARRINHO DE COMPRA_____________________________________________________________
    class Produto {
   
        constructor() {
            this.arrayProdutos = [];

        }

        adicionar() {
            let produto = this.lerDados();

            if(this.validarTam(produto)) {
                this.salvar(produto);
            }
 
            localStorage.setItem('itens', JSON.stringify(this.arrayProdutos));

            this.listaTabela();
            console.log(this.arrayProdutos)
            this.quant;

        }

        total(){
            let arrayStorage = localStorage.getItem('itens');
            let arrayItens = JSON.parse(arrayStorage);

            for(var produto in arrayItens){

                const precoProd = arrayItens[produto].preco;
                let tamArray = arrayItens.length;
                const preco = parseInt(precoProd);
                let total = preco * tamArray;

                document.getElementById("totalm").innerHTML = "Total: R$ " + total + ",00";
                localStorage.setItem('total', JSON.stringify(total));
        }
   }


        listaTabela() {
            let tbody = document.getElementById("carrinho-produtos");
            tbody.innerText = '';
            let arrayStorage = localStorage.getItem('itens');
            let arrayItens = JSON.parse(arrayStorage);


            for(let i = 0; i < arrayItens.length; i++ ) {
                let tr = tbody.insertRow();
                let imgproduto = document.createElement('img');
                imgproduto.src = 'img/psg/psg1.jpg'

                let td_img = tr.insertCell();
                let td_camisa = tr.insertCell();
                let td_qnt = tr.insertCell();
                let td_preco = tr.insertCell();

                
                for(var produto in arrayItens){

                    let tam = arrayItens[produto].tam;
                    let quant = arrayItens[produto].quant;
                    let preco = arrayItens[produto].preco;
                    let nomeProd = arrayItens[produto].nomeProduto;
    
                    td_img.innerHTML = "<img src=" + imgproduto.src + ">";
                    td_camisa.innerText = nomeProd;
                    td_preco.innerText = 'R$ ' + preco + ",00";
            } 
                this.total();
                var car = document.getElementById('z');
                car.classList.remove('bnt-car-exit');
                car.classList.add('bnt-car');      
            }
            
        }


        salvar(produto) {
            this.arrayProdutos.push(produto);
        }

        lerDados() {
            let produto = {}
            
            var select = document.getElementById("se");
            var opcaoTam = select.options[select.selectedIndex].value;

            produto.tam = opcaoTam;
            produto.quant = 1;
            produto.preco = '135';
            produto.nomeProduto = '21/22 - Camisa PSG HOME - BRANCA & ROSA  \n TAMANHO: ' + produto.tam;
                       
            return produto;
        }


        validarTam(produto)  {
            let msg = '';

            if(produto.tam == 0 ) {
                iziToast.error({
                    position: 'bottomCenter',
                    progressBarColor: 'black',
                    zindex: '4',
                    color: 'rgba(243, 79, 79, 0.915)', 
                    title: 'Selecione o tamanho!',
                    message: '',
                });
                
                return false;
            }
            return true;
        }
  
       carrinho() {


        var car = document.getElementById('main-open');
        car.classList.toggle('carrinho')
        car.classList.toggle('main-open');
  
      }

      carrinho1() {
        var car = document.getElementById('z');
        car.classList.toggle('bnt-car-exit');
        car.classList.toggle('bnt-car');
    }

      
}
   
    const produto = new Produto();
   
    // Carrinho multiverso__________________________________________________________________

    function confirmPagCenter(){
        let totalString = localStorage.getItem('total');
        let totalObj = JSON.parse(totalString);
        
        if(totalObj > 0){
            var carConfirm = document.getElementById('z');
            carConfirm.classList.remove('bnt-car-exit');
            carConfirm.classList.add('bnt-car');
            produto.listaTabela();
            produto.total();
        }
        else{
            return 0;
        }
    }
    setTimeout(confirmPagCenter, 500)




    // BARRA DE PESQUISA____________________________________________________________________

    var bntmobile1 = document.getElementsByClassName('button.bnt-pesq') 
    
    
    function pesquisa() {
    var pesq= document.getElementById('pesqmain');
    pesq.classList.toggle('pesq')
    pesq.classList.toggle('pesq-close')
    }

    // MENU__________________________________________________________________________________

    function menu() {
    var menu = document.getElementById('menu-open');
    menu.classList.toggle('menu')
    menu.classList.toggle('menu-open')
    }

    function menu() {
    var menu = document.getElementById('menu-open');
    menu.classList.toggle('menu')
    menu.classList.toggle('menu-open')
    }

    // Botao de scoll top____________________________________________________________________

    window.onscroll = function(){
        scroll();
    }

    function scroll(){
        var bnt = document.getElementById('arrowTop');
        if(document.documentElement.scrollTop > 600){
            bnt.style.display = "block";
        }
        else{
            bnt.style.display = "none";
        }

    }

    
