import React from "react";
import MyWatchList from "./components/MyWatchList";
import MyRating from "./components/MyRating";
import MyFavorites from "./components/MyFavorites";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb";
import { PATHS } from "../../constants/paths";
import styled from "styled-components";
import { breakpoints } from "../../constants/media";

const StyledProfileWrapper = styled.div`
  .profile__wrapper-breadcrumb {
    padding: 20px;
    background-color: var(--black-cl-2);
    border: 1px solid var(--black-cl-3);
    border-radius: 8px;
    margin-bottom: 20px;
    .breadcrumb__item {
      text-transform: capitalize;
    }
  }
  .profile__wrapper-content {
    padding: 20px;
    background-color: var(--white-cl);
    border-radius: 8px;
    color: var(--black-cl);
  }
`;

const StyledProfileContent = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  .tabs {
    border-right: 1px solid var(--black-cl-3);
    padding-right: 20px;
    &__item {
      a {
        display: flex;
        color: var(--black-cl);
        font-family: var(--ff-semibold);
        padding: 10px 0;
        transition: var(--transition-duration);
        &:hover,
        &.active {
          color: var(--red-cl);
        }
      }
    }
  }
  .info {
    padding: 10px 20px 10px 20px;
    min-height: 250px;
    max-height: 800px;
    overflow-y: scroll;
  }
  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: initial;
    .tabs {
      border: initial;
      padding: initial;
      padding-bottom: 10px;
      border-bottom: 1px solid var(--black-cl-3);
      display: flex;
      align-items: center;
      justify-content: center;
      &__item {
        a {
          padding: 20px;
        }
      }
    }
    .info {
      padding: initial;
      padding-top: 10px;
    }
  }
`;

const ProfilePage = () => {
  const { pathname } = useLocation();
  return (
    <main className="profile">
      <div className="container">
        <StyledProfileWrapper className="profile__wrapper">
          <BreadCrumb classes="profile__wrapper-breadcrumb">
            <BreadCrumb.Item>Streamvibe</BreadCrumb.Item>
            {pathname.split("/").map((item, index) => {
              return (
                <BreadCrumb.Item key={item || index}>
                  {index + 1 !== pathname.split().length && " / "}
                  {item}
                </BreadCrumb.Item>
              );
            })}
          </BreadCrumb>
          <StyledProfileContent className="profile__wrapper-content">
            <ul className="tabs">
              <li className="tabs__item">
                <NavLink to={PATHS.PROFILE.FAVORITES}>Favorites</NavLink>
              </li>
              <li className="tabs__item">
                <NavLink to={PATHS.PROFILE.WATCHLIST}>Watchlist</NavLink>
              </li>
              <li className="tabs__item">
                <NavLink to={PATHS.PROFILE.RATING}>Rating</NavLink>
              </li>
            </ul>
            <div className="info">
              <Outlet />
            </div>
          </StyledProfileContent>
        </StyledProfileWrapper>
      </div>
    </main>
  );
};

export default ProfilePage;
