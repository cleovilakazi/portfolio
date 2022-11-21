import React, { Component } from "react";
import data from '../skills.json'

class Skills extends Component{
    render() {
        return (showSkills(data))
    }

}
function showSkills(skills) {
    let skillsContainer = document.getElementById("skills");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill.icon} alt="skill" />
                <span>${skill.name}</span>
              </div>
            </div>`
    });
    skillsContainer.innerHTML = skillHTML;
}