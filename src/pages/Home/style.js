import styled from 'styled-components'

export const Container = styled.div``

export const Frame1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    height: 500px;
    position: relative;
    right: -150px;
    top: 70px;
  }

  div {
    width: 815px;
    z-index: 5;
  }
`

export const Main = styled.div`
  background-color: var(--space-dark);
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  &::before {
    content: '';
    background-image: url(${(props) => props.img});
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
`

export const Display = styled.h1`
  color: var(--text);
  font: var(--font-display);
`

export const H1 = styled.h1`
  color: var(--text);
  font: var(--font-heading-1);
`

export const H2 = styled.h2`
  color: var(--sun);
  font: var(--font-heading-2);
`

export const H3 = styled.h3`
  color: var(--gray-05);
  font: var(--font-heading-3);
`

export const DataSpace = styled.div`
  display: flex;
  justify-content: space-evenly;
  
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 250px;
    z-index: 5;
  }

  img {
    height: 56px;
  }

  p {
    color: var(--gray-05);
    font: var(--text-1);
    text-align: center;
  }
`
export const Frame2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  p {
    color: var(--gray-05);
    font: var(--text-1);
  }

  div {
    width: 603px;

    .tabela {
      margin-top: 20px;
      max-width: 70%;

      img {
        height: 16px;
      }
    }
  }

  img {
    z-index: 5;
  }
`
export const Section1 = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--background-section);
  height: 1241px;
  width: 100%;

  &::before {
    content: '';
    background-image: url(${(props) => props.img});
    position: absolute;
    top: 1;
    left: 1;
    width: 100%;
    height: 1241px;
    background-repeat: no-repeat;
  }

  div {
    z-index: 5;
  }
`
export const DataMart = styled.div`
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 80%;

  h1 {
    width: 500px;
    margin: 25px 0;
  }

  .div-data-mart {
    img {
      width: 160px;
    }

    a {
      color: var(--mars-light);
      font: var(--text-4);
      text-decoration: none;

      &:hover {
        color: var(--mars);
      }
    }
  }
`
export const Section2 = styled.div`
  background: #0d0e13;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;

  img {
    z-index: 5;
  }

  &::before {
    content: '';
    background-image: url(${(props) => props.img});
    position: absolute;
    top: 1;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
`

export const Form = styled.div`
  background-color: var(--background-form);
  width: 520px;
  height: 650px;
  border-radius: 20px;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  padding: 50px;
  z-index: 5;

  p {
    font: var(--text-1);
    color: var(--gray-05);
  }

  label {
    font: var(--text-1);
    color: var(--text);
  }

  .form-inputs {
    width: 100%;

    h2 {
      margin: 15px 0;
    }

    p {
      margin-bottom: 30px;
    }

    button {
      width: 100%;
      height: 40px;
    }
  }

  .inputs {
    display: flex;
    flex-direction: column;
    gap: 5px;

    input {
      border: solid 1px #fff;
      border-radius: 6px;
      background: none;
      height: 40px;
      padding-left: 10px;
      color: var(--text);
      outline: none;
      margin-bottom: 30px;
    }
  }

  .check {
    display: flex;
    gap: 15px;

    label {
      font-size: 14px;
      color: var(--gray-05);
    }
  }

  .box {
    appearance: none;
    height: 21px;
    width: 21px;
    border: solid 2px #fff;
    border-radius: 6px;
    position: relative;
    cursor: pointer;

    &:checked::before {
      content: '✔';
      text-align: center;
      color: #fff;
      font-size: 12px;
      position: absolute;
      top: 0;
      left: 0;
      width: 17px;
      height: 17px;
      border-radius: 4px;
    }
  }
`
export const Section3 = styled.div`
  background: #0d0e13;

  img {
    width: 100%;
  }
`
export const Footer = styled.div`
  background: #0d0e13;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  height: 130px;

  img {
    max-width: 220px;
    cursor: pointer;
  }

  a {
    color: var(--mars-light);
    font: var(--text-4);
    text-decoration: none;

    &:hover {
      color: var(--mars);
    }
  }

  .links {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 20px;
  }
`

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(250, 250, 250, 0.9);

  width: 100%;

  img {
    max-width: 220px;
    cursor: pointer;
    padding: 20px;
  }
`
