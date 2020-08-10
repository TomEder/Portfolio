import React, { Component } from 'react';
import Quire from './Capture.PNG';
import TGN from './CaptureTGN.PNG';

import { ProjectsContainer, ProjectsHead, ProjectImg, ProjectItem } from './projects.styles';

class Projects extends Component {
    render() {
        return (
            <ProjectsContainer className="Projects">
                <ProjectsHead>MY PROJECTS</ProjectsHead>

                <ProjectItem>
                    <ProjectImg src={Quire} alt="Quire - A simple note app in your browser!" /> <br />
                    Quire - A simple note app in your browser!
                </ProjectItem>
                <ProjectItem>
                    <ProjectImg src={TGN} alt="TGN - My own news site about games, TV-shows and movies." /> <br />
                    TGN - My own news site about games, TV-shows and movies.
                </ProjectItem>


            </ProjectsContainer>

        );
    }
}

export default Projects;
