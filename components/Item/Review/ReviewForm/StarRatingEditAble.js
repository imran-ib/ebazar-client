import React from "react";
import StarRatingComponent from "react-star-rating-component";
import Styles from "styled-components";
import media from "styled-media-query";

const StarStyles = Styles.div`
overflow-x: hidden;
.Review-text-center {
  float: right;
  ${media.lessThan("small")`
  text-align: center;
    `}
}
`;

class StarRatingEditAble extends React.Component {
  constructor() {
    super();

    this.state = {
      rating: 1
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }
  onStarClickHalfStar(nextValue, prevValue, name, e) {
    const xPos =
      (e.pageX - e.currentTarget.getBoundingClientRect().left) /
      e.currentTarget.offsetWidth;

    if (xPos <= 0.5) {
      nextValue -= 0.5;
    }

    console.log(
      "name: %s, nextValue: %s, prevValue: %s",
      name,
      nextValue,
      prevValue
    );
    // console.log(e);
    this.setState({ rating: nextValue });
  }

  render() {
    const { rating } = this.state;
    this.props.setrating(rating);

    return (
      <StarStyles>
        <h3 className="Review-text-center">
          Rate This Item :{" "}
          <span>
            {" "}
            <p>
              Your Rating : <strong> {rating}/5</strong>
            </p>
          </span>
        </h3>
        <div style={{ fontSize: 24 }}>
          <StarRatingComponent
            name="ebazar"
            starColor="#ffb400"
            emptyStarColor="#ffb400"
            value={rating}
            onStarClick={this.onStarClickHalfStar.bind(this)}
            renderStarIcon={(index, value) => {
              return (
                <span>
                  <i
                    className={index <= value ? "fas fa-star" : "far fa-star"}
                  />
                </span>
              );
            }}
            renderStarIconHalf={() => {
              return (
                <span>
                  <span style={{ position: "absolute" }}>
                    <i className="far fa-star" />
                  </span>
                  <span>
                    <i className="fas fa-star-half" />
                  </span>
                </span>
              );
            }}
          />
        </div>
      </StarStyles>
    );
  }
}
export default StarRatingEditAble;
