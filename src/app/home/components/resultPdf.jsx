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
  vestirSuperior,
  vestirInferior,
  vaso,
  urina,
  fezes,
  transferenciaCadeira,
  transferenciaVaso,
  transferenciaChuveiro,
  marchaCr,
  escadas,
  compreensao,
  expressao,
  interacao,
  resolucao,
  memoria,
  acompanhante,
}) => {
  return (
    <>
      <div>
        {enviado && (
          <div style={{ padding: "20px" }} className="container-resul">
            <p>
              {`Realizada visita ${sexo === "Feminino" ? "a" : "ao"} paciente ${
                nome ? nome.toUpperCase() : "[ NOME ]"
              }, ${idade ? idade : "[ IDADE ]"} anos, em
        ${local ? local : "[ LOCAL ]"} para Avaliação Inicial da ${
                areaAtuacao ? areaAtuacao : "[Area de atuação ]"
              }.`}
            </p>
            <p className="justify">
              Aplicada a avaliação padronizada de Medida de Independência
              Funcional, com objetivo de avaliar o desempenho da paciente
              durante a realização das atividades cotidianas. De acordo com a
              Medida de Independência Funcional (MIF), {`${sexo === "Feminino" ? "a" : "o"}`} paciente apresenta
              dependência moderada relacionado às atividades investigadas pela
              medida, com necessidade de suporte da equipe e/ou cuidador para
              realização de atividades cotidianas básicas, conforme descrito a
              seguir:
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
                {vestirSuperior && enviado && (
                  <tr>
                    <td style={{ wordWrap: "break-word" }}>
                      <b>{vestirSuperior.area && vestirSuperior.area}</b>
                    </td>

                    <td style={{ wordWrap: "break-word" }}>
                      {vestirSuperior.value && vestirSuperior.value}
                    </td>
                  </tr>
                )}
                {vestirInferior && enviado && (
                  <tr>
                    <td style={{ wordWrap: "break-word" }}>
                      <b>{vestirInferior.area && vestirInferior.area}</b>
                    </td>

                    <td style={{ wordWrap: "break-word" }}>
                      {vestirInferior.value && vestirInferior.value}
                    </td>
                  </tr>
                )}
                {vaso && enviado && (
                  <tr>
                    <td style={{ wordWrap: "break-word" }}>
                      <b>{vaso.area && vaso.area}</b>
                    </td>

                    <td style={{ wordWrap: "break-word" }}>
                      {vaso.value && vaso.value}
                    </td>
                  </tr>
                )}
                {urina && enviado && (
                  <tr>
                    <td style={{ wordWrap: "break-word" }}>
                      <b>{urina.area && urina.area}</b>
                    </td>

                    <td style={{ wordWrap: "break-word" }}>
                      {urina.value && urina.value}
                    </td>
                  </tr>
                )}
                {fezes && enviado && (
                  <tr>
                    <td style={{ wordWrap: "break-word" }}>
                      <b>{fezes.area && fezes.area}</b>
                    </td>

                    <td style={{ wordWrap: "break-word" }}>
                      {fezes.value && fezes.value}
                    </td>
                  </tr>
                )}
                {transferenciaCadeira && enviado && (
                  <tr>
                    <td style={{ wordWrap: "break-word" }}>
                      <b>
                        {transferenciaCadeira.area && transferenciaCadeira.area}
                      </b>
                    </td>

                    <td style={{ wordWrap: "break-word" }}>
                      {transferenciaCadeira.value && transferenciaCadeira.value}
                    </td>
                  </tr>
                )}
                {transferenciaVaso && enviado && (
                  <tr>
                    <td style={{ wordWrap: "break-word" }}>
                      <b>{transferenciaVaso.area && transferenciaVaso.area}</b>
                    </td>

                    <td style={{ wordWrap: "break-word" }}>
                      {transferenciaVaso.value && transferenciaVaso.value}
                    </td>
                  </tr>
                )}
                {transferenciaChuveiro && enviado && (
                  <tr>
                    <td style={{ wordWrap: "break-word" }}>
                      <b>
                        {transferenciaChuveiro.area &&
                          transferenciaChuveiro.area}
                      </b>
                    </td>

                    <td style={{ wordWrap: "break-word" }}>
                      {transferenciaChuveiro.value &&
                        transferenciaChuveiro.value}
                    </td>
                  </tr>
                )}
                {marchaCr && enviado && (
                  <tr>
                    <td style={{ wordWrap: "break-word" }}>
                      <b>{marchaCr.area && marchaCr.area}</b>
                    </td>

                    <td style={{ wordWrap: "break-word" }}>
                      {marchaCr.value && marchaCr.value}
                    </td>
                  </tr>
                )}

                {escadas && enviado && (
                  <tr>
                    <td style={{ wordWrap: "break-word" }}>
                      <b>{escadas.area && escadas.area}</b>
                    </td>

                    <td style={{ wordWrap: "break-word" }}>
                      {escadas.value && escadas.value}
                    </td>
                  </tr>
                )}
                {compreensao && enviado && (
                  <tr>
                    <td style={{ wordWrap: "break-word" }}>
                      <b>{compreensao.area && compreensao.area}</b>
                    </td>

                    <td style={{ wordWrap: "break-word" }}>
                      {compreensao.value && compreensao.value}
                    </td>
                  </tr>
                )}
                {expressao && enviado && (
                  <tr>
                    <td style={{ wordWrap: "break-word" }}>
                      <b>{expressao.area && expressao.area}</b>
                    </td>

                    <td style={{ wordWrap: "break-word" }}>
                      {expressao.value && expressao.value}
                    </td>
                  </tr>
                )}
                {interacao && enviado && (
                  <tr>
                    <td style={{ wordWrap: "break-word" }}>
                      <b>{interacao.area && interacao.area}</b>
                    </td>

                    <td style={{ wordWrap: "break-word" }}>
                      {interacao.value && interacao.value}
                    </td>
                  </tr>
                )}
                {resolucao && enviado && (
                  <tr>
                    <td style={{ wordWrap: "break-word" }}>
                      <b>{resolucao.area && resolucao.area}</b>
                    </td>

                    <td style={{ wordWrap: "break-word" }}>
                      {resolucao.value && resolucao.value}
                    </td>
                  </tr>
                )}
                {memoria && enviado && (
                  <tr>
                    <td style={{ wordWrap: "break-word" }}>
                      <b>{memoria.area && memoria.area}</b>
                    </td>

                    <td style={{ wordWrap: "break-word" }}>
                      {memoria.value && memoria.value}
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
            <p>
              De acordo com esta análise, faz-se necessário o acompanhamento
              terapêutico ocupacional com o objetivo de implementar atividades
              que envolvam a estimulação e manutenção do desempenho ocupacional
              nas suas atividades cotidianas e significativas.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default ResultPdf;
