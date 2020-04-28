import React from 'react'
import './homepage.styles.scss';

import styled from 'styled-components';

import DirectoryMenu from '../../components/home/directory-menu/directory-menu';
// creating styled component with 
const HomePageContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 20px 80px;
`;
class Homepage extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                {/* <div className="homepage"> // when using noraml scss file
                        <DirectoryMenu/>
            </div> */}
                <HomePageContainer>
                    <DirectoryMenu/>
                </HomePageContainer>

        </div>
        )
    }
}

export default Homepage;