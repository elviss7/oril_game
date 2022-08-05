
/*Algoritmo para o Jogo do Oril Jogador Vs Cpu-->


/*declaração das variáveis publicas*/
var Vez;		/*indica a Vez, se é o Jogador 1, Vez é 1, se é o Computador  Vez é 2*/
var VezActual;		/*onde armazeno a Vez de quem está a jogar*/
var Ult_Casa=0; 	/*variável que indica qual foi a casa onde acabou a jogada*/
var indice;		/*sai do Joga casa com a posição da ultima casa*/
var indiceaux;
var PPartida;
var N_Oril_In;
var Nivel; 		/*Armazena o nivel em que estamos a jogar*/
var Esc_Tabela;	/*variavel que serve para escolher se aparece o formulário-0  ou jogo-1*/
var Nome1;				/*colocação dos nomes dos jogadores*/
var Nome2;
Nome2="Computador";
Esc_Tabela=0;


/*variáveis onde armazeno op estado do Jogo*/ 
var Pedras_Jog;
var Pedras_Comp;
var ArrayInicial= new Array(12);
/*variáveis que armazenam as imagens*/
var Imagem=new Array(2);
Imagem[1]=new Image;
Imagem[1].src="imag/seta.png";
Imagem[2]=new Image;
Imagem[2].src="imag/Circulo1.png";
var Buraco=new Array(14);
Buraco[1]=new Image;
Buraco[1].src="imag/0.png";
Buraco[2]=new Image;
Buraco[2].src="imag/1.png";
Buraco[3]=new Image;
Buraco[3].src="imag/2.png";
Buraco[4]=new Image;
Buraco[4].src="imag/3.png";
Buraco[5]=new Image;
Buraco[5].src="imag/4.png";
Buraco[6]=new Image;
Buraco[6].src="imag/5.png";
Buraco[7]=new Image;
Buraco[7].src="imag/6.png";
Buraco[8]=new Image;
Buraco[8].src="imag/7.png";
Buraco[9]=new Image;
Buraco[9].src="imag/8.png";
Buraco[10]=new Image;
Buraco[10].src="imag/9.png";
Buraco[11]=new Image;
Buraco[11].src="imag/10.png";
Buraco[12]=new Image;
Buraco[12].src="imag/11.png";
Buraco[13]=new Image;
Buraco[13].src="imag/12.png";
Buraco[14]=new Image;
Buraco[14].src="imag/13.png";
Buraco[15]=new Image;
Buraco[15].src="imag/14.png";
Buraco[16]=new Image;
Buraco[16].src="imag/15.png";
Buraco[17]=new Image;
Buraco[17].src="imag/16.png";
Buraco[18]=new Image;
Buraco[18].src="imag/dog.gif";	

/*linha 50*/
var Lateral=new Array(23);
Lateral[1]=new Image;
Lateral[1].src="imag/00.png";
Lateral[2]=new Image;
Lateral[2].src="imag/01.png";
Lateral[3]=new Image;
Lateral[3].src="imag/02.png";
Lateral[4]=new Image;
Lateral[4].src="imag/03.png";
Lateral[5]=new Image;
Lateral[5].src="imag/04.png";
Lateral[6]=new Image;
Lateral[6].src="imag/05.png";
Lateral[7]=new Image;
Lateral[7].src="imag/06.png";
Lateral[8]=new Image;
Lateral[8].src="imag/07.png";
Lateral[9]=new Image;
Lateral[9].src="imag/08.png";
Lateral[10]=new Image;
Lateral[10].src="imag/09.png";
Lateral[11]=new Image;
Lateral[11].src="imag/010.png";
Lateral[12]=new Image;
Lateral[12].src="imag/011.png";
Lateral[13]=new Image;
Lateral[13].src="imag/012.png";
Lateral[14]=new Image;
Lateral[14].src="imag/013.png";
Lateral[15]=new Image;
Lateral[15].src="imag/014.png";
Lateral[16]=new Image;
Lateral[16].src="imag/015.png";
Lateral[17]=new Image;
Lateral[17].src="imag/016.png";
Lateral[18]=new Image;
Lateral[18].src="imag/017.png";
Lateral[19]=new Image;
Lateral[19].src="imag/018.png";
Lateral[20]=new Image;
Lateral[20].src="imag/019.png";
Lateral[21]=new Image;
Lateral[21].src="imag/020.png";
Lateral[22]=new Image;
Lateral[22].src="imag/022.png";
Lateral[23]=new Image;
Lateral[23].src="imag/023.png";
Lateral[24]=new Image;
Lateral[24].src="imag/024.png";
Lateral[25]=new Image;
Lateral[25].src="imag/025.png";



