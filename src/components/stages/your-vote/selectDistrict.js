import React, { Component } from 'react';

class SelectDistrict extends Component {
  constructor(props) {
    super(props);
    this.state = {
      margins: {},
      warnings: {},
      marginsLoaded: false,
      warningsLoaded: false
    }

    // Hide navigation
    this.props.updateStore({showNavigation: false});

    this.onClick = this.onClick.bind(this);
  }

  // Processes the data and puts the desired info in state
  processJson = (data, typeOfData) => {
    if (typeOfData === 'margins') {
      const homeState = this.props.getStore()['home[state]']
      const schoolState = this.props.getStore()['school[state]']
      let homeVictoryMarginPercent = '';
      let homeVictoryMarginRank = '';
      let schoolVictoryMarginPercent = '';
      let schoolVictoryMarginRank = '';
      for (let i = 0; i < data.length; i++) {
        if (data[i]['state-short'] === homeState) {
          homeVictoryMarginPercent = data[i]['victory-margin-percent'];
          homeVictoryMarginRank = data[i]['victory-margin-rank'];
        }
        if (data[i]['state-short'] === schoolState) {
          schoolVictoryMarginPercent = data[i]['victory-margin-percent'];
          schoolVictoryMarginRank = data[i]['victory-margin-rank'];
        }
      }
      this.setState({
        margins: {
          homeState: {
            victoryMarginPercent: homeVictoryMarginPercent,
            victoryMarginRank: homeVictoryMarginRank
          },
          schoolState: {
            victoryMarginPercent: schoolVictoryMarginPercent,
            victoryMarginRank: schoolVictoryMarginRank
          }
        },
        marginsLoaded: true
      })
    }
    else if (typeOfData === 'warnings') {
      const homeState = this.props.getStore()['home[state]']
      const schoolState = this.props.getStore()['school[state]']
      this.setState({
        warnings: {
          homeState: data[homeState],
          schoolState: data[schoolState],
          allStates: data['all']
        },
        warningsLoaded: true
      })
    }
  }

  getJson = (url, typeOfData) => {
    var request = new XMLHttpRequest();
    var component = this;
    request.open('GET', url, true);
    request.onload = function() {
      if (this.status >=200 && this.status < 400) {
        var data = JSON.parse(this.response);
        component.processJson(data, typeOfData);
      } else {
        // Error
      }
    };
    request.onerror = function() {
      // Connection error
    };
    request.send();
  }

  onStepChange() {
    let newState = this.setupState(
      this.props.getStore(),
      Object.keys(this.props.form)
    );

    // update state and store
    this.setState(newState);
    this.props.updateStore(newState);
  }

  onClick(e) {
    let newState = {};
    let value = e.target.value;

    this.props.updateStore({
      districtSelector: e.target.value,
      showNavigation: true
    });
    this.props.jumpToStep(this.props.getStore().currentStep + 1);
  }

  componentDidMount() {
    this.getJson('./stateMargins.json', 'margins');
    this.getJson('./stateWarnings.json', 'warnings');
  }

  render() {
    if (this.state.marginsLoaded === false || this.state.warningsLoaded === false) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      )
    }
    else {
      return (
        <div>
          <div className="form_header_progress_bar">
            <img src="./images/form-header-your-vote.png" alt="Your Vote" />
          </div>
          <div className="form_header_box">
            <h1>Where do you want to vote?</h1>
          </div>
          <div className="form_description_box">
            <p>If you're a student who lives at one address during the semester, and a different address when you're not at school, you can choose to vote in either location (but not both).</p>
          </div>
          <div>
          <div>
            <div className="form_header_box">
                <h2>Home Address</h2>
                <p>{ this.props.getStore()['home[streetLine1]'] },{' '}
                { this.props.getStore()['home[streetLine2]'] && `${this.props.getStore()['home[streetLine2]']}, ` }
                { this.props.getStore()['home[city]'] },{' '}
                { this.props.getStore()['home[state]'] }{' '}
                { this.props.getStore()['home[zipCode]'] }</p>
              </div>
              <div className="form_description_box">
                <p>2016 presidential election margin of victory: { this.state.margins.homeState.victoryMarginPercent }</p>
              </div>
              { this.state.warnings.homeState && this.state.warnings.homeState.map( (item, index) => 
                <div id={index} className="form_description_box">
                <p>{item['warning-text']}</p>
                </div> )
              }
              { this.state.warnings.allStates && this.state.warnings.allStates.map( (item, index) => 
                <div id={index} className="form_description_box">
                <p>{item['warning-text']}</p>
                </div> )
              }
              <div>
                <button className="form_button form_button_solid_background" value="home" onClick={this.onClick}>I Want to Vote at Home Address</button>
              </div>
            </div>
            <div>
              <div className="form_header_box">
                <h2>School Address</h2>
                <p>{ this.props.getStore()['school[streetLine1]'] },{' '}
                { this.props.getStore()['school[streetLine2]'] },{' '}
                { this.props.getStore()['school[city]'] },{' '}
                { this.props.getStore()['school[state]'] }{' '}
                { this.props.getStore()['school[zipCode]'] }</p>
              </div>
              <div className="form_description_box">
                <p>2016 presidential election margin of victory: { this.state.margins.schoolState.victoryMarginPercent }</p>
              </div>
              { this.state.warnings.schoolState && this.state.warnings.schoolState.map( (item, index) => 
                <div id={index} className="form_description_box">
                  <p>{item['warning-text']}</p>
                </div> )
              }
              { this.state.warnings.allStates && this.state.warnings.allStates.map( (item, index) => 
                <div id={index} className="form_description_box">
                <p>{item['warning-text']}</p>
                </div> )
              }
              <div>
                <button className="form_button form_button_solid_background" value="school" onClick={this.onClick}>I Want to Vote at School Address</button>
              </div>
            </div>
          </div>
        </div>
      )
    }

  }
}

export default SelectDistrict;