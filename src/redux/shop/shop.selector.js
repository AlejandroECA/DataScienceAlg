import { createSelector } from 'reselect';

const COLLECTION_ID_MAP ={
    ramen: 1,
    pugbg: 2,
    cats:3,
    jhon:4,
    bjj: 5
}


const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollection = collectionUrlParam =>
    createSelector(
        [selectShopCollections],
        collection => collection.find(collection => 
            collection.id === COLLECTION_ID_MAP[collectionUrlParam])
    )