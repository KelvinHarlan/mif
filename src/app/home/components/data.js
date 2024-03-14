function downloadpdf() { /* Salvando o texto em PDF*/
    nome = document.querySelector('.input-nome');
    let texto = document.querySelector('.texto-resultado');
    let janela = window.open('', '', 'width = 800, heigth = 600');
    janela.document.write(texto.innerHTML);


    if (nome.value !== '') {
        janela.document.title = nome.value;
    }
    else {
        janela.document.title = 'Paciente sem nome informado';
    };

    janela.print();
};


const alimentacaoResult = (alimentacao) => {
  if (alimentacao === "1") {
    return {
      area: "Alimentação:",
      value: "Assistência Total - A pessoa executa menos de 25% das tarefas.",
    };
  } else if (alimentacao === "2") {
    return {
      area: "Alimentação:",
      value:
        "Assistência Máxima - A pessoa executa 25 a 49% das tarefas de alimentação.",
    };
  } else if (alimentacao === "3") {
    return {
      area: "Alimentação:",
      value:
        "Assistência Moderada - A pessoa executa 50 a 74% das tarefas de alimentação.",
    };
  } else if (alimentacao === "4") {
    return {
      area: "Alimentação:",
      value:
        "Assistência com Contato Mínimo - É preciso apenas tocar a pessoa em auxílio para realização das tarefas. A pessoa executa 75% ou mais das tarefas.",
    };
  } else if (alimentacao === "5") {
    return {
      area: "Alimentação:",
      value:
        "Supervisão ou Preparação - Necessita de supervisão ou de preparação para realização da atividade, sem contato físico.",
    };
  } else if (alimentacao === "6") {
    return {
      area: "Alimentação:",
      value:
        "Independência Modificada - Necessita de um dispositivo de adaptação ou exige cuidados de segurança no ato de comer.",
    };
  } else if (alimentacao === "7") {
    return {
      area: "Alimentação:",
      value:
        "Independência Completa - A pessoa realiza todas as tarefas de forma independente, com segurança.",
    };
  }
  //end
  else return;
};

const higienePessoalResult = (higiene) => {
  if (higiene === "1") {
    return {
      area: "Higiene Pessoal:",
      value: "Assistência Total - A pessoa executa menos de 25% das tarefas.",
    };
  } else if (higiene === "2") {
    return {
      area: "Higiene Pessoal:",
      value: "Assistência Máxima - A pessoa executa 25 a 49% das tarefas.",
    };
  } else if (higiene === "3") {
    return {
      area: "Higiene Pessoal:",
      value: "Assistência Moderada - A pessoa executa 50 a 74% das tarefas.",
    };
  } else if (higiene === "4") {
    return {
      area: "Higiene Pessoal:",
      value:
        "Assistência com Contato Mínimo - É preciso apenas tocar a pessoa em auxílio para realização das tarefas. A pessoa executa 75% ou mais das tarefas.",
    };
  } else if (higiene === "5") {
    return {
      area: "Higiene Pessoal:",
      value:
        "Exige supervisão ou preparação para realização da atividade, sem contato físico.",
    };
  } else if (higiene === "6") {
    return {
      area: "Higiene Pessoal:",
      value:
        "Independência Modificada - Precisa de equipamento especializado, demanda mais tempo que razoável ou exige cuidados de segurança.",
    };
  } else if (higiene === "7") {
    return {
      area: "Higiene Pessoal:",
      value:
        "Independência Completa - Limpa os dentes ou dentadura, pentea o cabelo, lava as mãos e rosto, barbeia-se ou maquia-se incluindo os preparativos, com segurança.",
    };
  }

  //end
  else return;
};

const banhoResult = (banho) => {
  if (banho === "1") {
    return {
      area: "Banho: Lavar o corpo",
      value: "Assistência Total - A pessoa executa menos de 25% das tarefas.",
    };
  } else if (banho === "2") {
    return {
      area: "Banho: Lavar o corpo:",
      value: "Assistência Máxima - A pessoa executa 25 a 49% das tarefas.",
    };
  } else if (banho === "3") {
    return {
      area: "Banho: Lavar o corpo:",
      value: "Assistência Moderada - A pessoa executa 50 a 74% das tarefas.",
    };
  } else if (banho === "4") {
    return {
      area: "Banho: Lavar o corpo:",
      value:
        "Assistência com Contato Mínimo - É preciso apenas tocar a pessoa em auxílio para realização das tarefas. A pessoa executa 75% ou mais das tarefas.",
    };
  } else if (banho === "5") {
    return {
      area: "Banho: Lavar o corpo:",
      value:
        "Supervisão ou Preparação - Exige supervisão ou preparação para realização da atividade, sem contato físico.",
    };
  } else if (banho === "6") {
    return {
      area: "Banho: Lavar o corpo:",
      value:
        "Independência Modificada - Precisa de equipamento especializado, demanda mais tempo que razoável ou exige cuidados de segurança.",
    };
  } else if (banho === "7") {
    return {
      area: "Banho: Lavar o corpo:",
      value: "Independência Completa - Lava e seca o corpo com segurança.",
    };
  }

  //End
  else return;
};

