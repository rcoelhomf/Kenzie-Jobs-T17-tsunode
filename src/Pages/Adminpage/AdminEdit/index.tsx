import { useState, useContext, ChangeEvent } from 'react';
import { ParagraphMenu, Title2 } from '../../../Styles/Typography';
import { StyledInput } from '../../../components/Input/style';
import { Button } from '../../../components/Button';
import { Footer } from '../../../components/Footer';
import { ButtonContainer, EditPageContainer, EditPageInputs, StyledColumn, EditPageInput, TitleContainer, PageContainer } from './style';
import seta from "../../../assets/arrow.png";
import { AdmHeader } from '../../../components/AdmHeader';
import { AdmContext } from '../../../providers/AdmContext';

export const AdmEdit = () => {

  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState('');
  const [description, setDescription] = useState('');
  const [showPosition, setShowPosition] = useState(false);
  const { editJob, jobId, navigate } = useContext(AdmContext);

  const handlePositionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPosition(event.target.value);
  };

  const handleSalaryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSalary(event.target.value);
  };

  const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleEdit = async () => {
    if (jobId !== null) {
      console.log("Dados a serem enviados para a API:", jobId, position, salary, description);
      try {
        await editJob(jobId, position, Number(salary), description);
        setShowPosition(true);
      } catch (error) {
        console.log("Erro ao editar a vaga:", error)
      }
    }
  };

  const handleGoBack = () => {
    navigate('/admin/jobs')
  };

  return (
    <>
      <AdmHeader />
      <PageContainer>
        <div className="edit-page">
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '1rem'  }}>
            <img src={seta} alt="Voltar" style={{ height: '20px', marginRight: '0.5rem' }} onClick={handleGoBack} />
            <ParagraphMenu font="var(--color-blue)" onClick={handleGoBack}>voltar</ParagraphMenu>
          </div>
          <EditPageContainer >
            <TitleContainer>
              <Title2 font="var(--color-blue)" style={{ marginBottom: '2rem' }}>
                Editando: {showPosition ? position : ''}
              </Title2>
            </TitleContainer>
            <EditPageInputs>
              <StyledColumn>
                <EditPageInput>
                  <StyledInput
                    type="text"
                    placeholder="Cargo"
                    value={position}
                    onChange={handlePositionChange}
                    style={{ height: '66px', width: '639px' }}
                  />
                </EditPageInput>
                <EditPageInput>
                  <StyledInput
                    type="number"
                    placeholder="Salário (opcional)"
                    value={salary}
                    onChange={handleSalaryChange}
                    style={{ height: '66px', width: '639px' }}
                  />
                </EditPageInput>
              </StyledColumn>
              <StyledColumn>
                <StyledInput
                  type="text"
                  placeholder="Descrição"
                  value={description}
                  onChange={handleDescriptionChange}
                  style={{ height: '236px', width: '639px' }}
                />
              </StyledColumn>
            </EditPageInputs>
            <ButtonContainer>
              <Button onClick={handleEdit} height='58px' width='183px'>
                Editar Vaga
              </Button>
            </ButtonContainer>
          </EditPageContainer>
        </div>
      </PageContainer>
      <Footer  position='fixed'/>
    </>
  )
}