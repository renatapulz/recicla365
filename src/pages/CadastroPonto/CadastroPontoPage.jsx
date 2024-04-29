import { useContext } from "react";
import { CollectionPointContext } from '../../hooks/CollectionPointContext';
import CustomButton from "../../assets/components/buttom/buttom";
import { useForm, Controller } from "react-hook-form";
import "./style.css";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Select from 'react-select';

function CadastroPontoPage() {
    const { formState: { errors, isSubmitted }, handleSubmit, register, control} = useForm({ defaultValues: {} });
    const { createCollectionPoints } = useContext(CollectionPointContext);

    const handleSignupSubmit = (data) => {
        const { nomeLocal, descricao, logradouro, bairro, cidade, estado, cep, tiposResiduos, latitude, longitude, numero, complemento } = data;
        createCollectionPoints(nomeLocal, descricao, logradouro, bairro, cidade, estado, cep, tiposResiduos, latitude, longitude, numero, complemento);
        console.log(data);
    };

    const options = [
        { value: 'Vidro', label: 'Vidro' },
        { value: 'Madeira', label: 'Madeira' },
        { value: 'Papel', label: 'Papel e Papelão' },
        { value: 'Aluminio', label: 'Alumínio' },
        { value: 'Oleo', label: 'Óleo' },
        { value: 'Pilha', label: 'Pilhas' },
        { value: 'Lampadas', label: 'Lâmpadas' },
        { value: 'Eletronicos', label: 'Eletrônicos' },
        { value: 'Hospitar', label: 'Lixo hospitalar' },
        { value: 'Nao-reciclavel', label: 'Material não reciclável' },
        { value: 'Material-construcao', label: 'Material de construção' }
    ];

    return (
        <div>
            <div className="container">
                <form className="form-screen" onSubmit={handleSubmit(handleSignupSubmit)}>
                    <Link to="/gerenciamento"><KeyboardBackspaceIcon className="icon-return" sx={{ fontSize: 30 }} /></Link>
                    <h3 className="title-register">Cadastro de Ponto de Coleta</h3>
                    <div>
                        <label>Nome</label>
                        <input type="text"
                            className="input-forms"
                            placeholder="Nome do local de coleta"
                            {...register("nomeLocal", { required: true, minLength: 3, maxLength: 50 })} />
                        {errors.nomeLocal && errors.nomeLocal.type === "required" && isSubmitted && (<p className="error-message">Campo obrigatório.</p>)}
                        {errors.nomeLocal && errors.nomeLocal.type === "maxLength" && isSubmitted && (<p className="error-message">O nome não pode ter mais de 50 caracteres.</p>)}
                        {errors.nomeLocal && errors.nomeLocal.type === "minLength" && isSubmitted && (<p className="error-message">Por favor, verifique os dados inseridos.</p>)}
                    </div>
                    <div>
                        <label>Descrição</label>
                        <input type="text"
                            className="input-forms"
                            placeholder="Descrição do local"
                            {...register("descricao", { required: true })} />
                        {errors.descricao && errors.descricao.type === "required" && isSubmitted && (<p className="error-message">Campo obrigatório.</p>)}
                    </div>
                    <div>
                        <label>CEP</label>
                        <input type="text" className="input-forms"
                            placeholder="Digite o CEP do ponto de coleta"
                            {...register("cep", { required: true, pattern: /^[0-9]{8}$/ })} />
                        {errors.cep && errors.cep.type === "required" && isSubmitted && (<p className="error-message">Campo obrigatório.</p>)}
                        {errors.cep && errors.cep.type === "pattern" && isSubmitted && (<p className="error-message">Por favor, insira um CEP válido.</p>)}
                    </div>
                    <div>
                        <label>Logradouro</label>
                        <input type="text"
                            className="input-forms"
                            placeholder="Digite o endereço"
                            {...register("logradouro", { required: true, minLength: 5 })} />
                        {errors.logradouro && errors.logradouro.type === "required" && isSubmitted && (<p className="error-message">Campo obrigatório.</p>)}
                        {errors.logradouro && errors.logradouro.type === "minLength" && isSubmitted && (<p className="error-message">Por favor, verifique os dados inseridos.</p>)}
                    </div>
                    <div>
                        <label>Número</label>
                        <input type="number"
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
                            placeholder="Digite o nome da estado"
                            {...register("estado", { required: true })} />
                        {errors.estado && errors.estado.type === "required" && isSubmitted && (<p className="error-message">Campo obrigatório.</p>)}
                    </div>
                    <div>
                        <label>Latitude</label>
                        <input type="text"
                            className="input-forms"
                            placeholder="Digite a latitude do local"
                            {...register("latitude", { required: true })} />
                        {errors.latitude && errors.latitude.type === "required" && isSubmitted && (<p className="error-message">Campo obrigatório.</p>)}
                    </div>
                    <div>
                        <label>Longitude</label>
                        <input type="text"
                            className="input-forms"
                            placeholder="Digite a longitude do local"
                            {...register("longitude", { required: true })} />
                        {errors.longitude && errors.longitude.type === "required" && isSubmitted && (<p className="error-message">Campo obrigatório.</p>)}
                    </div>
                    <div>
                    <label>Tipos de resíduos aceitos</label>
                    <Controller
                        name="tiposResiduos"
                        control={control}
                        rules={{ required: true }}
                        defaultValue={[]}
                        render={({ field }) => (
                            <Select
                                {...field}
                                options={options}
                                isMulti
                                placeholder="Escolha uma ou mais opções"
                                className="select-form"
                            />
                        )}
                    />
                    {errors.tiposResiduos && errors.tiposResiduos.type === "required" && isSubmitted && (<p className="error-message">Campo obrigatório.</p>)}
                    </div>
                    <div className="align-buttom">
                        <CustomButton type="submit"
                            buttonText="Salvar" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CadastroPontoPage;