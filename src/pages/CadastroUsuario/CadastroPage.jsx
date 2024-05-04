import { useContext } from "react";
import { AuthContext } from '../../hooks/AuthContext';
import CustomButton from "../../assets/components/buttom/buttom";
import { useForm } from "react-hook-form";
import "./style.css";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

function CadastroPage() {
    const { register, handleSubmit, setValue, getValues, formState: { errors, isSubmitted } } = useForm();
    const { cadastro } = useContext(AuthContext);

    const handleSignupSubmit = (data) => {
        const { name, sexo, cpf, nascimento, email, cep, logradouro, numero, complemento, bairro, cidade, estado, password } = data;
        cadastro(name, sexo, cpf, nascimento, email, cep, logradouro, numero, complemento, bairro, cidade, estado, password);
    };

    const buscarCep = () => {
        let cep = getValues('cep')
    
        if(!!cep && cep.length == 8){
          fetch(`https://viacep.com.br/ws/${cep}/json/`)
          .then((res) => res.json())
          .then(dados => {
            setValue('bairro', dados.bairro)
            setValue('logradouro', dados.logradouro)
            setValue('estado', dados.uf)
            setValue('cidade', dados.localidade)
          })
          .catch(error => console.log(error))
        }
      }

    return (
        <div>
            <div className="container">
                <form className="form-screen" onSubmit={handleSubmit((handleSignupSubmit))}>
                    <Link to="/login"><KeyboardBackspaceIcon className="icon-return" sx={{ fontSize: 50 }}/></Link>
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
                            placeholder="Ex: 01/01/90"
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
                        <label>CEP (apenas números)</label>
                        <input type="text" className="input-forms"
                            placeholder="Digite seu CEP"
                            {...register("cep", { required: true, pattern: /^[0-9]{8}$/, onBlur: () => buscarCep() })} />
                        {errors.cep && errors.cep.type === "required" && isSubmitted && (<p className="error-message">Campo obrigatório.</p>)}
                        {errors.cep && errors.cep.type === "pattern" && isSubmitted && (<p className="error-message">Por favor, insira um CEP válido.</p>)}
                    </div>
                    <div>
                        <label>Logradouro</label>
                        <input type="text"
                            className="input-forms"
                            placeholder="Digite seu endereço"
                            {...register("logradouro", { required: true, minLength: 5 })} />
                        {errors.logradouro && errors.logradouro.type === "required" && isSubmitted && (<p className="error-message">Campo obrigatório.</p>)}
                        {errors.logradouro && errors.logradouro.type === "minLength" && isSubmitted && (<p className="error-message">Por favor, verifique os dados inseridos.</p>)}
                    </div>
                    <div>
                        <label>Número</label>
                        <input type="string"
                            className="input-forms"
                            placeholder="Digite o número"
                            {...register("numero", { required: true })} />
                        {errors.numero && errors.numero.type === "required" && isSubmitted && (<p className="error-message">Campo obrigatório.</p>)}
                    </div>
                    <div>
                        <label>Complemento (opcional)</label>
                        <input type="text"
                            className="input-forms"
                            placeholder="Digite o complemento"
                            {...register("complemento")} />
                    </div>
                    <div>
                        <label>Bairro</label>
                        <input type="text"
                            className="input-forms"
                            placeholder="Digite o nome do bairro"
                            {...register("bairro", { required: true })} />
                        {errors.bairro && errors.bairro.type === "required" && isSubmitted && (<p className="error-message">Campo obrigatório.</p>)}
                    </div>
                    <div>
                        <label>Cidade</label>
                        <input type="text"
                            className="input-forms"
                            placeholder="Digite o nome da cidade"
                            {...register("cidade", { required: true })} />
                        {errors.cidade && errors.cidade.type === "required" && isSubmitted && (<p className="error-message">Campo obrigatório.</p>)}
                    </div>
                    <div>
                        <label>Estado</label>
                        <input type="text"
                            className="input-forms"
                            placeholder="Digite o nome do estado"
                            {...register("estado", { required: true })} />
                        {errors.estado && errors.estado.type === "required" && isSubmitted && (<p className="error-message">Campo obrigatório.</p>)}
                    </div>
                    <div>
                        <label>Senha</label>
                        <input type="password"
                            className="input-forms"
                            placeholder="Digite uma senha"
                            {...register("password", { required: true, maxLength: 8 })}></input>
                        {errors.password && errors.password.type === "required" && isSubmitted && (<p className="error-message">Campo obrigatório.</p>)}
                        {errors.password && errors.password.type === "maxLength" && isSubmitted && (<p className="error-message">A senha não pode ter mais de 8 caracteres.</p>)}
                    </div>
                    <div className="align-buttom">
                        <CustomButton type="submit" buttonText="Salvar" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CadastroPage;