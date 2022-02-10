export const API_CALLS = {
    fetchPokemon: async (state) => {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        const res_1 = await res.json()
        return state(res_1)
    },

    fetchPoke: async (state, id) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const res_1 = await res.json()
        return state(res_1)
    }
}