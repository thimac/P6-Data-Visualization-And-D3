# Data-Visualization-And-D3

# Resumo
A Prosper é uma empresa de empréstimo baseada em São Francisco - Califórnia que atua em todo território americano. Para essa análise foram dados de 111 mil empréstimos realizados entre 2005 e 2014. Paras as visualizaçes foi utilizado dois mapas coroplético, pois percebeu-se que era a forma mais didátiva para a narrativa, que consiste em mostrar os estados que mais pegaram empréstimo e os estados mais inadimplentes. O primeiro mapa nos mostra a quantidade de empréstimos e a porcentagem desses empréstimo em relação à população (Senso de 2015) do referido estado. Como é posível perceber os estados mais populosos são os que mais possuem empréstimo, no caso, Califórnia e Texas. Porém, se levar em consideração a porcentagem sobre a população, alguns estados possuem uma maior quantidade de empréstimos, como Illinois e Georgia. O segundo mapa nos mostra a relação de "maus clientes" por estados. Desse modo, os estados mais populosos, obviamente, são os que mais possuem esse tipo de cliente. Porém, como é possível perceber ao passar o mouse sobre os estados, a porcentagem de empréstimos marcados dessa forma varia de acordo com o estado, onde o estado mais inadimplente é o Maine, como 36,63% de inadimplência; e o menos inadimplente é o Wyoming, com apenas 6,67%.

# Design
- Pimeiramento foi realizado um tratamento dos dados (data_wrang.r) para simplificar o arquivo js
- Tipo de Gráfico e Layout: Como existe uma variável categórica chamada "BorrowerState", onde os dados podem ser divididos por estado, optou-se por utilizar o mapa dos Estados Unidos. Foi utilizado como base para desenhar o mapa um arquivo json com as cordenadas (data/us-states.json). A partir do mapa desenhado, a ideia era mostrar os estados com maior número de empréstimos e com mais inadimplestes, para isso utilizou-se dois mapas coropléticos.
- Legendas: Foi adicionado uma paleta de cores em cada mapa onde quanto mais escuro maior o número de empréstimo (primeiro mapa) e de inadimplentes (segundo mapa).
- Codificação visual: Além do mapa coroplético, foi adicionado um tooltip com informaçes sobre o estado.

# Feedback
Primeiro feedback - "Ficou legal, gostei particulamente das informações divididas pro estado, pra mim ficou claro a mensagem que você quis passar: quais os estados que mais pegam empréstimos e quais os que mais têm problemas com inadimplência. Acho que a escolha de um mapa com diferentes tons de acordo com a quantidade foi bem escolhida, porque nos faz ir direto nos estados "mais importantes" e enxergar diretamente os dados referentes a eles. Um sugestão seria colorar a população no primeiro mapa, porque mostra ao leitor os estados que mais pegam empréstimo proporcionamente."
- Ações tomadas: foi inserido a proporção em relação à população.

Segundo feedback - "Gostei dos mapas, te contrataria hehehehe. A visualização " 

Gostou bastante do gráfico, porém sugeriu resumir os textos, poque normalmente quem visualizará irá direto no mapa, sem ler textos muitos grandes. Além disso, sugeriu mudar as cores, deixando o tom mais alto como azul escuro e não preto.
 
Terceiro feedback - Achou a visualização um pouco confusa, sugeriu legendas adicionais no mapa e na paleta de cores explicando do que se trata. 

Quarto feedback - Achou a narrativa boa, no tocante à ligação entre a quantidade de empréstimos e a inadimplência. Porém, sugeriu que os estados tivessem uma identificação para uma consulta dos dados mais direta.

# Resources

Exemplo de mapa dos Estados Americanos: http://bl.ocks.org/michellechandra/0b2ce4923dc9b5809922
