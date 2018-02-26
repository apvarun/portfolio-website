import React, { Component } from "react";
import { Route, matchPath } from "react-router-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";
import AnimatedSwitch from "./animated_switch";
import { firstChild } from "../utils/helpers";

import TopBar from "./top_bar";
import Home from "./home";
import Projects from "./projects";
import ProjectItem from "./project_item";
import Designs from "./designs";
import Contact from "./contact";
import Missed from "./missed";

import * as projectList from "../data/projects.json";
import * as designList from "../data/designs.json";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
			projects: projectList,
			designs: designList
        };
    }
    componentDidMount() {
        // fetch(
        //     "https://api.dribbble.com/v1/users/apvarun/shots?access_token=abbd0452b815c5fe8f4d5e6ab045412a5b50fc611f408535f861148077f12148",
        //     {
        //         mode: "no-cors"
        //     }
        // )
        //     .then(this.status)
        //     .then(this.json)
        //     .then(data => {
        //         this.setState({
        //             ...this.state,
        //             designs: data.slice(0, 7)
        //         });
        //     })
        //     .catch(function(error) {
        //         console.log("Request failed");
        //     });
    }
    status(response) {
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(); //new Error(response.statusText));
        }
    }

    json(response) {
        return response.json();
    }
    render() {
        return (
            <div className="wrapper">
                <TopBar />
                <Route
                    render={({ location }) => (
                        <TransitionGroup component="main">
                            <AnimatedSwitch
                                key={location.key}
                                location={location}
                            >
                                <Route exact path="/" component={Home} />
                                <Route
                                    exact
                                    path="/projects"
                                    render={props => (
                                        <Projects
                                            {...props}
                                            projects={this.state.projects}
                                        />
                                    )}
                                />
                                <Route
                                    path="/projects/:id"
                                    render={props => (
                                        <ProjectItem
                                            {...props}
                                            projects={this.state.projects}
                                        />
                                    )}
                                />
                                <Route
                                    exact
                                    path="/designs"
                                    render={props => (
                                        <Designs
                                            {...props}
                                            designs={this.state.designs}
                                        />
                                    )}
                                />
                                <Route
                                    path="/designs/:id"
                                    render={props => (
                                        <ProjectItem
                                            {...props}
                                            projects={this.state.designs}
                                        />
                                    )}
                                />
                                {/* <Route path="/contact" component={Contact} /> */}
                                <Route component={Missed} />
                            </AnimatedSwitch>
                        </TransitionGroup>
                    )}
                />
            </div>
        );
    }
}
