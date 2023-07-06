import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ParagraphMenu, Title1, Title3 } from "../../Styles/Typography";
import { Footer } from "../../components/Footer";
import { LinksDiv, TitleDiv } from "./style";
import { CompanyContext } from "../../providers/CompanyContext/index";

export const AdminPage = () => {
  const { company } = useContext(CompanyContext);
  const [ companyName, setCompanyName ]= useState('')

    setCompanyName(company.name);
 

  const token = localStorage.getItem("@TOKEN");
  const ID = localStorage.getItem("@USERID");

  return (
    <>
      <header>
        <img src="" alt="" />
        <div>
          <Link to={"/admin"}>KE</Link>
          <button>Sair</button>
        </div>
      </header>
      <LinksDiv>
        <ParagraphMenu font="var(--color-blue)">Minhas vagas</ParagraphMenu>
        <Link className="linkEdit" to={"/admin/applications"}>
          Minhas candidaturas
        </Link>
      </LinksDiv>
      <TitleDiv>
        <Title1 font="var(--color-blue)">{companyName}</Title1>
      </TitleDiv>
      <Footer />
    </>
  );
};