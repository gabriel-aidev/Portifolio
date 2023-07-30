import styled from 'styled-components';

export const StyledHomePage = styled.main`
  display: flex;
  flex-direction: column;

  .title-area {
    margin-right: 50px;

    h1 {
      color: ${({ theme }) => theme.colors.grey00};
      font-size: 45px;
    }

    .backend {
      margin-top: 30px;
      text-align: justify;
      color: ${({ theme }) => theme.colors.backGreen300};
      font-size: 18px;
      max-width: 670px;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: end;
      flex-wrap: wrap;
      gap: 10px;
    }

    .anim-box {
      display: flex;
      align-items: center;
      justify-content: start;
      width: 21ch;
    }

    .anim {
      box-shadow: 1px 0 0 ${({ theme }) => theme.colors.secondary00};
      color: ${({ theme }) => theme.colors.backGreen300};
      margin-top: 30px;
      font-size: 25px;
      text-align: start;
      overflow: hidden;
      white-space: nowrap;
      animation: caret 0.5s step-end infinite alternate, type 5s steps(60, end) infinite;
      animation-delay: 1s;
    }
  }

  @keyframes type {
    0% {
      width: 0;
    }
    15% {
      width: 13ch;
    }
  }

  @keyframes caret {
    50% {
      box-shadow: 0.6em 0 0 transparent;
    }
  }

  section {
    margin-top: 85px;
    padding-top: 50px;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .img-area {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 13px 13px 13px;
    width: 50%;
    min-height: 50vh;

    img {
      max-height: 250px;
      animation: imgMove 2s infinite;
      z-index: -1;
    }
  }

  .contacts-icons {
    display: flex;
    justify-content: flex-end;
    gap: 23px;
    margin-top: 20px;

    svg {
      color: ${({ theme }) => theme.colors.grey100};
      height: 20px;
      width: 20px;
    }

    svg:hover {
      color: ${({ theme }) => theme.colors.secondary00};
    }
  }

  .curriculum-box {
    background-color: ${({ theme }) => theme.colors.secondary200};
    color: ${({ theme }) => theme.colors.backGreen00};
    padding: 7px 10px;
    font-size: 18px;
    border-radius: 10px;
    position: fixed;
    top: 100px;
    right: 10vw;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;

    p {
      font-weight: 500;
      font-size: 16px;
    }

    a {
      color: ${({ theme }) => theme.colors.backGreen00};
      border-radius: 5px;
      padding: 3px;
      display: flex;
    }

    a:hover {
      color: ${({ theme }) => theme.colors.secondary00};
      background-color: ${({ theme }) => theme.colors.grey00};
    }
  }

  @keyframes imgMove {
    0% {
      position: relative;
      top: 0px;
    }
    50% {
      position: relative;
      top: -10px;
    }
    100% {
      position: relative;
      top: 0;
    }
  }

  @media (max-width: 800px) {
    .title-area {
      h1 {
        font-size: 40px;
      }
    }
  }

  @media (max-width: 700px) {
    section {
      padding-top: 80px;
      flex-direction: column;
    }

    .img-area {
      margin-top: 20px;
      min-height: min-content;
      padding: 30px;
    }
  }

  @media (max-width: 450px) {
    .anim-box {
      font-size: 15px;
      width: 18ch;
    }
    .title-area {
      h1 {
        font-size: 30px;
      }
      .backend {
        font-size: 15px;
      }
      .anim {
        font-size: 15px;
      }
    }
  }

  @media (max-width: 373px) {
    .sub-title-area {
      .anim-box {
        width: 125px;
      }
    }
  }
`;
