const ResultPdf = ({
  nome,
  idade,
  sexo,
  areaAtuacao,
  local,
  alimentacao,
  enviado,
  higienePessoal,
  banho,
}) => {
  return (
    <>
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
            Aplicada a avaliação padronizada de Medida de Independência
            Funcional, com objetivo de avaliar o desempenho da paciente durante
            a realização das atividades cotidianas. De acordo com a Medida de
            Independência Funcional (MIF), o (a) paciente apresenta dependência
            moderada relacionado às atividades investigadas pela medida, com
            necessidade de suporte da equipe e/ou cuidador para realização de
            atividades cotidianas básicas, conforme descrito a seguir:
          </p>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Área</th>
                <th scope="col">Resultado</th>
              </tr>
            </thead>
            <tbody>
              {alimentacao && enviado && (
                <tr>
                  <td style={{ wordWrap: "break-word" }}>
                    <b>{alimentacao.area && alimentacao.area}</b>
                  </td>

                  <td style={{ wordWrap: "break-word" }}>
                    {alimentacao.value && alimentacao.value}
                  </td>
                </tr>
              )}

              {higienePessoal && enviado && (
                <tr>
                  <td style={{ wordWrap: "break-word" }}>
                    <b>{higienePessoal.area && higienePessoal.area}</b>
                  </td>

                  <td style={{ wordWrap: "break-word" }}>
                    {higienePessoal.value && higienePessoal.value}
                  </td>
                </tr>
              )}

              {banho && enviado && (
                <tr>
                  <td style={{ wordWrap: "break-word" }}>
                    <b>{banho.area && banho.area}</b>
                  </td>

                  <td style={{ wordWrap: "break-word" }}>
                    {banho.value && banho.value}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <p>
            Durante toda a avaliação, a paciente esteve sob acompanhamento de
            familiar responsável.
          </p>
          <p>
            De acordo com esta análise, faz-se necessário o acompanhamento
            terapêutico ocupacional com o objetivo de implementar atividades que
            envolvam a estimulação e manutenção do desempenho ocupacional nas
            suas atividades cotidianas e significativas.
          </p>
        </div>
      )}
    </>
  );
};

export default ResultPdf;
