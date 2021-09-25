// Actions pueden llamar a una mutación, que son las que modifican el state
import getRandomInt from '../../helpers/getRandomInt'

export const incrementRandomInt = async ({ commit }) => {
    commit( 'setLoading', true )

    const randomInt = await getRandomInt()

    commit( 'incrementBy', randomInt )
    commit( 'setLoading', false )
}