<!--Funcao para gerir os formularios-->
function InicializaFormulario()
{
	if (Esc_Tabela==0) 
	{	/*inica novo jogo*/
		Esc_Tabela=1;
		window.Formulario.style.display="none";
		window.Jogo.style.display="block";
		/*obter valores dos formulários*/
		Nome1=document.Cabecalho.Nome.value;
		document.Tabuleiro.Txt_AuxiliarJog1.value=Nome1;
		if (document.Cabecalho.Nivel[2].checked)
		{
			alert ("Escolheu Jogar no Nivel Mais Dificil");
			Nivel=3;
		}
		if (document.Cabecalho.Nivel[1].checked)
		{
			alert ("Escolheu Jogar no Nivel Médio");
			Nivel=2;
		}
		if (document.Cabecalho.Nivel[0].checked)
		{
			alert ("Escolheu Jogar no Nivel de Iniciado");
			Nivel=1;
		}

		/*tenho que colocar o nome do jogador dois e não está a resultar*/
		InicializaJogo();
	}
	else
	{
		/*está a jogar volta para o formulário inicial*/
		Esc_Tabela=0;
		window.Formulario.style.display="block";
		window.Jogo.style.display="none";
	}
}
function InicializaJogo()
{
	/*inicializa Variáveis*/
	Pedras_Jog=0;
	Pedras_Comp=0;
	/*coloca 4 pedras em cada buraco*/
	for (i=1;i<=12;i++)
	{
		ArrayInicial[i]=4;
	}

	ApresentaResultado();
	Vez=1; 	/*Vez do Jogador 1*/
	

	window.document.images[0].src=Imagem[2].src;/*vermelho para o Jogador 2*/
	window.document.images[9].src=Imagem[1].src;/*seta para o jogador 1*/
}

function Mensagem(Codigo)
{	/*se 1 alerta nas casas do Computador, se 2 alerta no armazém do computador, se 3 alerta no armazém do Jogador*/
	if (Codigo==1) alert ("Essas casas são do CPU !!! Verifique quem deve Jogar");
	if (Codigo==2) alert ("Essas casas são do "+Nome1+" !!! Verifique quem deve Jogar");
	if (Codigo==3) alert ("Este é um armazém de sementes, não pode ser jogado");
}


<!-- Funções Principais-->

function JogaJogador(p)
{/*codigo que faz uma jogada de um Jogador*/
	var aux;
	var i;

	window.clearTimeout();	/*limpar os timers*/

	if (Vez > 0)
	{
		VezActual=Vez; 			/*armazenar que está a jogar*/
		Vez=0; 					/*para durante a jogada nenhum jogador poder jogar*/
		if ((VezActual==1) && (p>6))	/*Erro Vez Jogador 1,a Jogar nas casass do Jogador 2*/
		{
			Mensagem(VezActual);
			Vez=VezActual;
		}
		else	
		{
			if ((VezActual==2) && (p<7))	/*Erro Vez Jogador 2,a Jogar nas casass do Jogador 1*/
			{
				Mensagem(VezActual);
				Vez=VezActual;
			}
			else	/*Jogar*/
			{	/*verificar se pode Jogar esta casa*/
				aux=JogadaPossivel(p,ArrayInicial);
				if (aux==0)
				{
					alert("Não pode jogar esta casa");
					Vez=VezActual;
					return;
				}
				/*se saiu a jogada é possivel*/
				/*vou guardar o numero de oril que tinha inicialmente*/
				N_Oril_In=ArrayInicial[p];
				ArrayInicial=JogaCasa(p,ArrayInicial);
				/*estou aqui, passar a função Joga Casa, fazer a apresentação*/
				if (N_Oril_In>11)
				{
					N_Oril_In=N_Oril_In+1;
				}
				indiceaux=1;
				PPartida=p;
				window.setTimeout("ApresentaJogo(PPartida)",300); /*a vez é trocada nesta função*/
	
			}
		}

	}
	
	return;
	
}

function TrocaVez()
{		var EscComp;
		EscComp=0;
		if (VezActual == 1)
		{
			/*implementar aqui a jogada do computador*/
			EscComp=Joga_Computador();
			/*alert(EscComp);*/ /*a retirar*/
			if (EscComp!=0)
			{
				Vez=2;
				JogaJogador(EscComp);
			}
			else
			{
				fim(2);
			}
			window.document.images[0].src=Imagem[1].src;/*seta para o computador*/
			window.document.images[9].src=Imagem[2].src;/*Vermelho para o jogador*/
		}
		else
		{
			Vez=1;
			window.document.images[0].src=Imagem[2].src;/*vermelho para o computador*/
			window.document.images[9].src=Imagem[1].src;/*seta para o jogador*/
		}
}

