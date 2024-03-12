import Input from "@/components/common/form/Input/Input";
import Select from "@/components/common/form/select/Select";

const PersonalData = ({ handleTabChange }) => {
  //Variables
  //Sex Options
  const sexoptions = [
    { value: "Masculino", label: "Masculino" },
    { value: "Feminino", label: "Feminino" },
  ];

  // Wheelchair Options
  const wheelchairOptions = [
    { value: "Sim", label: "Sim" },
    { value: "Não", label: "Não" },
  ];

  return (
    <div className="dadosPessoais">
      <div className="caixa-nome-idade">
        <Input label="Nome:" type="text" placeholder="Digite o nome" />
        <Input label="Idade:" type="number" placeholder="Digite a idade" />
        <Input label="Local:" type="text" placeholder="Digite o local" />
        <Select
          label="Sexo:"
          className="text-secondary p-1"
          name="sexo"
          id="sexo"
          placeholder="Selecione uma opção"
          options={sexoptions}
        />
        <Select
          label="Cadeira de rodas:"
          className="text-secondary p-1"
          name="sexo"
          id="sexo"
          placeholder="Selecione uma opção"
          options={wheelchairOptions}
        />
      </div>
      <div className="btn-box d-flex justify-content-end gap-2">
        <button
          onClick={() => handleTabChange(2)}
          className="btn btn-light border"
        >
          Voltar
        </button>
        <button className="btn btn-light border">Próximo</button>
      </div>
    </div>
  );
};

export default PersonalData;
