import React from 'react'
import './homepage.styles.scss';

import DirectoryMenu from '../../components/directory-menu/directory-menu'
class Homepage extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div className="homepage">
                        <DirectoryMenu/>
            </div>
        </div>
        )
    }
}

export default Homepage;