export { alimentacaoResult, higienePessoalResult, banhoResult };

export function manipulandoInputs() {
  if (vestirSuperior === "1") {
    /*Vestir metade superior do corpo*/
    vestirSuperior =
      "<b>Vestir (metade superior do corpo):</b> Assistência Total - A pessoa executa menos de 25% das tarefas.";
  } else if (vestirSuperior === "2") {
    vestirSuperior =
      "<b>Vestir (metade superior do corpo):</b> Assistência Máxima - A pessoa executa 25 a 49% das tarefas.";
  } else if (vestirSuperior === "3") {
    vestirSuperior =
      "<b>Vestir (metade superior do corpo):</b> Assistência Moderada - A pessoa executa 50 a 74% das tarefas.";
  } else if (vestirSuperior === "4") {
    vestirSuperior =
      "<b>Vestir (metade superior do corpo):</b> Assistência com Contato Mínimo - É preciso apenas tocar a pessoa em auxílio para realização das tarefas. A pessoa executa 75% ou mais das tarefas.";
  } else if (vestirSuperior === "5") {
    vestirSuperior =
      "<b>Vestir (metade superior do corpo):</b> Supervisão ou Preparação - Exige supervisão ou preparação para realização da atividade, sem contato físico.";
  } else if (vestirSuperior === "6") {
    vestirSuperior =
      "<b>Vestir (metade superior do corpo):</b> Independência Modificada - Exige adaptações (como velcro ou dispositivo de ajuda), ou assistência (incluindo órtese e prótese), ou demanda mais tempo que razoável.";
  } else if (vestirSuperior === "7") {
    vestirSuperior =
      "<b>Vestir (metade superior do corpo):</b> Independência Completa - Realiza o vestir e o despir de forma independente, com desempenho seguro.";
  } else if (vestirSuperior === "0") {
    vestirSuperior =
      'Dado ( <b class = "red">Vestir (metade superior do corpo):</b> ) está em branco!';
  }

  if (vestirInferior === "1") {
    /*Vestir metade inferior do corpo*/
    vestirInferior =
      "<b>Vestir (metade inferior do corpo):</b> Assistência Total - A pessoa executa menos de 25% das tarefas.";
  } else if (vestirInferior === "2") {
    vestirInferior =
      "<b>Vestir (metade inferior do corpo):</b> Assistência Máxima - A pessoa executa 25 a 49% das tarefas.";
  } else if (vestirInferior === "3") {
    vestirInferior =
      "<b>Vestir (metade inferior do corpo):</b> Assistência Moderada - A pessoa executa 50 a 74% das tarefas.";
  } else if (vestirInferior === "4") {
    vestirInferior =
      "<b>Vestir (metade inferior do corpo):</b> Assistência com Contato Mínimo - É preciso apenas tocar a pessoa em auxílio para realização das tarefas. A pessoa executa 75% ou mais das tarefas.";
  } else if (vestirInferior === "5") {
    vestirInferior =
      "<b>Vestir (metade inferior do corpo):</b> Supervisão ou Preparação - Exige supervisão ou preparação para realização da atividade, sem contato físico.";
  } else if (vestirInferior === "6") {
    vestirInferior =
      "<b>Vestir (metade inferior do corpo):</b> Independência Modificada - Exige adaptações (como velcro ou dispositivo de ajuda), ou assistência (incluindo órtese e prótese), ou demanda mais tempo que razoável.";
  } else if (vestirInferior === "7") {
    vestirInferior =
      "<b>Vestir (metade inferior do corpo):</b> Independência Completa - Realiza o vestir e o despir de forma independente, com desempenho seguro.";
  } else if (vestirInferior === "0") {
    vestirInferior =
      'Dado ( <b class = "red">Vestir (metade inferior do corpo):</b> ) está em branco!';
  }

  if (vasoSanitario === "1") {
    /*Utilização do vaso sanitário*/
    vasoSanitario =
      "<b>Utilização do vaso sanitário:</b> Assistência Total - A pessoa executa menos de 25% das tarefas.";
  } else if (vasoSanitario === "2") {
    vasoSanitario =
      "<b>Utilização do vaso sanitário:</b> Assistência Máxima - A pessoa executa 25 a 49% das tarefas.";
  } else if (vasoSanitario === "3") {
    vasoSanitario =
      "<b>Utilização do vaso sanitário:</b> Assistência Moderada - A pessoa executa 50 a 74% das tarefas.";
  } else if (vasoSanitario === "4") {
    vasoSanitario =
      "<b>Utilização do vaso sanitário:</b> Assistência com Contato Mínimo - É preciso apenas tocar a pessoa em auxílio para realização das tarefas. A pessoa executa 75% ou mais das tarefas.";
  } else if (vasoSanitario === "5") {
    vasoSanitario =
      "<b>Utilização do vaso sanitário:</b> Supervisão ou Preparação - Exige supervisão ou preparação para realização da atividade, sem contato físico.";
  } else if (vasoSanitario === "6") {
    vasoSanitario =
      "<b>Utilização do vaso sanitário:</b> Independência Modificada - Precisa de equipamento especializado, demanda mais tempo que razoável ou há comprometimento de segurança.";
  } else if (vasoSanitario === "7") {
    vasoSanitario =
      "<b>Utilização do vaso sanitário:</b> Independência Completa - Lima-se após o uso do vaso sanitário, maneja papel higiênico, retira e coloca a roupa para ir ao banheiro de forma independente, com desempenho seguro.";
  } else if (vasoSanitario === "0") {
    vasoSanitario =
      'Dado ( <b class = "red">Utilização do vaso sanitário:</b> ) está em branco!';
  }

  if (controleUrina === "1") {
    /*Controle da urina: frequência de incontinência*/
    controleUrina =
      "<b>Controle da Urina (frequência de incontinência):</b> Assistência Total - A pessoa se molha quase todos os dias;  necessita usar absorventes quer esteja ou não usando dispositivos. A pessoa executa menos de 25% das tarefas.";
  } else if (controleUrina === "2") {
    controleUrina =
      "<b>Controle da Urina (frequência de incontinência):</b> Assistência Máxima - A pessoa se molha quase todos os dias;  necessita usar absorventes quer esteja ou não usando dispositivos A pessoa executa 25 a 49% das tarefas.";
  } else if (controleUrina === "3") {
    controleUrina =
      "<b>Controle da Urina (frequência de incontinência):</b> Assitência Moderada - Requer Assistência moderada para manter algum dispositivo externo. A pessoa executa 50 a 74% da tarefas e pode ter acidentes ocasionais menos de uma vez por dia.";
  } else if (controleUrina === "4") {
    controleUrina =
      "<b>Controle da Urina (frequência de incontinência):</b> Assistência com Contato Mínimo - Requer Assistência moderada para manter algum dispositivo externo. A pessoa executa 75% ou mais das tarefas e apresenta acidentes ocasionais menos de uma vez por semana.";
  } else if (controleUrina === "5") {
    controleUrina =
      "<b>Controle da Urina (frequência de incontinência):</b> Supervisão ou Preparo - Necessita de supervisão ou de preparação do equipamento para manter um padrão satisfatório ou um dispositivo externo.";
  } else if (controleUrina === "6") {
    controleUrina =
      "<b>Controle da Urina (frequência de incontinência):</b> Independência Modificada - Requer uma sonda, coletor urinário, urinol, fralda, comadre, absorvente, toalha, algum utensílio para coleta ou medicamento para controle da urina. Sem acidentes.";
  } else if (controleUrina === "7") {
    controleUrina =
      "<b>Controle da Urina (frequência de incontinência):</b> Independência Completa - Controla intencional e completamente o ato de urinar e este nunca é incontinente.";
  } else if (controleUrina === "0") {
    controleUrina =
      'Dado ( <b class = "red">Controle da Urina (frequência de incontinência):</b> ) está em branco!';
  }

  if (controleFezes === "1") {
    /*Controle das fezes*/
    controleFezes =
      "<b>Controle das fezes:</b> Assistência Total - A pessoa suja-se quase que diariamente, requerendo o uso de absorventes. A pessoa executa menos de 25% das tarefas.";
  } else if (controleFezes === "2") {
    controleFezes =
      "<b>Controle das fezes:</b> Assistência Máxima - A pessoa suja-se quase que diariamente, requerendo o uso de absorventes. A pessoa executa 25 a 49% das tarefas.";
  } else if (controleFezes === "3") {
    controleFezes =
      "<b>Controle das fezes:</b> Assitência Moderada - Requer Assistência moderada para manter um padrão satisfatório de defecação através de dispositivos. A pessoa executa 50 a 74% da tarefas. Pode haver acidentes ocasionais menos de uma vez por dia.";
  } else if (controleFezes === "4") {
    controleFezes =
      "<b>Controle das fezes:</b> Assistência com Contato Mínimo - Requer assistência com contato mínimo para manter um padrão satisfatório através de dispositivos. A pessoa executa 75% ou mais das tarefas. Pode haver acidentes ocasionais menos de uma vez por semana.";
  } else if (controleFezes === "5") {
    controleFezes =
      "<b>Controle das fezes:</b> Supervisão ou preparo - Necessita de supervisão ou de preparação do equipamento mecessário para manter um padrão satisfatório de defecação. Pode haver acidentes ocasionais menos de uma vez por mês.";
  } else if (controleFezes === "6") {
    controleFezes =
      "<b>Controle das fezes:</b> Independência Modificada - Requer uso de comadre, mesa de apoio, estimulo manual, supositórios, laxantes,lavagens de forma regular ou uso de medicações. Sem acidentes.";
  } else if (controleFezes === "7") {
    controleFezes =
      "<b>Controle das fezes:</b> Independência Completa - Controla intencional e completamente o ato de defecar e este nunca é incontinente.";
  } else if (controleFezes === "0") {
    controleFezes =
      'Dado ( <b class = "red">Controle das fezes:</b> ) está em branco!';
  }

  if (transferenciaLeito === "1") {
    /*Transferências: leito, cadeira, cadeira de rodas*/
    transferenciaLeito =
      "<b>Transferências (leito, cadeira, cadeira de rodas):</b> Assistência Total - A pessoa executa menos de 25% das tarefas.";
  } else if (transferenciaLeito === "2") {
    transferenciaLeito =
      "<b>Transferências (leito, cadeira, cadeira de rodas):</b> Assistência Máxima - A pessoa executa 25 a 49% das tarefas.";
  } else if (transferenciaLeito === "3") {
    transferenciaLeito =
      "<b>Transferências (leito, cadeira, cadeira de rodas):</b> Assistência Moderada - A pessoa executa 50 a 74% das tarefas.";
  } else if (transferenciaLeito === "4") {
    transferenciaLeito =
      "<b>Transferências (leito, cadeira, cadeira de rodas):</b> Assistência com Contato Mínimol - É preciso apenas tocar na pessoa para realização das tarefas. A pessoa executa 75% ou mais das tarefas.";
  } else if (transferenciaLeito === "5") {
    transferenciaLeito =
      "<b>Transferências (leito, cadeira, cadeira de rodas):</b> Supervisão ou Preparação - Necessário supervisão ou preparação para realização das tarefas.";
  } else if (transferenciaLeito === "6") {
    transferenciaLeito =
      "<b>Transferências (leito, cadeira, cadeira de rodas):</b> Independência Modificada - Requer dispositivos de ajuda ou adaptações. Leva um tempo acima do razoável ou existem riscos de segurança.";
  } else if (transferenciaLeito === "7" && cadeirante === "Não") {
    transferenciaLeito =
      "<b>Transferências (leito, cadeira, cadeira de rodas):</b> Independência Total - Aproxíma-se, senta-se e levanta-se de uma cadeira normal e fica em uma posição ereta; transfere-se da cama para uma cadeira. Executa com segurança.";
  } else if (transferenciaLeito === "7" && cadeirante === "Sim") {
    transferenciaLeito =
      "<b>Transferências (leito, cadeira, cadeira de rodas):</b> Independência Total - Aproxíma-se da cama ou da cadeira, aciona o freio, ajusta os pedais e remove o apoio dos braços caso necessário; transfere-se e retorna. Executa com segurança.";
  } else if (transferenciaLeito === "7" && cadeirante === "0") {
    alert("Algum dado importante está em branco!");
    transferenciaLeito =
      'Dado ( <b class = "red">Transferências (leito, cadeira, cadeira de rodas):</b> ) está em branco!';
  } else if (transferenciaLeito === "0") {
    transferenciaLeito =
      'Dado ( <b class = "red">Transferências: leito, cadeira, cadeira de rodas:</b> ) está em branco!';
  }

  if (transferenciaVaso === "1") {
    /*Transferências: Vaso sanitário*/
    transferenciaVaso =
      "<b>Transferências (Vaso sanitário):</b> Assistência Total - A pessoa executa menos de 25% das tarefas.";
  } else if (transferenciaVaso === "2") {
    transferenciaVaso =
      "<b>Transferências (Vaso sanitário):</b> Assistência Máxima - A pessoa executa 25 a 49% das tarefas.";
  } else if (transferenciaVaso === "3") {
    transferenciaVaso =
      "<b>Transferências (Vaso sanitário):</b> Assistência Moderada - A pessoa executa 50 a 74% das tarefas.";
  } else if (transferenciaVaso === "4") {
    transferenciaVaso =
      "<b>Transferências (Vaso sanitário):</b> Assistência com Contato Mínimo - É preciso apenas tocar na pessoa para realização das tarefas. A pessoa executa 75% ou mais das tarefas.";
  } else if (transferenciaVaso === "5") {
    transferenciaVaso =
      "<b>Transferências (Vaso sanitário):</b> Supervisão ou Preparação - Necessário supervisão ou preparação para realização das tarefas.";
  } else if (transferenciaVaso === "6") {
    transferenciaVaso =
      "<b>Transferências (Vaso sanitário):</b> Independência Modificada - Requer dispositivos de ajuda ou adaptações. Leva um tempo acima do razoável ou existem riscos de segurança.";
  } else if (transferenciaVaso === "7" && cadeirante === "Não") {
    transferenciaVaso =
      "<b>Transferências (Vaso sanitário):</b> Aproxíma-se, senta-se e levanta-se de um vaso padrão. Executa com segurança.";
  } else if (transferenciaVaso === "7" && cadeirante === "Sim") {
    transferenciaVaso =
      "<b>Transferências (Vaso sanitário):</b> Aproxíma-se do vaso, aciona o freio, ajusta os pedais e remove o apoio dos braços caso necessário; transfere-se e retorna. Executa com segurança.";
  } else if (transferenciaVaso === "7" && cadeirante === "0") {
    alert("Algum dado importante está em branco!");
    transferenciaVaso =
      'Dado ( <b class = "red">Transferências (Vaso sanitário):</b> ) está em branco!';
  } else if (transferenciaVaso === "0") {
    transferenciaVaso =
      'Dado ( <b class = "red">Transferências (Vaso sanitário):</b> ) está em branco!';
  }

  if (transferenciaBanheira === "1") {
    /*Transferências: Banheira ou chuveiro*/
    transferenciaBanheira =
      "<b>Transferências (Banheira ou chuveiro):</b> Assistência Total - A pessoa executa menos de 25% das tarefas.";
  } else if (transferenciaBanheira === "2") {
    transferenciaBanheira =
      "<b>Transferências (Banheira ou chuveiro):</b> Assistência Máxima - A pessoa executa 25 a 49% das tarefas.";
  } else if (transferenciaBanheira === "3") {
    transferenciaBanheira =
      "<b>Transferências (Banheira ou chuveiro):</b> Assistência Moderada - A pessoa executa 50 a 74% das tarefas.";
  } else if (transferenciaBanheira === "4") {
    transferenciaBanheira =
      "<b>Transferências (Banheira ou chuveiro):</b> Assistência com Contato Mínimo - É preciso apenas tocar na pessoa para realização das tarefas. A pessoa executa 75% ou mais das tarefas.";
  } else if (transferenciaBanheira === "5") {
    transferenciaBanheira =
      "<b>Transferências (Banheira ou chuveiro):</b> Supervisão ou Preparação - Necessário supervisão ou preparação para realização das tarefas.";
  } else if (transferenciaBanheira === "6") {
    transferenciaBanheira =
      "<b>Transferências (Banheira ou chuveiro):</b> Independência Modificada - Requer dispositivos de ajuda ou adaptações. Leva um tempo acima do razoável ou existem riscos de segurança.";
  } else if (transferenciaBanheira === "7" && cadeirante === "Não") {
    transferenciaBanheira =
      "<b>Transferências (Banheira ou chuveiro):</b> Independência Completa - Aproxíma-se, entra e sai do boxe. Executa com segurança.";
  } else if (transferenciaBanheira === "7" && cadeirante === "Sim") {
    transferenciaBanheira =
      "<b>Transferências (Banheira ou chuveiro):</b> Independência Completa - Aproxíma-se do boxe, aciona o freio, ajusta os pedais e remove o apoio dos braços caso necessário; transfere-se e retorna. Executa com segurança.";
  } else if (transferenciaBanheira === "7" && cadeirante === "0") {
    alert("Algum dado importante está em branco!");
    transferenciaBanheira =
      'Dado ( <b class = "red">Transferências (Banheira ou chuveiro):</b> ) está em branco!';
  } else if (transferenciaBanheira === "0") {
    transferenciaBanheira =
      'Dado ( <b class = "red">Transferências (Banheira ou chuveiro):</b> ) está em branco!';
  }

  if (marchaCadeira === "1") {
    /*Marcha/ Cadeira de rodas*/
    marchaCadeira =
      "<b>Marcha/ Cadeira de rodas:</b> Assistência Total - A pessoa executa menos de 25% do esforço ou requer assistência de duas pessoas ou não anda o mínimo de 17 metros.";
  } else if (marchaCadeira === "2") {
    marchaCadeira =
      "<b>Marcha/ Cadeira de rodas:</b> Assistência Máxima - A pessoa executa 25 a 49% do esforço de locomoção para andar um mínimo de 15 metros. Requer a assisência de uma pessoa.";
  } else if (marchaCadeira === "3") {
    marchaCadeira =
      "<b>Marcha/ Cadeira de rodas:</b> Assistência Moderada - A pessoa executa 50 a 74% do esforço de locomoção para andar um mínimo de 50 metros.";
  } else if (marchaCadeira === "4") {
    marchaCadeira =
      "<b>Marcha/ Cadeira de rodas:</b> Assistência com Contato Mínimo - É preciso apenas tocar na pessoa para realização das tarefas. A pessoa executa 75% ou mais de esforço de locomoção para andar um mínimo de 50 metros.";
  } else if (marchaCadeira === "5.0" && cadeirante == "Não") {
    marchaCadeira =
      "<b>Marcha/ Cadeira de rodas:</b> Supervisão - Requer alguém do lado, com ou sem encorajamento ou sugestão, para andar um mínimo de 50 metros.";
  } else if (marchaCadeira === "5.0" && cadeirante == "Sim") {
    marchaCadeira =
      "<b>Marcha/ Cadeira de rodas:</b> Supervisão - Requer alguém ao lado, com ou sem encorajamento ou sugestão para conduzir a cadeira de rodas por pelo menos 50 metros.";
  } else if (marchaCadeira === "5.0" && cadeirante == "0") {
    alert("Algum dado importante está em branco!");
    marchaCadeira =
      'Dado ( <b class = "red">Marcha/ Cadeira de rodas:</b> ) está em branco!';
  } else if (marchaCadeira === "5" && cadeirante == "0") {
    alert("Algum dado importante está em branco!");
    marchaCadeira =
      'Dado ( <b class = "red">Marcha/ Cadeira de rodas:</b> ) está em branco!';
  } else if (marchaCadeira === "5") {
    marchaCadeira =
      "<b>Marcha/ Cadeira de rodas:</b> Deambulação Doméstica - Anda apenas pequenas distâncias com ou sem dispositivos. Pode levar um tempo acima do razoável ou há riscos de segurança.";
  } else if (marchaCadeira === "6") {
    marchaCadeira =
      "<b>Marcha/ Cadeira de rodas:</b> Independência Modificada - Se a pessoa anda...Anda pelo menos 50 metros, mas usa órtese ou prótese em membro inferior, sapatos especiais, bengala, muletas ou andadores. Leva um tempo acima do razoável ou há riscos de segurança.";
  } else if (marchaCadeira === "7") {
    marchaCadeira =
      "<b>Marcha/ Cadeira de rodas:</b> Independência Completa - Anda pelo menos 50 metros sem dispositivos auxiliares. Não usa cadeira de rodas. Executa com segurança.";
  } else if (marchaCadeira === "0") {
    marchaCadeira =
      'Dado ( <b class = "red">Marcha/ Cadeira de rodas:</b> ) está em branco!';
  }

  if (escadas === "1") {
    /*Escadas*/
    escadas =
      "<b>Escadas:</b> Assistência Total - A pessoa executa de menos de 25% do esforço, ou requer assistência de duas pessoas ou não sobre e desce 4 a 6 degraus e é carregada.";
  } else if (escadas === "2") {
    escadas =
      "<b>Escadas:</b> Assistência Máxima - A pessoa executa 25 a 49% do esforço para subir e descer 4 a 6 degraus. Requer assistência de uma pessoa só.";
  } else if (escadas === "3") {
    escadas =
      "<b>Escadas:</b> Assistência Moderada - A pessoa executa 50 a 74% do esforço para subir e descer um lance de escadas.";
  } else if (escadas === "4") {
    escadas =
      "<b>Escadas:</b> Assistência com Contato Mínimo - É preciso apenas tocar a pessoa para a realização da atividade. A pessoa executa 75% ou mais do esforço para subir e descer um lance de escadas.";
  } else if (escadas === "5.0") {
    escadas =
      "<b>Escadas:</b> Supervisão - Requer alguém do lado, com ou sem encorajamento ou sugestão, para subir e descer um lance de escadas.";
  } else if (escadas === "5") {
    escadas =
      "<b>Escadas:</b> Deambulação Doméstica - Sobe e desce 4 a 6 degraus independentemente, com ou sem dispositivo auxiliar. Pode levar um tempo acima do razoável ou há riscos de segurança.";
  } else if (escadas === "6") {
    escadas =
      "<b>Escadas:</b> Independência Modificada - Sobe e desce pelo menos um lance de escadas requerendo corrimão ou algum outro tipo de apoio. Leva um tempo acima do razoável ou há riscos de segurança.";
  } else if (escadas === "7") {
    escadas =
      "<b>Escadas:</b> Independência Completa - Sobe e desce pelo menos um lance de escadas sem corrimão ou apoio. Executa com segurança.";
  } else if (escadas === "0") {
    escadas = 'Dado ( <b class = "red">Escadas:</b> ) está em branco!';
  }

  if (compreensao === "1") {
    /*Compreensão*/
    compreensao =
      "<b>Compreensão:</b> Assistência Total - Entende orientações e conversação sobre necessidades cotidiana básicas em menos de 25% do tempo de comunicação, ou não entende perguntas e afirmações simples ou, não responde de forma apropriada ou consistente.";
  } else if (compreensao === "2") {
    compreensao =
      "<b>Compreensão:</b> Facilitação Máxima - Entende orientações e conversação sobre necessidades cotidiana básicas entre 25 a 49% do tempo. Pode entender apenas perguntas ou afirmações simples. Requer facilitações em mais da metade do tempo de comunicação.";
  } else if (compreensao === "3") {
    compreensao =
      "<b>Compreensão:</b> Facilitação Moderada - Entende orientações e conversação sobre necessidades cotidiana básicas entre 50 a 74% do tempo de comunicação.";
  } else if (compreensao === "4") {
    compreensao =
      "<b>Compreensão:</b> Facilitação Mínima - Entende orientações e conversação sobre necessidades cotidiana básicas entre 75 a 90% do tempo. Requer facilitações entre 10 e 25% do tempo de comunicação.";
  } else if (compreensao === "5") {
    compreensao =
      "<b>Compreensão:</b> Facilitação Potencial - Entende orientações e conversação sobre necessidades cotidiana báscas em mais de 90% do tempo. Requer facilitações (falar mais lentamente, repetir, realçar palavras, frases e pausas, sugerir por gestos ou visualmente) em menos de 10% do tempo de comunicação.";
  } else if (compreensao === "6") {
    compreensao =
      "<b>Compreensão:</b> Independência Modificada - Entende instruções e conversação complexas ou abstratas na maior parte das vezes ou com pequena dificuldade. Não necessita de facilitações.";
  } else if (compreensao === "7") {
    compreensao =
      "<b>Compreensão:</b> Independência Completa - Entende instruções e conversação complexas ou abstratas; entende sua língua materna falada ou escrita.";
  } else if (compreensao === "0") {
    compreensao = 'Dado ( <b class = "red">Compreensão:</b> ) está em branco!';
  }

  if (expressao === "1") {
    /*Expressão*/
    expressao =
      "<b>Expressão:</b> Assistência Total - Exprime ideias e necessidades cotidianas básicas em menos de 25% do tempo ou, apesar das facilitações, não exprime as necessidades básicas de forma apropriada ou consistente.";
  } else if (expressao === "2") {
    expressao =
      "<b>Expressão:</b> Facilitação Máxima - Exprime ideias e necessidades cotidianas básicas em 25 a 49% do tempo. Pode usar apenas gestos e palavras simples. Necessita de facilitações em mais da metade do tempo de expressão.";
  } else if (expressao === "3") {
    expressao =
      "<b>Expressão:</b> Facilitação Moderada - Exprime ideias e necessidades cotidianas básicas em 50 a 75% do tempo. Requer facilitações entre 25 e 50% do tempo de expressão";
  } else if (expressao === "4") {
    expressao =
      "<b>Expressão:</b> Facilitação Mínima - Exprime ideias e necessidades cotidianas básicas em 75 a 90% do tempo.Requer facilitações entre 10 e 25% do tempo de expressão.";
  } else if (expressao === "5") {
    expressao =
      "<b>Expressão:</b>  Facilitação Potencial - Exprime ideias e necessidades cotidinas básicas em mais de 90% do tempo.Em menos de 10% do tempo requer facilitações (por exemplo, repetição frequente) para ser entendido.";
  } else if (expressao === "6") {
    expressao =
      "<b>Expressão:</b> Independência Modificada - Exprime ideias complexas ou abstratas na maior parte das ocasiões ou com pequena dificuldade. Não necessita das facilitações. Pode necessitar de um dispositivo de ampliação sonora ou de comunicação.";
  } else if (expressao === "7") {
    expressao =
      "<b>Expressão:</b> Independência Completa - Exprime ideias complexas ou abstratas com clareza e fluência.";
  } else if (expressao === "0") {
    expressao = 'Dado ( <b class = "red">Expressão:</b> ) está em branco!';
  }

  if (interacao === "1") {
    /*Interalçao Social*/
    interacao =
      "<b>Interação Social:</b> Assistência Total - Não interage adequadamente ou faz em menos de 25% do tempo. Necessita de restrições de contatos ou deslocamentos devido a comportamentos socialmente inadequados.";
  } else if (interacao === "2") {
    interacao =
      "<b>Interação Social:</b> Orientação Máxima - A pessoa interage adequadamente 25 a 49% do tempo. Pode necessitar de restrições de contatos ou deslocamentos devido a comportamentos socialmente inadequados.";
  } else if (interacao === "3") {
    interacao =
      "<b>Interação Social:</b> Orientação Moderada - A pessoa interage adequadamente 50 a 74% do tempo, ou seja, apresenta comportamento inadequado entre 25 e 50% do tempo, necessitando de orientação moderada.";
  } else if (interacao === "4") {
    interacao =
      "<b>Interação Social:</b> Orientação Mínima - A pessoa interage adequadamente 75 a 90% do tempo, ou seja, apresenta comportamento socialmente inadequado entre 10 e 25% do tempo, necessitando de orientação mínima.";
  } else if (interacao === "5") {
    interacao =
      "<b>Interação Social:</b> Supervisão - Requer supervisão (acompanhamento, controle verbal, sugestão, incentivo) apenas em situações incomuns ou sob tensão, mas não mais que 10% do tempo. Pode precisar de incentivo para começar a participar.";
  } else if (interacao === "6") {
    interacao =
      "<b>Interação Social:</b> Independência Modificada - Interage adequadamente com o pessoal do hospital, outros pacientes e familiares na maior parte das ocasiões e apenas perde o controle ocasionalmente. Não requer supervisão. Pode precisar de um tempo acima do razoável para se ajustar nas situações sociais ou pode necessitar de medicamento para controle.";
  } else if (interacao === "7") {
    interacao =
      "<b>Interação Social:</b> Independência Completa - Interage adequadamente com o pessoal do hospital, outros pacientes e familiares. Não precisa de medicamentos para se controlar.";
  } else if (interacao === "0") {
    interacao =
      'Dado ( <b class = "red">Interação Social:</b> ) está em branco!';
  }

  if (resolucao === "1") {
    /*Resolução de Problemas*/
    resolucao =
      "<b>Resolução de Problemas:</b> Orientação Total - A pessoa resolve problemas de rotina em menos de 25% do tempo. Necessitando de orientação quase todo o tempo ou não resolve efetivamente os problemas. Pode necessitar constantemente de orientação para completas, uma a uma, as atividades diárias.";
  } else if (resolucao === "2") {
    resolucao =
      "<b>Resolução de Problemas:</b> Orientação Máxima - A pessoa resolve problemas de rotina em 25 a 49% do tempo. Em mais da metade do tempo necessita de orientação para dar início, planejar ou concluir atividades diárias.";
  } else if (resolucao === "3") {
    resolucao =
      "<b>Resolução de Problemas:</b> Orientação Moderada - A pessoa resolve problemas de rotina em 50 a 74% do tempo.";
  } else if (resolucao === "4") {
    resolucao =
      "<b>Resolução de Problemas:</b> Orientação Mínima - A pessoa resolve problemas de rotina em 75 a 90% do tempo.";
  } else if (resolucao === "5") {
    resolucao =
      "<b>Resolução de Problemas:</b> Supervisão - Requer supervisão em até 10% das vezes para resolver problemas de rotina sob condições incomuns ou sob tensão";
  } else if (resolucao === "6") {
    resolucao =
      "<b>Resolução de Problemas:</b> Independência Modificada - Reconhece um problema, toma decisões apropriadas, na maioria das vezes dá início a uma sequência de etapas para resolver problemas complexos, ou com pequena dificuldade ou levando um tempo acima do razoável para tomar decisões sobre ou resolver problemas complexos.";
  } else if (resolucao === "7") {
    resolucao =
      "<b>Resolução de Problemas:</b> Independência Completa - Reconhece consistentemente um problema, toma decisões apropriadas, dá início a uma sequência de etapas para resolver problemas complexos até concluir o trabalho, aplicando correções quando comete erros.";
  } else if (resolucao === "0") {
    resolucao =
      'Dado ( <b class = "red">Resolução de Problemas:</b> ) está em branco!';
  }

  if (memoria === "1") {
    /*Memória*/
    memoria =
      "<b>Memória:</b> Assistência Total -  A pessoa não reconhece ou não se lembra ou o faz em menos de 25% do tempo.";
  } else if (memoria === "2") {
    memoria =
      "<b>Memória:</b> Facilitação Máxima - A pessoa reconhece em 25 a 49% do tempo. Necessita de ajuda em mais que a metade do tempo.";
  } else if (memoria === "3") {
    memoria =
      "<b>Memória:</b> Facilitação Moderada - A pessoa reconhece e lembra-se em 50 a 74% do tempo.";
  } else if (memoria === "4") {
    memoria =
      "<b>Memória:</b> Facilitação Mínima - A pessoa reconhece e lembra-se em 75 a 90% do tempo.";
  } else if (memoria === "5") {
    memoria =
      "<b>Memória:</b> Supervisão - Necessita de facilitações (sugestão, repetições, lembranças) apenas sob condições pouco habituais ou de tensão, porém não mais que em 10% do tempo.";
  } else if (memoria === "6") {
    memoria =
      "<b>Memória:</b> Independência Modificada - A pessoa parece ter apenas uma ligeira dificuldade em reconhecer as pessoas que encontra frequentemente, lembrando-se das rotinas diárias. Pode usar anotações, lembretes ou ajuda de sua iniciativa ou do ambiente.";
  } else if (memoria === "7") {
    memoria =
      "<b>Memória:</b> Independência Completa - Reconhece as pessoas que encontra com frequência e lembra-se das rotinas diárias; executa tarefas sem necessidade de repetição por outras pessoas.";
  } else if (memoria === "0") {
    memoria = 'Dado ( <b class = "red">Memória:</b> ) está em branco!';
  }
}
