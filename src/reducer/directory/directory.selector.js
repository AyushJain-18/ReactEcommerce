import {createSelector} from 'reselect';

export const selectDirectory =(state)=>state.directory;

export const selectSection =createSelector([selectDirectory],directory=>directory.sections)