
		//setTimeout cama a função no tempo especificado e não chma novamente 
		//setInterval cama a função em intervalo de tempo
		var tmp; 
     function mudaCor (){
		 var obj=document.getElementById("dv1");

		 var r = Math.floor(Math.random()*255);
		 var g = Math.floor(Math.random()*255);
		 var b = Math.floor(Math.random()*255);

		 var r2 = Math.floor(Math.random()*255);
		 var g2 = Math.floor(Math.random()*255);
		 var b2 = Math.floor(Math.random()*255);

		 //obj.style.backgroundColor="rgb("+r+","+g+","+b+")";
		 obj.style.backgroundImage="linear-gradient(to top left, rgb("+r+","+g+","+b+"),rgb("+r2+","+g2+","+b2+")";
		 
		 document.getElementById("nomeCor1").innerHTML="Cor:(RGB) "+r+","+g+","+b+"";
		 document.getElementById("nomeCor2").innerHTML="Cor:(RGB) "+r2+","+g2+","+b2+"";
	 }
	     //setTimeout      setTimeout(função,tempo);
		 //var tmp = setTimeout(mudaCor,3000);

		 //setInterval 
		 function iniciar(){
			 tmp = setInterval(mudaCor,5000);
			 }

		 function parar(){ 
			 clearInterval(tmp);
			  }

		 function addEventos(){
			document.getElementById("bt1").addEventListener("click",iniciar);
		    document.getElementById("bt2").addEventListener("click",parar);			 

		 }	      
	 
	 window.addEventListener("load",addEventos);    //Chamando a funcão logo apos o carregamento da pagina 


		