function JogaCasa(n,Arr)
{/*função que joga uma dada casa e devolve o resultado*/
	var auxiliar;
	var i;
	var Arr_Aux=new Array(12);
	/*Copia do Array de entrada*/
	for (i=1;i<13;i++)
	{
		Arr_Aux[i]=Arr[i];
	}
	
	auxiliar=Arr_Aux[n];	
	Arr_Aux[n]=0;
	indice=n;
	for (i=n+1;i<=(n+auxiliar);i++)
	{ 	
		indice++;
		if (indice==13 ) indice=1;
		/*qdo dá a volta n se põe semente na casa de onde partiu*/
		if (indice==n)
		{
			Arr_Aux[indice]=0;
			auxiliar++;
		}
		else
		{
			Arr_Aux[indice]=Arr_Aux[indice]+1;
		}
		/*Vou fazer logo a apresentação do Array*/
	}
	/*o indice fica na ultima celula*/
	if (Ult_Casa==0)
	{
		if (indice==13 ) indice=1;
		Ult_Casa=indice;
	}
	/*passei o Resolve Jogada para o ApresentaJogo*/
	return Arr_Aux;
}

<!--Funções que implementam as regras		-->

function ResolveJogada(n,Arr)
{/*função que vai resolver a jogada*/
	if (VezActual==2)
	{/*vez do computador*/
		if (n<7)
		{/*a jogada acabou do lado do jogador, pode dar lugar a ganho de pedras*/
			while (((Arr[n]==2) || (Arr[n]==3)) && (n<7) && (n>0))
			{
				Pedras_Comp=Pedras_Comp+Arr[n];
				Arr[n]=0;
				MostraSmile(n);
				n--;
			}
		}
		else
		{	
			return Arr;
		}	
	}
	else
	{/*vez do Jogador*/
		if (n>6)
		{/*a jogada acabou do lado do Computador, pode dar lugar a ganho de pedras*/
			while (((Arr[n]==2) || (Arr[n]==3)) && (n>6) && (n<13))
			{
				Pedras_Jog=Pedras_Jog+Arr[n];
				Arr[n]=0;
				MostraSmile(n);
				n--;
			}
		}
		else
		{	
			return Arr;
		}	
		
	}
	return Arr;
}

function JogadaPossivel(n,Arr)
{
	/*n se pode jogar casas sem sementes, */
	/*nova situação caso o adverário n tenha peças temos q dar uma, neste caso podemos jogar uma casa com uma peça desde q seja a unica hiopotese*/
	var i;
	var j;
	var teste;
	if (VezActual==1)	
	{j=7;}
	else	
	{j=1;}
	teste=0;
	/*ver se o adversário tem pedras*/
	for (i=j;i<j+6;i++)
	{
		if (Arr[i]!=0) 
		{
			teste=1;
		}
	}
	if (Arr[n]==0)
	{
		return 0;
	}
	else
	{
		if (Arr[n]==1)
		{
			if (VezActual==1)	
			{j=1;}
			else	
			{j=7;}
			for(i=j;i<j+6;i++)
			{
				if ((Arr[i]>1) && (teste!=1)) /* alteraçao*/
				{
					return 0;
				}
			}		
		}
	}
	/*caso o Jogador 2 n tenha pedras o Jogador tem que Jogar de forma a dar pedras ao Computador*/
	if (VezActual==1)
	{
		/*ver se o computador tem pedras*/
		if (teste!=0)
		{ 
			return 1;
		}
		/*se tem return se não verifica se o jogador pode jogar de forma a dar pedras ao computador, se não acaba o jogo*/
		teste=0;
		for (i=1;i<7; i++)
		{
			if (Arr[i]>(6-i))
			{
				teste=i;
				if (n==i)
				{
					return 1;
				}
			}
		}
		/*é pq  encontrou uma jogada possivel*/
		if (teste!=0)
		{
			alert("É obrigado a Colocar Pedras no lado do Outro Jogador");
			return 0;
		}
	}
	else /*vez do  computador*/
	{
		/*ver se o Jogador tem pedras*/
		if (teste!=0) 
		{
			return 1;
		}
		teste=0;
		for (i=7;i<13; i++)
		{
			if (Arr[i]>(12-i))
			{
				teste=i;
				if (n==i)
				{
					return 1;
				}
			}
		}
		/*é pq encontrou uma jogada possivel*/
		if (teste!=0)
		{
			alert("É obrigado a Colocar Pedras no lado do Outro Jogador");
			return 0;
		}
	}

	return 1;
}

