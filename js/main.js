function descobrirCDZ(){

const texto = document.querySelector("h1");
const imagem = document.querySelector("img");
const data = document.querySelector('#data').value;
const text2 = document.querySelector("h2");
// const dia = document.querySelector('#dia').value;
// const mes = document.querySelector('#mes').value;

if (data >= '2023/03/21' && data <= '2023/04/20') {
    imagem.setAttribute("src", "img/aries.png");
    imagem.setAttribute("width", "300px");
    texto.innerHTML = "Baseado em seu signo, seu cavaleiro é Mu!";
    text2.innerHTML = "𑄽✿୧ Mu é o Cavaleiro de Ouro de Áries do século XX, que protege a Casa de Áries no Santuário. Hábil na restauração de Armaduras, é ele quem conserta as Armaduras de Bronze do Seiya e dos outros antes da Batalha das Doze Casas do Zodíaco.";
}
else if (data >= '2023/04/21' && data <= '2023/05/20') {
    imagem.setAttribute("src", "img/touro.png");
    imagem.setAttribute("width", "300px");
    texto.innerHTML = "Baseado em seu signo, seu cavaleiro é Aldebaran!";
    text2.innerHTML = "𑄽✿୧ Aldebaran é o Cavaleiro de Ouro de Touro do século XX, que protege a Casa de Touro no Santuário. Dotado de uma resistência fora do comum, nem mesmo o Meteoro de Pégaso de Seiya conseguiu causar danos ao seu corpo.";
}
else if (data >= '2023/05/21' && data <= '2023/06/20') {
    imagem.setAttribute("src", "img/gemeos.png");
    imagem.setAttribute("width", "300px");
    texto.innerHTML = "Baseado em seu signo, seu cavaleiro é Saga!"
    texto.innerHTML = "𑄽✿୧ Saga de Gêmeos é o irmão gêmeo mais velho de Kanon, pedestinado a se tonar o Cavaleiro de Ouro de Gêmeos do século XX, que antigamente era tido como o próximo sucessor do Grande Mestre, tendo todas as características necessárias para o posto – humanidade, habilidade e força física.";
}
else if (data >= '2023/06/21' && data <= '2023/07/22') {
    imagem.setAttribute("src", "img/cancer.png");
    imagem.setAttribute("width", "300px");
    texto.innerHTML = "Baseado em seu signo, seu cavaleiro é Máscara da Morte!"
    texto.innerHTML = "𑄽✿୧ Máscara da Morte de Câncer é o Cavaleiro de Ouro de Câncer e protetor da quarta Casa do Zodíaco do século XX. Adora lutas, matança e acredita que, para um objetivo maior, alguns sacrifícios são inevitáveis.";
}
else if (data >= '2023/07/23' && data <= '2023/08/22') {
    imagem.setAttribute("src", "img/leao.png");
    imagem.setAttribute("width", "300px");
    texto.innerHTML = "Baseado em seu signo, seu cavaleiro é Aiolia!"
    texto.innerHTML = "𑄽✿୧ Irmão de Aiolos. Apesar de sua personalidade explosiva, tem um coração puro que distingue rapidamente os justos, por isso foi um dos primeiros Cavaleiros de Ouro a reconhecer a autoridade de Atena.";
}
else if (data >= '2023/08/23' && data <= '2023/09/22') {
    imagem.setAttribute("src", "img/virgem.png");
    imagem.setAttribute("width", "300px");
    texto.innerHTML = "Baseado em seu signo, seu cavaleiro é Shaka!"
    texto.innerHTML = "𑄽✿୧ Shaka de Virgem é o Cavaleiro de Ouro de Virgem do Século XX, que protege a Casa de Virgem no Santuário. Considerado como a reencarnação de Buda, possui um poder de observação que permite conhecer a verdade escondida sob as aparências.";
}
else if (data >= '2023/09/23' && data <= '2023/10/22') {
    imagem.setAttribute("src", "img/libra.png");
    imagem.setAttribute("width", "300px");
    texto.innerHTML = "Baseado em seu signo, seu cavaleiro é Dohko!"
    texto.innerHTML = "𑄽✿୧ Dohko de Libra fora um lendário e renomado Cavaleiro de Ouro do Santuário de Atena por ter lutado e sobrevivido a Guerra Santa contra Hades no Século XVIII ao lado de seu parceiro de batalhas, Shion de Áries.";
}
else if (data >= '2023/10/23' && data <= '2023/11/21') {
    imagem.setAttribute("src", "img/escorpiao.png");
    imagem.setAttribute("width", "300px");
    texto.innerHTML = "Baseado em seu signo, seu cavaleiro é Milo!"
    texto.innerHTML = "𑄽✿୧ Milo de Escorpião foi, no século XX, o Cavaleiro de Ouro de Escorpião que protegia a Casa de Escorpião no Santuário.";
}
else if (data >= '2023/11/22' && data <= '2023/12/21') {
    imagem.setAttribute("src", "img/sagitario.png");
    imagem.setAttribute("width", "300px");
    texto.innerHTML = "Baseado em seu signo, seu cavaleiro é Aiolos!"
    texto.innerHTML = "𑄽✿୧ Aiolos de Sagitário tornou-se um Cavaleiro de Ouro antes do nascimento de Atena e serviu como mestre de seu irmão mais novo, Aiolia de Leão. Era conhecido por sua bondade, lealdade e coragem.";
}
else if (data >= '2023/12/22' && data <= '2023/01/20') {
    imagem.setAttribute("src", "img/capricornio.png");
    imagem.setAttribute("width", "300px");
    texto.innerHTML = "Baseado em seu signo, seu cavaleiro é Shura!"
    texto.innerHTML = "𑄽✿୧ Shura de Capricórnio é o Cavaleiro de Ouro que protege a Casa de Capricórnio. Shura se considera o cavaleiro mais fiel a Atena, porém sua excessiva lealdade ao Santuário acabou levando-o a cometer uma série de equívocos.";
}
else if (data >= '2023/01/21' && data <= '2023/02/18') {
    imagem.setAttribute("src", "img/aquario.png");
    imagem.setAttribute("width", "300px");
    texto.innerHTML = "Baseado em seu signo, seu cavaleiro é Camus!"
    texto.innerHTML = "𑄽✿୧ Camus de Aquário é o Cavaleiro de Ouro que protege a Casa de Aquário no Santuário. No mangá, treinou o pequeno Hyoga e Isaak durante seis anos nas geladas terras do leste da Sibéria. foi obrigado a lutar contra Hyoga no Santuário.";
}
else if (data >= '2023/02/19' && data <= '2023/03/20') {
    imagem.setAttribute("src", "img/peixes.png");
    imagem.setAttribute("width", "300px");
    texto.innerHTML = "Baseado em seu signo, seu cavaleiro é Afrodite!"
    texto.innerHTML = "𑄽✿୧ Afrodite de Peixes é o Cavaleiro de Ouro de Peixes e protetor da última Casa do Zodíaco do século XX. Usa variações de golpes com rosas, como o Rosas Diabólicas Reais. Sua ideia é de que só um poder supremo pode manter a paz e ordem no mundo, mesmo que esse poder provenha do mal.";
}
else {
    texto.innerHTML = "Deu ruim... =(";
}

}