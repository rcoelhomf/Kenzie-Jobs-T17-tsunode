import { CompanyContext } from "../../providers/CompanyContext/index";
import { useContext, useState, ChangeEvent, useEffect  } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface Job {
  userId: number;
  id: number;
  position: string;
  salary: number;
  description: string;
}

type FormData = {
  search: string;
};

export const SearchPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const { filteredJobs, filterJob } = useContext(CompanyContext);
  const [submittedSearchTerm, setSubmittedSearchTerm] = useState<string>('');
  const [expandedJobId, setExpandedJobId] = useState<number | null>(null);
  const [renderedJobs, setRenderedJobs] = useState<Job[]>([]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSubmittedSearchTerm(event.target.value);
  };

  const handleToggleDescription = (jobId: number) => {
    if (expandedJobId === jobId) {
      setExpandedJobId(null);
    } else {
      setExpandedJobId(jobId);
    }
  };

  const submit: SubmitHandler<FormData> = async (formData) => {
    try {
      await filterJob(formData.search);
      setSubmittedSearchTerm(formData.search);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  const handleApplyJob = (jobId: number) => {
    console.log(`Candidatando-se à vaga de emprego com ID ${jobId}`);
  };

  useEffect(() => {
    setRenderedJobs(filteredJobs);
  }, [filteredJobs]);

  return (
    <>
      <div>
        <h1>Busca de vagas</h1>
        <p>Digite o que você está procurando:</p>
        <form onSubmit={handleSubmit(submit)}>
          <input
            type="text"
            placeholder="Pesquisa"
            {...register("search")}
            onChange={handleSearchChange}
          />
          <button type="submit">Pesquisar</button>
        </form>
      </div>

      {renderedJobs.length > 0 ? (
        // Render the list of jobs
        <ul>
          {renderedJobs.map((job) => (
            <li key={job.id}>
              <h2>{job.position}</h2>
              {}
            </li>
          ))}
        </ul>
      ) : (
        
        <p>Nenhum resultado encontrado.</p>
      )}
    </>
  );
};