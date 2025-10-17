/* PROGRAMA C
CMC7Reco(unsigned char* numero, int filas, int columnas, char* nombre, int señalTrace, char* pathtrace, int numeroDir)
{
	numbber += 1; 
	strcpy(archivoCorriente, nombre);
	strcpy(archivotrace, pathtrace);
	haytrace = señalTrace;
	FILE* fsalida1; 
	//char ArchivoLog[200];
	char** Digito = new char* [filas];
	for (int i = 0; i < filas; i++)
	{
		Digito[i] = new char[columnas];
	}

	int h = 0;
	for (int i = 0; i < filas; i++) {
		for (int j = 0; j < columnas; j++)
		{
			Digito[i][j] = numero[h];
			h++;
		}
	}
	int salvaFilOriginal = filas;
    .
    .
    .
*/

// VALORES FIJOS

var filas = 0;
var columnas = 0;
var señalTrace = 1;
let retornoParametrosC = [];

console.log("activo");
function leerArchivo(e) {
  var archivo = e.target.files[0];
  console.log(archivo);
  /*if (!archivo) {
        return;
    }*/

  var lector = new FileReader();
  lector.onload = function (e) {
    var contenido = e.target.result;

    retornoParametrosC = generarParametrosC(contenido, filas, columnas);
    contenido = retornoParametrosC[0];
    filas = retornoParametrosC[1];
    columnas = retornoParametrosC[2];

    mostrarContenido(contenido, archivo.name, filas, columnas, señalTrace);
  };
  lector.readAsText(archivo);
}

// --------- FUNCION CREADORA DE PARAMETROS PARA EL C --------------------
function generarParametrosC(contenido, CantFilas, CantCC) {
  let elemento = document.getElementById("contenido-archivo");
  elemento.innerHTML = contenido;
  //------------------------ 2DA PARTE ------------------------------------------
  // CONTADOR DE FILAS--------------------------------------------------------------------------------------
  var Filas = contenido.split("\r\n"); // separo por el "enter"
  CantFilas = Filas.length - 1; //busco cant filas
  // ---------- elimino filas vacias -----------
  eliminofilasvacias(Filas, CantFilas);
  console.log("Cantidad de filas =>" + CantFilas); // cantidad de filas

  // PARA GUARDAR FILAS ------------------------------------------------------------------------------------------------------------------
  var wfilas = contenido.split("\r\n");

  // CONTADOR DE COLUMNAS----------------(CARACTERES DE LA 1RA FILA)----------------------------------------------------------------------------------
  var CCxFila = Filas[0]; // busco el eje X
  CantCC = CCxFila.length - 1;
  console.log("Cantidad de Columnas =>" + CantCC); // cantidad de caractéres por filas

  var tablaDretorno = new Array(2);
  tablaDretorno[0] = Filas;
  tablaDretorno[1] = CantFilas;
  tablaDretorno[2] = CantCC;
  return tablaDretorno;
} // fin función

