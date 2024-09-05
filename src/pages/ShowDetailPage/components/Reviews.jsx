import React from "react";
import Textbox from "../../../components/Textbox";
import styled from "styled-components";
import classNames from "classnames";
import { formatDate } from "../../../utils/format";
import { ENV } from "../../../constants/environments";
import { IMAGE_NOTFOUND_PATH } from "../../../constants/paths";
import ComponentLoading from "../../../components/ComponentLoading";
import { Empty } from "antd";
import { AntdWrapper } from "../../../components/StyledComponents/AntdWrapper";

const StyledReviewsWrapper = styled.div`
  padding: 20px;
  background-color: var(--black-cl-2);
  border: 1px solid var(--black-cl-3);
  border-radius: 8px;
  .reviews__textbox {
    margin-bottom: 20px;
    align-items: center;
    .btnsecond {
      gap: 4px;
      margin-top: 10px;
    }
  }
`;

const StyledReviewsList = styled.div`
  max-height: 500px;
  overflow-y: scroll;
  padding: 0 10px;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: var(--black-cl-2);
  }
  &::-webkit-scrollbar-thumb {
    background: var(--white-cl);
  }
  .reviews__list-item {
    display: grid;
    grid-template-columns: 1fr 4fr;
    gap: 10px;
    padding-bottom: 20px;
    &:not(:last-child) {
      margin-bottom: 20px;
      border-bottom: 1px solid var(--black-cl-3);
    }
    .author {
      border-right: 1px solid var(--black-cl-3);
      padding-right: 10px;
      &__info {
        &-img {
          text-align: center;
          margin: auto;
          height: 109px;
          aspect-ratio: 102.13 / 109;
          list-style-type: none;
          border-radius: 12px;
          overflow: hidden;
          img {
            object-fit: cover;
            object-position: center;
          }
        }
        &-name {
          text-wrap: wrap;
          text-align: center;
          margin-top: 5px;
        }
      }
      &__update {
        span {
          color: var(--white-cl);
        }
      }
      &__rating {
        height: initial;
        margin-top: 10px;
        margin: 10px auto 0 auto;
      }
    }
    .content {
      max-height: 200px;
      overflow-y: scroll;
      padding: 0 5px;
      &::-webkit-scrollbar {
        width: 5px;
      }
      &::-webkit-scrollbar-track {
        background: var(--black-cl-2);
      }
      &::-webkit-scrollbar-thumb {
        background: var(--black-cl-3);
      }
      &__paragraph {
        color: var(--white-cl);
      }
    }
  }
`;

const Reviews = ({ movieReviews, loading }) => {
  return (
    <section className="reviews --pd-t">
      <div className="container">
        <StyledReviewsWrapper className="reviews-wrapper">
          <Textbox className="reviews__textbox">
            <Textbox.Content>
              <h3 className="--h3">Reviews</h3>
            </Textbox.Content>
          </Textbox>
          <StyledReviewsList className="reviews__list">
            {loading && <ComponentLoading />}
            {movieReviews?.length > 0 &&
              movieReviews?.map((review, index) => {
                const {
                  id,
                  author,
                  content,
                  updated_at: updatedAt,
                  author_details: { avatar_path: avatarPath, rating },
                } = review || {};
                const formatCreatedAt = formatDate(updatedAt || 0);
                const imagePath = avatarPath
                  ? ENV.IMAGE_URL + avatarPath
                  : IMAGE_NOTFOUND_PATH.avatar;
                return (
                  <div key={id || index} className="reviews__list-item">
                    <div className="author">
                      <div className="author__info">
                        <div className="author__info-img">
                          <img src={imagePath || ""} alt="default avatar" />
                        </div>
                        <h5 className="author__info-name --h5">
                          {author || ""}
                        </h5>
                      </div>
                      <p className="author__update">
                        Updated at <span>{formatCreatedAt}</span>
                      </p>
                      <div className="author__rating rating">
                        <div className="rating__val">
                          {Array(5)
                            .fill("")
                            .map((item, index) => {
                              return (
                                <i
                                  key={item || index}
                                  className={classNames("bi bi-star-fill", {
                                    active: index + 1 <= (rating * 5) / 10,
                                  })}
                                ></i>
                              );
                            })}
                        </div>
                        <span className="rating__content">{rating || 0}</span>
                      </div>
                    </div>
                    <div className="content">
                      <p className="content__paragraph">{content || ""}</p>
                    </div>
                  </div>
                );
              })}
            {movieReviews?.length < 1 && !loading && (
              <AntdWrapper>
                <Empty description="No reviews found" />
              </AntdWrapper>
            )}
          </StyledReviewsList>
        </StyledReviewsWrapper>
      </div>
    </section>
  );
};

export default Reviews;
