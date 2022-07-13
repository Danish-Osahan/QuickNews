import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
// import Footer from "./Footer";
// import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
  // styles

  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, set_totalresults] = useState(0);

  const capitalizefirst_letter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  // document.title=`${this.capitalizefirst_letter(props.category)}-QuickNews`

  const update = async () => {
    // this.setState({ loading: true });
    setloading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=5d5c1856d4804af284273373ba782e4d&page=1&pageSize=${props.pagesize}`;
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata);
    // this.setState({
    //   articles: parsedata.articles,
    //   totalResults: parsedata.totalResults,
    //   loading: false,
    // });
    setarticles(parsedata.articles);
    set_totalresults(parsedata.totalResults);
    setloading(false);
  };
  useEffect(() => {
    update();
    //eslint-disable-next-line
  }, []);
  // async componentDidMount() {
  //   update();
  // }

  // Onclick Functions
  const handle_next_click = async () => {
    console.log("next");

    // this.setState({
    //   page: this.state.page + 1,
    // });
    setpage(page + 1);
    update();
  };

  const handle_previous_click = async () => {
    console.log("previous");

    // this.setState({
    //   page: this.state.page - 1,
    // });
    setpage(page - 1);
    update();
  };
  let light = {
    boxShadow:
      "  -3px -3px 6px #ffffff,3px 3px 6px #00000050, -3px -3px 6px #ffffff,3px 3px 6px #00000050",
    // marginTop: "1em",
    // color:'white'
  };
  let dark = {
    boxShadow:
      "-3px -3px 12px #ffffff10,3px 3px 12px #000000, -3px -3px 12px #ffffff10,3px 3px 12px #00000090",
    // marginTop: "1em",
  };
  let btn_light = {
    boxShadow:
      "   -3px -3px 5px #ffffff, 3px 3px 5px #00000090, -3px -3px 9px #ffffff,3px 3px 9px #00000090",
    width: "130px",
  };
  let btn_dark = {
    boxShadow:
      " -3px -3px 5px #ffffff10, 3px 3px 9px #000000, -3px -3px 5px #ffffff10,3px 3px 9px #000000",
    width: "130px",
  };
  let index_light = {
    boxShadow:
      "   -3px -3px 5px #ffffff, 3px 3px 5px #00000090, -3px -3px 9px #ffffff,3px 3px 9px #00000090",
    width: "80px",
  };
  let index_dark = {
    boxShadow:
      " -3px -3px 5px #ffffff10, 3px 3px 9px #000000, -3px -3px 5px #ffffff10,3px 3px 9px #000000",
    width: "80px",
  };
  return (
    <>
      <div className="container my-3">
        <div id="heading" className="d-flex mb-3 justify-content-center">
          <h1 id="header" style={props.mode === "Light" ? light : dark}>
            Top Headlines From {capitalizefirst_letter(props.category)}
          </h1>
        </div>
        <div className="d-flex justify-content-evenly flex-wrap">
          {!loading &&
            articles.map((element) => {
              return (
                <div className="mx-3 my-3" key={element.url}>
                  <Newsitem
                    title={
                      element.title.length > 100
                        ? element.title.slice(0, 80) + "...."
                        : element.title
                    }
                    description={
                      element.description
                        ? element.description.slice(0, 100) + "....."
                        : ""
                    }
                    img_url={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://techcrunch.com/wp-content/uploads/2022/07/GettyImages-1254705172.jpg?w=600"
                    }
                    newsurl={element.url}
                    date={element.publishedAt.slice(0, 9)}
                    author={element.author}
                    mode={props.mode}
                  />
                </div>
              );
            })}
          <div className="container d-flex justify-content-between mt-3">
            <button
              className="btn btn-primary"
              type="button"
              disabled={page <= 1}
              onClick={handle_previous_click}
              style={props.mode === "Light" ? btn_light : btn_dark}
            >
              &larr; Previous
            </button>
            {!loading && (
              <button
                className="btn"
                id="label"
                style={props.mode === "Light" ? index_light : index_dark}
              >
                {page}/{Math.ceil(totalResults / props.pagesize)}
              </button>
            )}
            {loading && <Spinner className="mx-3" />}
            <button
              disabled={page + 1 > Math.ceil(totalResults / props.pagesize)}
              className="btn btn-primary"
              type="button"
              onClick={handle_next_click}
              style={props.mode === "Light" ? btn_light : btn_dark}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
      {/* {!this.state.loading && <Footer/>} */}
    </>
  );
};

News.defaultProps = {
  country: "in",
  pagesize: 8,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