function fim(n)
{	
	var i;
	var teste=0;
	if (n==2)
	{
		/*foi o Jogador 2 que jogou se o Jogador 1 n tiver pedras para jogar é pq acabou o jogo e o Jogador 2 fica c as peças do seu lado*/
		for (i=1;i<7;i++)
		{
			if (ArrayInicial[i]!=0) teste=1;
		}
		/*se o Jogador 2 tiver uma Jogada que possa dar pedras ao Jogador 1 passa a Jogada*/
		if (teste==0)
		{/*ver se o Jogador 2 pode jogar de forma a dar pedras ao Jogador 1*/
			for (i=7;i<13;i++)
			{
				if (ArrayInicial[i]>(12-i)) teste=2;
			}
			
		}

		/*é pq o jogador 1 n tem pedras*/
		if (teste==0)
		{
			for(i=7;i<13;i++)
			{
				Pedras_Comp=Pedras_Comp+ArrayInicial[i];
				ArrayInicial[i]=0;
			}
			for(i=1;i<7;i++)
			{
				Pedras_Jog=Pedras_Jog+ArrayInicial[i];
				ArrayInicial[i]=0;

			}
			ApresentaResultado();
			Vez=0; /*Para ninguém poder Jogar*/

		}
		if (teste==2)
		{/*passar a vez do Jogador 1 e voltar a jogar o Jogador 2*/
			alert("Você não tem Oril para jogar, passa a vez. O  CPU  tem de jogar de forma a dar Oril ao  "+Nome1+" ");
			Computador=1;
			if ((Pedras_Comp<26) && (Pedras_Jog<26))
			{
				
				VezActual=1;
				TrocaVez();	/*para saltar a vez do jogadro 1*/
				return;
			}
		}
	}
	else  /*caso em q está na vez do Jogador*/
	{
		
		for (i=7;i<13;i++)
		{
			if (ArrayInicial[i]!=0) teste=1;
		}
		/*se o Jogador 1 tiver uma Jogada que possa dar pedras ao Jogador 2  passa a Jogada*/
		if (teste==0)
		{/*ver se o jogador 1 pode jogar de forma a dar pedras ao Jogador 2*/
			for (i=1;i<7;i++)
			{
				if (ArrayInicial[i]>(6-i)) teste=2;
			}
			
		}
		/*é pq o Computador n tem pedras*/
		
		if (teste==0)
		{
			for(i=1;i<7;i++)
			{
				Pedras_Jog=Pedras_Jog+ArrayInicial[i];
				ArrayInicial[i]=0;

			}
			for(i=7;i<13;i++)
			{
				Pedras_Comp=Pedras_Comp+ArrayInicial[i];
				ArrayInicial[i]=0;
			}

			ApresentaResultado();
			Vez=0; /*para n poder jogar*/

		}
		if (teste==2)
		{/*passar a vez do Jogador 2 e voltar a jogar o Jogador1*/
			alert("O  "+Nome1+"  não tem oril para jogar, passa a vez. Tem que jogar de forma a dar Oril ao CPU");
			if ((Pedras_Comp<26) && (Pedras_Jog<26))
			{
				VezActual=2;
				TrocaVez();
				return;
			}
		}
	}
	if (Pedras_Comp>24) 
	{	
		Vez=0;
		alert("Parabéns, o  CPU  ganhou o Jogo");
		return;
	}
	if (Pedras_Jog>24) 
	{	
		Vez=0;
		alert("Parabéns,o  "+Nome1+"  Ganhou o Jogo");
		return;
	}
	TrocaVez();
	
}


<!--Funções de Apresentação Gráfica		-->

function MostraSmile(n)
{
	if (n==1)
	{
			window.document.images[10].src=Buraco[18].src;
	}
	if (n==2)
	{
			window.document.images[11].src=Buraco[18].src;
	}
	if (n==3)
	{
			window.document.images[12].src=Buraco[18].src;
	}
	if (n==4)
	{
			window.document.images[13].src=Buraco[18].src;
	}
	if (n==5)
	{
			window.document.images[14].src=Buraco[18].src;
	}
	if (n==6)
	{
			window.document.images[15].src=Buraco[18].src;
	}
	if (n==7)
	{
			window.document.images[7].src=Buraco[18].src;
	}
	if (n==8)
	{
			window.document.images[6].src=Buraco[18].src;
	}
	if (n==9)
	{
			window.document.images[5].src=Buraco[18].src;
	}
	if (n==10)
	{
			window.document.images[4].src=Buraco[18].src;
	}
	if (n==11)
	{
			window.document.images[3].src=Buraco[18].src;
	}
	if (n==12)
	{
			window.document.images[2].src=Buraco[18].src;
	}
}


