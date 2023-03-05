"use client";
import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import Fade from "react-reveal/Fade";

const FooterDiv = styled.div`
  background-color: #000;
  color: #ececec;

  padding: 36px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  > div:nth-of-type(1) {
    > p:nth-of-type(2) {
      margin: 10px 0;
    }
  }

  > div:nth-of-type(2) {
    width: 50%;

    display: flex;
    flex-direction: row;

    ul {
      margin-right: 100px;

      list-style: none;
      li {
        margin: 16px 0;
      }
    }
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: unset;

    align-items: center;

    > div:nth-of-type(1) {
      width: 100%;
    }

    > div:nth-of-type(2) {
      margin-top: 100px;

      width: 100%;
      flex-direction: column;

      ul {
        margin-right: unset;
      }
    }
  }
`;

function Footer() {
  const logoIconWidth = 76;
  return (
    <FooterDiv>
      <Fade bottom>
        <div>
          <Image
            src="/images/Augier.svg"
            alt="logo"
            width={logoIconWidth}
            height={logoIconWidth / 2}
          />
          <p>A Fund Formation Platform</p>
          <p>
            <span style={{ marginRight: "4px" }}>
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0.53125C4.11875 0.53125 0.96875 3.50625 0.96875 7.17188C0.96875 10.8375 4.11875 13.8125 8 13.8125C11.8813 13.8125 15.0312 10.8375 15.0312 7.17188C15.0312 3.50625 11.8813 0.53125 8 0.53125ZM8 12.4844C4.90625 12.4844 2.375 10.0938 2.375 7.17188C2.375 4.25 4.90625 1.85938 8 1.85938C11.0938 1.85938 13.625 4.25 13.625 7.17188C13.625 10.0938 11.0938 12.4844 8 12.4844Z"
                  fill="white"
                />
                <path
                  d="M6.14227 5.12656C6.3954 4.86094 6.70477 4.64844 7.0704 4.51562C7.43602 4.35625 7.80165 4.27656 8.1954 4.27656C8.67352 4.27656 9.15165 4.38281 9.5454 4.62187C9.93915 4.83437 10.3048 5.15313 10.5579 5.49844L11.5704 4.78125C11.1766 4.30313 10.6985 3.87813 10.136 3.6125C9.5454 3.32031 8.92665 3.1875 8.22352 3.1875C7.66102 3.1875 7.09852 3.29375 6.59227 3.50625C6.08602 3.71875 5.63602 4.01094 5.2704 4.35625C4.90477 4.72812 4.5954 5.12656 4.3704 5.63125C4.1454 6.10938 4.0329 6.64062 4.0329 7.17188C4.0329 7.72969 4.1454 8.23438 4.3704 8.7125C4.5954 9.19062 4.87665 9.61562 5.2704 9.9875C5.63602 10.3594 6.08602 10.625 6.59227 10.8375C7.09852 11.05 7.6329 11.1562 8.22352 11.1562C8.92665 11.1562 9.57352 11.0234 10.136 10.7313C10.6985 10.4391 11.2048 10.0406 11.5704 9.5625L10.5579 8.84531C10.3048 9.21719 9.96727 9.50937 9.5454 9.72187C9.12352 9.93437 8.67352 10.0406 8.1954 10.0406C7.80165 10.0406 7.43602 9.96094 7.0704 9.80156C6.7329 9.64219 6.42352 9.42969 6.14227 9.19062C5.88915 8.925 5.66415 8.63281 5.52352 8.2875C5.3829 7.94219 5.29852 7.57031 5.29852 7.17188C5.29852 6.77344 5.3829 6.40156 5.52352 6.05625C5.66415 5.71094 5.88915 5.39219 6.14227 5.12656Z"
                  fill="white"
                />
              </svg>
            </span>
            <span>2023 Augier All right reserved.</span>
          </p>
        </div>
      </Fade>

      <div>
        <Fade bottom>
          <ul>
            <li>Overview</li>
            <li>Resources</li>
          </ul>
        </Fade>
        <Fade bottom>
          <ul>
            <li>Get Started</li>
            <li>About</li>
          </ul>
        </Fade>
      </div>
    </FooterDiv>
  );
}

export default Footer;
