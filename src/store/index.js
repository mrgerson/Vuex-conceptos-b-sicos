import { createStore } from 'vuex'

export default createStore({
    state: {
        contador: 150
    },
    mutations: {
        incrementar(state, payload) {
            state.contador = state.contador + payload
        },
        disminuir(state, payload) {
            state.contador = state.contador - payload
        }
    },
    actions: {
        accionIncrementar({ commit }) {
            commit('incrementar', 10)
        },
        accionDisminuir({ commit }, numero) {
            commit('disminuir', numero)
        },
        accionBoton({ commit }, objeto) {
            if (objeto.estado) {
                commit('incrementar', objeto.numero)
            } else {
                commit('disminuir', objeto.numero)
            }
        }
    },
    modules: {}
})

/* notas

las mutaciones acceden a los estados y la pueden modificar y para llamar a esas mutaciones se utulizan las acciones

-Los state siempre vas en las propiedades computadas

-las mutaciones van en los mètodos

-todas las acciones se mapean dentro de los mètodos



 
 
 
*/