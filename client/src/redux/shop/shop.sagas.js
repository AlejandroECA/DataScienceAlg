import {takeLatest, call, put, all} from 'redux-saga/effects'
import ShopActionsTypes from './shop.types'
import { firestore, convertCollectionsSnapshotsToMap, auth } from '../../firebase/firebase.utils'

import {
    fetchCollectionsSuccess,
    fetchCollectionsFailure
} from './shop.actions'


export function* fetchCollectionAsync(){

    yield console.log('bla');

    try{
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get()
        const collectionsMap = yield call(convertCollectionsSnapshotsToMap,snapshot)
        yield put(fetchCollectionsSuccess(collectionsMap))
    }
    catch(error) {
        yield put(fetchCollectionsFailure(error.message))
    }
}

export function* fetchCollectionsStart(){
    yield takeLatest(ShopActionsTypes.FETCH_COLLECTIONS_START,fetchCollectionAsync)
}

export function* shopSagas(){
    yield all([
        call(fetchCollectionsStart)
    ])
}

