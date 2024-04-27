import { useContext } from "react";
import { AuthContext } from '../../hooks/AuthContext';
import CustomButton from "../../assets/components/buttom/buttom";
import { useForm } from "react-hook-form";
import "./style.css";

function CadastroPage() {
    const { register, handleSubmit, formState: { errors, isSubmitted } } = useForm();
    const { cadastro } = useContext(AuthContext);

    const handleSignupSubmit = (data) => {
        const { name, sexo, cpf, nascimento, email, endereco, password } = data;
        cadastro(name, sexo, cpf, nascimento, email, endereco, password);
    };

    return (
        <div>
            <div className="container">
                <form className="signup-screen" onSubmit={handleSubmit((handleSignupSubmit))}>
                    <h3 className="title-register">Registre-se para criar pontos de coleta</h3>
                    <div>
                        <label>Nome</label>
                        <input type="text"
                            className="input-forms"
                            placeholder="Digite seu nome completo"
                            {...register("name", { required: true, minLength: 5, maxLength: 50 })}></input>
                        {errors.name && errors.name.type === "required" && isSubmitted && (<p className="error-message">Campo obrigatório.</p>)}
                        {errors.name && errors.name.type === "maxLength" && isSubmitted && (<p className="error-message">O nome não pode ter mais de 50 caracteres.</p>)}
                        {errors.name && errors.name.type === "minLength" && isSubmitted && (<p className="error-message">Por favor, verifique seus dados.</p>)}
                    </div>
                    <div>
                        <label>Sexo</label>
                        <select className="input-forms"
                            {...register("sexo", {validate: (value) => {return value !== "0"}})}>
                            <option value="0">Selecione</option>
                            <option value="Feminino">Feminino</option>
                            <option value="Masculino">Masculino</option>
                        </select>
                        {errors?.sexo && isSubmitted && <p className="error-message">Campo obrigatório.</p>}
                    </div>
                    <div>
                        <label>CPF</label>
                        <input type="text" className="input-forms"
                            placeholder="Digite seu CPF"
                            {...register("cpf", { required: true, pattern:/^(\d{3}\.\d{3}\.\d{3}-\d{2}|\d{11})$/ })}></input>
                        {errors.cpf && errors.cpf.type === "required" && isSubmitted && (<p className="error-message">Campo obrigatório.</p>)}
                        {errors.cpf && errors.cpf.type === "pattern" && isSubmitted && (<p className="error-message">Por favor, insira um CPF válido.</p>)}
                    </div>
                    <div>
                        <label>Data de Nascimento</label>
                        <input type="text"
                            className="input-forms"
                            placeholder="xx/xx/xx"
                            {...register("nascimento", { required: true, maxLength: 8 })}></input>
                        {errors.nascimento && errors.nascimento.type === "required" && isSubmitted && (<p className="error-message">Campo obrigatório.</p>)}
                        {errors.nascimento && errors.nascimento.type === "maxLength" && isSubmitted && (<p className="error-message">Por favor, verifique seus dados.</p>)}
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="text"
                            className="input-forms"
                            placeholder="Digite seu email"
                            {...register("email", { required: true, maxLength: 64, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}></input>
                        {errors.email && errors.email.type === "required" && isSubmitted && (<p className="error-message">Campo obrigatório.</p>)}
                        {errors.email && errors.email.type === "maxLength" && isSubmitted && (<p className="error-message">O email não pode ter mais de 64 caracteres.</p>)}
                        {errors.email && errors.email.type === "pattern" && isSubmitted && (<p className="error-message">Por favor, insira um email válido.</p>)}
                    </div>
                    <div>
                        <label>Endereço</label>
                        <input type="text"
                            className="input-forms"
                            placeholder="Digite seu endereço"
                            {...register("endereco", { required: true })}></input>
                        {errors.endereco && errors.endereco.type === "required" && isSubmitted && (<p className="error-message">Campo obrigatório.</p>)}
                    </div>
                    <div>
                        <label>Senha</label>
                        <input type="password"
                            className="input-forms"
                            placeholder="Digite seu senha"
                            {...register("password", { required: true, maxLength: 8 })}></input>
                        {errors.password && errors.password.type === "required" && isSubmitted && (<p className="error-message">Campo obrigatório.</p>)}
                        {errors.password && errors.password.type === "maxLength" && isSubmitted && (<p className="error-message">A senha não pode ter mais de 8 caracteres.</p>)}
                    </div>
                    <CustomButton type="submit" buttonText="Entrar" />
                </form>
            </div>
        </div>
    )
}

export default CadastroPage;