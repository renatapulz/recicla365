import { useContext, useEffect } from "react";
import { CollectionPointContext } from '../../hooks/CollectionPointContext';
import CustomButton from "../../assets/components/buttom/buttom";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Select from 'react-select';

function EditarPonto() {
    const { pontoColeta, editCollectionPoints } = useContext(CollectionPointContext);
    const { formState: { errors, isSubmitted }, handleSubmit, register, control, setValue, getValues } = useForm({ defaultValues: {} });

    useEffect(() => {
        if (pontoColeta) {
            setValue('nomeLocal', pontoColeta.nomeLocal);
            setValue('descricao', pontoColeta.descricao);
            setValue('logradouro', pontoColeta.logradouro);
            setValue('bairro', pontoColeta.bairro);
            setValue('cidade', pontoColeta.cidade);
            setValue('estado', pontoColeta.estado);
            setValue('cep', pontoColeta.cep);
            setValue('latitude', pontoColeta.latitude);
            setValue('longitude', pontoColeta.longitude);
            setValue('numero', pontoColeta.numero);
            setValue('complemento', pontoColeta.complemento);
            if (pontoColeta.tiposResiduos) {
                const tiposResiduosForm = pontoColeta.tiposResiduos.map(tipo => ({
                    value: tipo,
                    label: tipo
                }));
                setValue('tiposResiduos', tiposResiduosForm);
            }
        }
    }, [pontoColeta, setValue]);

    const handleEditSubmit = (data) => {
        const pontoId = pontoColeta.id;
        const userId = pontoColeta.userId;
        const { nomeLocal, descricao, logradouro, bairro, cidade, estado, cep, tiposResiduos, latitude, longitude, numero, complemento } = data;
        editCollectionPoints(pontoId, userId, nomeLocal, descricao, logradouro, bairro, cidade, estado, cep, tiposResiduos, latitude, longitude, numero, complemento);
    };

    const buscarCep = () => {
        let cep = getValues('cep')

        if (!!cep && cep.length === 8) {
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
                <form className="form-screen" onSubmit={handleSubmit(handleEditSubmit)} >
                    <Link to="/gerenciamento"><KeyboardBackspaceIcon className="icon-return" sx={{ fontSize: 30 }} /></Link>
                    <h3 className="title-register">Edição do Ponto de Coleta</h3>
                    <div>
                        <label>Nome</label>
                        <input type="text"
                            className="input-forms"
                            placeholder="Nome do local de coleta"
                            {...register("nomeLocal", { required: isSubmitted ? true : false, minLength: 3, maxLength: 50 })} />
                        {errors.nomeLocal && errors.nomeLocal.type === "required" && isSubmitted && (<p className="error-message">Campo obrigatório.</p>)}
                        {errors.nomeLocal && errors.nomeLocal.type === "maxLength" && isSubmitted && (<p className="error-message">O nome não pode ter mais de 50 caracteres.</p>)}
                        {errors.nomeLocal && errors.nomeLocal.type === "minLength" && isSubmitted && (<p className="error-message">Por favor, verifique os dados inseridos.</p>)}
                    </div>
                    <div>
                        <label>Descrição</label>
                        <input type="text"
                            className="input-forms"
                            placeholder="Descrição do local"
                            {...register("descricao", { required: isSubmitted ? true : false })} />
                        {errors.descricao && errors.descricao.type === "required" && isSubmitted && (<p className="error-message">Campo obrigatório.</p>)}
                    </div>
                    <div>
                        <label>CEP (apenas números)</label>
                        <input type="text" 
                            className="input-forms"
                            placeholder="Digite o CEP do ponto de coleta"
                            {...register("cep", { required: isSubmitted ? true : false, pattern: /^[0-9]{8}$/, onBlur: () => buscarCep()  })} />
                        {errors.cep && errors.cep.type === "required" && isSubmitted && (<p className="error-message">Campo obrigatório.</p>)}
                        {errors.cep && errors.cep.type === "pattern" && isSubmitted && (<p className="error-message">Por favor, insira um CEP válido.</p>)}
                    </div>
                    <div>
                        <label>Logradouro</label>
                        <input type="text"
                            className="input-forms"
                            placeholder="Digite o endereço"
                            {...register("logradouro", { required: isSubmitted ? true : false, minLength: 5 })} />
                        {errors.logradouro && errors.logradouro.type === "required" && isSubmitted && (<p className="error-message">Campo obrigatório.</p>)}
                        {errors.logradouro && errors.logradouro.type === "minLength" && isSubmitted && (<p className="error-message">Por favor, verifique os dados inseridos.</p>)}
                    </div>
                    <div>
                        <label>Número</label>
                        <input type="text"
                            className="input-forms"
                            placeholder="Digite o número"
                            {...register("numero", { required: isSubmitted ? true : false })} />
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
                            {...register("bairro", { required: isSubmitted ? true : false })} />
                        {errors.bairro && errors.bairro.type === "required" && isSubmitted && (<p className="error-message">Campo obrigatório.</p>)}
                    </div>
                    <div>
                        <label>Cidade</label>
                        <input type="text"
                            className="input-forms"
                            placeholder="Digite o nome da cidade"
                            {...register("cidade", { required: isSubmitted ? true : false })} />
                        {errors.cidade && errors.cidade.type === "required" && isSubmitted && (<p className="error-message">Campo obrigatório.</p>)}
                    </div>
                    <div>
                        <label>Estado</label>
                        <input type="text"
                            className="input-forms"
                            placeholder="Digite o nome do estado"
                            {...register("estado", { required: isSubmitted ? true : false })} />
                        {errors.estado && errors.estado.type === "required" && isSubmitted && (<p className="error-message">Campo obrigatório.</p>)}
                    </div>
                    <div>
                        <label>Latitude</label>
                        <input type="text"
                            className="input-forms"
                            placeholder="Digite a latitude do ponto de coleta"
                            {...register("latitude", { required: isSubmitted ? true : false })} />
                        {errors.latitude && errors.latitude.type === "required" && isSubmitted && (<p className="error-message">Campo obrigatório.</p>)}
                    </div>
                    <div>
                        <label>Longitude</label>
                        <input type="text"
                            className="input-forms"
                            placeholder="Digite a longitude do ponto de coleta"
                            {...register("longitude", { required: isSubmitted ? true : false })} />
                        {errors.longitude && errors.longitude.type === "required" && isSubmitted && (<p className="error-message">Campo obrigatório.</p>)}
                    </div>
                    <div>
                        <label>Tipos de resíduos aceitos</label>
                        <Controller
                            name="tiposResiduos"
                            control={control}
                            rules={{ required: isSubmitted ? true : false }}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    options={options}
                                    isMulti
                                    placeholder="Escolha uma ou mais opções"
                                    className="select-form"
                                    defaultValue={pontoColeta && pontoColeta.tiposResiduos ? pontoColeta.tiposResiduos.map(tipo => ({ value: tipo, label: tipo })) : []}
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
  
  export default EditarPonto;