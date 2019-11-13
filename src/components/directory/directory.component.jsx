import React from 'react';
import MenuItem from './../menu-item/menu-item.component';
import './directory.component.scss';
import SECTIONS_DATA from './sections.data.js';

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections : SECTIONS_DATA
        }
    }

    render() {
        return (
            <div className='directory-menu'>
            { /*this.state.sections.map( ({title,imageUrl,id, size, linkUrl}) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />   
                )) 
                The above block can be rewritten using ES6 decomposition and spread operator ...
                */}
                {this.state.sections.map( ({id,...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps} />   
                ))}
            </div>
        );
    }
}


export default Directory;