// --------- FUNCIÓN PRINCIPAL ------------------------------------------------
function mostrarContenido(numeroOriginal,nombreArchivoTXT,filas,columnas,siOno) {
    eliminofilasvacias(numeroOriginal, filas);
    filas = numeroOriginal.length - 1 + 4;
    columnas = columnas + 4;
    if (siOno == 1) {
        console.log(numeroOriginal);
    }

  // agrego al numero 2 filas arriba y abajo llenas de 0

    let numeroConBordes = new Array(filas);
    for (var f = 0; f < filas; f++) {
        for (var o = 0; o < columnas; o++) {
            numeroConBordes[f] = new Array(columnas);
        }
    }

  //---------------------
    var fo = 0;
    for (var i = 0; i < filas; i++) {
        var filadeceros = "0";
        if (i < 2 || i > filas - 3) {
            for (var d = 0; d < columnas; d++) {
                filadeceros += "0";
            }
        numeroConBordes[i][d] = filadeceros;
        } else {
            filadeceros = "00" + numeroOriginal[fo] + "00";
            numeroConBordes[i] = filadeceros;
            fo += 1;
        }
    }
    if (siOno == 1) {
        console.log(numeroConBordes);
    }
  // agrego al numero 2 columnas a cada lado con ceros
    /*var co = 0;
    for(var i = 0; i < filas; i++){
        if(numeroConBordes[numeroConBordes[i].length -1][co] < (columnas - 1)){
            numeroConBordes[i][co] = "00" + numeroConBordes[i][co] + "00";
            co +=1;
        }
    }
    */

  //---------------------

    if (siOno == 1) {
        console.log(numeroConBordes);
    }
    filas = numeroConBordes.length - 1;
    columnas = numeroConBordes[0].length;

  // arranca proceso de recorrer el numero
    if (siOno == 1) {
        console.log(numeroConBordes);
    }

    let tablaFxC = new Array(filas);
    var f2 = 0;
    var c2 = 0;
    for (var f = 0; f <= filas; f++) {
    for (var c = 0; c <= columnas; c++) {
        tablaFxC[f2] = new Array(columnas);
        tablaFxC[f2][c2] = numeroConBordes[f][c];
        f2 += 1;
        c2 += 1;
        }
    }

    if (siOno == 1) {
        console.log(tablaFxC);
    }

  // TABLA DE MOVIMIENTO FIJO SOBRE EL NUMERO
    for (var i = 0; i < 5000; i++) {
        c1[i] = new char[4]();
        c1[i][COC1] = 0;
        c1[i][FC1] = 0;
        c1[i][RCC1] = 0;
        c1[i][CCC1] = 0;
    }
    c1 = movimientofijo(c1);

  // FIN
} // fin funcion principal

//-----------------------
function eliminofilasvacias(Filas, CantFilas) {
  for (var i = 0; i <= CantFilas; i++) {
    if (Filas[i][0] !== "1") {
      if (Filas[i][0] !== "0") {
        CantFilas = CantFilas - 1;
      }
    }
  }
  return Filas;
}

