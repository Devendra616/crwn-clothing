import React from 'react';
import MenuItem from './../menu-item/menu-item.component';
import { DirectoryMenuContainer} from './directory.styles';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import {connect} from 'react-redux';

const Directory = ({sections})=> (  
    
    <DirectoryMenuContainer>
       {sections.map( ({id,...otherSectionProps}) => ( 
            <MenuItem key={id} {...otherSectionProps} />   
        ))}
    </DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
    sections : selectDirectorySections
});

export default connect(mapStateToProps)(Directory);