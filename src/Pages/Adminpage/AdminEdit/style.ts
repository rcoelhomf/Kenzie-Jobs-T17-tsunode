import styled from 'styled-components'

export const PageContainer = styled.div`
  position: relative;
  height: 100vh;
    padding: 0 10vw;
`

export const EditPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
`

export const TitleContainer = styled.div`
  align-self: flex-start;
  margin-top: 1.5rem;
`

export const EditPageInputs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`

export const EditPageInput = styled.div`
  margin-bottom: 20px;
`

export const StyledTextArea = styled.textarea`
`