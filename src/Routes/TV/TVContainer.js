import React, {Component} from 'react';
import TVPresenter from "./TVPresenter";

class TvContainer extends Component {

    //상태값 선언
    state = {
        popular: null,
        airingToday: null,
        topRated: null,
        loading : true,
        error: null
    };


    render() {
        //상태값 재선언
        const { popular, airingToday, topRated, loading, error } = this.state;
        console.log(topRated);
        return (
            <TVPresenter
                loading={loading}
                popular={popular}
                airingToday={airingToday}
                error={error}
                topRated={topRated}
            />
        );
    }
}

export default TvContainer;