# Data-Visualization-And-D3

# Resumo
A Prosper é uma empresa de empréstimo baseada em São Francisco - Califórnia que atua em todo território americano. 
Para essa análise foram dados de 111 mil empréstimos realizados entre 2005 e 2014. Paras as visualizaçes foi utilizado
dois mapas coroplético, pois percebeu-se que era a forma mais didátiva para a narrativa, que consiste em mostrar os estados que mais pegaram empréstimo e os estados mais inadimplentes. 

# Design
- Pimeiramento foi realizado um tratamento dos dados (data_wrang.r) para simplificar o arquivo js
- Tipo de Gráfico e Layout: Como existe uma variável categórica chamada "BorrowerState", onde os dados podem ser divididos por estado, optou-se por utilizar o mapa dos Estados Unidos. Foi utilizado como base para desenhar o mapa um arquivo json com as cordenadas (data/us-states.json). A partir do mapa desenhado, a ideia era mostrar os estados com maior número de empréstimos e com mais inadimplestes, para isso utilizou-se dois mapas coropléticos.
- Legendas: Foi adicionado uma paleta de cores em cada mapa onde quanto mais escuro maior o número de empréstimo (primeiro mapa) e de inadimplentes (segundo mapa).
- Codificação visual: Além do mapa coroplético, foi adicionado um tooltip com informaçes sobre o estado.

# Feedback
Primeiro feedback - Gostou da visualização, mas sugeriu que eu colocasse no primeiro mapa a população, em vez de colocar somente a porcentagem da mesma.

Segundo feedback - Gostou bastante do gráfico, porém sugeriu resumir os textos, poque normalmente quem visualizará irá direto no mapa, sem ler textos muitos grandes.

Terceiro feedback - Achou a visualização um pouco confusa, sugeriu legendas adicionais no mapa e na paleta de cores explicando do que se trata. 

Quarto feedback - Achou a narrativa boa, no tocante à ligação entre a quantidade de empréstimos e a inadimplência. Porém, sugeriu que os estados tivessem uma identificação para uma consulta dos dados mais direta.
