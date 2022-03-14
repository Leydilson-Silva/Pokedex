const listaSelecaoPokemon = document.querySelectorAll('.pokemon ')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemon.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        const cartaoAberto = document.querySelector('.aberto')
        cartaoAberto.classList.remove('aberto')
        
        const idPokemonSelecionado = pokemon.attributes.id.value
                
        const abrirCartao = document.getElementById('cartao-'+ idPokemonSelecionado)
        abrirCartao.classList.add('aberto')


        const itemSelecionadoNaLista = document.querySelector('.ativo')
        itemSelecionadoNaLista.classList.remove('ativo')

        const listaPokemonParaSelecionar = document.getElementById(idPokemonSelecionado)
        listaPokemonParaSelecionar.classList.add('ativo')
    })
});