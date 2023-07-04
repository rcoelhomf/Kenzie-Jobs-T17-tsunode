import { useContext } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { Header } from "../../components/Header/index";
import { registerFormSchema } from "../../Schema/RegisterSchema";
import { CompanyContext } from "../../providers/CompanyContext/index";
import { ICompanyRegister } from "../../providers/CompanyContext/@types";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormData extends ICompanyRegister {
  password: string;
}

export const RegisterPage: React.FC = () => {
  const { registerCompany } = useContext(CompanyContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(registerFormSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    try {
      console.log(formData);
      await registerCompany(formData);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <section>
        <button>Voltar</button>
      </section>

      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" {...register("email")} placeholder="Email" />
          {errors.email && <p>{errors.email.types?.message}</p>}

          <input type="password" {...register("password")} placeholder="Senha" />
          {errors.password && <p>{errors.password.types?.message}</p>}

          <input type="text" {...register("name")} placeholder="Nome da empresa" />
          {errors.name && <p>{errors.name.types?.message}</p>}
          <button type="submit">Submit</button>
        </form>
      </section>

      <section></section>
      <ToastContainer />
    </>
  );
};
