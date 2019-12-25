import React from 'react';
import MenuItem from './../menu-item/menu-item.component';
import './directory.component.scss';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import {connect} from 'react-redux';

const Directory = ({sections})=>   (    
    <div className='directory-menu'>
    { /*this.state.sections.map( ({title,imageUrl,id, size, linkUrl}) => (
            <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />   
        )) 
        The above block can be rewritten using ES6 decomposition and spread operator ...
        */}
        {sections.map( ({id,...otherSectionProps}) => (
            <MenuItem key={id} {...otherSectionProps} />   
        ))}
    </div>
) 

const mapStateToProps = createStructuredSelector({
    sections : selectDirectorySections
});

export default connect(mapStateToProps)(Directory);