function ApresentaJogo(n)
{/*vai apresentar as jogadas aos soluços*/
	/*alterar aqui os indices das imagens*/
	if (n==13)
	{
		document.Tabuleiro.Txt_PedrasComp.value=Pedras_Comp;
		if (Pedras_Comp>22)
		{
			window.document.images[1].src=Lateral[23].src;
		}
		else
		{
			window.document.images[1].src=Lateral[Pedras_Comp+1].src;
		}
	}
	if (n==14)
	{
		document.Tabuleiro.Txt_PedrasJogador.value=Pedras_Jog;
		if (Pedras_Jog>22)
		{
			window.document.images[8].src=Lateral[23].src;
		}
		else
		{
			window.document.images[8].src=Lateral[Pedras_Jog+1].src;
		}
	}	
	if (n==1)
	{
		

		document.Tabuleiro.Txt_Buraco1.value=ArrayInicial[1];
		if (ArrayInicial[1]>12)
		{
			window.document.images[10].src=Buraco[13].src;
		}
		else
		{
			window.document.images[10].src=Buraco[ArrayInicial[1]+1].src;
		}
	}
	if (n==2)
	{
		document.Tabuleiro.Txt_Buraco2.value=ArrayInicial[2];
		if (ArrayInicial[2]>12)
		{
			window.document.images[11].src=Buraco[13].src;
		}
		else
		{
			window.document.images[11].src=Buraco[ArrayInicial[2]+1].src;
		}
    }
	if (n==3)
	{
		document.Tabuleiro.Txt_Buraco3.value=ArrayInicial[3];
		if (ArrayInicial[3]>12)
		{
			window.document.images[12].src=Buraco[13].src;
		}
		else
		{
			window.document.images[12].src=Buraco[ArrayInicial[3]+1].src;
		}
	}
	if (n==4)
	{
		document.Tabuleiro.Txt_Buraco4.value=ArrayInicial[4];
		if (ArrayInicial[4]>12)
		{
			window.document.images[13].src=Buraco[13].src;
		}
		else
		{
			window.document.images[13].src=Buraco[ArrayInicial[4]+1].src;
		}
	}
	if (n==5)
	{
		document.Tabuleiro.Txt_Buraco5.value=ArrayInicial[5];
		if (ArrayInicial[5]>12)
		{
			window.document.images[14].src=Buraco[13].src;
		}
		else
		{
			window.document.images[14].src=Buraco[ArrayInicial[5]+1].src;
		}
	}
	if (n==6)
	{
		document.Tabuleiro.Txt_Buraco6.value=ArrayInicial[6];
		if (ArrayInicial[6]>12)
		{
			window.document.images[15].src=Buraco[13].src;
		}
		else
		{
			window.document.images[15].src=Buraco[ArrayInicial[6]+1].src;
		}
	}
	if (n==7)
	{
		document.Tabuleiro.Txt_Buraco7.value=ArrayInicial[7];
		if (ArrayInicial[7]>12)
		{
			window.document.images[7].src=Buraco[13].src;
		}
		else
		{
			window.document.images[7].src=Buraco[ArrayInicial[7]+1].src;
		}
	}
	if (n==8)
	{
		document.Tabuleiro.Txt_Buraco8.value=ArrayInicial[8];
		if (ArrayInicial[8]>12)
		{
			window.document.images[6].src=Buraco[13].src;
		}
		else
		{
			window.document.images[6].src=Buraco[ArrayInicial[8]+1].src;
		}
	}
	if (n==9)
	{
		document.Tabuleiro.Txt_Buraco9.value=ArrayInicial[9];
		if (ArrayInicial[9]>12)
		{
			window.document.images[5].src=Buraco[13].src;
		}
		else
		{
			window.document.images[5].src=Buraco[ArrayInicial[9]+1].src;
		}
	}
	if (n==10)
	{
		document.Tabuleiro.Txt_Buraco10.value=ArrayInicial[10];
		if (ArrayInicial[10]>12)
		{
			window.document.images[4].src=Buraco[13].src;
		}
		else
		{
			window.document.images[4].src=Buraco[ArrayInicial[10]+1].src;
		}
	}
	if (n==11)
	{
		document.Tabuleiro.Txt_Buraco11.value=ArrayInicial[11];
		if (ArrayInicial[11]>12)
		{
			window.document.images[3].src=Buraco[13].src;
		}
		else
		{
			window.document.images[3].src=Buraco[ArrayInicial[11]+1].src;
		}
	}
	if (n==12)
	{
		document.Tabuleiro.Txt_Buraco12.value=ArrayInicial[12];
		if (ArrayInicial[12]>12)
		{
			window.document.images[2].src=Buraco[13].src;
		}
		else
		{
			window.document.images[2].src=Buraco[ArrayInicial[12]+1].src;
		}
	}
	n++;
	if (n==13)
	{
		n=1;
	}
	indiceaux++;
	PPartida=n;
	if (indiceaux<(N_Oril_In+2))
	{
		window.setTimeout("ApresentaJogo(PPartida)",200); 
	}
	else
	{
		
		window.setTimeout("ResolveJogada(indice,ArrayInicial)",100);
		window.setTimeout("ApresentaResultado()",400);
		window.setTimeout("fim(VezActual)",500);
	}
	
}


