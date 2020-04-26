import React from 'react';

import MenuItem from '../menu-item/menu-item';
import './directory-menu.styles.scss'

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectSection} from '../../../reducer/directory/directory.selector'

const DirectoryMenu =({sections})=> {
        return( 
            <div className="directory-menu">
                {sections.map(({id, ...otherSectionData})=>(
                        <MenuItem key={id}  {...otherSectionData}>
                        </MenuItem> ))
                }
                </div>
        );
    }
const mapStateToProps = createStructuredSelector({sections:selectSection})
export default connect(mapStateToProps)(DirectoryMenu) ;