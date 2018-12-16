# Data-Visualization-And-D3

# Resumo
A Prosper é uma empresa de empréstimo baseada em São Francisco - Califórnia que atua em todo território americano. Para essa análise foram coletados dados de 111 mil empréstimos realizados entre 2005 e 2014. Paras as visualizações froam utilizado dois mapas coropléticos, pois percebeu-se que era a forma mais didátiva para a narrativa, que consiste em mostrar os estados que mais pegaram empréstimo e os estados mais inadimplentes. O primeiro mapa nos mostra a quantidade de empréstimos e a porcentagem desses empréstimos em relação à população (Senso de 2015) do referido estado. Como é possível perceber, os estados mais populosos são os que mais possuem empréstimo, no caso, Califórnia e Texas. Porém, se levar em consideração a porcentagem sobre a população, alguns estados possuem uma maior quantidade de empréstimos, como Illinois e Georgia. O segundo mapa nos mostra a relação de "maus clientes" por estados. Desse modo, os estados mais populosos, obviamente, são os que mais possuem esse tipo de cliente. Porém, como é possível perceber ao passar o mouse sobre os estados, a porcentagem de empréstimos marcados dessa forma varia de acordo com o estado, onde o estado mais inadimplente é o Maine, como 36,63% de inadimplência; e o menos inadimplente é o Wyoming, com apenas 6,67%.

# Design
- Pimeiramento foi realizado um tratamento dos dados (data_wrang.r) para simplificar o arquivo js.
- Tipo de Gráfico e Layout: Como existe uma variável categórica chamada "BorrowerState", onde os dados podem ser divididos por estado, optou-se por utilizar o mapa dos Estados Unidos. Foi utilizado como base para desenhar o mapa um arquivo json com as cordenadas (data/us-states.json). A partir do mapa desenhado, a ideia era mostrar os estados com maior número de empréstimos e com mais inadimplestes, para isso utilizou-se dois mapas coropléticos.
- Legendas: Foi adicionado uma paleta de cores em cada mapa onde quanto mais escuro maior o número de empréstimo (primeiro mapa) e de inadimplentes (segundo mapa).
- Codificação visual: Além do mapa coroplético, foi adicionado um tooltip com informaçes sobre o estado.

# Feedback
PRIMEIRO FEEDBACK - "Ficou legal, gostei particulamente das informações divididas por estado, pra mim ficou claro a mensagem que você quis passar: quais os estados que mais pegam empréstimos e quais os que mais têm problemas com inadimplência. Acho que a escolha de um mapa com diferentes tons de acordo com a quantidade foi bem escolhida, porque nos faz ir direto nos estados "mais importantes" e enxergar diretamente os dados referentes a eles. Um sugestão seria colocar a população no primeiro mapa, porque mostra ao leitor os estados que mais pegam empréstimo proporcionamente."
- Ações tomadas: foi inserido a proporção em relação à população.

SEGUNDO FEEDBACK - "Gostei dos mapas, te contrataria hehehehe. A visualização mostrou quais os estados que mais possuem empréstimos e os que mais possuem maus clientes. À medida que eu li o texto Eu fui me perguntado quais estados possuíam mais e menos inadimplentes e os mapas me trouxeram essa informação. Só acho que os textos estão muito grandes, e os leitores normalmente vão direto ao mapa. Sugeriria textos menores e mais direto. Uma relação bacana que é comentada no texto e facilmente visualizável nos mapas é a quantidade de empréstimo e população. Ponto chave para mim é quando se mostra os estados mais inadimplentes. Acho que as cores poderiam ser melhores, talves começando com um tom mais claro."
- Ações tomadas: a ideia das cores foi acatada. Sobre os texto, decidi deixá-los quase do mesmo tamanho porque direciono os leitores para alguns pontos.
 
TERCEIRO FEEDBACK - "A ideia foi bom, mas achei um tanto confusa a visualização, porque ao olhar para os mapas, sem ler os textos, não consegui indenficar muito bem do que se tratava. Acho que dá pra perceber a mensagem que você quer passar, a quantidade de empréstimos, porém acho que as informções ficaram um pouco soltas. Eu segeriria colorar legendas nos mapas para que soubéssemos já na hora do que cada mapa representa. Depois de ler o texto é possível compreender melhor a mensagem, de que alguns estados independente da população pegam mais impréstimo proporcionalmente e outros são bastante inadimplentes. Então, acho que tá um pouco confuso de início, talves as legendas sugeridas melhorassem essa compreensão."
- Ações tomadas: Realmente uma legenda em cada mapa ajudaria no entendimento, foi inserida legendas embaixo e, depois da primeira revisão, em cima dos mapas.

QUARTO FEEDBACK - "A visualização ficou boa, fique um pouco perdida porque eu não sei onde ficam os estado nos EUA. A ligação entre os mapas em relação à quantidade de empréstimos e a inadimplência achei legal. Porém, sugeriria que os estados tivessem uma identificação para uma consulta dos dados mais direta. Porque mesmo que o texto mostre que o Maine é o estado que proporcionalmente é o mais inadimplente, Eu não consegui encontrá-lo no mapa."
- Ações tomdas: resolvi não acatar a sugestão de indentificação para cada estado, porque como foi um única pessoa que solicitou achei que o mapa iria ficar mais poluído.

# Resources

Exemplo de mapa dos Estados Americanos: http://bl.ocks.org/michellechandra/0b2ce4923dc9b5809922
