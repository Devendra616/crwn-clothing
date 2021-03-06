import React from 'react';
import {Route} from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import {firestore, convertCollectionSnapshotToMap} from '../../firebase/firebase.util';
import {connect} from 'react-redux';
import {updateCollections} from '../../redux/shop/shop.actions';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component { 
    state = {
        loading:true
    }   
    unsubscribeFromSnapshot = null;

    componentDidMount(){
        const {updateCollections} = this.props; 
        const collectionRef = firestore.collection('collections');

        /* //subscription pattern
        //whenever the snapshot updates or runs first time it sends snapshot of collection obj array
        this.unsubscribeFromSnapshot = collectionRef.onSnapshot( async snapshot => {
            const collectionsMap = convertCollectionSnapshotToMap(snapshot);
            console.log(collectionsMap);
            await updateCollections(collectionsMap);
            this.setState({loading:false});
        });
    */

        //Observable pattern using promise and fetch api
        collectionRef.fetch()
        .then( async snapshot => {
            const collectionsMap = convertCollectionSnapshotToMap(snapshot);
            console.log(collectionsMap);
            await updateCollections(collectionsMap);
            this.setState({loading:false});
        });

        /* //Observable pattern using promise, in firestore this gives data at many levels deep
        collectionRef.get("https://firestore.googleapis.com/v1/projects/crwn-db-ac008/databases/(default)/documents/collections")
        .then(response => response.json())
        .then( collections => console.log(collections)); */

    }

    render() {
        const {match} = this.props;
        const {loading} = this.state;
        
        return (//render takes props that needs to be passed to component to be rendered, here match, history, location is passed with isLoading
            <div className='shop-page'>                
                <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props}/>} />
                <Route path={`${match.path}/:collectionId`}  render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props}/>} />
            </div>
            );
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);