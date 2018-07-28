// Holds the JSON
var stateJsonData = {};

// Imports the JSON data
function getJson() {
    var request = new XMLHttpRequest();
    request.open('GET', './state-reqs.json', true);
    request.onload = function() {
      if (this.status >=200 && this.status < 400) {
        stateJsonData = JSON.parse(this.response);
        console.log("JSON data loaded successfully");
      } else {
        console.log("Error during JSON load");
      }
    };
    request.onerror = function() {
      console.log("Error with JSON request");
    };
    request.send();
  }

const provideStepHeaderHtml = (stepName, stepDeadline) => {
    return `<div class="step_header">
                <div class="step_header_name step_header_left">
                    <h2 class="vr_section_subhead vr_black_background">${stepName}</h2>
                </div>
                <div class="step_header_deadline step_header_right">
                    <h3 class="vr_section_subhead vr_blue_background">${stepDeadline}</h3>
                </div>
            </div>`;
}

const provideStepBodyPartHtml = (instructionType, instructionText, instructionLink = '', instructionLinkText = '') => {
    let html = `<div class="step_body_part step_body_part_${instructionType}">
                    <div class="step_body_part_description step_body_part_left">
                        <p>${instructionText}</p>
                    </div>`;

    if (instructionType === 'link') {
        html += `<div class="step_body_part_link step_body_part_right">
                    <a class="vr_red_background" href="${instructionLink}">${instructionLinkText}</a>
                </div>`;
    }
    // Closing div for initial setting of html variable
    html +=     `</div>`;
    return html;
}

// Gets the HTML required for each type -- Absentee and In Person
const provideHtmlReduce = (type, state) => {
    let typeArray = [];
    if (type === 'absentee') {
        typeArray = stateJsonData[state].stepsAbsentee;
    }
    else if (type === 'inPerson') {
        typeArray = stateJsonData[state].stepsInPerson;
    }
    let html = typeArray.reduce( (accum, curVal) => {
        accum += provideStepHeaderHtml(curVal.stepName, curVal.stepDeadline);
        accum += curVal.stepInstructions.reduce( (accum, curVal) => {
            if (curVal.instructionType === 'link') {
                accum += provideStepBodyPartHtml(curVal.instructionType, curVal.instructionText, curVal.instructionLink, curVal.instructionLinkText);
            }
            else {
                accum += provideStepBodyPartHtml(curVal.instructionType, curVal.instructionText);
            }
            return accum;
        }, '');
        return accum;
    }, '');
    return html;
}

// Process required HTML for a state
const provideHtmlForUsState = (state) => {
    // Absentee html -- active by default
    let html = `<div id="steps_absentee" class="step_container active">`;
    html += provideHtmlReduce('absentee', state);
    html += `</div>`;
    // In Person html -- not active by default
    html += `<div id="steps_in_person" class="step_container">`;
    html += provideHtmlReduce('inPerson', state);
    html += `</div>`;
    return html;
}

// Handles user changing state on the dropdown
const changeUsState = (selectedObj) => {
    while (!stateJsonData) {
        // Waiting for data to load
    }
    if (document.querySelector('#select_method_box').classList.contains("hidden")) {
        document.querySelector('#select_method_box').classList.remove("hidden");
        document.querySelector('#select_method_box').classList.add("select_method_box");
    }
    document.querySelector("#steps_to_vote").innerHTML = provideHtmlForUsState(selectedObj.value);
    // Reset buttons, since each state defaults to "absentee" as first display
    if (document.querySelector("#select_method_in_person").classList.contains("select_method_active")) {
        document.querySelector("#select_method_absentee").classList.toggle("select_method_active");
        document.querySelector("#select_method_in_person").classList.toggle("select_method_active");
    }
}

// Toggles between Absentee and In Person steps for a state
const changeActiveSteps = (event) => {
    // Only change if button clicked isn't already active
    if (!event.target.classList.contains("select_method_active")) {
        // Change active class on the steps
        document.querySelector("#steps_absentee").classList.toggle("active");
        document.querySelector("#steps_in_person").classList.toggle("active");
        // Change active class on the buttons
        document.querySelector("#select_method_absentee").classList.toggle("select_method_active");
        document.querySelector("#select_method_in_person").classList.toggle("select_method_active");
    }
}

// On mobile view, determines whether the pop-up menu items show up
const toggleMenu = () => {
    document.querySelector(".menu_box .menu_overlay").classList.toggle("active");
}

// Run upon page load
getJson();