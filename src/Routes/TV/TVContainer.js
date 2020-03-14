import React, {Component} from 'react';
import TVPresenter from "./TVPresenter";
import { tvApi } from "../../api";


class TvContainer extends Component {

    //상태값 선언
    state = {
        popular: null,
        airingToday: null,
        topRated: null,
        loading : true,
        error: null
    };

    async componentDidMount() {
        try {
            const {
                data: {results: airingToday}
            } = await tvApi.airingToday();
            const {
                data: {results: popular}
            } = await tvApi.popular();
            const {
                data: {results: topRated}
            } = await tvApi.topRated();
            this.setState({airingToday, popular, topRated})
        } catch (error) {
            this.setState({error})
        } finally {
            this.setState({loading: false})
        }
    }


    render() {
        //상태값 재선언
        const { popular, airingToday, topRated, loading, error } = this.state;
        console.log("Top rated are", topRated);
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