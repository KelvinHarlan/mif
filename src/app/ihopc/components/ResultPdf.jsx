const ResultPdf = ({
  messageResult,
  enviado,
  nome,
  areaAtuacao,
  idade,
  local,
  acompanhante,
  placa,
  gengivite,
  saburra,
  halitose,
  secrecao,
  sangue,
  restos,
}) => {
  return (
    <>
      <div>
        {enviado && (
          <div style={{ padding: "20px" }} className="container-resul">
            <p>
              {`Realizada visita a paciente ${
                nome ? nome.toUpperCase() : "[ NOME ]"
              }, ${idade ? idade : "[ IDADE ]"} anos, em
        ${local ? local : "[ LOCAL ]"} para Avaliação Inicial da ${
                areaAtuacao ? areaAtuacao : "[Area de atuação ]"
              }.`}
            </p>
            <p className="justify">
              Aplicada a avaliação padronizada de Indicador de higiene oral do
              paciente crítico , com o objetivo de avaliar condição de higiene
              bucal de paciente crítico através do Indicador de Higiene Oral do
              Paciente Crítico (IHOPC) como instrumento de avaliação diária no
              ambiente hospitalar. De acordo com IHOPC o paciente apresenta
              níveis satisfatório, deficiente ou precário de higiene bucal, com
              necessidade ou não de intervenção para melhor de cuidados básicos
              de higiene bucal de equipe e/ou cuidador, conforme descrito à
              seguir:
            </p>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Descrição</th>
                  <th scope="col">Resultado</th>
                </tr>
              </thead>
              <tbody>
                {placa && enviado && (
                  <tr>
                    <td style={{ wordWrap: "break-word" }}>
                      <p>Presença de placa dental/Biofilme:</p>
                    </td>

                    <td style={{ wordWrap: "break-word" }}>
                      {placa} - {placa === "1" ? "Sim" : "Não"}
                    </td>
                  </tr>
                )}
                {gengivite && enviado && (
                  <tr>
                    <td style={{ wordWrap: "break-word" }}>
                      <p>Gengivite:</p>
                    </td>

                    <td style={{ wordWrap: "break-word" }}>
                      {gengivite} - {gengivite === "1" ? "Sim" : "Não"}
                    </td>
                  </tr>
                )}
                {saburra && enviado && (
                  <tr>
                    <td style={{ wordWrap: "break-word" }}>
                      <p>Saburra:</p>
                    </td>

                    <td style={{ wordWrap: "break-word" }}>
                      {saburra} - {saburra === "1" ? "Sim" : "Não"}
                    </td>
                  </tr>
                )}
                {halitose && enviado && (
                  <tr>
                    <td style={{ wordWrap: "break-word" }}>
                      <p>Halitose:</p>
                    </td>

                    <td style={{ wordWrap: "break-word" }}>
                      {halitose} - {halitose === "1" ? "Sim" : "Não"}
                    </td>
                  </tr>
                )}
                {secrecao && enviado && (
                  <tr>
                    <td style={{ wordWrap: "break-word" }}>
                      <p>Presença de secreção/ Crosta:</p>
                    </td>

                    <td style={{ wordWrap: "break-word" }}>
                      {secrecao} - {secrecao === "1" ? "Sim" : "Não"}
                    </td>
                  </tr>
                )}
                {sangue && enviado && (
                  <tr>
                    <td style={{ wordWrap: "break-word" }}>
                      <p>Presença de sangue:</p>
                    </td>

                    <td style={{ wordWrap: "break-word" }}>
                      {sangue} - {sangue === "1" ? "Sim" : "Não"}
                    </td>
                  </tr>
                )}
                {restos && enviado && (
                  <tr>
                    <td style={{ wordWrap: "break-word" }}>
                      <p>Presença de restos alimentares (dieta):</p>
                    </td>

                    <td style={{ wordWrap: "break-word" }}>
                      {restos} - {restos === "1" ? "Sim" : "Não"}
                    </td>
                  </tr>
                )}

                {messageResult && enviado && (
                  <tr>
                    <td style={{ wordWrap: "break-word" }}>
                      <b>{"Total:"}</b>
                    </td>

                    <td style={{ wordWrap: "break-word" }}>
                      <b>
                        {messageResult?.score && messageResult?.score}-{" "}
                        {messageResult?.value}
                      </b>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            {acompanhante && (
              <p>
                Durante toda a avaliação, a paciente esteve sob acompanhamento
                de familiar responsável.
              </p>
            )}
            {messageResult?.score > 1 ? (
              <p>
                De acordo com esta análise, faz-se necessário o acompanhamento
                para ações de prevenção e tratamentos curativos em odontologia
                com o objetivo de implementrtar atividades de higiene bucal que
                envolvam a correção de medidas ou adição de práticas efetivas
                para a melhoria da saúde bucal e consequentemente melhoria da
                saúde geral e qualidade de vida.
              </p>
            ) : (
              <p>
                De acordo com esta análise, o (a) paciente não faz-se necessário
                o acompanhamento para medidas curativas em odontologia,
                preservando assim as técnicas de cuidado e preservação da
                condição eficiente da saúde bucal. Seguirá em gerenciamento da
                equipe multidisciplinar.
              </p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default ResultPdf;
