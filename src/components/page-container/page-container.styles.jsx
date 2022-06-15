import styled from 'styled-components'

export const PageContainer = styled.section`
  min-height: 85vh;
  position: relative;
  left: 0;
  right: 0;
  padding: 3rem 4rem;
  /* display: flex;
  justify-content: flex-start;
  align-items: flex-start; */
  color: var(--color-white);
  overflow: hidden;
  border: 2px solid red;
  display: flex;
  animation: scaleAnimation 1s ease-in-out;
  border: 2px solid red;
  @keyframes scaleAnimation {
  0% {
    transform: translateX(100%) scaleY(0);
  }
  100% {
    transform: translateX(0%) scaleY(1);
  }
}
`