import {createSelector} from 'reselect'

export const selectALgList = state =>  state.algorithms

export const selectAlgIndividual = createSelector(
    [selectALgList],
    algorithms => algorithms.collections
)

export const selectWholeAlg = createSelector(
    [selectALgList],
    algorithms => algorithms
)

