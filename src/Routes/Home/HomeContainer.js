import React, { Component } from "react";
import HomePresenter from "./HomePresenter";

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



    render() {
        const { nowPlaying, upcoming, popular, error, loading } = this.state;
        //화면에 뿌려질 상태값 또는 함수가 들어간다.
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
