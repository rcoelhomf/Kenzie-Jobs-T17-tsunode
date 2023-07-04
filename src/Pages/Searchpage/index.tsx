import React, { useState, ChangeEvent, FormEvent } from 'react';

interface Job {
  userId: number;
  id: number;
  position: string;
  sallary: number;
  description: string;
}

export const SearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [jobs, setJobs] = useState<Job[]>([]);
  const [submittedSearchTerm, setSubmittedSearchTerm] = useState<string>('');

  const [expandedJobId, setExpandedJobId] = useState<number | null>(null);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  }

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmittedSearchTerm(searchTerm);
    fetch(`https://kenzie-job-api.onrender.com/jobs?position_like=${searchTerm}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setJobs(data))
      .catch(error => console.log('Error fetching jobs:', error));
  }

  const handleToggleDescription = (jobId: number) => {
    if (expandedJobId === jobId) {
      setExpandedJobId(null);
    } else {
      setExpandedJobId(jobId);
    }
  }

  const handleApplyJob = (jobId: number) => {
    console.log(`Candidatando-se à vaga de emprego com ID ${jobId}`);
  }

  return (
    <div>
      <h1>Busca de vagas</h1>
      <p>Digite o que você está procurando:</p>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Pesquisa"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit">Pesquisar</button>
      </form>
      {submittedSearchTerm && (
        <>
          <h2>Resultados de busca para: '{submittedSearchTerm}'</h2>
          {jobs.length > 0 ? (
            <ul>
              {jobs.map((job) => (
                <li key={job.id}>
                  <h2>{job.position}</h2>
                  {expandedJobId === job.id ? (
                    <>
                      <p>{job.description}</p>
                      <button onClick={() => handleToggleDescription(job.id)}>-</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleToggleDescription(job.id)}>+</button>
                    </>
                  )}
                  <button onClick={() => handleApplyJob(job.id)}>Candidatar-se</button>
                </li>
              ))}
            </ul>
          ) : (
            <p>Desculpe :(! Nenhum resultado encontrado.</p>
          )}
        </>
      )}
    </div>
  );
}

export default SearchPage;