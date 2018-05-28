import { SAVE_POSITION } from './mutation-types'

export default {
    [SAVE_POSITION](state, position) {
        state.position = position;
    }
}