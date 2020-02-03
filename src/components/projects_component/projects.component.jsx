import React, { Component } from 'react';

import { ProjectsContainer} from './projects.styles';

class Projects extends Component {
    render() {
        return (
            <ProjectsContainer>
            <h1>MY PROJECTS</h1>
            <ul>
                <li>one project</li>
                <li>one project</li>
                <li>one project</li>     
            </ul>
            </ProjectsContainer>
            
        );
    }
}

export default Projects;
