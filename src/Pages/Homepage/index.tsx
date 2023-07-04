import meeting from "../../assets/Rectangle 3.png"
import { Label, Paragraph, Title1, Title3 } from "../../Styles/Typography"
import { Header } from "../../components/Header"
import { useContext, useEffect } from "react"
import { CompanyContext } from "../../providers/CompanyContext"
import { Modal } from "../../components/Modal"

export const HomePage = () => {
    const { getAllJobs, jobsList, isOpen, setIsOpen } = useContext(CompanyContext)

    useEffect(() => {
        getAllJobs()
    },[])

    console.log(jobsList)

    return (
        <>
            <Header />
            <div>
                <Title1 font="var(--color-white)">Trabalho é na jobs</Title1>
            </div>
            <div>
                <div>
                    <Title1 font="var(--color-blue)">Sobre a jobs</Title1>
                    <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere provident ut dolore dignissimos illum. Quos, at quam animi expedita, odit earum libero praesentium fuga veritatis, blanditiis quas reiciendis quia dicta!</Paragraph>
                </div>
                <img src={meeting} alt="" />
            </div>
            <div>
                <Title1>Confira nossas vagas</Title1>
                <ul>
                    {jobsList.map((item) => (
                        <li key={item.id}>
                            <div>
                                <span>+</span>
                                <div>
                                    <Label>Nome da empresa</Label>
                                    <Title3>{item.position}</Title3>
                                </div>
                                <button onClick={() => setIsOpen(item.id)}>Candidatar-se</button>
                            </div>
                            {isOpen === item.id ? <Modal name={item.position} company="Nome da empresa" jobId={item.id} companyId={item.userId} />: null}                            
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}