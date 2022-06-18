import styled from "styled-components";

export const ProgressBar = styled.div`
  display: flex;
  flex-direction: column;
  padding: .5rem;
  .prog-title {
    text-transform: uppercase;
    font-weight: 500;
  }
  .progress-con {
    display: flex;
    align-items: center;
    .prog-text{
      color: var(--color-grey-2);
    }
    .progress{
      width: 100%;
      height: .45rem;
      background-color: var(--color-grey-4);
      margin-left: 1rem;
      position: relative;
      span{
        position: absolute;
        top: 0;
        left:0;
        height: 100%;
        background-color: var(--color-secondary);
        transition: all .4s ease-in-out;
        width: ${props => props.skillLevel};
      }
      .skill-level {
        width: ${props => props.skillLevel};
      }
    }
  }
`