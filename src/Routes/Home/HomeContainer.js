import React, { Component } from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "../../api";


export default class extends Component {
    state = {
        nowPlaying: null,
        upcoming: null,
        popular: null,
        error:null,
        loading:true
    };
// 상태 또는 함수 등이 들어간다.

    // 네트워킹
    async componentDidMount() {
        try {
            const {
                data: {results: nowPlaying}
            } = await moviesApi.nowPlaying();
            const {
                data: { results: upcoming }
            } = await moviesApi.upcoming();
            const {
                data: { results: popular }
            } = await moviesApi.popular();

            this.setState({nowPlaying, upcoming, popular})
        } catch (error) {
            this.setState({error: "Can't find movie information"})
        } finally {
            this.setState({loading: false})
        }
    }



    render() {
        const { nowPlaying, upcoming, popular, error, loading } = this.state;
        //화면에 뿌려질 상태값 또는 함수가 들어간다.
        console.log("nowPlaying are ", nowPlaying);
        return (
          <HomePresenter
              loading={loading}
              nowPlaying={nowPlaying}
              popular={popular}
              upcoming={upcoming}
              error={error}
          />
            );
    }


}
