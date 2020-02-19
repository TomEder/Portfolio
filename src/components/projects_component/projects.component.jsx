import React, { Component } from 'react';
import Quire from './Capture.PNG';
import TGN from './CaptureTGN.PNG';

import { ProjectsContainer, ProjectsHead, ProjectImg} from './projects.styles';

class Projects extends Component {
    render() {
        return (
            <ProjectsContainer className="Projects">
                <ProjectsHead>MY PROJECTS</ProjectsHead>

                <h3>
                    <ProjectImg src={Quire} alt=""/>
                    Quire - A simple note app in your browser!
                </h3>
                <h3>
                    <ProjectImg src={TGN} alt="" />
                    TGN - My own news site about games, TV-shows and movies.
                </h3>
                
                
            </ProjectsContainer>
            
        );
    }
}

export default Projects;
