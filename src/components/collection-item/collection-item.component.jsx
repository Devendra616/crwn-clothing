import React from 'react'
import './collection-item.styles.scss';

import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.action';
import {CollectionItemContainer, CollectionFooterContainer,
    NameContainer,PriceContainer,
    BackgroundImage, AddButton  } from './collection-item.styles';


const CollectionItem = ({item, addItem}) => {
    const { name, price, imageUrl} = item;
    return (
    <CollectionItemContainer>
        <BackgroundImage imageUrl={imageUrl} />
        <CollectionFooterContainer>
            <NameContainer>{name}</NameContainer>
            <PriceContainer>$ {price}</PriceContainer>
        </CollectionFooterContainer>
        <AddButton inverted onClick = {() => addItem(item)} >Add to cart</AddButton>
    </CollectionItemContainer>
)};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem);