//--------------------- FUNCIONES DE TABLAS FIJAS ---------------------------------------------------------------------------------------------
function movimientofijo(tabla) {
  //c1.agregar(1000, "000002");
  tabla[1000][COC1] = 0;
  tabla[1000][FC1] = 0;
  tabla[1000][RCC1] = 0;
  tabla[1000][CCC1] = 2;
  //c1.agregar(1001, "00-110"); // corregido
  tabla[1001][COC1] = 0;
  tabla[1001][FC1] = -1;
  tabla[1001][RCC1] = 1;
  tabla[1001][CCC1] = 0;
  //c1.agregar(1002, "000002");
  tabla[1002][COC1] = 0;
  tabla[1002][FC1] = 0;
  tabla[1002][RCC1] = 0;
  tabla[1002][CCC1] = 2;
  //c1.agregar(1020, "000002");
  tabla[1020][COC1] = 0;
  tabla[1020][FC1] = 0;
  tabla[1020][RCC1] = 0;
  tabla[1020][CCC1] = 2;
  //c1.agregar(1010, "+10010");// corregido  00-110
  tabla[1010][COC1] = 1;
  tabla[1010][FC1] = 0;
  tabla[1010][RCC1] = 1;
  tabla[1010][CCC1] = 0;
  //c1.agregar(1012, "00-110");// corregido
  tabla[1012][COC1] = 0;
  tabla[1012][FC1] = -1;
  tabla[1012][RCC1] = 1;
  tabla[1012][CCC1] = 0;
  //c1.agregar(1011, "00-110");
  tabla[1011][COC1] = 0;
  tabla[1011][FC1] = -1;
  tabla[1011][RCC1] = 1;
  tabla[1011][CCC1] = 0;
  //c1.agregar(1021, "00-110");
  tabla[1021][COC1] = 0;
  tabla[1021][FC1] = -1;
  tabla[1021][RCC1] = 1;
  tabla[1021][CCC1] = 0;
  //c1.agregar(1022, "000002");
  tabla[1022][COC1] = 0;
  tabla[1022][FC1] = 0;
  tabla[1022][RCC1] = 0;
  tabla[1022][CCC1] = 2;
  //c1.agregar(1033, "000002");
  tabla[1033][COC1] = 0;
  tabla[1033][FC1] = 0;
  tabla[1033][RCC1] = 0;
  tabla[1033][CCC1] = 2;
  //c1.agregar(1100, "+10010");// corregido
  tabla[1100][COC1] = 1;
  tabla[1100][FC1] = 0;
  tabla[1100][RCC1] = 1;
  tabla[1100][CCC1] = 0;
  //c1.agregar(1101, "+1-110");
  tabla[1101][COC1] = 1;
  tabla[1101][FC1] = -1;
  tabla[1101][RCC1] = 1;
  tabla[1101][CCC1] = 0;
  //c1.agregar(1102, "+1-110");
  tabla[1102][COC1] = 1;
  tabla[1102][FC1] = -1;
  tabla[1102][RCC1] = 1;
  tabla[1102][CCC1] = 0;
  //c1.agregar(1110, "+10010");
  tabla[1110][COC1] = 1;
  tabla[1110][FC1] = 0;
  tabla[1110][RCC1] = 1;
  tabla[1110][CCC1] = 0;
  //c1.agregar(1111, "000002");
  tabla[1111][COC1] = 0;
  tabla[1111][FC1] = 0;
  tabla[1111][RCC1] = 0;
  tabla[1111][CCC1] = 2;
  //c1.agregar(1112, "000002");
  tabla[1112][COC1] = 0;
  tabla[1112][FC1] = 0;
  tabla[1112][RCC1] = 0;
  tabla[1112][CCC1] = 2;
  //c1.agregar(1120, "+10010");
  tabla[1120][COC1] = 1;
  tabla[1120][FC1] = 0;
  tabla[1120][RCC1] = 1;
  tabla[1120][CCC1] = 0;
  //c1.agregar(1121, "000002");
  tabla[1121][COC1] = 0;
  tabla[1121][FC1] = 0;
  tabla[1121][RCC1] = 0;
  tabla[1121][CCC1] = 2;
  //c1.agregar(1122, "000002");// corregido
  tabla[1122][COC1] = 0;
  tabla[1122][FC1] = 0;
  tabla[1122][RCC1] = 0;
  tabla[1122][CCC1] = 2;
  //c1.agregar(1200, "000002");
  tabla[1200][COC1] = 0;
  tabla[1200][FC1] = 0;
  tabla[1200][RCC1] = 0;
  tabla[1200][CCC1] = 2;
  //c1.agregar(1201, "+1-110");// corregido
  tabla[1201][COC1] = 1;
  tabla[1201][FC1] = -1;
  tabla[1201][RCC1] = 1;
  tabla[1201][CCC1] = 0;
  //c1.agregar(1202, "000002");
  tabla[1202][COC1] = 0;
  tabla[1202][FC1] = 0;
  tabla[1202][RCC1] = 0;
  tabla[1202][CCC1] = 2;
  //c1.agregar(1210, "+10010");// corregido
  tabla[1210][COC1] = 1;
  tabla[1210][FC1] = 0;
  tabla[1210][RCC1] = 1;
  tabla[1210][CCC1] = 0;
  //c1.agregar(1211, "000002");
  tabla[1211][COC1] = 0;
  tabla[1211][FC1] = 0;
  tabla[1211][RCC1] = 0;
  tabla[1211][CCC1] = 2;
  //c1.agregar(1212, "000002");
  tabla[1212][COC1] = 0;
  tabla[1212][FC1] = 0;
  tabla[1212][RCC1] = 0;
  tabla[1212][CCC1] = 2;
  //c1.agregar(1220, "000002");
  tabla[1220][COC1] = 0;
  tabla[1220][FC1] = 0;
  tabla[1220][RCC1] = 0;
  tabla[1220][CCC1] = 2;
  //c1.agregar(1221, "000002");// corregido
  tabla[1221][COC1] = 0;
  tabla[1221][FC1] = 0;
  tabla[1221][RCC1] = 0;
  tabla[1221][CCC1] = 2;
  //c1.agregar(1222, "000002");
  tabla[1222][COC1] = 0;
  tabla[1222][FC1] = 0;
  tabla[1222][RCC1] = 0;
  tabla[1222][CCC1] = 2;
  //c1.agregar(1233, "000002");
  tabla[1233][COC1] = 0;
  tabla[1233][FC1] = 0;
  tabla[1233][RCC1] = 0;
  tabla[1233][CCC1] = 2;
  //c1.agregar(1133, "000002");
  tabla[1133][COC1] = 0;
  tabla[1133][FC1] = 0;
  tabla[1133][RCC1] = 0;
  tabla[1133][CCC1] = 2;
  //------------ C U A D R A N T E 2 --------------------------------------------------------------
  //c1.agregar(2000, "000003");
  tabla[2000][COC1] = 0;
  tabla[2000][FC1] = 0;
  tabla[2000][RCC1] = 0;
  tabla[2000][CCC1] = 3;
  //c1.agregar(2001, "+10010");// corregido
  tabla[2001][COC1] = 1;
  tabla[2001][FC1] = 0;
  tabla[2001][RCC1] = 1;
  tabla[2001][CCC1] = 0;
  //c1.agregar(2002, "000003");
  tabla[2002][COC1] = 0;
  tabla[2002][FC1] = 0;
  tabla[2002][RCC1] = 0;
  tabla[2002][CCC1] = 3;
  //c1.agregar(2020, "000003");
  tabla[2020][COC1] = 0;
  tabla[2020][FC1] = 0;
  tabla[2020][RCC1] = 0;
  tabla[2020][CCC1] = 3;
  //c1.agregar(2010, "00+110");// corregido +10010
  tabla[2010][COC1] = 0;
  tabla[2010][FC1] = 1;
  tabla[2010][RCC1] = 1;
  tabla[2010][CCC1] = 0;
  //c1.agregar(2012, "+10010");// corregido
  tabla[2012][COC1] = 1;
  tabla[2012][FC1] = 0;
  tabla[2012][RCC1] = 1;
  tabla[2012][CCC1] = 0;
  //c1.agregar(2011, "+10010");
  tabla[2011][COC1] = 1;
  tabla[2011][FC1] = 0;
  tabla[2011][RCC1] = 1;
  tabla[2011][CCC1] = 0;
  //c1.agregar(2021, "+10010");
  tabla[2021][COC1] = 1;
  tabla[2021][FC1] = 0;
  tabla[2021][RCC1] = 1;
  tabla[2021][CCC1] = 0;
  //c1.agregar(2022, "000003");
  tabla[2022][COC1] = 0;
  tabla[2022][FC1] = 0;
  tabla[2022][RCC1] = 0;
  tabla[2022][CCC1] = 3;
  //c1.agregar(2100, "00+110");// corregido
  tabla[2100][COC1] = 0;
  tabla[2100][FC1] = 1;
  tabla[2100][RCC1] = 1;
  tabla[2100][CCC1] = 0;
  //c1.agregar(2101, "+1+110");
  tabla[2101][COC1] = 1;
  tabla[2101][FC1] = 1;
  tabla[2101][RCC1] = 1;
  tabla[2101][CCC1] = 0;
  //c1.agregar(2102, "+1+110");
  tabla[2102][COC1] = 1;
  tabla[2102][FC1] = 1;
  tabla[2102][RCC1] = 1;
  tabla[2102][CCC1] = 0;
  //c1.agregar(2110, "00+110");
  tabla[2110][COC1] = 0;
  tabla[2110][FC1] = 1;
  tabla[2110][RCC1] = 1;
  tabla[2110][CCC1] = 0;
  //c1.agregar(2111, "000003");
  tabla[2111][COC1] = 0;
  tabla[2111][FC1] = 0;
  tabla[2111][RCC1] = 0;
  tabla[2111][CCC1] = 3;
  //c1.agregar(2112, "000003");
  tabla[2112][COC1] = 0;
  tabla[2112][FC1] = 0;
  tabla[2112][RCC1] = 0;
  tabla[2112][CCC1] = 3;
  //c1.agregar(2120, "00+110");
  tabla[2120][COC1] = 0;
  tabla[2120][FC1] = 1;
  tabla[2120][RCC1] = 1;
  tabla[2120][CCC1] = 0;
  //c1.agregar(2121, "000003");
  tabla[2121][COC1] = 0;
  tabla[2121][FC1] = 0;
  tabla[2121][RCC1] = 0;
  tabla[2121][CCC1] = 3;
  //c1.agregar(2122, "000003");// corregido
  tabla[2122][COC1] = 0;
  tabla[2122][FC1] = 0;
  tabla[2122][RCC1] = 0;
  tabla[2122][CCC1] = 3;
  //c1.agregar(2200, "000003");
  tabla[2200][COC1] = 0;
  tabla[2200][FC1] = 0;
  tabla[2200][RCC1] = 0;
  tabla[2200][CCC1] = 3;
  //c1.agregar(2201, "+1+110");// corregido
  tabla[2201][COC1] = 1;
  tabla[2201][FC1] = 1;
  tabla[2201][RCC1] = 1;
  tabla[2201][CCC1] = 0;
  //c1.agregar(2202, "000003");
  tabla[2202][COC1] = 0;
  tabla[2202][FC1] = 0;
  tabla[2202][RCC1] = 0;
  tabla[2202][CCC1] = 3;
  //c1.agregar(2210, "00+110");// corregido
  tabla[2210][COC1] = 0;
  tabla[2210][FC1] = 1;
  tabla[2210][RCC1] = 1;
  tabla[2210][CCC1] = 0;
  //c1.agregar(2211, "000003");
  tabla[2211][COC1] = 0;
  tabla[2211][FC1] = 0;
  tabla[2211][RCC1] = 0;
  tabla[2211][CCC1] = 3;
  //c1.agregar(2212, "000003");
  tabla[2212][COC1] = 0;
  tabla[2212][FC1] = 0;
  tabla[2212][RCC1] = 0;
  tabla[2212][CCC1] = 3;
  //c1.agregar(2220, "000003");
  tabla[2220][COC1] = 0;
  tabla[2220][FC1] = 0;
  tabla[2220][RCC1] = 0;
  tabla[2220][CCC1] = 3;
  //c1.agregar(2221, "000003");// corregido
  tabla[2221][COC1] = 0;
  tabla[2221][FC1] = 0;
  tabla[2221][RCC1] = 0;
  tabla[2221][CCC1] = 3;
  //c1.agregar(2222, "000003");
  tabla[2222][COC1] = 0;
  tabla[2222][FC1] = 0;
  tabla[2222][RCC1] = 0;
  tabla[2222][CCC1] = 3;
  //c1.agregar(2330, "000003");
  tabla[2330][COC1] = 0;
  tabla[2330][FC1] = 0;
  tabla[2330][RCC1] = 0;
  tabla[2330][CCC1] = 3;
  //------------ C U A D R A N T E 3 --------------------------------------------------------------
  //c1.agregar(3000, "000004");
  tabla[3000][COC1] = 0;
  tabla[3000][FC1] = 0;
  tabla[3000][RCC1] = 0;
  tabla[3000][CCC1] = 4;
  //c1.agregar(3001, "00+110");// corregido
  tabla[3001][COC1] = 0;
  tabla[3001][FC1] = 1;
  tabla[3001][RCC1] = 1;
  tabla[3001][CCC1] = 0;
  //c1.agregar(3002, "000004");
  tabla[3002][COC1] = 0;
  tabla[3002][FC1] = 0;
  tabla[3002][RCC1] = 0;
  tabla[3002][CCC1] = 4;
  //c1.agregar(3020, "000004");
  tabla[3020][COC1] = 0;
  tabla[3020][FC1] = 0;
  tabla[3020][RCC1] = 0;
  tabla[3020][CCC1] = 4;
  //c1.agregar(3010, "-10010");// corregido  00+110
  tabla[3010][COC1] = -1;
  tabla[3010][FC1] = 0;
  tabla[3010][RCC1] = 1;
  tabla[3010][CCC1] = 0;
  //c1.agregar(3012, "00+110");// corregido
  tabla[3012][COC1] = 0;
  tabla[3012][FC1] = 1;
  tabla[3012][RCC1] = 1;
  tabla[3012][CCC1] = 0;
  //c1.agregar(3011, "00+110");
  tabla[3011][COC1] = 0;
  tabla[3011][FC1] = 1;
  tabla[3011][RCC1] = 1;
  tabla[3011][CCC1] = 0;
  //c1.agregar(3021, "00+110");
  tabla[3021][COC1] = 0;
  tabla[3021][FC1] = 1;
  tabla[3021][RCC1] = 1;
  tabla[3021][CCC1] = 0;
  //c1.agregar(3022, "000004");
  tabla[3022][COC1] = 0;
  tabla[3022][FC1] = 0;
  tabla[3022][RCC1] = 0;
  tabla[3022][CCC1] = 4;
  //c1.agregar(3100, "-10010");// corregido
  tabla[3100][COC1] = -1;
  tabla[3100][FC1] = 0;
  tabla[3100][RCC1] = 1;
  tabla[3100][CCC1] = 0;
  //c1.agregar(3101, "-1+110");
  tabla[3101][COC1] = -1;
  tabla[3101][FC1] = 1;
  tabla[3101][RCC1] = 1;
  tabla[3101][CCC1] = 0;
  //c1.agregar(3102, "-1+110");
  tabla[3102][COC1] = -1;
  tabla[3102][FC1] = 1;
  tabla[3102][RCC1] = 1;
  tabla[3102][CCC1] = 0;
  //c1.agregar(3110, "-10010");
  tabla[3110][COC1] = -1;
  tabla[3110][FC1] = 0;
  tabla[3110][RCC1] = 1;
  tabla[3110][CCC1] = 0;
  //c1.agregar(3111, "000004");
  tabla[3111][COC1] = 0;
  tabla[3111][FC1] = 0;
  tabla[3111][RCC1] = 0;
  tabla[3111][CCC1] = 4;
  //c1.agregar(3112, "000004");
  tabla[3112][COC1] = 0;
  tabla[3112][FC1] = 0;
  tabla[3112][RCC1] = 0;
  tabla[3112][CCC1] = 4;
  //c1.agregar(3120, "-10010");
  tabla[3120][COC1] = -1;
  tabla[3120][FC1] = 0;
  tabla[3120][RCC1] = 1;
  tabla[3120][CCC1] = 0;
  //c1.agregar(3121, "000004");
  tabla[3121][COC1] = 0;
  tabla[3121][FC1] = 0;
  tabla[3121][RCC1] = 0;
  tabla[3121][CCC1] = 4;
  //c1.agregar(3122, "000004");// corregido
  tabla[3122][COC1] = 0;
  tabla[3122][FC1] = 0;
  tabla[3122][RCC1] = 0;
  tabla[3122][CCC1] = 4;
  //c1.agregar(3200, "000004");// corregido
  tabla[3200][COC1] = 0;
  tabla[3200][FC1] = 0;
  tabla[3200][RCC1] = 0;
  tabla[3200][CCC1] = 4;
  //c1.agregar(3201, "-1+110");// corregido
  tabla[3201][COC1] = -1;
  tabla[3201][FC1] = 1;
  tabla[3201][RCC1] = 1;
  tabla[3201][CCC1] = 0;
  //c1.agregar(3202, "000004");
  tabla[3202][COC1] = 0;
  tabla[3202][FC1] = 0;
  tabla[3202][RCC1] = 0;
  tabla[3202][CCC1] = 4;
  //c1.agregar(3210, "-10010");// corregido
  tabla[3210][COC1] = -1;
  tabla[3210][FC1] = 0;
  tabla[3210][RCC1] = 1;
  tabla[3210][CCC1] = 0;
  //c1.agregar(3211, "000004");
  tabla[3211][COC1] = 0;
  tabla[3211][FC1] = 0;
  tabla[3211][RCC1] = 0;
  tabla[3211][CCC1] = 4;
  //c1.agregar(3212, "000004");
  tabla[3212][COC1] = 0;
  tabla[3212][FC1] = 0;
  tabla[3212][RCC1] = 0;
  tabla[3212][CCC1] = 4;
  //c1.agregar(3220, "000004");
  tabla[3220][COC1] = 0;
  tabla[3220][FC1] = 0;
  tabla[3220][RCC1] = 0;
  tabla[3220][CCC1] = 4;
  //c1.agregar(3221, "000004");// corregido
  tabla[3221][COC1] = 0;
  tabla[3221][FC1] = 0;
  tabla[3221][RCC1] = 0;
  tabla[3221][CCC1] = 4;
  //c1.agregar(3222, "000004");
  tabla[3222][COC1] = 0;
  tabla[3222][FC1] = 0;
  tabla[3222][RCC1] = 0;
  tabla[3222][CCC1] = 4;
  //------------ C U A D R A N T E 4 --------------------------------------------------------------
  //c1.agregar(4000, "000001");
  tabla[4000][COC1] = 0;
  tabla[4000][FC1] = 0;
  tabla[4000][RCC1] = 0;
  tabla[4000][CCC1] = 1;
  //c1.agregar(4001, "-10010");// corregido
  tabla[4001][COC1] = -1;
  tabla[4001][FC1] = 0;
  tabla[4001][RCC1] = 1;
  tabla[4001][CCC1] = 0;
  //c1.agregar(4002, "000001");
  tabla[4002][COC1] = 0;
  tabla[4002][FC1] = 0;
  tabla[4002][RCC1] = 0;
  tabla[4002][CCC1] = 1;
  //c1.agregar(4010, "00-110");// corregido  -10010
  tabla[4010][COC1] = 0;
  tabla[4010][FC1] = -1;
  tabla[4010][RCC1] = 1;
  tabla[4010][CCC1] = 0;
  //c1.agregar(4012, "-10010");// corregido
  tabla[4012][COC1] = -1;
  tabla[4012][FC1] = 0;
  tabla[4012][RCC1] = 1;
  tabla[4012][CCC1] = 0;
  //c1.agregar(4011, "-10010");
  tabla[4011][COC1] = -1;
  tabla[4011][FC1] = 0;
  tabla[4011][RCC1] = 1;
  tabla[4011][CCC1] = 0;
  //c1.agregar(4020, "000001");
  tabla[4020][COC1] = 0;
  tabla[4020][FC1] = 0;
  tabla[4020][RCC1] = 0;
  tabla[4020][CCC1] = 1;
  //c1.agregar(4021, "-10010");
  tabla[4021][COC1] = -1;
  tabla[4021][FC1] = 0;
  tabla[4021][RCC1] = 1;
  tabla[4021][CCC1] = 0;
  //c1.agregar(4022, "000001");
  tabla[4022][COC1] = 0;
  tabla[4022][FC1] = 0;
  tabla[4022][RCC1] = 0;
  tabla[4022][CCC1] = 1;
  //c1.agregar(4100, "00-110");// corregido
  tabla[4100][COC1] = 0;
  tabla[4100][FC1] = -1;
  tabla[4100][RCC1] = 1;
  tabla[4100][CCC1] = 0;
  //c1.agregar(4101, "-1-110");
  tabla[4101][COC1] = -1;
  tabla[4101][FC1] = -1;
  tabla[4101][RCC1] = 1;
  tabla[4101][CCC1] = 0;
  //c1.agregar(4102, "-1-110");
  tabla[4102][COC1] = -1;
  tabla[4102][FC1] = -1;
  tabla[4102][RCC1] = 1;
  tabla[4102][CCC1] = 0;
  //c1.agregar(4110, "00-110");
  tabla[4110][COC1] = 0;
  tabla[4110][FC1] = -1;
  tabla[4110][RCC1] = 1;
  tabla[4110][CCC1] = 0;
  //c1.agregar(4111, "000001");
  tabla[4111][COC1] = 0;
  tabla[4111][FC1] = 0;
  tabla[4111][RCC1] = 0;
  tabla[4111][CCC1] = 1;
  //c1.agregar(4112, "000001");
  tabla[4112][COC1] = 0;
  tabla[4112][FC1] = 0;
  tabla[4112][RCC1] = 0;
  tabla[4112][CCC1] = 1;
  //c1.agregar(4120, "00-110");
  tabla[4120][COC1] = 0;
  tabla[4120][FC1] = -1;
  tabla[4120][RCC1] = 1;
  tabla[4120][CCC1] = 0;
  //c1.agregar(4121, "000001");
  tabla[4121][COC1] = 0;
  tabla[4121][FC1] = 0;
  tabla[4121][RCC1] = 0;
  tabla[4121][CCC1] = 1;
  //c1.agregar(4122, "000001");// corregido
  tabla[4122][COC1] = 0;
  tabla[4122][FC1] = 0;
  tabla[4122][RCC1] = 0;
  tabla[4122][CCC1] = 1;
  //c1.agregar(4200, "000001");
  tabla[4200][COC1] = 0;
  tabla[4200][FC1] = 0;
  tabla[4200][RCC1] = 0;
  tabla[4200][CCC1] = 1;
  //c1.agregar(4201, "-1-110");// corregido
  tabla[4201][COC1] = -1;
  tabla[4201][FC1] = -1;
  tabla[4201][RCC1] = 1;
  tabla[4201][CCC1] = 0;
  //c1.agregar(4202, "000001");
  tabla[4202][COC1] = 0;
  tabla[4202][FC1] = 0;
  tabla[4202][RCC1] = 0;
  tabla[4202][CCC1] = 1;
  //c1.agregar(4210, "00-110");// corregido
  tabla[4210][COC1] = 0;
  tabla[4210][FC1] = -1;
  tabla[4210][RCC1] = 1;
  tabla[4210][CCC1] = 0;
  //c1.agregar(4211, "000001");
  tabla[4211][COC1] = 0;
  tabla[4211][FC1] = 0;
  tabla[4211][RCC1] = 0;
  tabla[4211][CCC1] = 1;
  //c1.agregar(4212, "000001");
  tabla[4212][COC1] = 0;
  tabla[4212][FC1] = 0;
  tabla[4212][RCC1] = 0;
  tabla[4212][CCC1] = 1;
  //c1.agregar(4220, "000001");
  tabla[4220][COC1] = 0;
  tabla[4220][FC1] = 0;
  tabla[4220][RCC1] = 0;
  tabla[4220][CCC1] = 1;
  //c1.agregar(4221, "000001");// corregido
  tabla[4221][COC1] = 0;
  tabla[4221][FC1] = 0;
  tabla[4221][RCC1] = 0;
  tabla[4221][CCC1] = 1;
  //c1.agregar(4222, "000001");
  tabla[4222][COC1] = 0;
  tabla[4222][FC1] = 0;
  tabla[4222][RCC1] = 0;
  tabla[4222][CCC1] = 1;
  return tabla;
} //-------------------------------------------

//-----------------------------------------------------------------------
// SE MUESTRA EL CONTENIDO DEL TXT EN EL <pre>
//----------------------- 3RA PARTE -----------------------------------------
document
  .getElementById("file-input")
  .addEventListener("change", leerArchivo, true);