function ApresentaResultado()
{
	document.Tabuleiro.Txt_PedrasComp.value=Pedras_Comp;
	if (Pedras_Comp>22)
	{
		window.document.images[1].src=Lateral[23].src;
	}
	else
	{
		window.document.images[1].src=Lateral[Pedras_Comp+1].src;

	}
	document.Tabuleiro.Txt_PedrasJogador.value=Pedras_Jog;
	if (Pedras_Jog>22)
	{
		window.document.images[8].src=Lateral[23].src;
	}
	else
	{
		window.document.images[8].src=Lateral[Pedras_Jog+1].src;
	}

	document.Tabuleiro.Txt_Buraco1.value=ArrayInicial[1];
	if (ArrayInicial[1]>12)
	{
		window.document.images[10].src=Buraco[13].src;
	}
	else
	{/*linha 150*/
		window.document.images[10].src=Buraco[ArrayInicial[1]+1].src;
	}
	
	document.Tabuleiro.Txt_Buraco2.value=ArrayInicial[2];
	if (ArrayInicial[2]>12)
	{
		window.document.images[11].src=Buraco[13].src;
	}
	else
	{
		window.document.images[11].src=Buraco[ArrayInicial[2]+1].src;
	}

	document.Tabuleiro.Txt_Buraco3.value=ArrayInicial[3];
	if (ArrayInicial[3]>12)
	{
		window.document.images[12].src=Buraco[13].src;
	}
	else
	{
		window.document.images[12].src=Buraco[ArrayInicial[3]+1].src;
	}

	document.Tabuleiro.Txt_Buraco4.value=ArrayInicial[4];
	if (ArrayInicial[4]>12)
	{
		window.document.images[13].src=Buraco[13].src;
	}
	else
	{
		window.document.images[13].src=Buraco[ArrayInicial[4]+1].src;
	}

	document.Tabuleiro.Txt_Buraco5.value=ArrayInicial[5];
	if (ArrayInicial[5]>12)
	{
		window.document.images[14].src=Buraco[13].src;
	}
	else
	{
		window.document.images[14].src=Buraco[ArrayInicial[5]+1].src;
	}


	document.Tabuleiro.Txt_Buraco6.value=ArrayInicial[6];
	if (ArrayInicial[6]>12)
	{
		window.document.images[15].src=Buraco[13].src;
	}
	else/* linha 200*/
	{
		window.document.images[15].src=Buraco[ArrayInicial[6]+1].src;
	}	

	document.Tabuleiro.Txt_Buraco7.value=ArrayInicial[7];
	if (ArrayInicial[7]>12)
	{
		window.document.images[7].src=Buraco[13].src;
	}
	else
	{
		window.document.images[7].src=Buraco[ArrayInicial[7]+1].src;
	}

	document.Tabuleiro.Txt_Buraco8.value=ArrayInicial[8];
		if (ArrayInicial[8]>12)
	{
		window.document.images[6].src=Buraco[13].src;
	}
	else
	{
		window.document.images[6].src=Buraco[ArrayInicial[8]+1].src;
	}

	document.Tabuleiro.Txt_Buraco9.value=ArrayInicial[9];
	if (ArrayInicial[9]>12)
	{
		window.document.images[5].src=Buraco[13].src;
	}
	else
	{
		window.document.images[5].src=Buraco[ArrayInicial[9]+1].src;
	}

	document.Tabuleiro.Txt_Buraco10.value=ArrayInicial[10];
	if (ArrayInicial[10]>12)
	{
		window.document.images[4].src=Buraco[13].src;
	}
	else
	{
		window.document.images[4].src=Buraco[ArrayInicial[10]+1].src;
	}

	document.Tabuleiro.Txt_Buraco11.value=ArrayInicial[11];
	if (ArrayInicial[11]>12)
	{
		window.document.images[3].src=Buraco[13].src;
	}
	else
	{/*linha 249*/
		window.document.images[3].src=Buraco[ArrayInicial[11]+1].src;
	}

	document.Tabuleiro.Txt_Buraco12.value=ArrayInicial[12];
	if (ArrayInicial[12]>12)
	{
		window.document.images[2].src=Buraco[13].src;
	}
	else
	{
		window.document.images[2].src=Buraco[ArrayInicial[12]+1].src;
	}
}



<!--Funções para Jogadas-->
<!--Funções que implementam os Algoritmos-->
<!--Vou implementar aqui o algoritmos para a escolha da jogada do Computador -->
<!--Esta função deve devolver a casa a jogar-->
<!--Esta Função é chamada na função TrocaVez-->

