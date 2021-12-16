import React from "react";
import { Component } from "react";
import { WorkSection, WorkTitle, Part, Span, PartTitle, Line, PartDescription, Icon } from "./style";
import axios from "axios";


class Work extends Component {
    state = {
        works: []
    }
    componentDidMount() {
        axios.get('js/data.json').then(res => { this.setState({ works: res.data.works }) })
    }

    render() {
        const { works } = this.state;
        const workList = works.map((workItem) => {
            return (
                <Part key={workItem.id}>
                    <Icon className={workItem.icon_name}></Icon>
                    <PartTitle>{workItem.title}</PartTitle>
                    <Line />
                    <PartDescription>{workItem.body}</PartDescription>
                </Part>

            )
        }

        )

        return (
            <WorkSection>
                <div className="container">
                    <WorkTitle>My <Span>Work</Span></WorkTitle>
                    {workList}
                </div>

            </WorkSection>

        )




    }

}
export default Work;