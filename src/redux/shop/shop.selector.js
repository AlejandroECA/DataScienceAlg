import { createSelector } from 'reselect';


const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectioForpreview = createSelector(
    [selectShopCollections],
    collections => collections? Object.keys(collections).map(
        key => collections[key] ) : []

)

export const selectCollection = collectionUrlParam =>
    createSelector(
        [selectShopCollections],
        collection => collection? collection[collectionUrlParam] : null
    )