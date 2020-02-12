import React, { Component } from 'react';

import { ProjectsContainer, ProjectsHead} from './projects.styles';

class Projects extends Component {
    render() {
        return (
            <ProjectsContainer>
                <ProjectsHead>MY PROJECTS</ProjectsHead>
                <h3>Quire - A simple note app in your browser!</h3>
                <h3>TGN - My own news site about games, TV-shows and movies (work in progress)</h3>
                <h3>B.E.V - A browser-app where users can get crime statistics (work in progress)</h3>
                
            </ProjectsContainer>
            
        );
    }
}

export default Projects;
