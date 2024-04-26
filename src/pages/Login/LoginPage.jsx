import { useContext } from "react";
import { AuthContext } from '../../hooks/AuthContext';
import CustomButton from "../../assets/components/buttom/buttom";
import { useForm } from "react-hook-form";
import "./style.css";
import { Link } from "react-router-dom";

function LoginPage() {
    const { register, handleSubmit, formState: { errors, isSubmitted } } = useForm();
    const { login } = useContext(AuthContext);

    const handleLoginSubmit = (data) => {
        const { email, password } = data;
        login(email, password);
    };

    return (
        <div>
            <div className="container">
                <form className="login-screen" onSubmit={handleSubmit((handleLoginSubmit))}>
                    <h3>Faça seu login</h3>
                    <div>
                        <label>Email</label>
                        <input type="text"
                        className="input-forms"
                            placeholder="Digite seu email"
                            {...register("email", { required: true, maxLength: 100, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}></input>
                        {errors.email && errors.email.type === "required" && isSubmitted && (<p className="error-message">Campo obrigatório.</p>)}
                        {errors.email && errors.email.type === "maxLength" && isSubmitted && (<p className="error-message">O email não pode ter mais de 100 caracteres.</p>)}
                        {errors.email && errors.email.type === "pattern" && isSubmitted && (<p className="error-message">Por favor, insira um email válido.</p>)}
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
                    <Link to="/cadastro" className="link-signup"><p>Não tem conta? Registre-se?</p></Link>
                    <CustomButton type="submit" buttonText="Entrar" />
                </form>
            </div>
        </div>
    )
}

export default LoginPage;