function Joga_Computador()
{	
	var VezAux;	
	var Campo=new Array(14);	/*guarda o ponto de partida,13->Pedras Jog, 14->Pedras Comp*/
	var Arraya=new Array(14);	/*arrays auxiliares*/
	var Arrayb=new Array(14);
	var Arrayc=new Array(14);
	var Arrayd=new Array(14);
	var JogPossa=new Array(12);
	for (i=1;i<=12;i++) JogPossa[i]=0;
	var JogPossb=new Array(12);
	var JogPossc=new Array(12);
	var JogPossd=new Array(12);
	var aux;
	var Escolha;

	var a,b,c,d;
	VezAux=2;	/*2 Computador 1 é "Jogador"*/
	/*guardar o ponto de partida*/
	for (i=1;i<=12;i++) Campo[i]=ArrayInicial[i];
	Campo[13]=Pedras_Jog;
	Campo[14]=Pedras_Comp;
	var Computador=new Array(6);	/*vai guardar os pontos que se pode ganhar em cada jogada*/
	/*inicializar o Array Computador*/
	for (i=1;i<=6;i++) Computador[i]=0;
	/*chamar a função que nos vai dar as casas que se pode jogar*/
	JogPossa=CasasPossiveis(Campo,VezAux);	/*obter um array onde 1s são as casas que posso jogar*/
	for (a=7;a<=12;a++)
	{	/*colocar o Array Auxiliar a 0*/
		for (i=1;i<=14;i++) Arraya[i]=0;
		if (JogPossa[a]>0)
		{
			Arraya=JogadaFantasma(a,Campo);
			for (i=1;i<=12;i++) JogPossb[i]=0;	/*inicializar o array das JOGADAS POSSIVES*/
			JogPossb=CasasPossiveis(Arraya,1);	/*obter um array onde 1s são as casas que posso jogar*/
							
			for(b=1;b<=6;b++)			/*vez do Jogador*/
			{
				for (i=1;i<=14;i++) Arrayb[i]=0;	/*inicializar o Array*/
				if ((JogPossb[b]>0) && (Nivel>1))
				{	
					Arrayb=JogadaFantasma(b,Arraya);
					for (i=1;i<=12;i++) JogPossc[i]=0;	/*inicializar o array das jOGADAS pOSSIVESI*/
					JogPossc=CasasPossiveis(Arrayb,2);	/*obter um array onde 1s são as casas que posso jogar*/
					
					for(c=7;c<=12;c++)			/*vez do Computador*/
					{
						for (i=1;i<=14;i++) Arrayc[i]=0;	/*inicializar o Array*/
						if ((JogPossc[c]>0) && (Nivel>2))
						{	
							Arrayc=JogadaFantasma(c,Arrayb);
							for (i=1;i<=12;i++) JogPossd[i]=0;	/*inicializar o array das jOGADAS pOSSIVESI*/
							JogPossd=CasasPossiveis(Arrayc,1);	/*obter um array onde 1s são as casas que posso jogar*/
							
							for(d=1;d<=6;d++)			/*vez do Jogador*/
							{
								for (i=1;i<=14;i++) Arrayd[i]=0;	/*inicializar o Array*/
								if (JogPossd[d]>0)
								{	
									Arrayd=JogadaFantasma(d,Arrayc);
									if ((Arrayd[13]<26) && (Arrayd[14]<26))
									{
										Computador[(a-6)]=Computador[(a-6)]-(Arrayd[13]-Pedras_Jog)+(Arrayd[14]-Pedras_Comp);
									}
									else
									{
										if (Arrayd[13]>24) Computador[(a-6)]=Computador[(a-6)]-100;
										if (Arrayd[14]>24) Computador[(a-6)]=Computador[(a-6)]+100;						
									}
								}
								else
								{
									if ((Arrayc[13]<26) && (Arrayc[14]<26))
									{
										Computador[(a-6)]=Computador[(a-6)]-(Arrayc[13]-Pedras_Jog)+(Arrayc[14]-Pedras_Comp);
									}
									else
									{
										if (Arrayc[13]>24) Computador[(a-6)]=Computador[(a-6)]-200;
										if (Arrayc[14]>24) Computador[(a-6)]=Computador[(a-6)]+200;						
									}

								}

							}


						}
						else
						{
							if ((Arrayb[13]<26) && (Arrayb[14]<26))
							{
								Computador[(a-6)]=Computador[(a-6)]-(Arrayb[13]-Pedras_Jog)+(Arrayb[14]-Pedras_Comp);
							}
							else
							{
								if (Arrayb[13]>24) Computador[(a-6)]=Computador[(a-6)]-400;
								if (Arrayb[14]>24) Computador[(a-6)]=Computador[(a-6)]+400;						
							}

						}
					}

				}
				else
				{
					if ((Arraya[13]<26) && (Arraya[14]<26))
					{
						Computador[(a-6)]=Computador[(a-6)]-(Arraya[13]-Pedras_Jog)+(Arraya[14]-Pedras_Comp);
					}
					else
					{
						if (Arraya[13]>24) Computador[a-6]=Computador[(a-6)]-500;
						if (Arraya[14]>24) Computador[a-6]=Computador[(a-6)]+500;						
					}
				}
			}

		}
		else
		{
			Computador[(a-6)]=0;
		}
	}


	/*no array Computador tenho uma avaliação da Melhor Jogada*/
	/*Escolher a Maior*/
	JogPossa=CasasPossiveis(Campo,2);	/*obter um array onde 1s são as casas que posso jogar*/
	/*caso não haja nenhuma jogada possivel retorna 0*/
	aux=0;
	for(i=7;i<=12;i++)
	{	
		if (JogPossa[i]>0) aux=2;
	}
	if (aux==0) return aux;
	
	aux=-5000;
	Escolha=0;

	JogPossa=CasasPossiveis(Campo,2);	/*obter um array onde 1s são as casas que posso jogar*/
	/*caso não haja nenhuma jogada possivel retorna 0*/
	for(i=7;i<=12;i++)
	{
	}
	for(i=6;i>=1;i--)
	{
		if ((JogPossa[(i+6)]>0) && (Computador[i]>aux))
		{	
			Escolha=i;
			aux=Computador[i];
		}
	}
	
	return (Escolha+6);
}

