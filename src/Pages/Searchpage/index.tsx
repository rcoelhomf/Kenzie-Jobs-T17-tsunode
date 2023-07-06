import { useState, ChangeEvent, FormEvent } from "react"
import {Title1,ParagraphMenu,Paragraph,Title2} from "../../Styles/Typography"
import {StyledForm,StyledInput,StyledImgLupa,StyledImgRetangle,StyledButton,StyledDivJobs,StyledButtonAplly,StyledMainDiv } from"./style"
import Lupa from "../../assets/LupaWhite.png"
import Rectangle from "../../assets/Rectangle 2.png"
import plus from "../../assets/add_FILL0_wght400_GRAD0_opsz48 1.png"
import menus from "../../assets/remove_FILL0_wght400_GRAD0_opsz48 1.png"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"



interface Job {
  userId: number;
  id: number;
  position: string;
  sallary: number;
  description: string;
}

export const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [jobs, setJobs] = useState<Job[]>([])
  const [submittedSearchTerm, setSubmittedSearchTerm] = useState<string>("")


  const [expandedJobId, setExpandedJobId] = useState<number | null>(null)

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmittedSearchTerm(searchTerm)
    fetch(`https://kenzie-job-api.onrender.com/jobs?position_like=${searchTerm}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        return response.json()
      })
      .then(data => setJobs(data))
      .catch(error => console.log("Error fetching jobs:", error))
  }

  const handleToggleDescription = (jobId: number) => {
    if (expandedJobId === jobId) {
      setExpandedJobId(null)
    } else {
      setExpandedJobId(jobId)
    }
  }

  const handleApplyJob = (jobId: number) => {
    console.log(`Candidatando-se à vaga de emprego com ID ${jobId}`)
  }

  return (
    <>
    <Header/>
    <StyledMainDiv>
      <Title1 font="var(--color-blue)">Busca de vagas</Title1>
      <ParagraphMenu>Digite o que você está procurando:</ParagraphMenu>
      <StyledForm  onSubmit={handleSearchSubmit}>
        <StyledInput
          type="text"
          placeholder="Pesquisa"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <StyledButton type="submit"> <StyledImgRetangle src={Rectangle} alt="" />  <StyledImgLupa src={Lupa} alt=""/></StyledButton>
      </StyledForm>

      <StyledDivJobs>
      {submittedSearchTerm && (
        <>
          <ParagraphMenu >Resultados de busca para: "{submittedSearchTerm}"</ParagraphMenu>
          {jobs.length > 0 ? (
            <ul>
              {jobs.map((job) => (
                <li key={job.id}>
                  <ParagraphMenu>{job.position}</ParagraphMenu>
                  {expandedJobId === job.id ? (
                    <>
                      <Paragraph>{job.description}</Paragraph>
                      <StyledButton onClick={() => handleToggleDescription(job.id)}> <img src={menus} alt=""  /></StyledButton>
                    </>
                  ) : (
                    <>
                      <StyledButton onClick={() => handleToggleDescription(job.id)}> <img src={plus} alt=""  /></StyledButton>
                    </>
                  )}
                  <StyledButtonAplly onClick={() => handleApplyJob(job.id)}>Candidatar-se</StyledButtonAplly>
                </li>
              ))}
            </ul>
          ) : (
            <Title2>Desculpe :(! <Paragraph>Nenhum resultado encontrado.</Paragraph> </Title2>
          )}
        </>
      )}
      </StyledDivJobs>
    <Footer/>
    </StyledMainDiv>
    </>
  )
}