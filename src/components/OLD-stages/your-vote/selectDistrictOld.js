<div className="yv-state-question">
        <div className="yv-state-question-title">
          <h2>You are eligible to vote in these districts (choose one)</h2>
        </div>
        <div className="yv-state-question-school">
          <h2>{this.state.school.districtName}</h2><span>{this.state.school.considered}</span>
          <span>{this.state.electionResults}</span>
          <button value="school" onClick={this.onClick}>
            VOTE IN GEORGIA
          </button>
        </div>
        <div className="yv-state-question-home">
          <h2>{this.state.home.districtName}</h2><span>{this.state.home.considered}</span>
          <span>{this.state.electionResults}</span>
          <button value="home" onClick={this.onClick}>
            VOTE IN MASSACHUSETTS
          </button>
        </div>
      </div>