// Code from https://stackoverflow.com/questions/47455881/semantic-ui-react-search-results-not-visible

import React from "react";
import { Search } from "semantic-ui-react";
import _ from "lodash";
import schoolList from "./schoolList";

class SearchBox extends React.Component {
    state = {
        isLoading: false,
        results: [],
        value: this.props.value
    };

    componentWillMount() {
        this.resetComponent();
    }

    resetComponent = () =>
        this.setState({ isLoading: false, results: [], value: "" });

    handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value });

        setTimeout(() => {
            if (this.state.value.length < 1) this.resetComponent();
            if (this.state.value.length >= 3) {
                const re = new RegExp(_.escapeRegExp(this.state.value), "i");
                const isMatch = result => re.test(result.title);
                const results = _.filter(schoolList, isMatch);
    
                this.setState({
                    isLoading: false,
                    results
                });
            }
        }, 500);
    };

    handleResultSelect = (e, { result }) => {
        const value = result.title;
        this.setState({ value });
        this.props.onSchoolSelect( {
            target: {
                name: this.props.name,
                value
            }
        });
    }

    render() {
        const { isLoading, results, value } = this.state;
        return (
            <div>
                <Search
                    autoComplete="school"
                    type="text"
                    loading={isLoading}
                    placeholder="Type your school here..."
                    results={results}
                    value={value}
                    onSearchChange={this.handleSearchChange}
                    onResultSelect={this.handleResultSelect}
                />
            </div>
        );
    }
}

export default SearchBox;