function JogadaFantasma(Casa,ArrayIn)
{/*ArrayIn[14], 13->Perdas do Jogador,14->Pedras do Comp*/
	var auxiliar;
	var i;
	var Cont;
	var Arr_Aux=new Array(14);
	/*Copia do Array de entrada*/
	for (i=1;i<=14;i++)
	{
		Arr_Aux[i]=ArrayIn[i];
	}
	
	auxiliar=Arr_Aux[Casa];	
	Arr_Aux[Casa]=0;
	Cont=Casa;
	for (i=Casa+1;i<=(Casa+auxiliar);i++)
	{ 	
		Cont++;
		if (Cont==13 ) Cont=1;
		/*qdo dá a volta n se põe semente na casa de onde partiu*/
		if (Cont==Casa)
		{
			Arr_Aux[Cont]=0;
			auxiliar++;
		}
		else
		{
			Arr_Aux[Cont]=Arr_Aux[Cont]+1;
		}
	}
	/*o Cont fica na ultima celula*/
	
	/*Resolve Jogada*/
	if ((Casa>6) && (Casa<13)) 	{/*vez do computador*/
		if (Cont<7)
		{/*a jogada acabou do lado do jogador, pode dar lugar a ganho de pedras*/
			while (((Arr_Aux[Cont]==2) || (Arr_Aux[Cont]==3)) && (Cont<7) && (Cont>0))
			{
				Arr_Aux[14]=Arr_Aux[14]+Arr_Aux[Cont];
				Arr_Aux[Cont];
				Cont--;
			}
		}
		else
		{	
			return Arr_Aux;
		}	
	}
	else
	{/*vez do Jogador*/
		if (Cont>6)
		{/*a jogada acabou do lado do Computador, pode dar lugar a ganho de pedras*/
			while (((Arr_Aux[Cont]==2) || (Arr_Aux[Cont]==3)) && (Cont>6) && (Cont<13))
			{
				Arr_Aux[13]=Arr_Aux[13]+Arr_Aux[Cont];
				Arr_Aux[Cont]=0;
				Cont--;
			}
		}
		else
		{	
			return Arr_Aux;

		}	
		
	}
	return Arr_Aux;
	
}

function CasasPossiveis(ArrayEnt, VezEnt)
{
	var c;
	var SumComputador;
	var SumJogador;
	SumComputador=0;
	SumJogador=0;

	/*ver quem tem pedras para jogar*/
	for (c=1;c<=6;c++) SumJogador=SumJogador+ArrayEnt[c];
	for (c=7;c<=12;c++) SumComputador=SumComputador+ArrayEnt[c];
	var ArrayCasas= new Array(12);
	for (c=1;c<=12;c++) ArrayCasas[c]=0;	/*colocar o Array a Zero*/
	/*há pedras dos dois lados*/
	if ((VezEnt==1) && (SumJogador>0) && (SumComputador>0))
	{
		var aux=0;
		for(c=1;c<=6;c++)
		{	

			if (ArrayEnt[c]>1) 
			{
				ArrayCasas[c]=1;
				aux=aux+1;
			}
		}
		/*caso não existam casas com mais de uma pedra*/
		if (aux==0)
		{
			for(c=1;c<=6;c++)
			{	
				if (ArrayEnt[c]>0) ArrayCasas[c]=1;
			}
		}
		return ArrayCasas;

	}
	if ((VezEnt==2) && (SumJogador>0) && (SumComputador>0))
	{
		var aux=0;

		for(c=7;c<=12;c++)
		{	

			if (ArrayEnt[c]>1) 
			{
			
				ArrayCasas[c]=1;
				aux=aux+1;
			}
		}
		/*caso não existam casas com mais de uma pedra*/
		if (aux==0)
		{
			for(c=7;c<=12;c++)
			{	
				if (ArrayEnt[c]>0) ArrayCasas[c]=1;
			}
		}
		return ArrayCasas;
	}
	/*caso em que tenho que o Jogador tem que dar peças ao adversário pois este não tem peças*/
	if ((VezEnt==1) && (SumJogador>0) && (SumComputador==0))
	{
		var aux=0;
		for(c=1;c<=6;c++)
		{	

			if (ArrayEnt[c]>(6-c)) 
			{
				ArrayCasas[c]=1;
				aux=aux+1;
			}
		}
		return ArrayCasas;
	}
   /*caso em que tenho que o Computador tem que dar peças ao adversário pois este não tem peças*/
	if ((VezEnt==2) && (SumJogador==0) && (SumComputador>0))
	{
		var aux=0;
		for(c=7;c<=12;c++)
		{	

			if (ArrayEnt[c]>(12-c)) 
			{
				ArrayCasas[c]=1;
				aux=aux+1;
			}
		}
		return ArrayCasas;
	}
	/*se os dois sum são zero retorna o Array a Zero*/
	return ArrayCasas;
}
