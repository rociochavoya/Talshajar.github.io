import React, { Component } from 'react';
// import { genericHashLink } from 'react-router-hash-link';

import Header from './Header';
import Navigation from '../components/Navigation';
import Home from './Home';
import Summary from './Summary';
import ContactInfo from './ContactInfo';
import SkillsList from './SkillsList';
import EducationHistory from './EducationHistory';
import SuperProjects from './ProjectList';


class PortfolioContent extends Component {
    render() {
        const { skills, eduList ,  projectList} = this.props
        return (
            <div className="portfolio-content">
                
                <Header/>

                <Navigation />

                <Home />

                <Summary/>

                <section>
                    <ContactInfo/>
                </section>
                
                <SkillsList skills={skills}/>
                
                <EducationHistory eduList={eduList}/>

                <SuperProjects  projectList={ projectList} />
            </div>
        )  
    }
}

export default PortfolioContent