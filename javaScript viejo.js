console.log("activo");
console.log("RELLENO PRIMERO");
// SELECCIÓN DE UN ARCHIVO TXT
var tablaLimites1 = new Array()
for (var x = 0; x <= 360; x++) {
  tablaLimites1[x] = new Array(15)
  tablaLimites1[x][0] = 0; // num
  tablaLimites1[x][1] = 0; // carac
  tablaLimites1[x][2] = 0; // zona
  tablaLimites1[x][3] = 0; // curva inicio
  tablaLimites1[x][4] = 0; // curva final
  tablaLimites1[x][5] = 0; // menores
  tablaLimites1[x][6] = 0; // cam inicio
  tablaLimites1[x][7] = 0; // cam final
  tablaLimites1[x][8] = 0; // menores 2
  tablaLimites1[x][9] = 0; // ac
  tablaLimites1[x][10] = 0; // obligatorio
  tablaLimites1[x][11] = 0; // ubicacion
  tablaLimites1[x][12] = 0; // tamaño
  tablaLimites1[x][13] = 0; // total
  tablaLimites1[x][14] = 0; // n/r
};

var tablaNumero1 = new Array()
for (var x = 0; x < 36; x++) {
  tablaNumero1[x] = new Array(10)
  tablaNumero1[x][0] = 0; // carac
  tablaNumero1[x][1] = 0; // zona
  tablaNumero1[x][2] = 0; // porcentaje
};
/*------------------------ 1RA PARTE ---------------------------------
function leerArchivoconcen(e) {
  var archivo222 = e.target.files[0];
  console.log(archivo222);
  if (!archivo222) {
    return;
  }
  var lector222 = new FileReader();
  lector222.onload = function (e) {
    var contenido222 = e.target.result;
    mostrarContenidoconcen(contenido222, archivo222.name, tablaLimites1);
  };
  lector222.readAsText(archivo222);
  // console.log(tablaLimites1)
};
//--------------------------------------------------------------------
//  FUNCIÓN INTEGRADORA DE LAS MATRICES Y CREACIÓN DE LOS EJES
function mostrarContenidoconcen(contenido2, archivo2, tablaLimites) {
  var elemento2 = document.getElementById("contenido-archivoconcentracion");
  elemento2.innerHTML = contenido2;
  // CONTADOR DE FILAS--------------------------------------------------------------------------------------
  var Filas2 = contenido2.split("\r\n"); // separo por el "enter"
  var CantFilas2 = Filas2.length - 1; //busco cant filas
  //  console.log("Cantidad de filas concen =>" + CantFilas2); // cantidad de filas
  // PARA GUARDAR FILAS ------------------------------------------------------------------------------------------------------------------
  var wfilas2 = contenido2.split("\r\n");
  // CONTADOR DE COLUMNAS----------------(CARACTERES DE LA 1RA FILA)----------------------------------------------------------------------------------
  var CCxFila2 = Filas2[0]; // busco el eje X
  var CantCC2 = CCxFila2.length - 1;
  //  console.log("Cantidad de Columnas concen =>" + CantCC2); // cantidad de caractéres por filas
  var fila;
  var m = 0;
  console.log(Filas2)
  // for (var m = 0; m <= CantFilas2; m++) {
  //for (var xd = 0; xd < 10; xd++) {
  for (var xl = 0; xl < 360; xl++) {
    fila = Filas2[xl];
    console.log(fila);
    tablaLimites1[xl][0] = fila.substring(1, 3);
    tablaLimites1[xl][1] = fila.substring(4, 6);
    tablaLimites1[xl][2] = fila.substring(7, 9);
    tablaLimites1[xl][3] = fila.substring(10, 12);
    tablaLimites1[xl][4] = fila.substring(13, 15);
    tablaLimites1[xl][5] = fila.substring(16, 18);
    tablaLimites1[xl][6] = fila.substring(19, 21);
    tablaLimites1[xl][7] = fila.substring(22, 24);
    tablaLimites1[xl][8] = fila.substring(25, 27);
    tablaLimites1[xl][9] = fila.substring(28, 30); // ac
    tablaLimites1[xl][10] = fila.substring(31, 33); // obligatorio
    tablaLimites1[xl][11] = fila.substring(34, 36); // ubicacion
    tablaLimites1[xl][12] = fila.substring(37, 39); // tamaño
    tablaLimites1[xl][13] = fila.substring(40, 42); // total
    tablaLimites1[xl][14] = "\r\n";
  };
  console.log(' tabla limites ');
  console.log(tablaLimites);
  return tablaLimites;
};

//----------------------- 3RA PARTE -----------------------------------------
document
  .getElementById("file-inputconcentracion")
  .addEventListener("change", leerArchivoconcen, true);
*/
//------------------------ 1RA PARTE ---------------------------------
function leerArchivo(e) {
  var archivo = e.target.files[0];
  console.log(archivo);
  if (!archivo) {
    return;
  }
  var lector = new FileReader();
  lector.onload = function (e) {
    var contenido = e.target.result;
    mostrarContenido(contenido, archivo.name, tablaLimites1, tablaNumero1);
  };
  lector.readAsText(archivo);
};

//------------------------ 1RA PARTE ---------------------------------


//  FUNCIÓN INTEGRADORA DE LAS MATRICES Y CREACIÓN DE LOS EJES
function mostrarContenido(contenido, archivo1, tablaLimites1, tablaNumero1) {
  let elemento = document.getElementById("contenido-archivo");
  elemento.innerHTML = contenido;
  //------------------------ 2DA PARTE ------------------------------------------
  // CONTADOR DE FILAS--------------------------------------------------------------------------------------
  var Filas = contenido.split("\r\n"); // separo por el "enter"
  var CantFilas = Filas.length - 1; //busco cant filas
  console.log("Cantidad de filas =>" + CantFilas); // cantidad de filas
  // PARA GUARDAR FILAS ------------------------------------------------------------------------------------------------------------------
  var wfilas = contenido.split("\r\n");
  // CONTADOR DE COLUMNAS----------------(CARACTERES DE LA 1RA FILA)----------------------------------------------------------------------------------
  var CCxFila = Filas[0]; // busco el eje X
  var CantCC = CCxFila.length - 1;
  console.log("Cantidad de Columnas =>" + CantCC); // cantidad de caractéres por filas
  // PARA LA + DE 1 Y 0 - SIN SEPARAR POR SPLIT-------------------------------------------------------------------------------------
  var unos = 0;
  var ceros = 0;
  // SUMA DE 1 Y 0, SIN SEPARACIÓN DE FILAS NI COLUMNAS
  for (var i = 0; i <= CantFilas; i++) {
    for (var x = 0; x <= CantCC; x++) {
      if (Filas[i][x] == "1") {
        unos = unos + 1;
      } else if (Filas[i][x] == "0") {
        ceros = ceros + 1;
      } else {
        CantFilas = CantFilas - 1;
        break;
      };
    };
  };

  // ---INICIALIZACIÓN DEL HISTOGRAMA------------------------------------------------------------------------------------------------------------------------------
  var HistHorizontal = new Array();
  for (var Y = 0; Y <= CantFilas; Y++) {
    HistHorizontal[Y] = new Array(2);
    HistHorizontal[Y][0] = 0;
    HistHorizontal[Y][1] = 0;
  };
  var HistVertical = new Array();
  for (var Y = 0; Y <= CantCC; Y++) {
    HistVertical[Y] = new Array(2);
    HistVertical[Y][0] = 0;
    HistVertical[Y][1] = 0;
  };
  // -HISTOGRAMA X EJE X ------------------(FILAS)------------------------------
  var retorno
  retorno = Histograma(Filas, CantCC, CantFilas, HistHorizontal)
  HistHorizontal.forEach(function (HistHorizontal, index) {
    // RECORRE FILA X FILA Y ME DICE EL VALOR SEGÚN LA FILA
    console.log("Fila " + `${index} : ${HistHorizontal}`);
  });
  retorno = HistogramaV(Filas, CantCC, CantFilas, HistVertical)
  HistVertical.forEach(function (HistVertical, index) {
    // RECORRE COLUMNA X COLUMNA Y ME DICE EL VALOR SEGÚN LA FILA
    console.log("Columna " + `${index} : ${HistVertical}`);
  })
  //-----------------------------
  //-----------MOVEMOS FILAS A WFILAS-----------------------------------------------------------------------------
  //console.log("Cant filas 4   " + CantFilas)
  X = 0;
  var divido3filas = (Math.trunc(CantFilas / 3))
  var filasdelfinal = (CantFilas - divido3filas);
  var MuchasFilas = ((CantCC * 2) - 4);
  var restar = 0;
  console.log(CantCC)
  console.log(CantFilas)
  if (CantFilas >= MuchasFilas) {
    for (var Y = 0; Y <= CantFilas; Y++) {
      if ((HistHorizontal[Y][1] <= 6) && (Y == salvaFil)
        || (HistHorizontal[Y][1] <= 6) && (Y == (salvaFil - 1))) {
        CantFilas = CantFilas - 1;
      } else if ((HistHorizontal[Y][1] <= 3) && (Y > filasdelfinal)) {
        CantFilas = Y;
        break;
      }
      else if ((HistHorizontal[Y][1] <= 3) && (Y < divido3filas)) {
        restar = restar + 1;
      }
      else if (HistHorizontal[Y][1] == 0) {
        restar = restar + 1;
      }
      else {
        wfilas2[X] = wfilas1[Y];
        X = X + 1;
      };
    };
    CantFilas = CantFilas - restar;
  } else {
    for (var Y = 0; Y <= CantFilas; Y++) {
      if ((HistHorizontal[Y][1] <= 6) && (Y == CantFilas)
        || (HistHorizontal[Y][1] <= 6) && (Y == (CantFilas - 1))) {
        CantFilas = CantFilas - 1;
      } else if ((HistHorizontal[Y][1] < 3 && Y < divido3filas) ||
        (HistHorizontal[Y][1] < 3 && Y > filasdelfinal)) {
      } else if (X == 0) {
        wfilas2[X] = wfilas1[Y];
        X = X + 1;
      } else if (X < CantFilas) {
        wfilas2[X] = wfilas1[Y];
        X = X + 1;
      } else if (X == CantFilas) {
        wfilas2[X] = wfilas1[Y];
        X = X + 1;
      };
    };
  }
  console.log(wfilas2)
  var nuevaCantidadFilas = (wfilas2.length) - 1;
  var nuevasFil2 = [];
  nuevasFil2 = (correccionMASpecas1(wfilas2, nuevaCantidadFilas, CantCC))
  wfilas2 = nuevasFil2;
  console.log(nuevasFil2)
  var nuevasFilaFC = [];
  nuevasFilaFC = (correccionMASpecasFinalCom(wfilas2, nuevaCantidadFilas, CantCC))
  // ------------ FUNCIÓN CORRECCION DE MAS PECAS 5CL X 3FL ---------------------------------------------
  function correccionMASpecasFinalCom(fila2vieja, ffilas, ccolumnas) {
    var cantidadf0 = 0;
    var cantidadf1 = 0;
    var cantidadf2 = 0;
    var totalCantfilas = 0;
    var filaCambiar = '';
    var filaAgregar = '';
    var cm = (ccolumnas - 2);
    for (var fa = 1; fa <= (ffilas - 1); fa++) {
      totalCantfilas = 0;
      // sumo la primera fila
      cantidadf0 = Number(fila2vieja[fa - 1][cm - 2]) + Number(fila2vieja[fa - 1][cm - 1]) + Number(fila2vieja[fa - 1][cm]) + Number(fila2vieja[fa - 1][cm + 1]) + + Number(fila2vieja[fa - 1][cm + 2]);
      cantidadf1 = Number(fila2vieja[fa][cm - 2]) + Number(fila2vieja[fa][cm - 1]) + Number(fila2vieja[fa][cm]) + Number(fila2vieja[fa][cm + 1]) + Number(fila2vieja[fa][cm + 2]);
      cantidadf2 = Number(fila2vieja[fa + 1][cm - 2]) + Number(fila2vieja[fa + 1][cm - 1]) + Number(fila2vieja[fa + 1][cm]) + Number(fila2vieja[fa + 1][cm + 1]) + Number(fila2vieja[fa + 1][cm + 2]);
      if (cantidadf1 < 3) {
        totalCantfilas = cantidadf2 + cantidadf1 + cantidadf0;
      }
      if ((totalCantfilas < 3) && (totalCantfilas > 0)) {
        filaCambiar = fila2vieja[fa];
        console.log(cm)
        filaAgregar = filaCambiar.substring(0, cm - 1) + "0" + "0" + "0" + "0";
        console.log(filaAgregar)
        fila2vieja[fa] = filaAgregar;
        cantidadf0 = 0;
        cantidadf1 = 0;
        cantidadf2 = 0;
      }
    }
    filaCambiar = '';
    filaAgregar = '';
    totalCantfilas = 0;
    cantidadf0 = 0;
    cantidadf1 = 0;
    cantidadf2 = 0;
    var cm = 2;
    for (var fa = 1; fa <= (ffilas - 1); fa++) {
      totalCantfilas = 0;
      // sumo la primera fila
      cantidadf0 = Number(fila2vieja[fa - 1][cm - 2]) + Number(fila2vieja[fa - 1][cm - 1]) + Number(fila2vieja[fa - 1][cm]) + Number(fila2vieja[fa - 1][cm + 1]) + + Number(fila2vieja[fa - 1][cm + 2]);
      cantidadf1 = Number(fila2vieja[fa][cm - 2]) + Number(fila2vieja[fa][cm - 1]) + Number(fila2vieja[fa][cm]) + Number(fila2vieja[fa][cm + 1]) + Number(fila2vieja[fa][cm + 2]);
      cantidadf2 = Number(fila2vieja[fa + 1][cm - 2]) + Number(fila2vieja[fa + 1][cm - 1]) + Number(fila2vieja[fa + 1][cm]) + Number(fila2vieja[fa + 1][cm + 1]) + Number(fila2vieja[fa + 1][cm + 2]);
      if (cantidadf1 < 3) {
        totalCantfilas = cantidadf2 + cantidadf1 + cantidadf0;
      }
      if ((totalCantfilas < 3) && (totalCantfilas > 0)) {
        filaCambiar = fila2vieja[fa];
        filaAgregar = "0" + "0" + "0" + "0" + filaCambiar.substring(cm + 2);
        fila2vieja[fa] = filaAgregar;
        cantidadf0 = 0;
        cantidadf1 = 0;
        cantidadf2 = 0;
      }
    }
    return fila2vieja;
  } // fin de funcion correccion de MAS pecas al comienzo y final
  wfilas2 = nuevasFilaFC;
  //------------RECONOCIMIENTO DE 10001-----------------------------
  var filas2 = [];
  for (var Y = 0; Y <= nuevaCantidadFilas; Y++) {
    filas2[Y] = wfilas2[Y];
  };
  var cero = "";
  for (var Y = (nuevaCantidadFilas + 1); Y <= CantFilas; Y++) {
    filas2[Y] = cero;
  };
  var salvarX = 0;
  var subX = 0;
  var UNAfila;
  var dividofilascorrige = Math.trunc(nuevaCantidadFilas / 3);
  var ultimaparte = Math.trunc(nuevaCantidadFilas - dividofilascorrige);
  console.log(wfilas2)
  console.log(nuevaCantidadFilas)
  var guardoFila;
  // ---------------------RELLENO DE  0 0---------------------------
  for (var Y = 0; Y <= nuevaCantidadFilas; Y++) {
    for (var X = 0; X <= CantCC; X++) {
      //  if (Y <= dividofilascorrige || Y >= ultimaparte) {
      if (wfilas2[Y] !== "") {
        if (X == 0) {
          if (wfilas2[Y][X] == '0') {
            if (wfilas2[Y][X + 1] == '1') {// rellena 1 01 
              UNAfila = "1" + (wfilas2[Y].substring(1));
              guardoFila = Y;
              filas2[Y] = UNAfila;
            };
            if (wfilas2[Y][X + 2] == '1' && wfilas2[Y][X + 1] == '0') {// rellena 2 001
              UNAfila = "1" + "1" + (wfilas2[Y].substring((X + 2)));
              filas2[Y] = UNAfila;
              guardoFila = Y;
            };
          };
        } else if (X == (CantCC)) {  // rellena 110
          if (wfilas2[Y][X] == '0') {
            if (wfilas2[Y][X - 2] == '1') {
              if (wfilas2[Y][X - 1] == '1') {
                if (guardoFila == Y) {
                  UNAfila = (filas2[Y].substring(0, (X))) + "1";
                } else {
                  UNAfila = (wfilas2[Y].substring(0, (X))) + "1";
                }
                filas2[Y] = UNAfila;
              } else if (wfilas2[Y][X - 3] == '1') {
                if (guardoFila == Y) {
                  UNAfila = (filas2[Y].substring(0, (X - 1))) + "1" + "1";
                } else {
                  UNAfila = (wfilas2[Y].substring(0, (X - 1))) + "1" + "1";
                }
                filas2[Y] = UNAfila;
              };
            };
            //    };
          };
        }
      };
    };
  }
  console.log(filas2)
  for (var Y = 0; Y <= nuevaCantidadFilas; Y++) {
    for (var X = 0; X <= CantCC; X++) {
      // PRIMER 1
      if (filas2[Y][X] == 1) {
        subX = X;
        salvarX = X;
        subX = subX + 1;
        // CORRECCIÓN DE 4 CEROS
        if (subX + 4 <= CantCC) {
          if (filas2[Y][subX] == 0) {
            if (filas2[Y][subX + 1] == 0) {
              if (filas2[Y][subX + 2] == 0) {
                if (filas2[Y][subX + 3] == 0) {
                  if (filas2[Y][subX + 4] == 1) {
                    salvarX = salvarX + 1;
                    UNAfila =
                      filas2[Y].substring(0, salvarX) +
                      "1" +
                      "1" +
                      "1" +
                      "1" +
                      filas2[Y].substring(salvarX + 4);
                    filas2[Y] = UNAfila;
                  };
                };
              };
            };
          };
        };
        //CORRECCIÓN DE 3 CERO
        if (subX + 3 <= CantCC) {
          if (filas2[Y][subX] == 0) {
            if (filas2[Y][subX + 1] == 0) {
              if (filas2[Y][subX + 2] == 0) {
                if (filas2[Y][subX + 3] == 1) {
                  salvarX = salvarX + 1;
                  UNAfila =
                    filas2[Y].substring(0, salvarX) +
                    "1" +
                    "1" +
                    "1" +
                    filas2[Y].substring(salvarX + 3);
                  filas2[Y] = UNAfila;
                };
              };
            };
          };
        };

        //CORRECCIÓN DE 2 CERO
        if (subX + 2 <= CantCC) {
          if (filas2[Y][subX] == 0) {
            if (filas2[Y][subX + 1] == 0) {
              if (filas2[Y][subX + 2] == 1) {
                salvarX = salvarX + 1;
                UNAfila =
                  filas2[Y].substring(0, salvarX) +
                  "1" +
                  "1" +
                  filas2[Y].substring(salvarX + 2);
                filas2[Y] = UNAfila;
                //  console.log("relleno de  00=> " + UNAfila);//  console.log("Filas2 despues<< " + filas2[Y]);
              };
            };
          };
        };
        // CORRECCIÓN DE 1 CERO
        if (subX + 2 <= CantCC) {
          if (filas2[Y][subX] == 0) {
            if (filas2[Y][subX + 1] == 1) {
              salvarX = salvarX + 1;
              UNAfila =
                filas2[Y].substring(0, salvarX) +
                "1" +
                filas2[Y].substring(salvarX + 1);
              filas2[Y] = UNAfila;
              // console.log("relleno de  00=> " + UNAfila); console.log("Filas2 despues<< " + filas2[Y]);
            }
          }
        }
      }
    }
  }
  console.log(filas2)
  nuevaCantidadFilas = (filas2.length) - 1;
  for (var r = 0; r <= nuevaCantidadFilas; r++) {
    if (filas2[r] == "") {
      nuevaCantidadFilas = nuevaCantidadFilas - 1;
    }
  }

  //----------- BORRADO DE COLUMNAS POR HISTOGRAMA VERTICAL EN 0 ------------------
  var colborrar = 0;
  var numcolumna = [];
  var wfilas1 = [];
  var cp = 0;
  for (var X = 0; X < HistVertical.length; X++) {
    if (HistVertical[X][1] <= 1) {
      if (X <= 3 || X >= (CantCC - 4)) {
        colborrar = colborrar + 1;
        numcolumna[cp] = X;
        cp = cp + 1;
      } else {
        if ((HistVertical[X][1] <= 1) && (HistVertical[X + 1][1] <= 1)
          && (HistVertical[X + 2][1] <= 1) && (HistVertical[X + 3][1] <= 1)
          && (HistVertical[X + 4][1] <= 1)) {
          rechazoxCol = rechazoxCol + 5;
        } else { rechazoxCol = 0; }
      };
    };
  };
  var q = 0;
  var salvanumc = 0;
  var ll = 0;
  var menoscol = 0;
  var señalCambio = 0;
  var dividoCol = Math.trunc(CantCC / 3);
  console.log("colborrar " + colborrar)
  // para borrar columnas llenas de 0
  if (colborrar !== 0) {
    for (var s = 0; s <= colborrar; s++) { // acumulador de columnas a borrar
      if ((numcolumna[ll] + 1) !== numcolumna[ll + 1] // columna discontigua
        || (colborrar == 1)) { // 1 columna sola
        for (var ii = 0; ii <= CantFilas; ii++) {
          var fila = filas2[ii]; // guardo la fila para substring
          salvanumc = numcolumna[ll]; // salvo el numero de columna a borrar 
          console.log(numcolumna[ll])
          if (numcolumna[ll] == 0) { // columna 0
            wfilas1[q] = fila.substring(1); // muevo
            q = q + 1;  // avanzo subindice de la nueva tabla
          } else if (numcolumna[ll] == CantCC) { // columna final
            wfilas1[q] = fila.substring(0, (CantCC - 1))  // muevo
            q = q + 1;  // avanzo subindice de la nueva tabla
          } else {  // columna del medio
            wfilas1[q] = fila.substring(0, salvanumc) + fila.substring(salvanumc + 1); // muevo
            q = q + 1;  // avanzo subindice de la nueva tabla
          }
        }
        ll = ll + 1;  // avanzo subindice de la tabla con las columnas a borrar 
        colborrar = 0;
      } else if (((numcolumna[ll] + 1) == numcolumna[ll + 1])
        && ((numcolumna[ll + 1] + 1) !== numcolumna[ll + 2])) {  // 2 columnas contiguas
        for (var ii = 0; ii <= CantFilas; ii++) {
          var fila = filas2[ii];
          if (numcolumna[ll] < 5) {  // para buscar si estan en las 1ras columnas
            //  busco la primera fila a borar
            if (numcolumna[ll] < numcolumna[ll + 1]) {
              salvanumc = numcolumna[ll];
            } else {
              salvanumc = numcolumna[ll + 1];
            }
            if ((numcolumna[ll] == 0)) { // columna 0
              wfilas1[q] = fila.substring(2); // muevo 
              q = q + 1;  // avanzo subindice de la nueva tabla
            } else {  // columna del medio
              wfilas1[q] = fila.substring(0, salvanumc) + fila.substring(salvanumc + 2); // muevo
              q = q + 1;  // avanzo subindice de la nueva tabla
            }
          } else if (numcolumna[ll] >= (CantCC - 4)) { // para buscar si estan en las ultimas columnas
            //  busco la primera fila a borar
            if (numcolumna[ll] < numcolumna[ll + 1]) {
              salvanumc = numcolumna[ll];
            } else {
              salvanumc = numcolumna[ll + 1];
            }
            if (numcolumna[ll + 1] == CantCC) { // columna final y anterior
              wfilas1[q] = fila.substring(0, salvanumc); // muevo
              q = q + 1;  // avanzo subindice de la nueva tabla
            } else {  // columna del medio final
              wfilas1[q] = fila.substring(0, salvanumc) + fila.substring(salvanumc + 2); // muevo
              q = q + 1;  // avanzo subindice de la nueva tabla
            }
          }
        }
        colborrar = 0;
        ll = ll + 2;
      } else if (((numcolumna[ll] + 1) == numcolumna[ll + 1])
        && ((numcolumna[ll + 1] + 1) == numcolumna[ll + 2])
        && ((numcolumna[ll + 2] + 1) !== numcolumna[ll + 3])) {  // 3 columnas contiguas
        for (var ii = 0; ii <= CantFilas; ii++) {
          var fila = filas2[ii];
          if (numcolumna[ll] < 5) {  // para buscar si estan en las 1ras columnas
            //  busco la primera fila a borar
            if (numcolumna[ll] < numcolumna[ll + 1]) {
              salvanumc = numcolumna[ll];
            } else {
              salvanumc = numcolumna[ll + 1];
            }
            if ((numcolumna[ll] == 0)) { // columna 0
              wfilas1[q] = fila.substring(3); // muevo 
              q = q + 1;  // avanzo subindice de la nueva tabla
            } else {  // columna del medio
              wfilas1[q] = fila.substring(0, salvanumc) + fila.substring(salvanumc + 3); // muevo
              q = q + 1;  // avanzo subindice de la nueva tabla
            }
          } else if (numcolumna[ll] >= (CantCC - 4)) { // para buscar si estan en las ultimas columnas
            //  busco la primera fila a borar
            if (numcolumna[ll] < numcolumna[ll + 1]) {
              salvanumc = numcolumna[ll];
            } else {
              salvanumc = numcolumna[ll + 1];
            }
            if (numcolumna[ll + 2] == CantCC) { // columna final y anterior
              wfilas1[q] = fila.substring(0, salvanumc); // muevo
              q = q + 1;  // avanzo subindice de la nueva tabla
            } else {  // columna del medio final
              wfilas1[q] = fila.substring(0, salvanumc) + fila.substring(salvanumc + 3); // muevo
              q = q + 1;  // avanzo subindice de la nueva tabla
            }
          }
        }
        ll = ll + 3;
        colborrar = 0;
      } else if (((numcolumna[ll] + 1) == numcolumna[ll + 1])
        && ((numcolumna[ll + 1] + 1) == numcolumna[ll + 2])
        && ((numcolumna[ll + 2] + 1) == numcolumna[ll + 3])
        && ((numcolumna[ll + 3] + 1) !== numcolumna[ll + 4])) {  // 4 columnas contiguas
        for (var ii = 0; ii <= CantFilas; ii++) {
          var fila = filas2[ii];
          salvanumc = numcolumna[ll];
          if (numcolumna[ll] == 0) { // columna 0
            wfilas1[q] = fila.substring(4); // muevo 
            q = q + 1;  // avanzo subindice de la nueva tabla
          } else if (numcolumna[ll + 3] == CantCC) { // para buscar si estan en las ultimas columnas
            wfilas1[q] = fila.substring(0, salvanumc); // muevo
            q = q + 1;  // avanzo subindice de la nueva tabla
          }
        }
        colborrar = 0;
        ll = ll + 4;
      }
    }
  } else {
    wfilas1 = filas2;
  }
  CantCC = wfilas1[0].length - 1;
  CantFilas = wfilas1.length - 1;
  for (var i = 0; i <= CantFilas; i++) {
    for (var x = 0; x <= CantCC; x++) {
      if ((wfilas1[i][x] == "1") || (wfilas1[i][x] == "0")) {
      } else {
        CantFilas = CantFilas - 1;
        x = CantCC;
      };
    };
  };
  console.log(wfilas1)


  var nuevasFila210 = [];
  nuevasFila210 = (correccionMASpecas1(wfilas1, nuevaCantidadFilas, CantCC))
  wfilas1 = nuevasFila210;
  console.log(wfilas1)
  //------------------ REVISION DE BORRADO -------------------------------------------------------
  let numeroIntermedio = [];
  let NOhacerP = [];
  let retornoRB = [];
  retornoRB = (revisionBorrado(wfilas1, nuevaCantidadFilas, CantCC));
  numeroIntermedio = retornoRB[0];
  nuevaCantidadFilas = retornoRB[1];
  NOhacerP = retornoRB[2];
  // ------------ FUNCIÓN DE DESICION PARA RELLENAR PECAS DESPUES ------------------------
  function revisionBorrado(numeropar, filasTpar, colupar) {
    console.log(" FUNCION REVISION BORRADO ")
    let numeroNuevo = [];
    var filasSalida = 0;
    var l = 0;
    for (var w = 0; w <= filasTpar; w++) {
      if (numeropar[w] !== "") {
        numeroNuevo[l] = numeropar[w];
        l = l + 1;
      }
    }
    filasSalida = (numeroNuevo.length) - 1;
    var centro;
    var lpda;
    var la;
    var lad;
    var lp;
    var lf;
    var lpdb;
    var lb;
    var lbdf;
    var NOpecas = new Array();
    for (var r = 0; r <= filasTpar; r++) {
      NOpecas[r] = new Array(1);
      NOpecas[r][0] = "0";
      NOpecas[r][1] = "0";
    }
    r = 0
    var colMe1 = 0;
    var col0 = 0;
    var colMa1 = 0;
    var filaSubst;
    var media = Math.trunc(colupar / 2);
    //  LPDA  LA  LAD
    //  LP  CENTRO  LF  
    //  LPDB  LB  LBDF
    for (var Yy = 1; Yy < filasSalida; Yy++) {
      for (var Xx = 1; Xx < media; Xx++) {
        filaSubst = 0;
        centro = numeroNuevo[Yy][Xx];
        lpda = numeroNuevo[Yy - 1][Xx - 1];
        la = numeroNuevo[Yy - 1][Xx];
        lad = numeroNuevo[Yy - 1][Xx + 1];
        lp = numeroNuevo[Yy][Xx - 1];
        lf = numeroNuevo[Yy][Xx + 1];
        lpdb = numeroNuevo[Yy + 1][Xx - 1];
        lb = numeroNuevo[Yy + 1][Xx];
        lbdf = numeroNuevo[Yy + 1][Xx + 1];
        colMe1 = (Number(lpda) + Number(lp) + Number(lpdb));
        col0 = (Number(la) + Number(centro) + Number(lb));
        colMa1 = (Number(lad) + Number(lf) + Number(lbdf));
        if ((col0 == 3) && (colMe1 < 3) && (colMa1 < 3)) {
          if (Xx == 1) {
            NOpecas[r][0] = Xx;
            NOpecas[r][1] = Yy;
            r = r + 1;
            filaSubst = 0;
            filaSubst = "1" + numeroNuevo[Yy - 1].substring(Xx);
            numeroNuevo[Yy - 1] = filaSubst;
            filaSubst = "1" + numeroNuevo[Yy].substring(Xx);
            numeroNuevo[Yy] = filaSubst;
            filaSubst = "1" + numeroNuevo[Yy + 1].substring(Xx);
            numeroNuevo[Yy + 1] = filaSubst
          } else if (Xx > 1) {
            NOpecas[r][0] = Xx;
            NOpecas[r][1] = Yy;
            r = r + 1;
            filaSubst = 0;
            filaSubst = numeroNuevo[Yy - 1].substring(0, Xx - 1) + "1" + numeroNuevo[Yy - 1].substring(Xx);
            numeroNuevo[Yy - 1] = filaSubst;
            filaSubst = numeroNuevo[Yy].substring(0, Xx - 1) + "1" + numeroNuevo[Yy].substring(Xx);
            numeroNuevo[Yy] = filaSubst;
            filaSubst = numeroNuevo[Yy + 1].substring(0, Xx - 1) + "1" + numeroNuevo[Yy + 1].substring(Xx);
            numeroNuevo[Yy + 1] = filaSubst;
          }
        }
      }
    }
    let salid = [];
    salid[0] = numeroNuevo;
    salid[1] = filasSalida;
    salid[2] = NOpecas;
    return salid;
  } // fin de desicion de pecas
  wfilas1 = numeroIntermedio;
  console.log(wfilas1)
  var ga = 0;
  //---------------------------RELLENO DE 00100 X 00000---------------------------------------------
  for (var Y = 0; Y <= nuevaCantidadFilas; Y++) {
    for (var X = 0; X <= CantCC; X++) {
      if ((X !== NOhacerP[ga][0]) && (Y !== NOhacerP[ga][1])) {
        if (wfilas1[Y][X] == "1" || wfilas1[Y][X] == "0") {
          if (wfilas1[Y][X] == 1 && X !== 0) {
            subX = X;
            salvarX = X;
            subX = subX - 1;
            // CORRECCION DE 1 PECA
            if (X >= 2) { // mayor igual a 2
              if (subX <= CantCC) {
                if ((X >= 2) && (X < CantCC)) {  // En el medio
                  if (wfilas1[Y][subX] == 0) {
                    if (wfilas1[Y][subX - 1] == 0) {
                      if (wfilas1[Y][X + 1] == 0) {
                        if ((Y + 1) == nuevaCantidadFilas) {
                          //  if (filas2[Y - 1][X] == 0) {
                          salvarX = X;
                          UNAfila = wfilas1[Y].substring(0, X) + '0' + wfilas1[Y].substring(X + 1);
                          wfilas1[Y] = UNAfila;
                          //  };
                        } else if ((Y + 1) < nuevaCantidadFilas) {
                          //if (Y > 0 && filas2[Y - 1][X] == '0') {
                          salvarX = X;
                          UNAfila = wfilas1[Y].substring(0, X) + '0' + wfilas1[Y].substring(X + 1);
                          wfilas1[Y] = UNAfila;
                          //};
                        };
                      };
                    };
                  };
                } else if (X == CantCC) { // al final
                  if (wfilas1[Y][subX] == 0) {
                    if (wfilas1[Y][subX - 1] == 0) {
                      if ((Y < nuevaCantidadFilas) || (Y == nuevaCantidadFilas)) {
                        if (wfilas1[Y - 1][X] == 0) {
                          if (Y > 0) {
                            salvarX = X;
                            UNAfila = wfilas1[Y].substring(0, X) + '0';
                            wfilas1[Y] = UNAfila;
                          } else {
                            salvarX = X;
                            UNAfila = wfilas1[Y].substring(0, X) + '0';
                            wfilas1[Y] = UNAfila;
                          };
                        };
                      };
                    };
                  };
                };
              };
            } else if (X < 2) {  // menor o igual a 2 
              if (X <= CantCC) {
                if ((X == 1) && (wfilas1[Y][X - 1] == 1)) {
                  if (wfilas1[Y][X + 1] == 0) {
                    if (wfilas1[Y][X + 2] == 0) {
                      if (wfilas1[Y][X - 1] == 0) {
                        var Ymenos1 = Y - 1;
                        var unoLeer = 1;
                        //  if (Y == 1 && filas2[Y - 1][X] == 1) {
                        if (Y == 1) {
                        } else {
                          salvarX = X;
                          UNAfila = '0' + '0' + wfilas1[Y].substring(X + 1);
                          wfilas1[Y] = UNAfila;
                        };
                      };
                    }
                  };
                } else if ((X == 1) && (wfilas1[Y][X - 1] == 0)) {
                  if (wfilas1[Y][X + 1] == 0) {
                    if (wfilas1[Y][X + 2] == 0) {
                      if ((Y < nuevaCantidadFilas) || (Y == nuevaCantidadFilas)) {
                        if (wfilas1[Y + 1][X] == 0) {
                          salvarX = X;
                          UNAfila = '0' + '0' + wfilas1[Y].substring(X + 1);
                          wfilas1[Y] = UNAfila;
                        };
                      }
                    };
                  };
                }
              }
            }
          }
        } //else { nuevaCantidadFilas = nuevaCantidadFilas - 1;  }
      } else { if (ga < nuevaCantidadFilas) { ga = ga + 1; } }
    }
  }
  nuevaCantidadFilas = (wfilas1.length) - 1;
  // ----------- MOVEMOS DE FILAS 2 A WFILAS

  var filas2Y = [];
  for (var Y = 0; Y <= nuevaCantidadFilas; Y++) {
    filas2Y[Y] = wfilas1[Y];
    console.log(filas2Y[Y])
  }
  console.log(filas2Y)
  //------------------- RELLENO DE 1 0 1 EN Y -------------------------------------------------------
  var salvarY = 0;
  var subY = 0;
  var UNAfilaX2 = '';
  console.log(CantCC)
  for (var Y = 0; Y <= nuevaCantidadFilas; Y++) {
    for (var X = 0; X <= CantCC; X++) {
      // PRIMER 1
      if (wfilas1[Y][X] == '1') {
        subY = Y;
        salvarY = Y;
        subY = subY + 1;
        if ((subY + 1) <= nuevaCantidadFilas) {
          if (wfilas1[subY][X] == '0') {
            if (wfilas1[subY + 1][X] == '1') {
              salvarY = salvarY + 1;
              console.log('y ' + Y)
              console.log('x ' + X)
              UNAfilaX2 =
                wfilas1[Y + 1].substring(0, X) +
                "1" +
                wfilas1[Y + 1].substring(X + 1);
              wfilas1[Y + 1] = UNAfilaX2;
              filas2Y[Y + 1] = wfilas1[Y + 1];

            };
          };
        };
      };
    };
  };
  console.log(filas2Y)
  var nuevasFila21 = [];
  nuevasFila21 = (correccionMASpecas1(filas2Y, nuevaCantidadFilas, CantCC))
  // ---------- FUNCION DE CORRECCION DE PECAS 1 ------------------------------------------
  function correccionMASpecas1(fila2vieja, ffilas, ccolumnas) {
    var centro1 = [];
    var centro2 = [];
    var centro3 = [];
    var centro4 = [];
    var cantidad = 0;
    var filaAgregar;
    var cm = 2;
    var col0 = 0;
    var col1 = 0;
    var col2 = 0;
    var col3 = 0;
    var col4 = 0;
    var col5 = 0;
    var sumageneral = 0;
    for (var fa = 2; fa <= (ffilas - 2); fa++) {
      filaAgregar = '';
      col0 = 0;
      col1 = 0;
      col2 = 0;
      col3 = 0;
      col4 = 0;
      col5 = 0;
      sumageneral = 0;
      cantidad = 0;
      centro1[0] = fa;
      centro1[1] = cm;
      col0 = Number(fila2vieja[fa - 2][cm - 2]) + Number(fila2vieja[fa - 1][cm - 2]) + Number(fila2vieja[fa][cm - 2]) + Number(fila2vieja[fa + 1][cm - 2]) + Number(fila2vieja[fa + 2][cm - 2]);
      col1 = Number(fila2vieja[fa - 2][cm - 1]) + Number(fila2vieja[fa - 1][cm - 1]) + Number(fila2vieja[fa][cm - 1]) + Number(fila2vieja[fa + 1][cm - 1]) + Number(fila2vieja[fa + 2][cm - 1]);
      col2 = Number(fila2vieja[fa - 2][cm]) + Number(fila2vieja[fa - 1][cm]) + Number(fila2vieja[fa][cm]) + Number(fila2vieja[fa + 1][cm]) + Number(fila2vieja[fa + 2][cm]);
      col3 = Number(fila2vieja[fa - 2][cm + 1]) + Number(fila2vieja[fa - 1][cm + 1]) + Number(fila2vieja[fa][cm + 1]) + Number(fila2vieja[fa + 1][cm + 1]) + Number(fila2vieja[fa + 2][cm + 1]);
      col4 = Number(fila2vieja[fa - 2][cm + 2]) + Number(fila2vieja[fa - 1][cm + 2]) + Number(fila2vieja[fa][cm + 2]) + Number(fila2vieja[fa + 1][cm + 2]) + Number(fila2vieja[fa + 2][cm + 2]);
      col5 = Number(fila2vieja[fa - 2][cm + 3]) + Number(fila2vieja[fa - 1][cm + 3]) + Number(fila2vieja[fa][cm + 3]) + Number(fila2vieja[fa + 1][cm + 3]) + Number(fila2vieja[fa + 2][cm + 3]);
      if ((col3 == 0) && (col4 == 0) && (col2 > 0) && (col1 < 5) && (col0 <= 2) && (col5 > 0)) {
        filaAgregar = "0" + "0" + "0" + "0" + "0" + fila2vieja[(centro1[0] - 2)].substring(centro1[1] + 3);
        fila2vieja[(centro1[0] - 2)] = filaAgregar;
        filaAgregar = "0" + "0" + "0" + "0" + "0" + fila2vieja[(centro1[0] - 1)].substring(centro1[1] + 3);
        fila2vieja[(centro1[0] - 1)] = filaAgregar;
        filaAgregar = "0" + "0" + "0" + "0" + "0" + fila2vieja[(centro1[0])].substring(centro1[1] + 3);
        fila2vieja[(centro1[0])] = filaAgregar;
        filaAgregar = "0" + "0" + "0" + "0" + "0" + fila2vieja[(centro1[0] + 1)].substring(centro1[1] + 3);
        fila2vieja[(centro1[0] + 1)] = filaAgregar;
        filaAgregar = "0" + "0" + "0" + "0" + "0" + fila2vieja[(centro1[0] + 2)].substring(centro1[1] + 3);
        fila2vieja[(centro1[0] + 2)] = filaAgregar;
        fa = fa + 1;
      } else if (((col0 == 0) && (col1 == 0) && (col2 == 0) && (col3 == 5) && (col4 == 5))
        || ((col0 == 0) && (col1 == 0) && (col2 == 0) && (col3 == 5) && (col4 == 4))
        || ((col0 == 1) && (col1 == 1) && (col2 == 1) && (col3 == 5) && (col4 == 5))
        || ((col0 == 1) && (col1 == 1) && (col2 == 1) && (col3 == 5) && (col4 == 3))) {
        filaAgregar = "1" + "1" + "1" + "1" + "1" + fila2vieja[(centro1[0] - 2)].substring(centro1[1] + 3);
        fila2vieja[(centro1[0] - 2)] = filaAgregar;
        filaAgregar = "1" + "1" + "1" + "1" + "1" + fila2vieja[(centro1[0] - 1)].substring(centro1[1] + 3);
        fila2vieja[(centro1[0] - 1)] = filaAgregar;
        filaAgregar = "1" + "1" + "1" + "1" + "1" + fila2vieja[(centro1[0])].substring(centro1[1] + 3);
        fila2vieja[(centro1[0])] = filaAgregar;
        filaAgregar = "1" + "1" + "1" + "1" + "1" + fila2vieja[(centro1[0] + 1)].substring(centro1[1] + 3);
        fila2vieja[(centro1[0] + 1)] = filaAgregar;
        filaAgregar = "1" + "1" + "1" + "1" + "1" + fila2vieja[(centro1[0] + 2)].substring(centro1[1] + 3);
        fila2vieja[(centro1[0] + 2)] = filaAgregar;
        fa = fa + 1;
      }
      sumageneral = col0 + col1 + col2 + col3 + col4 + col5;
      if (sumageneral <= 2) {
        filaAgregar = "0" + "0" + "0" + "0" + "0" + fila2vieja[(centro1[0] - 1)].substring(centro1[1] + 3);
        fila2vieja[(centro1[0] - 1)] = filaAgregar;
        filaAgregar = "0" + "0" + "0" + "0" + "0" + fila2vieja[(centro1[0])].substring(centro1[1] + 3);
        fila2vieja[(centro1[0])] = filaAgregar;
        filaAgregar = "0" + "0" + "0" + "0" + "0" + fila2vieja[(centro1[0] + 1)].substring(centro1[1] + 3);
        fila2vieja[(centro1[0] + 1)] = filaAgregar;
        filaAgregar = "0" + "0" + "0" + "0" + "0" + fila2vieja[(centro1[0] + 2)].substring(centro1[1] + 3);
        fila2vieja[(centro1[0] + 2)] = filaAgregar;
        fa = fa + 1;
      }
      if (fa == (ffilas - 2)) {
        col0 = Number(fila2vieja[fa - 1][cm - 2]) + Number(fila2vieja[fa][cm - 2]) + Number(fila2vieja[fa + 1][cm - 2]) + Number(fila2vieja[fa + 2][cm - 2]);
        col1 = Number(fila2vieja[fa - 1][cm - 1]) + Number(fila2vieja[fa][cm - 1]) + Number(fila2vieja[fa + 1][cm - 1]) + Number(fila2vieja[fa + 2][cm - 1]);
        col2 = Number(fila2vieja[fa - 1][cm]) + Number(fila2vieja[fa][cm]) + Number(fila2vieja[fa + 1][cm]) + Number(fila2vieja[fa + 2][cm]);
        col3 = Number(fila2vieja[fa - 1][cm + 1]) + Number(fila2vieja[fa][cm + 1]) + Number(fila2vieja[fa + 1][cm + 1]) + Number(fila2vieja[fa + 2][cm + 1]);
        col4 = Number(fila2vieja[fa - 1][cm + 2]) + Number(fila2vieja[fa][cm + 2]) + Number(fila2vieja[fa + 1][cm + 2]) + Number(fila2vieja[fa + 2][cm + 2]);
        col5 = Number(fila2vieja[fa - 1][cm + 3]) + Number(fila2vieja[fa][cm + 3]) + Number(fila2vieja[fa + 1][cm + 3]) + Number(fila2vieja[fa + 2][cm + 3]);
        sumageneral = col0 + col1 + col2 + col3 + col4 + col5;
        if (sumageneral <= 5) {
          filaAgregar = "0" + "0" + "0" + "0" + "0" + fila2vieja[(centro1[0] - 1)].substring(centro1[1] + 3);
          fila2vieja[(centro1[0] - 1)] = filaAgregar;
          filaAgregar = "0" + "0" + "0" + "0" + "0" + fila2vieja[(centro1[0])].substring(centro1[1] + 3);
          fila2vieja[(centro1[0])] = filaAgregar;
          filaAgregar = "0" + "0" + "0" + "0" + "0" + fila2vieja[(centro1[0] + 1)].substring(centro1[1] + 3);
          fila2vieja[(centro1[0] + 1)] = filaAgregar;
          filaAgregar = "0" + "0" + "0" + "0" + "0" + fila2vieja[(centro1[0] + 2)].substring(centro1[1] + 3);
          fila2vieja[(centro1[0] + 2)] = filaAgregar;
          fa = fa + 1;
        }
      }
      sumageneral = col0 + col1 + col2 + col3 + col4 + col5;

      if (sumageneral <= 5) {
        filaAgregar = "0" + "0" + "0" + "0" + "0" + fila2vieja[(centro1[0] - 1)].substring(centro1[1] + 3);
        fila2vieja[(centro1[0] - 1)] = filaAgregar;
        filaAgregar = "0" + "0" + "0" + "0" + "0" + fila2vieja[(centro1[0])].substring(centro1[1] + 3);
        fila2vieja[(centro1[0])] = filaAgregar;
        filaAgregar = "0" + "0" + "0" + "0" + "0" + fila2vieja[(centro1[0] + 1)].substring(centro1[1] + 3);
        fila2vieja[(centro1[0] + 1)] = filaAgregar;
        filaAgregar = "0" + "0" + "0" + "0" + "0" + fila2vieja[(centro1[0] + 2)].substring(centro1[1] + 3);
        fila2vieja[(centro1[0] + 2)] = filaAgregar;
        fa = fa + 1;
      }

    }
    return fila2vieja;
  } // fin de funcion corrección de pecas 1
  console.log(nuevasFila21)
  filas2Y = nuevasFila21;
  var nuevasFila2 = [];
  nuevasFila2 = (correccionMASpecas(filas2Y, nuevaCantidadFilas, CantCC))
  // ---------- FUNCION DE CORRECCION DE PECAS ------------------------------------------
  function correccionMASpecas(fila2vieja, ffilas, ccolumnas) {
    var centro1 = [];
    var centro2 = [];
    var centro3 = [];
    var centro4 = [];
    var cantidad = 0;
    var filaAgregar;
    for (var fa = 0; fa <= ffilas; fa++) {
      for (var cm = 0; cm <= ccolumnas; cm++) {
        cantidad = 0;
        if (fila2vieja[fa][cm] == "1") {
          if (cm == 0) {
            if (fa == (ffilas - 1) || fa == (ffilas)) {
              if (fila2vieja[fa - 1][cm] == "0") {
                centro1[0] = fa;
                centro1[1] = cm;
                for (var ffa = (centro1[0] - 2); ffa < ffilas; ffa++) {
                  for (var cca = 0; cca <= (centro1[1] + 2); cca++) {
                    cantidad = cantidad + Number(fila2vieja[ffa][cca]);
                  }
                }
                if (cantidad <= 5) {
                  filaAgregar = "0" + "0" + "0" + fila2vieja[(centro1[0] - 2)].substring(centro1[1] + 3);
                  fila2vieja[(centro1[0] - 2)] = filaAgregar;
                  filaAgregar = "0" + "0" + "0" + fila2vieja[(centro1[0] - 1)].substring(centro1[1] + 3);
                  fila2vieja[(centro1[0] - 1)] = filaAgregar;
                  filaAgregar = "0" + "0" + "0" + fila2vieja[(centro1[0] - 0)].substring(centro1[1] + 3);
                  fila2vieja[(centro1[0])] = filaAgregar;
                }
              }
            } else if ((fa == 0) && (fila2vieja[fa + 1][cm] == "0")) {
              centro1[0] = fa;
              centro1[1] = cm;
              for (var ffa = 0; ffa <= (centro1[0] + 2); ffa++) {
                for (var cca = 0; cca <= (centro1[1] + 2); cca++) {
                  cantidad = cantidad + Number(fila2vieja[ffa][cca]);
                }
              }
              if (cantidad <= 5) {
                filaAgregar = "0" + "0" + "0" + fila2vieja[(centro1[0])].substring(centro1[1] + 3);
                fila2vieja[(centro1[0])] = filaAgregar;
                filaAgregar = "0" + "0" + "0" + fila2vieja[(centro1[0] + 1)].substring(centro1[1] + 3);
                fila2vieja[(centro1[0] + 1)] = filaAgregar;
                filaAgregar = "0" + "0" + "0" + fila2vieja[(centro1[0] + 2)].substring(centro1[1] + 3);
                fila2vieja[(centro1[0]) + 2] = filaAgregar;
              }
            } else if ((fa > 1) && (fa < (ffilas - 3)) && (fila2vieja[fa - 1][cm] == "0")) {
              centro1[0] = fa;
              centro1[1] = cm;
              for (var ffa = (centro1[0] - 2); ffa <= (centro1[0] + 2); ffa++) {
                for (var cca = 0; cca <= (centro1[1] + 2); cca++) {
                  cantidad = cantidad + Number(fila2vieja[ffa][cca]);
                }
              }
              if (cantidad <= 5) {
                filaAgregar = "0" + "0" + "0" + fila2vieja[(centro1[0])].substring(centro1[1] + 3);
                fila2vieja[(centro1[0])] = filaAgregar;
                filaAgregar = "0" + "0" + "0" + fila2vieja[(centro1[0] + 1)].substring(centro1[1] + 3);
                fila2vieja[(centro1[0] + 1)] = filaAgregar;
                filaAgregar = "0" + "0" + "0" + fila2vieja[(centro1[0] + 2)].substring(centro1[1] + 3);
                fila2vieja[(centro1[0]) + 2] = filaAgregar;
              }
            }
          } else if (cm == (ccolumnas - 1) || cm == ccolumnas) {
            if (fa == 0 && fila2vieja[fa + 1][cm] == "0") {
              centro1[0] = fa;
              centro1[1] = cm;
              for (var ffa = 0; ffa <= (centro1[0] + 2); ffa++) {
                for (var cca = (centro1[1] - 2); cca < ccolumnas; cca++) {
                  cantidad = cantidad + Number(fila2vieja[ffa][cca]);
                }
              }
              if (cantidad <= 5) {
                filaAgregar = fila2vieja[(centro1[0] + 2)].substring(0, (centro1[1] - 1)) + "0" + "0" + "0";
                fila2vieja[(centro1[0] + 2)] = filaAgregar;
                filaAgregar = fila2vieja[(centro1[0] + 1)].substring(0, (centro1[1] - 1)) + "0" + "0" + "0";
                fila2vieja[(centro1[0] + 1)] = filaAgregar;
                filaAgregar = fila2vieja[(centro1[0])].substring(0, (centro1[1] - 1)) + "0" + "0" + "0";
                fila2vieja[(centro1[0])] = filaAgregar;
              }
            } else if ((fa == (ffilas - 1)) && (fila2vieja[fa - 1][cm] == "0")) {
              centro1[0] = fa;
              centro1[1] = cm;
              for (var ffa = (centro1[0] - 2); ffa < ffilas; ffa++) {
                for (var cca = (centro1[1] - 2); cca < ccolumnas; cca++) {
                  cantidad = cantidad + Number(fila2vieja[ffa][cca]);
                }
              }
              if (cantidad <= 5) {
                filaAgregar = fila2vieja[(centro1[0] - 2)].substring(0, (centro1[1] - 1)) + "0" + "0" + "0";
                fila2vieja[(centro1[0] - 2)] = filaAgregar;
                filaAgregar = fila2vieja[(centro1[0] - 1)].substring(0, (centro1[1] - 1)) + "0" + "0" + "0";
                fila2vieja[(centro1[0] - 1)] = filaAgregar;
                filaAgregar = fila2vieja[(centro1[0])].substring(0, (centro1[1] - 1)) + "0" + "0" + "0";
                fila2vieja[(centro1[0])] = filaAgregar;
              }
            } else if ((fa > 1) && (fa < (ffilas - 3)) && (fila2vieja[fa - 1][cm] == "0")) {
              centro1[0] = fa;
              centro1[1] = cm;
              for (var ffa = (centro1[0] - 2); ffa <= (centro1[0] + 2); ffa++) {
                for (var cca = (centro1[1] - 2); cca < ccolumnas; cca++) {
                  cantidad = cantidad + Number(fila2vieja[ffa][cca]);
                }
              }
              if (cantidad <= 5) {
                filaAgregar = fila2vieja[(centro1[0] - 2)].substring(0, (centro1[1] - 1)) + "0" + "0" + "0";
                fila2vieja[(centro1[0] - 2)] = filaAgregar;
                filaAgregar = fila2vieja[(centro1[0] - 1)].substring(0, (centro1[1] - 1)) + "0" + "0" + "0";
                fila2vieja[(centro1[0] - 1)] = filaAgregar;
                filaAgregar = fila2vieja[(centro1[0])].substring(0, (centro1[1] - 1)) + "0" + "0" + "0";
                fila2vieja[(centro1[0])] = filaAgregar;
              }
            }
          } else {
            if ((fa > 1) && (fa < (ffilas - 1)) && (fila2vieja[fa][cm - 1] == "0") && (fila2vieja[fa - 1][cm] == "0")) {
              centro1[0] = fa;
              centro1[1] = cm;
              if (centro1[0] > 1 && centro1[1] > 1) {
                for (var ffa = (centro1[0] - 2); ffa <= (centro1[0] + 2); ffa++) {
                  for (var cca = (centro1[1] - 2); cca <= (centro1[1] + 2); cca++) {
                    cantidad = cantidad + Number(fila2vieja[ffa][cca]);
                  }
                }
                if (cantidad <= 5) {
                  filaAgregar = fila2vieja[(centro1[0] - 2)].substring(0, (centro1[1])) + "0" + "0" + "0" + fila2vieja[(centro1[0] - 2)].substring(centro1[1] + 3);
                  fila2vieja[(centro1[0] - 2)] = filaAgregar;
                  filaAgregar = fila2vieja[(centro1[0] - 1)].substring(0, (centro1[1])) + "0" + "0" + "0" + fila2vieja[(centro1[0] - 1)].substring(centro1[1] + 3);
                  fila2vieja[(centro1[0] - 1)] = filaAgregar;
                  filaAgregar = fila2vieja[(centro1[0])].substring(0, (centro1[1])) + "0" + "0" + "0" + fila2vieja[(centro1[0])].substring(centro1[1] + 3);
                  fila2vieja[(centro1[0])] = filaAgregar;
                  filaAgregar = fila2vieja[(centro1[0] + 1)].substring(0, (centro1[1])) + "0" + "0" + "0" + fila2vieja[(centro1[0] + 1)].substring(centro1[1] + 3);
                  fila2vieja[(centro1[0] + 1)] = filaAgregar;
                  filaAgregar = fila2vieja[(centro1[0] + 2)].substring(0, (centro1[1])) + "0" + "0" + "0" + fila2vieja[(centro1[0] + 2)].substring(centro1[1] + 3);
                  fila2vieja[(centro1[0] + 2)] = filaAgregar;
                }
              } else if (centro1[1] == 1) {
                for (var ffa = (centro1[0] - 2); ffa <= (centro1[0] + 2); ffa++) {
                  for (var cca = (centro1[1] - 1); cca <= (centro1[1] + 2); cca++) {
                    cantidad = cantidad + Number(fila2vieja[ffa][cca]);
                  }
                }
                if (cantidad <= 5) {
                  filaAgregar = fila2vieja[(centro1[0] - 2)].substring(0, (centro1[1])) + "0" + "0" + fila2vieja[(centro1[0] - 2)].substring(centro1[1] + 2);
                  fila2vieja[(centro1[0] - 2)] = filaAgregar;
                  filaAgregar = fila2vieja[(centro1[0] - 1)].substring(0, (centro1[1])) + "0" + "0" + fila2vieja[(centro1[0] - 1)].substring(centro1[1] + 2);
                  fila2vieja[(centro1[0] - 1)] = filaAgregar;
                  filaAgregar = fila2vieja[(centro1[0])].substring(0, (centro1[1])) + "0" + "0" + fila2vieja[(centro1[0])].substring(centro1[1] + 2);
                  fila2vieja[(centro1[0])] = filaAgregar;
                  filaAgregar = fila2vieja[(centro1[0] + 1)].substring(0, (centro1[1])) + "0" + "0" + fila2vieja[(centro1[0] + 1)].substring(centro1[1] + 2);
                  fila2vieja[(centro1[0] + 1)] = filaAgregar;
                  filaAgregar = fila2vieja[(centro1[0] + 2)].substring(0, (centro1[1])) + "0" + "0" + fila2vieja[(centro1[0] + 2)].substring(centro1[1] + 2);
                  fila2vieja[(centro1[0] + 2)] = filaAgregar;
                }
              }
            }
          }
        }
      }
    }
    return fila2vieja;
  } // fin de funcion de correccion de pecas
  filas2Y = nuevasFila2;


  for (var Y = 0; Y <= nuevaCantidadFilas; Y++) {
    console.log(filas2Y[Y]);
  }
  filas2 = filas2Y;
  //----------------------------------------------------------------------------------------------------------------------------------
  var HistHorizontal2 = new Array()
  for (var Y = 0; Y <= nuevaCantidadFilas; Y++) {
    HistHorizontal2[Y] = new Array(2);
    HistHorizontal2[Y][0] = 0;
    HistHorizontal2[Y][1] = 0;
  }
  var HistVertical2 = new Array();
  for (var Y = 0; Y <= CantCC; Y++) {
    HistVertical2[Y] = new Array(2);
    HistVertical2[Y][0] = 0;
    HistVertical2[Y][1] = 0;
  }
  // ACUMULADORES POR ZONA --------------------------------------------------------------------------
  var unosxzonaYX = new Array();
  for (var m = 0; m <= 8; m++) {
    unosxzonaYX[m] = new Array(10);
    unosxzonaYX[m][0] = 0;  // acumulador de 0 x zona (X Y)
    unosxzonaYX[m][1] = 0;  // acumulador de 1 x zona (X Y)
    unosxzonaYX[m][2] = 0;  // porcentaje de ocupación de la zona
    unosxzonaYX[m][3] = 0;  // porcentaje de ocupazión de la zona con respecto al total del número
    unosxzonaYX[m][4] = 0;  // columna de inicio de la zona X
    unosxzonaYX[m][5] = 0;  // columna de final de la zona X
    unosxzonaYX[m][6] = 0;  // fila de inicio de la zona Y
    unosxzonaYX[m][7] = 0;  // fila de final de la zona Y
    unosxzonaYX[m][8] = 0;  // zona
    unosxzonaYX[m][9] = "\r\n"
  };
  // -HISTOGRAMA X EJE X ------------------(FILAS)------------------------------
  var retornoH;
  retornoH = Histograma(filas2, CantCC, nuevaCantidadFilas, HistHorizontal2);
  HistHorizontal2.forEach(function (HistHorizontal2, index) {
    // RECORRE FILA X FILA Y ME DICE EL VALOR SEGÚN LA FILA
    console.log("Fila " + `${index} : ${HistHorizontal2}`);
  });
  var retornoV;
  retornoV = HistogramaV(filas2, CantCC, nuevaCantidadFilas, HistVertical2);
  HistVertical2.forEach(function (HistVertical2, index) {
    // RECORRE COLUMNA X COLUMNA Y ME DICE EL VALOR SEGÚN LA FILA
    console.log("Columna " + `${index} : ${HistVertical2}`);
  });
  //------------------------------------------------
  X = 0;
  var filas2Reducida = new Array();
  var parteFinaldelNum = (nuevaCantidadFilas - 5)
  for (var Y = 0; Y <= nuevaCantidadFilas; Y++) {
    if (filas2[Y] !== "" || HistHorizontal2[Y][1] !== 0) {
      filas2Reducida[X] = filas2[Y];
      X = X + 1;
    } else if (Y >= parteFinaldelNum && HistHorizontal2[Y][0] == 0) {
      filas2Reducida[X] = filas2[Y];
      X = X + 1;
    };
  };
  //------------------------------------------------
  X = 0;
  var filas2Reducida3 = new Array();
  var parteFinaldelNum = (filas2Reducida.length - 5);
  var partePrincipiodelNum = 5;
  for (var Y = 0; Y < filas2Reducida.length; Y++) {
    if (filas2Reducida[Y] !== "") {
      if (HistHorizontal2[Y][1] !== 0) {
        filas2Reducida3[X] = filas2Reducida[Y];
        X = X + 1;
      };
    };
  };
  //------------------------------------------------
  var retorNumero = new Array();
  retorNumero = filas2Reducida3; //= (borrarFilasBasuraAntesEntornar(filas2Reducida3, nuevaCantidadFilas, CantCC, HistHorizontal2))
  // MOSTRAR FILAS2 EN EL HTML -----------------------------------------------------------------------------------------
  nuevaCantidadFilas = (retorNumero.length - 1);
  var tablaFinal = new Array();
  for (var w = 0; w <= 10; w++) {
    tablaFinal[w] = new Array(8)
    tablaFinal[w][0] = 0;  // iz - der - s1 - s2
    tablaFinal[w][1] = 0;  // num agu
    tablaFinal[w][2] = 0;  // fila principio
    tablaFinal[w][3] = 0;  // fila final
    tablaFinal[w][4] = 0;  // cant de ceros
    tablaFinal[w][5] = 0;  // porcentaje
    tablaFinal[w][6] = 0;  // zona comienzo
    tablaFinal[w][7] = 0;  // zona final
  };
  var unos3 = 0;
  var retentor = [];
  retentor = entornar3(unos3, retorNumero, nuevaCantidadFilas, CantCC, unosxzonaYX, archivo1, nuevacolumna, nuevafila, tablaFinal);
  var nuevacolumna = retentor[0];
  var nuevafila = retentor[1];
  retorNumero = retentor[2];
  unos3 = retentor[3];
  console.log(retorNumero);
  console.log(tablaFinal);
  console.log(nuevafila);
  console.log(nuevacolumna);
  console.log("Acumulador de unos => ----------------------------------------------------------------")
  console.log(unosxzonaYX);
  // -------- MUESTRO EN HTML LAS ZONA Y VALORES ------------------------------------------------------------------------------------------
  for (var m = 0; m <= 8; m++) {
    var Cro = unosxzonaYX[m][0];   // acumulador de 0 x zona (X Y)
    var Uno = unosxzonaYX[m][1];  // acumulador de 1 x zona (X Y)
    var ocuZona = unosxzonaYX[m][2];  // porcentaje de ocupación de la zona
    var ocuTotal = unosxzonaYX[m][3];  // porcentaje de ocupazión de la zona con respecto al total del número
    var colInicio = unosxzonaYX[m][4];
    var colFinal = unosxzonaYX[m][5];
    var filaInicio = unosxzonaYX[m][6];
    var filaFinal = unosxzonaYX[m][7];
    var valretorno = myFunction(m, Cro, Uno, ocuZona, ocuTotal, colInicio, colFinal, filaInicio, filaFinal)
  };
  function myFunction(parm, parcro, paruno, parocuZona, parocuTotal, parcolInicio, parcolFinal, parfilaInicio, parfilaFinal) {
    var table = document.getElementById("tabla1");
    var fila = table.insertRow(-1);
    var col1 = fila.insertCell(0);
    var col2 = fila.insertCell(1);
    var col3 = fila.insertCell(2);
    var col4 = fila.insertCell(3);
    var col5 = fila.insertCell(4);
    var col6 = fila.insertCell(5);
    var col7 = fila.insertCell(6);
    var col8 = fila.insertCell(7);
    var col9 = fila.insertCell(8);
    col1.innerHTML = "Zona= " + parm.toString().padStart(2, '0');
    col2.innerHTML = "Ceros= " + parcro.toString().padStart(2, '0');
    col3.innerHTML = "Unos= " + paruno.toString().padStart(2, '0');
    col4.innerHTML = "OcuZona= " + parocuZona.toString().padStart(2, '0');
    col5.innerHTML = "OcuTotal= " + parocuTotal.toString().padStart(2, '0');
    col6.innerHTML = "colInicio= " + parcolInicio.toString().padStart(2, '0');
    col7.innerHTML = "colFinal= " + parcolFinal.toString().padStart(2, '0');
    col8.innerHTML = "filaInicio= " + parfilaInicio.toString().padStart(2, '0');
    col9.innerHTML = "filaFinal= " + parfilaFinal.toString().padStart(2, '0');
    var retorno = 0
    return retorno
  }

  //-------------- reconocimiento ------------------------------------------------------------------------------------
  //  tablaLimites1[x][0] = 0; // num
  //  tablaLimites1[x][1] = 0; // zona
  //  tablaLimites1[x][2] = 0; // porcen inicio   4
  //  tablaLimites1[x][3] = 0; // porcen final    12
  //  tablaLimites1[x][4] = 0; // menores
  //  tablaLimites1[x][5] = 0; // concen inicio   7
  //  tablaLimites1[x][6] = 0; // concen final    11
  //  tablaLimites1[x][7] = 0; // menores 2

  //  unosxzonaYX[m][0] = 0;  // acumulador de 0 x zona (X Y)
  //  unosxzonaYX[m][1] = 0;  // acumulador de 1 x zona (X Y)
  //  unosxzonaYX[m][2] = 0;  // porcentaje de ocupación de la zona
  //  unosxzonaYX[m][3] = 0;  // porcentaje de ocupazión de la zona con respecto al total del número  10
  //  unosxzonaYX[m][4] = 0;  // columna de inicio de la zona X
  //  unosxzonaYX[m][5] = 0;  // columna de final de la zona X
  //  unosxzonaYX[m][6] = 0;  // fila de inicio de la zona Y
  //  unosxzonaYX[m][7] = 0;  // fila de final de la zona Y
  //  unosxzonaYX[m][8] = 0;  // zona
  //  unosxzonaYX[m][9] = "\r\n"


  console.log(' tabla Limitas ');
  console.log(tablaLimites1);
  console.log(' tabla de zonas ');
  console.log(unosxzonaYX);
  console.log(' tabla final agujeros ');
  console.log(tablaFinal);
  var agujerosu = new Array();
  for (var w = 0; w <= 10; w++) {
    agujerosu[w] = new Array(8)
    agujerosu[w][0] = 0;  // iz - der - s1 - s2
    agujerosu[w][1] = 0;  // num agu
    agujerosu[w][2] = 0;  // fila principio
    agujerosu[w][3] = 0;  // fila final
    agujerosu[w][4] = 0;  // cant de ceros
    agujerosu[w][5] = 0;  // porcentaje
    agujerosu[w][6] = 0;  // zona comienzo
    agujerosu[w][7] = 0;  // zona final
  };
  nuevacolumna = retorNumero[0].length - 1;
  var numeroverificar = new Array();
  for (var fl = 0; fl <= Number(nuevafila); fl++) {
    numeroverificar[fl] = new Array(CantCC);
    for (var cl = 0; cl <= Number(nuevacolumna); cl++) {
      numeroverificar[fl][cl] = retorNumero[fl][cl];
    };
  };
  console.log(retorNumero);
  console.log(numeroverificar);
  console.log(' agujero tabla 1')
  console.log(tablaFinal)
  var j = 0;
  for (var w = 0; w < (tablaFinal.length - 1); w++) {
    if (tablaFinal[w + 1][0] == 0 || tablaFinal[j][0] == 0) {
    } else {
      if (tablaFinal[j][0] == (tablaFinal[w + 1][0])) {
        if ((Number(tablaFinal[j][3]) + 2) == (tablaFinal[w + 1][2])) {
          tablaFinal[j][0] = tablaFinal[j][0];  // iz - der - s1 - s2
          tablaFinal[j][1] = tablaFinal[j][1];  // num agu
          tablaFinal[j][2] = tablaFinal[j][2];  // fila principio
          tablaFinal[j][3] = tablaFinal[w + 1][3];  // fila final
          tablaFinal[j][4] = (tablaFinal[j][4] + tablaFinal[w + 1][4]);  // cant de ceros
          tablaFinal[j][5] = (tablaFinal[j][5] + tablaFinal[w + 1][5]);  // porcentaje
          tablaFinal[j][6] = tablaFinal[j][6];  // zona comienzo
          tablaFinal[j][7] = tablaFinal[j][7];  // zona final
          tablaFinal[w + 1][0] = 0;  // iz - der - s1 - s2
          tablaFinal[w + 1][1] = 0;  // num agu
          tablaFinal[w + 1][2] = 0;  // fila principio
          tablaFinal[w + 1][3] = 0;  // fila final
          tablaFinal[w + 1][4] = 0;  // cant de ceros
          tablaFinal[w + 1][5] = 0;  // porcentaje
          tablaFinal[w + 1][6] = 0;  // zona comienzo
          tablaFinal[w + 1][7] = 0;  // zona final
        } else { j = j + 1; }
      } else { j = j + 1; }
    }
  }
  console.log(' agujero tabla ')
  console.log(tablaFinal)
  //---------------------------------------------------------------------------------
  var acerrados1 = 0;
  var acerrados2 = 0;
  var aabiertos1 = 0;
  var aabiertos2 = 0;
  var cerrados22 = 0;
  for (var w = 0; w < tablaFinal.length; w++) {
    if (tablaFinal[w][0] == ' S1 ') {
      if (tablaFinal[w][5] <= 8) {
        acerrados1 = acerrados1 + 1;
      } else {
        cerrados22 = cerrados22 + 1;
      }

    }
    if (tablaFinal[w][0] == ' S2 ') {
      if (tablaFinal[w][5] <= 8) {
        acerrados2 = acerrados2 + 1;
      } else {
        cerrados22 = cerrados22 + 1;
      }
    }

    if (tablaFinal[w][0] == '#I') {
      if ((tablaFinal[w][6] == 3) && (tablaFinal[w][5] <= 10)) {
        aabiertos1 = aabiertos1 + 1;
      }
    }
    if (tablaFinal[w][0] == '#D') {
      if ((tablaFinal[w][6] == 5) && (tablaFinal[w][5] <= 10)) {
        aabiertos2 = aabiertos2 + 1;
      }
    }
  }
  console.log(unosxzonaYX)
  var totaldeZona = 0;
  totaldeZona = ((Number(unosxzonaYX[0][5]) + 1) * (Number(unosxzonaYX[0][7]) + 1));
  var separado = 8;
  if ((aabiertos1 !== 0) && (aabiertos2 !== 0)) {
    for (var k = 0; k <= 8; k++) {
      //  function nuevoRelleno(hacer, g, numero0, fil, colum, zonaz, totalZona) {
      numeroverificar = (nuevoRelleno(separado, k, numeroverificar, nuevafila, nuevacolumna, unosxzonaYX, totaldeZona));
    }
  }
  //  }
  console.log(numeroverificar)
  var numeroNuevodeOcho = [];
  if ((cerrados22 >= 2) && (aabiertos1 >= 1) && (aabiertos2 >= 1)) {
    numeroNuevodeOcho = (ochoUnido(numeroverificar, tablaFinal, nuevacolumna, nuevafila, unosxzonaYX))
    for (var fl = 0; fl <= Number(nuevafila); fl++) {
      for (var cl = 0; cl <= Number(nuevacolumna); cl++) {
        numeroverificar[fl][cl] = numeroNuevodeOcho[fl][cl];   // movemos el numero 8 nuevo
      };
    };
    console.log(" numero Nuevo de Ocho ");
    console.log(numeroNuevodeOcho);
  }
  function ochoUnido(numeroN, AgujerosT, columnaT, filasT, zonasT) {
    var colcm = Number(zonasT[4][4]);
    var colfn = Number(zonasT[4][5]);
    var filcm = Number(zonasT[4][6]);
    var filfn = Number(zonasT[4][7]);
    var lpda2 = [];
    var lpda = [];
    var lad2 = [];
    var lad = [];
    var centro = [];
    var lpdb = [];
    var lpdb2 = [];
    var lbdf = [];
    var lbdf2 = [];
    var matriz = 0;
    for (var y = filcm; y <= filfn; y++) {
      for (var x = colcm; x <= colfn; x++) {
        if (x == colfn && y == filfn) { return numeroN; }
        if (numeroN[y][x] == "1") {
          //matriz = 0;
          //  if (matriz < 20 || matriz > 25) {
          matriz = 0;
          // columna de la izquierda 0
          matriz = matriz + Number(numeroN[(y - 2)][(x - 2)]);  // lpda2
          matriz = matriz + Number(numeroN[(y - 1)][(x - 2)]);  // lpda1
          matriz = matriz + Number(numeroN[(y)][(x - 2)]);  // lp1
          matriz = matriz + Number(numeroN[(y + 1)][(x - 2)]);  // lpdb1
          matriz = matriz + Number(numeroN[(y + 2)][(x - 2)]);  // lpdb2
          // columa de la izquierda 1
          matriz = matriz + Number(numeroN[(y - 2)][(x - 1)]);  // lpda3
          matriz = matriz + Number(numeroN[(y - 1)][(x - 1)]);  // lpda
          matriz = matriz + Number(numeroN[(y)][(x - 1)]);  // lp
          matriz = matriz + Number(numeroN[(y + 1)][(x - 1)]);  // lpdb
          matriz = matriz + Number(numeroN[(y + 2)][(x - 1)]);  // lpdb3
          // columa  centro
          matriz = matriz + Number(numeroN[(y - 2)][(x)]);  // la1
          matriz = matriz + Number(numeroN[(y - 1)][(x)]);  // la
          matriz = matriz + Number(numeroN[(y)][(x)]);  // centro
          matriz = matriz + Number(numeroN[(y + 1)][(x)]);  // lb
          matriz = matriz + Number(numeroN[(y + 2)][(x)]);  // lb1
          // columa de la derecha 1
          matriz = matriz + Number(numeroN[(y - 2)][(x + 1)]);  // lad3
          matriz = matriz + Number(numeroN[(y - 1)][(x + 1)]);  // lad
          matriz = matriz + Number(numeroN[(y)][(x + 1)]);  // lf
          matriz = matriz + Number(numeroN[(y + 1)][(x + 1)]);  // lbdf
          matriz = matriz + Number(numeroN[(y + 2)][(x + 1)]);  // lbdf3
          // columa de la derecha 0
          matriz = matriz + Number(numeroN[(y - 2)][(x + 2)]);  // lad2
          matriz = matriz + Number(numeroN[(y - 1)][(x + 2)]);  // lad1
          matriz = matriz + Number(numeroN[(y)][(x + 2)]);  // lf1
          matriz = matriz + Number(numeroN[(y + 1)][(x + 2)]);  // lbdf1
          matriz = matriz + Number(numeroN[(y + 2)][(x + 2)]);  // lbdf2
          //   }
          //   = (cargaMatriz(numeroN, columnaT, filasT, zonasT));
          console.log(matriz)
          if (matriz >= 15 && matriz <= 25) {
            if (numeroN[y - 1][x] == "1" && numeroN[y + 1][x] == "1") {
              break;
            }
          }
        }
        if (matriz >= 15 && matriz <= 25) {
          if (numeroN[y - 1][x] == "1" && numeroN[y + 1][x] == "1") { break; }
        }
      }
      if (matriz >= 15 && matriz <= 25) {
        if (numeroN[y - 1][x] == "1" && numeroN[y + 1][x] == "1") { break; }
      }
    }
    centro[0] = y;
    centro[1] = x;
    lpda2[0] = (y - 2);
    lpda2[1] = (x - 2);
    lpda[0] = (y - 1);
    lpda[1] = (x - 1);
    lad2[0] = (y - 2);
    lad2[1] = (x + 2);
    lad[0] = (y - 1);
    lad[1] = (x + 1);
    lpdb[0] = (y + 1);
    lpdb[1] = (x - 1);
    lpdb2[0] = (y + 2);
    lpdb2[1] = (x - 2);
    lbdf[0] = (y + 1);
    lbdf[1] = (x + 1);
    lbdf2[0] = (y + 2);
    lbdf2[1] = (x + 2);

    console.log(" centro " + centro)
    for (var q = 0; q <= 7; q++) {
      if (lpda2[1] == 0 || lad2 == columnaT) { break; }
      // diagonal de la izquierda arriba
      if (numeroN[lpda2[0]][lpda2[1]] == "1") {
        lpda2[0] = lpda2[0] - 1;
        lpda2[1] = lpda2[1] - 1;
      }
      if (numeroN[lpda2[0]][lpda2[1]] == "1") {
      } else if (numeroN[lpda2[0]][lpda2[1]] == "0") {
        numeroN[lpda2[0]][lpda2[1]] = "1";
        numeroN[lpda2[0]][lpda2[1] - 1] = "1";
      }
      // diagonal de la izquierda abajo
      if (numeroN[lpdb2[0]][lpdb2[1]] == "1") {
        lpdb2[0] = lpdb2[0] + 1;
        lpdb2[1] = lpdb2[1] - 1;
      }
      if (numeroN[lpdb2[0]][lpdb2[1]] == "1") {
      } else if (numeroN[lpdb2[0]][lpdb2[1]] == "0") {
        numeroN[lpdb2[0]][lpdb2[1]] = "1";
        numeroN[lpdb2[0]][lpdb2[1] - 1] = "1";
      }
      // diagonal de la derecha arriba
      if (numeroN[lad2[0]][lad2[1]] == "1") {
        lad2[0] = lad2[0] - 1;
        lad2[1] = lad2[1] + 1;
      }
      if (numeroN[lad2[0]][lad2[1]] == "1") {
      } else if (numeroN[lad2[0]][lad2[1]] == "0") {
        numeroN[lad2[0]][lad2[1]] = "1";
        numeroN[lad2[0]][lad2[1] + 1] = "1";
      }
      // diagonal de la derecha abajo
      if (numeroN[lbdf2[0]][lbdf2[1]] == "1") {
        lbdf2[0] = lbdf2[0] + 1;
        lbdf2[1] = lbdf2[1] + 1;
      }
      if (numeroN[lbdf2[0]][lbdf2[1]] == "1") {
      } else if (numeroN[lbdf2[0]][lbdf2[1]] == "0") {
        numeroN[lbdf2[0]][lbdf2[1]] = "1";
        numeroN[lbdf2[0]][lbdf2[1] + 1] = "1";
      }
    }

    centro[0] = y;
    centro[1] = x;
    lpda2[0] = (y - 2);
    lpda2[1] = (x - 2);
    lpda[0] = (y - 1);
    lpda[1] = (x - 1);
    lad2[0] = (y - 2);
    lad2[1] = (x + 2);
    lad[0] = (y - 1);
    lad[1] = (x + 1);
    lpdb[0] = (y + 1);
    lpdb[1] = (x - 1);
    lpdb2[0] = (y + 2);
    lpdb2[1] = (x - 2);
    lbdf[0] = (y + 1);
    lbdf[1] = (x + 1);
    lbdf2[0] = (y + 2);
    lbdf2[1] = (x + 2);
    for (var t = lpda2[0]; t <= lbdf2[0]; t++) {
      for (var r = lpda2[1]; r <= lad2[1]; r++) {
        if (numeroN[t][r] == '0') {
          numeroN[t][r] = '1';
        }
      }
    }

    console.log(" numero Nuevo ");
    console.log(numeroN);
    console.log(" matriz numero Nuevo de Ocho ");
    console.log(matriz);
    return numeroN;
  }
  unos = 0;
  ceros = 0;
  for (var i = 0; i <= nuevafila; i++) {
    for (var x = 0; x <= nuevacolumna; x++) {
      if (numeroverificar[i][x] == "1") {
        unos = unos + 1;
      } else {
        ceros = ceros + 1;
      };
    };
  };
  //--------------------------------------------------------------------------

  //-------------------------------------------------------------------------------------
  var i = 0;
  let tablaContornod = [];
  let tablaContornoi = [];
  var amedio = Math.trunc(nuevafila / 3);
  var ti = 0;
  var td = 0;
  for (var w = 0; w < tablaFinal.length; w++) {
    if (cerrados22 >= 1 || acerrados2 >= 1 || acerrados1 >= 1) {
      console.log(tablaFinal)
      if (tablaFinal[w][0] == ' S1 ' || tablaFinal[w][0] == ' S2 ') { } else {
        console.log(tablaFinal[w])
        if (tablaFinal[w][5] >= 5) {  // %+5
          if (tablaFinal[w][3] < nuevafila) {
            if (tablaFinal[w][2] > 0) {  // fila > 0
              if (tablaFinal[w][0] == '#I') {  // izquierda
                agujerosu = nuevaverificacion(ti, tablaFinal, w, numeroverificar, nuevafila, nuevacolumna, agujerosu, i, tablaContornoi);
                if ((agujerosu[i][0] == 0) && (agujerosu[i][1] == 0) && (agujerosu[i][2] == 0) && (agujerosu[i][3] == 0) && (agujerosu[i][4] == 0) && (agujerosu[i][5] == 0) && (agujerosu[i][6] == 0) && (agujerosu[i][7] == 0)) {
                  console.log(" No procesado ")
                  return numeroverificar
                }
                console.log(agujerosu)
                sumoAgujeros(w, tablaFinal[w][4], tablaFinal[w][5], agujerosu, tablaContornoi, i, numeroverificar, tablaFinal[w][0], nuevacolumna, unos3, tablaFinal[w][6], tablaFinal[w][7])
                i = i + 1;
              } else if (tablaFinal[w][0] == '#D') {
                agujerosu = nuevaverificacion(td, tablaFinal, w, numeroverificar, nuevafila, nuevacolumna, agujerosu, i, tablaContornod);
                console.log(i)
                if ((agujerosu[i][0] == 0) && (agujerosu[i][1] == 0) && (agujerosu[i][2] == 0) && (agujerosu[i][3] == 0) && (agujerosu[i][4] == 0) && (agujerosu[i][5] == 0) && (agujerosu[i][6] == 0) && (agujerosu[i][7] == 0)) {
                  console.log(" No procesado ")
                  return numeroverificar
                }
                console.log(agujerosu)
                sumoAgujeros(w, tablaFinal[w][4], tablaFinal[w][5], agujerosu, tablaContornod, i, numeroverificar, tablaFinal[w][0], nuevacolumna, unos3, tablaFinal[w][6], tablaFinal[w][7])
                i = i + 1;
              };
            } else {
              if (tablaFinal[w][0] !== 0) {
                agujerosu[i][0] = tablaFinal[w][0];
                agujerosu[i][1] = tablaFinal[w][1];
                agujerosu[i][2] = tablaFinal[w][2];
                agujerosu[i][3] = tablaFinal[w][3];
                agujerosu[i][4] = tablaFinal[w][4];
                agujerosu[i][5] = tablaFinal[w][5];
                agujerosu[i][6] = tablaFinal[w][6];
                agujerosu[i][7] = tablaFinal[w][7];
                i = i + 1;
              }
            };
          } else {
            if (tablaFinal[w][0] !== 0) {
              agujerosu[i][0] = tablaFinal[w][0];
              agujerosu[i][1] = tablaFinal[w][1];
              agujerosu[i][2] = tablaFinal[w][2];
              agujerosu[i][3] = tablaFinal[w][3];
              agujerosu[i][4] = tablaFinal[w][4];
              agujerosu[i][5] = tablaFinal[w][5];
              agujerosu[i][6] = tablaFinal[w][6];
              agujerosu[i][7] = tablaFinal[w][7];
              i = i + 1;
            }
          };
        } else {
          console.log('amedio ' + amedio)
          if (tablaFinal[w][2] > amedio
            && tablaFinal[w][3] < (nuevafila - amedio)
            && tablaFinal[w][5] > 2
            && tablaFinal[w][0] !== 0) {
            console.log("mueve por centro")
            agujerosu[i][0] = tablaFinal[w][0];
            agujerosu[i][1] = tablaFinal[w][1];
            agujerosu[i][2] = tablaFinal[w][2];
            agujerosu[i][3] = tablaFinal[w][3];
            agujerosu[i][4] = tablaFinal[w][4];
            agujerosu[i][5] = tablaFinal[w][5];
            agujerosu[i][6] = tablaFinal[w][6];
            agujerosu[i][7] = tablaFinal[w][7];
            i = i + 1;
          }
        };
      }
    } else {
      if (tablaFinal[w][5] > 1 && tablaFinal[w][0] !== 0) {
        agujerosu[i][0] = tablaFinal[w][0];
        agujerosu[i][1] = tablaFinal[w][1];
        agujerosu[i][2] = tablaFinal[w][2];
        agujerosu[i][3] = tablaFinal[w][3];
        agujerosu[i][4] = tablaFinal[w][4];
        agujerosu[i][5] = tablaFinal[w][5];
        agujerosu[i][6] = tablaFinal[w][6];
        agujerosu[i][7] = tablaFinal[w][7];
        i = i + 1;
      } else {
        if (tablaFinal[w][2] > amedio
          && tablaFinal[w][3] < (nuevafila - amedio)
          && tablaFinal[w][0] !== 0) {
          agujerosu[i][0] = tablaFinal[w][0];
          agujerosu[i][1] = tablaFinal[w][1];
          agujerosu[i][2] = tablaFinal[w][2];
          agujerosu[i][3] = tablaFinal[w][3];
          agujerosu[i][4] = tablaFinal[w][4];
          agujerosu[i][5] = tablaFinal[w][5];
          agujerosu[i][6] = tablaFinal[w][6];
          agujerosu[i][7] = tablaFinal[w][7];
          i = i + 1;
        }
      }
    };
  };
  console.log(agujerosu)
  console.log(' AGUJEROS SU DESPUES ')
  for (var w = 0; w < tablaFinal.length; w++) {
    if (acerrados1 == 1 || acerrados2 == 1) { // tiene que haber 1 cerrado
      if (aabiertos1 == 1 || aabiertos2 == 1) { // tiene que haber 1 abierto
        if (tablaFinal[w][0] == ' S1 ' || tablaFinal[w][0] == ' S2 ') { // busco el cerrado
          if (Number(tablaFinal[w][6]) == 1 // en zona 1 o,
            || Number(tablaFinal[w][6]) == 4 // en zona 4 o,
            || Number(tablaFinal[w][6]) == 7) {  // en zona 7
            for (var fr = 0; fr < agujerosu.length; fr++) { // busco en la tabla de salida que tiene solo el abierto
              if (agujerosu[fr][0] == "#I" || agujerosu[fr][0] == "#D") { // busco el abierto
                if (Number(agujerosu[fr][6]) == 5 || // en zona 5 o,
                  Number(agujerosu[fr][6]) == 3) { // en zona 3
                  if (cerrados22 >= 2 && aabiertos1 >= 1 && aabiertos2 >= 1) {
                    if (Number(agujerosu[fr][5]) <= 5) { // porcentaje menor igual a 5 pierdo
                      agujerosu[fr][0] = 0;
                      agujerosu[fr][1] = 0;
                      agujerosu[fr][2] = 0;
                      agujerosu[fr][3] = 0;
                      agujerosu[fr][4] = 0;
                      agujerosu[fr][5] = 0;
                      agujerosu[fr][6] = 0;
                      agujerosu[fr][7] = 0;
                      break;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  for (var w = 0; w < agujerosu.length; w++) {
    if (tablaFinal[w][0] == '#I' || tablaFinal[w][0] == '#D') { // busco el cerrado
      for (var fr = 0; fr < agujerosu.length; fr++) { // busco en la tabla de salida que tiene solo el abierto
        if (tablaFinal[w][0] == agujerosu[fr][0] && tablaFinal[w][2] !== agujerosu[fr][2]) { // busco el abierto
          if (Number(agujerosu[fr][6]) == tablaFinal[w][6]) { // en zona 3
            if (Number(agujerosu[fr][5]) < 3) { // porcentaje menor igual a 5 pierdo
              if ((Number(agujerosu[fr][2]) + 1) == Number(agujerosu[fr][3])) {
                agujerosu[fr][0] = 0;
                agujerosu[fr][1] = 0;
                agujerosu[fr][2] = 0;
                agujerosu[fr][3] = 0;
                agujerosu[fr][4] = 0;
                agujerosu[fr][5] = 0;
                agujerosu[fr][6] = 0;
                agujerosu[fr][7] = 0;
                break;
              }
            }
          }
        }
      }
    }
  }

  console.log(tablaFinal)
  console.log(agujerosu)
  var acmAA = 0;
  var señalBreak = 0;
  for (var w = 0; w < tablaFinal.length; w++) {
    señalBreak = 0;
    if (Number(tablaFinal[w][5]) >= 5) {  // %+10
      if (tablaFinal[w][0] == ' S1 ' || tablaFinal[w][0] == ' S2 ') {
        for (var fr = 0; fr < agujerosu.length; fr++) {
          for (var fr2 = 0; fr2 < agujerosu.length; fr2++) {
            if (agujerosu[fr2][0] == "#I" || agujerosu[fr2][0] == "#D") {
              if (Number(agujerosu[fr2][2]) == Number(tablaFinal[w][2])
                || Number(agujerosu[fr2][3]) == Number(tablaFinal[w][3])) {
                fr = fr2;
                break;
              }
            }
          }
          if (señalBreak == 0) {
            if (i < agujerosu.length) {
              if (Number(agujerosu[fr][4]) == 0) {
                acmAA = acmAA + 1
              } else {
                if (agujerosu[fr][0] == "#I" || agujerosu[fr][0] == "#D") {
                  if (Number(tablaFinal[w][2]) !== Number(agujerosu[fr][2])
                    && Number(tablaFinal[w][3]) !== Number(agujerosu[fr][3])) {
                    for (var f = 0; f < tablaFinal.length; f++) {
                      if (agujerosu[f][0] == tablaFinal[w][0]
                        && Number(agujerosu[f][2]) == Number(tablaFinal[w][2])
                        && Number(agujerosu[f][3]) == Number(tablaFinal[w][3])) {
                        señalBreak = 1;
                        break;
                      } else if (Number(agujerosu[f][2]) < Number(tablaFinal[w][2])
                        && Number(agujerosu[f][3]) > Number(tablaFinal[w][3])) {
                        señalBreak = 1;
                        break;
                      } else {
                        agujerosu[i][0] = tablaFinal[w][0];
                        agujerosu[i][1] = tablaFinal[w][1];
                        agujerosu[i][2] = tablaFinal[w][2];
                        agujerosu[i][3] = tablaFinal[w][3];
                        agujerosu[i][4] = tablaFinal[w][4];
                        agujerosu[i][5] = tablaFinal[w][5];
                        agujerosu[i][6] = tablaFinal[w][6];
                        agujerosu[i][7] = tablaFinal[w][7];
                        i = i + 1;
                        break;
                      }
                    }
                    break;
                  } else if (Number(tablaFinal[w][2]) == Number(agujerosu[fr][2])
                    || Number(tablaFinal[w][3]) == Number(agujerosu[fr][3])) {
                    // w = (tablaFinal.length + 1);
                    señalBreak = 1;
                    break;
                  }
                }
                if (acmAA == (agujerosu.length)) {
                  if (i > 0 && tablaFinal[w][3] !== agujerosu[i - 1][3]
                    || i > 0 && tablaFinal[w][2] !== agujerosu[i - 1][2]) {
                    agujerosu[i][0] = tablaFinal[w][0];
                    agujerosu[i][1] = tablaFinal[w][1];
                    agujerosu[i][2] = tablaFinal[w][2];
                    agujerosu[i][3] = tablaFinal[w][3];
                    agujerosu[i][4] = tablaFinal[w][4];
                    agujerosu[i][5] = tablaFinal[w][5];
                    agujerosu[i][6] = tablaFinal[w][6];
                    agujerosu[i][7] = tablaFinal[w][7];
                    i = i + 1;
                  } else if (i == 0) {
                    agujerosu[i][0] = tablaFinal[w][0];
                    agujerosu[i][1] = tablaFinal[w][1];
                    agujerosu[i][2] = tablaFinal[w][2];
                    agujerosu[i][3] = tablaFinal[w][3];
                    agujerosu[i][4] = tablaFinal[w][4];
                    agujerosu[i][5] = tablaFinal[w][5];
                    agujerosu[i][6] = tablaFinal[w][6];
                    agujerosu[i][7] = tablaFinal[w][7];
                    i = i + 1;
                  }
                }
              }
              if (acmAA == (agujerosu.length)) {

                if (i > 0 && tablaFinal[w][3] !== agujerosu[i - 1][3]
                  || i > 0 && tablaFinal[w][2] !== agujerosu[i - 1][2]) {
                  agujerosu[i][0] = tablaFinal[w][0];
                  agujerosu[i][1] = tablaFinal[w][1];
                  agujerosu[i][2] = tablaFinal[w][2];
                  agujerosu[i][3] = tablaFinal[w][3];
                  agujerosu[i][4] = tablaFinal[w][4];
                  agujerosu[i][5] = tablaFinal[w][5];
                  agujerosu[i][6] = tablaFinal[w][6];
                  agujerosu[i][7] = tablaFinal[w][7];
                  i = i + 1;
                } else if (i == 0) {
                  agujerosu[i][0] = tablaFinal[w][0];
                  agujerosu[i][1] = tablaFinal[w][1];
                  agujerosu[i][2] = tablaFinal[w][2];
                  agujerosu[i][3] = tablaFinal[w][3];
                  agujerosu[i][4] = tablaFinal[w][4];
                  agujerosu[i][5] = tablaFinal[w][5];
                  agujerosu[i][6] = tablaFinal[w][6];
                  agujerosu[i][7] = tablaFinal[w][7];
                  i = i + 1;
                }

              }
            }
          } else { break }
        }
      }
    }
  }

  console.log(numeroverificar);
  console.log(agujerosu);
  console.log(nuevacolumna);
  //console.log(tablaContornoi);
  //  console.log(tablaContornod);
  console.log(' tabla final agujeros ');
  console.log(tablaFinal);
  console.log(agujerosu);

  for (var g = 0; g < nuevafila; g++) {
    numeroverificar[g] = numeroverificar[g] + '\r\n';
  }
  numeroverificar = numeroverificar;
  let muestroNumero4 = document.getElementById("numero-completo");
  muestroNumero4.innerHTML = numeroverificar;



  //  tablaFinal[w][0] = 0;  // iz - der - s1 - s2
  //  tablaFinal[w][1] = 0;  // num agu
  //  tablaFinal[w][2] = 0;  // fila principio
  //  tablaFinal[w][3] = 0;  // fila final
  //  tablaFinal[w][4] = 0;  // cant de ceros
  //  tablaFinal[w][5] = 0;  // porcentaje
  //  tablaFinal[w][6] = 0;  // zona comienzo
  //  tablaFinal[w][7] = 0;  // zona final

  // tablaLimites1[x][0] = 0; // num
  // tablaLimites1[x][1] = 0; // carac
  // tablaLimites1[x][2] = 0; // zona
  // tablaLimites1[x][3] = 0; // curva inicio
  // tablaLimites1[x][4] = 0; // curva final
  // tablaLimites1[x][5] = 0; // menores
  // tablaLimites1[x][6] = 0; // cam inicio
  // tablaLimites1[x][7] = 0; // cam final
  // tablaLimites1[x][8] = 0; // menores 2
  // tablaLimites1[x][9] = 0; // n/r

  var ttt = 0;
  var ppp = 0;
  var agujerosRetornosVarios = [];
  var agujerosRetorno;
  var sumaxzona = 0;
  // \PruebasVSC\EneroReconocedor.js
  let resultadoNumero = new Array()
  for (var gg = 0; gg <= 9; gg++) {
    resultadoNumero[gg] = new Array(2);
    resultadoNumero[gg][0] = 0;
    resultadoNumero[gg][1] = '\r\n';
  };
  var rr = 0;
  for (var o = 0; o <= 9; o++) {
    ttt = 0;
    sumaxzona = 0;
    agujerosRetornosVarios[0] = 0;
    agujerosRetornosVarios[1] = 0;
    for (var g = 0; g <= 8; g++) {
      if (tablaLimites1[ppp][1] == '00' && Number(tablaLimites1[ppp][4]) !== 0) {
        if (Number(unosxzonaYX[g][8]) == Number(tablaLimites1[ppp][2])) {  // zona == zona
          if (Number(unosxzonaYX[g][3]) <= Number(tablaLimites1[ppp][4])) {
            if (Number(unosxzonaYX[g][3]) >= Number(tablaLimites1[ppp][3])) {
              ttt = ttt + 1;
              sumaxzona = sumaxzona + Number(tablaLimites1[ppp][0]) + Number(tablaLimites1[ppp][13]);
              //    console.log(" sumaxzona" + sumaxzona)
              if (ttt == 9) {
                agujerosRetornosVarios = verificarCaracteristicas(sumaxzona, tablaLimites1, agujerosu, ppp);
                agujerosRetorno = agujerosRetornosVarios[0];
                sumaxzona = agujerosRetornosVarios[1];
                //   
                if (agujerosRetorno == 1) {
                  if (163 <= sumaxzona <= 166) { //  0
                    resultadoNumero[rr] = ' SI ES UN ' + o + '\r\n';
                    rr = rr + 1;
                    sumaxzona = 0;
                    console.log(resultadoNumero[rr])
                  } else if (157 <= sumaxzona <= 160) { //  1
                    resultadoNumero[rr] = ' SI ES UN ' + o + '\r\n';
                    rr = rr + 1;
                    sumaxzona = 0;
                    console.log(resultadoNumero[rr])
                  } else if (187 <= sumaxzona <= 190) { //  2
                    resultadoNumero[rr] = ' SI ES UN ' + o + '\r\n';
                    rr = rr + 1;
                    sumaxzona = 0;
                    console.log(resultadoNumero[rr])
                  } else if (197 <= sumaxzona <= 200) { //  3
                    resultadoNumero[rr] = ' SI ES UN ' + o + '\r\n';
                    rr = rr + 1;
                    sumaxzona = 0;
                    console.log(resultadoNumero[rr])
                  } else if (209 <= sumaxzona <= 218) { //  4
                    resultadoNumero[rr] = ' SI ES UN ' + o + '\r\n';
                    rr = rr + 1;
                    sumaxzona = 0;
                    console.log(resultadoNumero[rr])
                  } else if (241 <= sumaxzona <= 244) { //  5
                    resultadoNumero[rr] = ' SI ES UN ' + o + '\r\n';
                    rr = rr + 1;
                    sumaxzona = 0;
                    console.log(resultadoNumero[rr])
                  } else if (271 <= sumaxzona <= 277) { //  6
                    resultadoNumero[rr] = ' SI ES UN ' + o + '\r\n';
                    rr = rr + 1;
                    sumaxzona = 0;
                    console.log(resultadoNumero[rr])
                  } else if (255 <= sumaxzona <= 258) { //  7
                    resultadoNumero[rr] = ' SI ES UN ' + o + '\r\n';
                    rr = rr + 1;
                    sumaxzona = 0;
                    console.log(resultadoNumero[rr])
                  } else if (302 <= sumaxzona <= 322) { //  8
                    resultadoNumero[rr] = ' SI ES UN ' + o + '\r\n';
                    rr = rr + 1;
                    sumaxzona = 0;
                    console.log(resultadoNumero[rr])
                  } else if (323 <= sumaxzona <= 332) { //  9
                    resultadoNumero[rr] = ' SI ES UN ' + o + '\r\n';
                    rr = rr + 1;
                    sumaxzona = 0;
                    console.log(resultadoNumero[rr])
                  }
                } else {
                  resultadoNumero[rr] = ' NO ES UN ' + o + '\r\n';
                  rr = rr + 1;
                  sumaxzona = 0;
                  console.log(resultadoNumero[rr])
                };
                sumaxzona = 0;
              }
            }
          }
        };
      };
      if (ppp < tablaLimites1.length) {
        ppp = ppp + 1;
      };
    };
    for (var pw = 0; pw < 28; pw++) {
      if (ppp < (tablaLimites1.length - 1)) {
        if (tablaLimites1[ppp + 1][0] == tablaLimites1[ppp][0] && tablaLimites1[ppp][1] !== '00') {
          ppp = ppp + 1;
        } else if (tablaLimites1[ppp + 1][0] !== tablaLimites1[ppp][0]) { pw = 30; };
      };
      if (ppp < tablaLimites1.length) {
        ppp = ppp + 1;
      };
    };
  };

  console.log(resultadoNumero);
}; // fin de funcion mostrarContenido

// -------- FUNCION NUEVA VERIFICACIÓN -----------------
function nuevaverificacion(t, agujeroAbierto, i, numeroString, filas, columnatotal, nuevoagujero, m, tablaNueva) {
  //  console.log(" nueva verificacion ")
  if (agujeroAbierto[i][0] == '#I') {
    var numerocuadranre = "1";
    var columna = 0;
    //    console.log(" A G U J E R O   DE  LA   I Z Q U I E R D A +++++++++++++++++++++++++++++")
  } else if (agujeroAbierto[i][0] == '#D') {
    var numerocuadranre = "4";
    var columna = columnatotal;
    //    console.log(" A G U J E R O   DE  LA   D E R E C H A +++++++++++++++++++++++++++++")
  };
  //------------ C U A D R A N T E 1 --------------------------------------------------------------
  var c1 = Array();
  for (var x = 0; x <= 5000; x++) {
    c1[x] = "000000";
  };
  c1[1000] = "000002";
  c1[1001] = "00-110";// // corregido
  c1[1002] = "000002";
  c1[1020] = "000002";
  c1[1010] = "+10010";// corregido  00-110
  c1[1012] = "00-110";// corregido
  c1[1011] = "00-110";
  c1[1021] = "00-110";
  c1[1022] = "000002";
  c1[1033] = "000002";
  c1[1100] = "+10010";// corregido
  c1[1101] = "+1-110";
  c1[1102] = "+1-110";
  c1[1110] = "+10010";
  c1[1111] = "000002";
  c1[1112] = "000002";
  c1[1120] = "+10010";
  c1[1121] = "000002";
  c1[1122] = "000002";// corregido
  c1[1200] = "000002";
  c1[1201] = "+1-110";// corregido
  c1[1202] = "000002";
  c1[1210] = "+10010";// corregido
  c1[1211] = "000002";
  c1[1212] = "000002";
  c1[1220] = "000002";
  c1[1221] = "000002";// corregido
  c1[1222] = "000002";
  c1[1233] = "000002";
  c1[1133] = "000002";
  //------------ C U A D R A N T E 2 --------------------------------------------------------------
  c1[2000] = "000003";
  c1[2001] = "+10010";// corregido
  c1[2002] = "000003";
  c1[2020] = "000003";
  c1[2010] = "00+110";// corregido +10010
  c1[2012] = "+10010";// corregido
  c1[2011] = "+10010";
  c1[2021] = "+10010";
  c1[2022] = "000003";
  c1[2100] = "00+110";// corregido
  c1[2101] = "+1+110";
  c1[2102] = "+1+110";
  c1[2110] = "00+110";
  c1[2111] = "000003";
  c1[2112] = "000003";
  c1[2120] = "00+110";
  c1[2121] = "000003";
  c1[2122] = "000003";// corregido
  c1[2200] = "000003";
  c1[2201] = "+1+110";// corregido 
  c1[2202] = "000003";
  c1[2210] = "00+110";// corregido
  c1[2211] = "000003";
  c1[2212] = "000003";
  c1[2220] = "000003";
  c1[2221] = "000003";// corregido
  c1[2222] = "000003";
  c1[2330] = "000003";
  c1[2331] = "000003";
  //------------ C U A D R A N T E 3 --------------------------------------------------------------
  c1[3000] = "000004";
  c1[3001] = "00+110";// corregido
  c1[3002] = "000004";
  c1[3020] = "000004";
  c1[3010] = "-10010";// corregido  00+110
  c1[3012] = "00+110";// corregido
  c1[3011] = "00+110";
  c1[3021] = "00+110";
  c1[3022] = "000004";
  c1[3100] = "-10010";// corregido
  c1[3101] = "-1+110";
  c1[3102] = "-1+110";
  c1[3110] = "-10010";
  c1[3111] = "000004";
  c1[3112] = "000004";
  c1[3120] = "-10010";
  c1[3121] = "000004";
  c1[3122] = "000004";// corregido
  c1[3200] = "000004";// corregido
  c1[3201] = "-1+110";// corregido
  c1[3202] = "000004";
  c1[3210] = "-10010";// corregido
  c1[3211] = "000004";
  c1[3212] = "000004";
  c1[3220] = "000004";
  c1[3221] = "000004";// corregido
  c1[3222] = "000004";
  //------------ C U A D R A N T E 4 --------------------------------------------------------------
  c1[4000] = "000001";
  c1[4001] = "-10010";// corregido
  c1[4002] = "000001";
  c1[4010] = "00-110";// corregido  -10010
  c1[4012] = "-10010";// corregido
  c1[4011] = "-10010";
  c1[4020] = "000001";
  c1[4021] = "-10010";
  c1[4022] = "000001";
  c1[4100] = "00-110";// corregido
  c1[4101] = "-1-110";
  c1[4102] = "-1-110";
  c1[4110] = "00-110";
  c1[4111] = "000001";
  c1[4112] = "000001";
  c1[4120] = "00-110";
  c1[4121] = "000001";
  c1[4122] = "000001";// corregido
  c1[4200] = "000001";
  c1[4201] = "-1-110";// corregido
  c1[4202] = "000001";
  c1[4210] = "00-110";// corregido
  c1[4211] = "000001";
  c1[4212] = "000001";
  c1[4220] = "000001";
  c1[4221] = "000001";// corregido
  c1[4222] = "000001";
  //--------------------------------------------------------------------------------------4
  var tablaIndeterminacion = new Array();
  for (var zx = 0; zx < 5000; zx++) {
    tablaIndeterminacion[zx] = new Array(3);
    tablaIndeterminacion[zx][0] = 0;  // indeterminacion
    tablaIndeterminacion[zx][1] = 0;  // fila
    tablaIndeterminacion[zx][2] = 0;  // columna
  }
  var s = 0;
  //-----------------------------------------------
  var lpda = 0;
  var la = 0;
  var lad = 0;
  var lp = 0;
  var centro = 0;
  var lf = 0;
  var lpdb = 0;
  var lb = 0;
  var lbdf = 0;
  var retorno1 = [];
  var retornoIn = [];
  var filacomienzo = agujeroAbierto[i][2];
  var salvafilaComienzo = filacomienzo;
  var filafinal = agujeroAbierto[i][3];
  var salvafilaFinal = filafinal;
  var union = 0;
  var trabajo = "000000";
  var verX;
  var verY;
  var rema = 1;
  var camc2 = 0;
  var camc = 0;
  var prueba1;
  var señalC1 = 0;
  var prueba2;
  var retrocedo1 = 0;
  var retrocedo2 = 0;
  var retrocedo3 = 0;
  var retrocedo4 = 0;
  var salvaFil = 0;
  var salvaCol = 0;
  var cuadrantesEliminados = 0;
  let termino = [];
  nuevoagujero[m][0] = agujeroAbierto[i][0];  // iz - der - s1 - s2
  nuevoagujero[m][1] = agujeroAbierto[i][1];  // num agu
  nuevoagujero[m][6] = agujeroAbierto[i][6];  // zona 
  nuevoagujero[m][7] = agujeroAbierto[i][7];  // zona
  if (agujeroAbierto[i][0] == '#I') {
    var numerocuadranre = "1";
  } else if (agujeroAbierto[i][0] == '#D') {
    console.log(" agujero derecha ")
    var numerocuadranre = "4";
  };
  if (filacomienzo == 0) { filacomienzo = filacomienzo + 1; }
  if (numeroString[filacomienzo - 1][columna] == "1" || numeroString[filacomienzo - 1][columnatotal] == "1") {
    var cuenta = Number(filas) * Number(columnatotal);
    for (var q = 0; q <= 10000; q++) {
      console.log("fila 1ra " + filacomienzo)
      trabajo = '';
      if (columna < 0 || columna > columnatotal) { break };
      if (rema == 1) {
        retorno1 = (cargaojovisor(lpda, la, lad, lp, centro, lf, lpdb, lb, lbdf, filacomienzo, columna, numeroString, columnatotal, rema, filas));
        if (retorno1 == 7 && (filacomienzo !== salvafilaComienzo) && (columna !== 0) && (columna !== columnatotal)) {
          console.log(" retorno 0")
          //  console.log("--------------- RETORNO 7 == SALGO DE LA FUNCIÓN ---------------")
          nuevoagujero[m][0] = 0;  // cant de ceros
          nuevoagujero[m][1] = 0;  // porcentaje
          nuevoagujero[m][2] = 0;  // zona comienzo
          nuevoagujero[m][3] = 0;  // zona final
          nuevoagujero[m][4] = 0;  // cant de ceros
          nuevoagujero[m][5] = 0;  // porcentaje
          nuevoagujero[m][6] = 0;  // zona comienzo
          nuevoagujero[m][7] = 0;  // zona final
          return nuevoagujero;
        } else if (((rema == 7) && (filacomienzo == salvafilaComienzo) && (columna == 0))
          || ((rema == 7) && (filacomienzo == salvafilaComienzo) && (columna == columnatotal))) {
          nuevoagujero[m][4] = 0;  // cant de ceros
          nuevoagujero[m][5] = 0;  // porcentaje
          nuevoagujero[m][6] = 0;  // zona comienzo
          nuevoagujero[m][7] = 0;  // zona final
          return nuevoagujero;
        }
        if (rema == 1) {
          console.log(retorno1)
          lpda = retorno1[0];
          la = retorno1[1];
          lad = retorno1[2];
          lp = retorno1[3];
          centro = retorno1[4];
          lf = retorno1[5];
          lpdb = retorno1[6];
          lb = retorno1[7];
          lbdf = retorno1[8];
        };
        if (numerocuadranre == '1') {
          union = numerocuadranre + la + lad + lf;
        } else if (numerocuadranre == '2') {
          union = numerocuadranre + lf + lbdf + lb;
        } else if (numerocuadranre == '3') {
          union = numerocuadranre + lb + lpdb + lp;
        } else if (numerocuadranre == '4') {
          union = numerocuadranre + lp + lpda + la;
        };
        console.log("c1 " + c1[[Number(union)]])
        console.log("union " + union)
        trabajo = c1[Number(union)];
        console.log(" trabajo 1er " + trabajo)
        prueba1 = filacomienzo;
        prueba2 = columna;
        retrocedo1 = la + lad + lf;
        retrocedo2 = lf + lbdf + lb;
        retrocedo3 = lb + lpdb + lp;
        retrocedo4 = lp + lpda + la;
      };
      console.log(numeroString)
      if (rema == 0) {
        trabajo = c1[Number(union)];
        console.log("trabajo 2 " + trabajo)
        retrocedo1 = la + lad + lf;
        retrocedo2 = lf + lbdf + lb;
        retrocedo3 = lb + lpdb + lp;
        retrocedo4 = lp + lpda + la;
        if (trabajo == "000001") {
          numerocuadranre = "1";
          filacomienzo = prueba1;
          columna = prueba2;
          union = numerocuadranre + la + lad + lf;
          trabajo = c1[Number(union)];
          señalC1 = union.substring(0, 1);
          cuadrantesEliminados = Number(cuadrantesEliminados) + 1;
          //  retrocedo1 = union.substring(1);
          console.log("Cuadrante 1 " + union)
        } else if (trabajo == "000002") {
          numerocuadranre = "2";
          filacomienzo = prueba1;
          columna = prueba2;
          union = numerocuadranre + lf + lbdf + lb;
          trabajo = c1[Number(union)];
          señalC1 = union.substring(0, 1);
          cuadrantesEliminados = Number(cuadrantesEliminados) + 1;
          //  retrocedo2 = union.substring(1);
          console.log("Cuadrante 2 " + union)
        } else if (trabajo == "000003") {
          numerocuadranre = "3";
          filacomienzo = prueba1;
          columna = prueba2;
          union = numerocuadranre + lb + lpdb + lp;
          trabajo = c1[Number(union)];
          señalC1 = union.substring(0, 1);
          cuadrantesEliminados = Number(cuadrantesEliminados) + 1;
          //  retrocedo3 = union.substring(1);
          console.log("Cuadrante 3 " + union)
        } else if (trabajo == "000004") {
          numerocuadranre = "4";
          filacomienzo = prueba1;
          columna = prueba2;
          union = numerocuadranre + lp + lpda + la;
          trabajo = c1[Number(union)];
          señalC1 = union.substring(0, 1);
          cuadrantesEliminados = Number(cuadrantesEliminados) + 1;
          //  retrocedo4 = union.substring(1);
          console.log("Cuadrante 4 " + union)
        } else { cuadrantesEliminados = 0; };
      };
      if (retrocedo1 == "110" || retrocedo1 == "010" || retrocedo1 == "100" || retrocedo1 == "001"
        || retrocedo2 == "110" || retrocedo2 == "010" || retrocedo2 == "100" || retrocedo2 == "001"
        || retrocedo3 == "110" || retrocedo3 == "010" || retrocedo3 == "100" || retrocedo3 == "001"
        || retrocedo4 == "110" || retrocedo4 == "010" || retrocedo4 == "100" || retrocedo4 == "001") {
        console.log(" INDETERMINACION 1 " + retrocedo1)
        console.log(" INDETERMINACION 2 " + retrocedo2)
        console.log(" INDETERMINACION 3 " + retrocedo3)
        console.log(" INDETERMINACION 4 " + retrocedo4)
        señalC1 = union.substring(0, 1);
        cuadrantesEliminados = Number(cuadrantesEliminados) + 1;
        salvaFil = prueba1;
        salvaCol = prueba2;
        camc2 = union.substring(0, 1);
        tablaIndeterminacion[s][0] = union;
        tablaIndeterminacion[s][1] = salvaFil;
        tablaIndeterminacion[s][2] = salvaCol;
        s = s + 1;
      }

      console.log("cuadrantes eliminados " + cuadrantesEliminados)
      if (cuadrantesEliminados == 8) {
        console.log(" tabla de indeterminaciones ")
        console.log(tablaIndeterminacion)
        for (var h = 4999; h >= 0; h--) {
          if (tablaIndeterminacion[h][0] !== 0) {
            termino = (revisoIndeterminaciones(tablaIndeterminacion[h], numeroString, c1, h));
            function revisoIndeterminaciones(tablaI, numerS, tablaD, h) {
              let tablaRet = [];
              var Ymovido = 0;
              var Xmovido = 0;
              var nuevoCua = 0;
              var union2 = 0;
              tablaRet[0]; // continuo relleno
              tablaRet[1]; // cuadrante
              tablaRet[2]; // fila del cero
              tablaRet[3]; // columna del cero
              tablaRet[4]; // columna del cero
              console.log(tablaI)
              union2 = tablaI[0];
              console.log(union2)
              nuevoCua = union2.substring(0, 1);
              Ymovido = tablaI[1];
              Xmovido = tablaI[2];
              tablaI[0] = 0;
              tablaI[1] = 0;
              tablaI[2] = 0;
              // devuelvo valores nuevos
              tablaRet[0] = 1;
              tablaRet[1] = nuevoCua; // cuadrante
              tablaRet[2] = Ymovido; // fila del cero
              tablaRet[3] = Xmovido; // columna del cero
              tablaRet[4] = tablaI; // columna del cero
              return tablaRet;
            }
            var salvaH = h;
            break
          }
        }
        if (tablaIndeterminacion[0][0] == 0) {
          break;
        }
        numerocuadranre = termino[1];
        filacomienzo = termino[2];
        columna = termino[3];
        tablaIndeterminacion[salvaH] = termino[4];

        // rearmo los cuadrantes
        retornoIn = (cargaojovisorInde(lpda, la, lad, lp, centro, lf, lpdb, lb, lbdf, filacomienzo, columna, numeroString, columnatotal, rema, filas));
        lpda = retornoIn[0];
        la = retornoIn[1];
        lad = retornoIn[2];
        lp = retornoIn[3];
        centro = retornoIn[4];
        lf = retornoIn[5];
        lpdb = retornoIn[6];
        lb = retornoIn[7];
        lbdf = retornoIn[8];
        // armo 
        if (numerocuadranre == "1") {
          union = numerocuadranre + la + lad + lf;
        } else if (numerocuadranre == "2") {
          union = numerocuadranre + lf + lbdf + lb;
        } else if (numerocuadranre == "3") {
          union = numerocuadranre + lb + lpdb + lp;
        } else if (numerocuadranre == "4") {
          union = numerocuadranre + lp + lpda + la;
        };
        trabajo = c1[Number(union)];
        cuadrantesEliminados = 0;
        rema = trabajo.substring(4, 5);
      } else if (cuadrantesEliminados > 8) {
        for (var g = 0; g < tablaIndeterminacion.length; g++) {
          if (filacomienzo == tablaIndeterminacion[g][1]
            && columna == tablaIndeterminacion[g][2]) {
            tablaIndeterminacion[g][0] = 0;
            tablaIndeterminacion[g][1] = 0;
            tablaIndeterminacion[g][2] = 0;
          }
        }
        cuadrantesEliminados = 0;
      }
      console.log("rema " + rema)
      console.log("trabajo " + trabajo)
      if (columna < 0 || columna > columnatotal) { break };
      verX = trabajo.substring(0, 2);
      verY = trabajo.substring(2, 4);
      rema = trabajo.substring(4, 5);
      camc = trabajo.substring(5);
      console.log("verX " + verX)
      console.log("verY " + verY)
      console.log("trabajo " + trabajo)
      console.log("filacomienzo " + filacomienzo)
      console.log("columna " + columna)

      if (columna == 0 && filacomienzo == filafinal || columna == columnatotal && filacomienzo == filafinal) {
        numeroString[filacomienzo][columna] = "2";
        var numero = filacomienzo.toString().padStart(2, '0') + columna.toString().padStart(2, '0');
        tablaNueva[Number(numero)] = 1;
        if (numeroString[filacomienzo][columna] == "0") {
          cuadrantesEliminados = 0;
        } else if (Number(verY) !== 0 || Number(verX) !== 0) {
          cuadrantesEliminados = 0;
        }
        console.log(tablaIndeterminacion)
        for (var h = 4999; h >= 0; h--) {
          //console.log(h)
          if (tablaIndeterminacion[h][0] !== 0) {
            termino = (revisoIndeterminaciones(tablaIndeterminacion[h], numeroString, c1, h));
            function revisoIndeterminaciones(tablaI, numerS, tablaD, h) {
              let tablaRet = [];
              var Ymovido = 0;
              var Xmovido = 0;
              var nuevoCua = 0;
              var union2 = 0;
              tablaRet[0]; // continuo relleno
              tablaRet[1]; // cuadrante
              tablaRet[2]; // fila del cero
              tablaRet[3]; // columna del cero
              tablaRet[4]; // columna del cero
              console.log(tablaI)
              union2 = tablaI[0];
              console.log(union2)
              nuevoCua = union2.substring(0, 1);
              Ymovido = tablaI[1];
              Xmovido = tablaI[2];
              tablaI[0] = 0;
              tablaI[1] = 0;
              tablaI[2] = 0;
              // devuelvo valores nuevos
              tablaRet[0] = 1;
              tablaRet[1] = nuevoCua; // cuadrante
              tablaRet[2] = Ymovido; // fila del cero
              tablaRet[3] = Xmovido; // columna del cero
              tablaRet[4] = tablaI; // columna del cero
              return tablaRet;
            }
            var salvaH = h;
            break
          } else if (tablaIndeterminacion[0][0] == 0) {
            termino[0] = 0;
          }
        }
        if (termino[0] == 0) {
          break;
        } else {
          numerocuadranre = termino[1];
          filacomienzo = termino[2];
          columna = termino[3];
          tablaIndeterminacion[salvaH] = termino[4];
          // rearmo los cuadrantes
          retornoIn = (cargaojovisorInde(lpda, la, lad, lp, centro, lf, lpdb, lb, lbdf, filacomienzo, columna, numeroString, columnatotal, rema, filas));
          lpda = retornoIn[0];
          la = retornoIn[1];
          lad = retornoIn[2];
          lp = retornoIn[3];
          centro = retornoIn[4];
          lf = retornoIn[5];
          lpdb = retornoIn[6];
          lb = retornoIn[7];
          lbdf = retornoIn[8];
          // armo 
          if (numerocuadranre == "1") {
            union = numerocuadranre + la + lad + lf;
          } else if (numerocuadranre == "2") {
            union = numerocuadranre + lf + lbdf + lb;
          } else if (numerocuadranre == "3") {
            union = numerocuadranre + lb + lpdb + lp;
          } else if (numerocuadranre == "4") {
            union = numerocuadranre + lp + lpda + la;
          };
          // Armo numero para ver donde muevo
          console.log("trabajo " + trabajo)
          trabajo = c1[Number(union)];
          verX = trabajo.substring(0, 2);
          verY = trabajo.substring(2, 4);
          rema = trabajo.substring(4, 5);
          console.log("verX " + verX)
          console.log("verY " + verY)
          prueba1 = filacomienzo;
          prueba2 = columna;
          numeroString[filacomienzo][columna] = "2";
          console.log("numeroString[filacomienzo][columna] " + numeroString[filacomienzo][columna])
          filacomienzo = Number(filacomienzo) + Number(verY);
          columna = Number(columna) + Number(verX);
        }
      } else if (columna >= 0) {
        console.log(" COLUMNA >= 0 MUEVE 2")
        if (numeroString[filacomienzo][columna] == "0") {
          cuadrantesEliminados = 0;
        } else if (Number(verY) !== 0 || Number(verX) !== 0) {
          cuadrantesEliminados = 0;
        }
        var numero = filacomienzo.toString().padStart(2, '0') + columna.toString().padStart(2, '0');
        tablaNueva[Number(numero)] = 1;
        console.log("filacomienzo " + filacomienzo)
        console.log("columna " + columna)
        numeroString[filacomienzo][columna] = "2";
        prueba1 = filacomienzo;
        prueba2 = columna;
        console.log("numeroString[filacomienzo][columna] " + numeroString[filacomienzo][columna])
        filacomienzo = Number(filacomienzo) + Number(verY);
        columna = Number(columna) + Number(verX);
        nuevoagujero[m][2] = salvafilaComienzo;
        nuevoagujero[m][3] = salvafilaFinal;
        console.log("filacomienzo " + filacomienzo)
        console.log("columna " + columna)
      } else if (columna < 0 || columna > columnatotal) { break };
    };
  } else {
    nuevoagujero[m][0] = agujeroAbierto[i][0];  // iz - der - s1 - s2
    nuevoagujero[m][1] = agujeroAbierto[i][1];  // num agu
    nuevoagujero[m][4] = 0;  // cant de ceros
    nuevoagujero[m][5] = 0;  // porcentaje
    nuevoagujero[m][6] = agujeroAbierto[i][6];  // zona 
    nuevoagujero[m][7] = agujeroAbierto[i][7];  // zona
    console.log(" retorno 1")
    return nuevoagujero
  }
  nuevoagujero[m][4] = 0;  // cant de ceros
  nuevoagujero[m][5] = 0;  // porcentaje
  nuevoagujero[m][6] = 0;  // zona comienzo
  nuevoagujero[m][7] = 0;  // zona final
  console.log(" retorno 2")
  return nuevoagujero;
};// fin de funcion nueva verificación 

// --------------- FUNCION SUMA CEROS NUEVAMENTE --------------------------------
function sumoAgujeros(r, tablafc, tablaff, agujeroc, tablaContor, w, numeroverificar, DoI, colfin, totalnumero, zonaI, zonaFf) {
  console.log(agujeroc)
  console.log(w)
  var nohacer = 0;
  console.log(agujeroc[w][2])
  console.log(agujeroc[w][3])
  console.log(DoI)
  for (var rt = Number(agujeroc[w][2]); rt <= Number(agujeroc[w][3]); rt++) {
    if (DoI == "#I") {
      if (numeroverificar[Number(agujeroc[w][2])][1] == "2" || numeroverificar[Number(agujeroc[w][2]) - 1][0] == "2" || numeroverificar[Number(agujeroc[w][2]) + 1][0] == "2") {
        if (numeroverificar[rt][0] == "0") {
          var ccll = 0;
          numeroverificar[rt][ccll] = "2";
          var numero = rt.toString().padStart(2, '0') + ccll.toString().padStart(2, '0');
          tablaContor[Number(numero)] = 1;
        }
      } else {
        agujeroc[w][0] = agujeroc[w][0];
        agujeroc[w][1] = agujeroc[w][1];
        agujeroc[w][2] = agujeroc[w][2];
        agujeroc[w][3] = agujeroc[w][3];
        agujeroc[w][4] = tablafc;
        agujeroc[w][5] = tablaff;
        agujeroc[w][6] = zonaI;
        agujeroc[w][7] = zonaFf;
        nohacer = 5;
        //return agujeroc;
      }
    } else if (DoI == "#D") {
      if (numeroverificar[Number(agujeroc[w][2])][colfin - 1] == "2") {
        if (numeroverificar[rt][colfin] == "0") {
          numeroverificar[rt][colfin] = "2";
          var numero = rt.toString().padStart(2, '0') + colfin.toString().padStart(2, '0');
          tablaContor[Number(numero)] = 1;
        }
      } else {
        if (numeroverificar[Number(agujeroc[w][2])][colfin] == "2") {
          if (numeroverificar[rt + 1][colfin] == "2" || numeroverificar[rt - 1][colfin] == "2") {
            numeroverificar[rt][colfin] = "2";
            var numero = rt.toString().padStart(2, '0') + colfin.toString().padStart(2, '0');
            tablaContor[Number(numero)] = 1;
          }
          //  if (numeroverificar[Number(agujeroc[w][2])][colfin] == "2") {
          //   numeroverificar[rt][colfin] = "0";
        }
        //  agujeroc[w][0] = agujeroc[w][0];
        //  agujeroc[w][1] = agujeroc[w][1];
        //   agujeroc[w][2] = agujeroc[w][2];
        //  agujeroc[w][3] = agujeroc[w][3];
        //   agujeroc[w][4] = tablafc;
        //  agujeroc[w][5] = tablaff;
        //   agujeroc[w][6] = zonaI;
        //   agujeroc[w][7] = zonaFf;
        //  nohacer = 5;
        //return agujeroc;
      }
    }
  }
  console.log(numeroverificar);
  // console.log(tablaContor);
  if (nohacer !== 5) {
    var fs = 0;
    var cs = 0;
    var fs2 = 0;
    var cs2 = 0;
    var tams2;
    var ff = 0;
    var fmu = 0;
    var sen = 0;
    var acumxfila = 0;
    var tams;
    let vertabla = new Array();
    for (var mk = 0; mk <= 2000; mk++) {
      vertabla[mk] = new Array(2);
      vertabla[mk][0] = 0;
      vertabla[mk][1] = 0;
    };
    var s2 = 0;
    for (var s = 0; s <= tablaContor.length; s++) {
      if (tablaContor[s] == "1") { // primer fila columna
        tams = s.toString().padStart(4, '0');
        fs = tams.substring(0, 2);  // fila
        cs = tams.substring(2); // col
        ff = fs;  // fila fnal
        sen = (Number(fs) + 1) + "0" + "0";
        s2 = s + 1;
        for (var mt = Number(s2); mt < Number(sen); mt++) {
          if (tablaContor[mt] == "1") { // 
            tams2 = mt.toString().padStart(4, '0');
            fs2 = tams2.substring(0, 2);  // fila
            cs2 = tams2.substring(2); // col
          }; s = s + 1;
        };
        for (var gn = cs; gn <= cs2; gn++) {
          if (numeroverificar[Number(fs)][Number(gn)] == "2") {
            acumxfila = acumxfila + 1;
          } else if (numeroverificar[Number(fs)][Number(gn)] == "0") {
            acumxfila = acumxfila + 1;
          };
        };
        if (fmu == 0) {
          agujeroc[w][2] = ff; // fila de comienzo 
          fmu = 1;
        }
        agujeroc[w][3] = ff;
        agujeroc[w][4] = acumxfila;
        var porcentajefinal = (agujeroc[w][4] * 100);
        //console.log("totalnumero " + totalnumero)
        agujeroc[w][5] = Math.trunc(porcentajefinal / Number(totalnumero));
        agujeroc[w][6] = zonaI;
        agujeroc[w][7] = zonaFf;
      }
    }
  } else { console.log("no cam biar") }
};// fin de funcion que suma ceros nuevamente

// --------------- FUNCIÒN PARA ARMAR LA MATRIZ DEL OJO VISOR -------------------------------------------------
function cargaojovisor(lpda, la, lad, lp, centro, lf, lpdb, lb, lbdf, filacomienzo, columna, numeroString, columnatotal, rema, filas) {
  console.log(" funcion cargar ojo visor ")
  if (columna < 0 || columna > columnatotal) { console.log("retorno x salida "); return };
  //console.log(numeroString)
  //console.log(columna)
  //console.log(filacomienzo)
  filas = filas - 1;
  lpda = 0
  la = 0;
  lad = 0;
  lp = 0;
  centro = 0;
  lf = 0;
  lpdb = 0;
  lb = 0;
  lbdf = 0;
  if ((numeroString[filacomienzo][columna] == "0") && (columna == 0)) {
    lpda = "1";
    la = numeroString[filacomienzo - 1][columna];
    lad = numeroString[filacomienzo - 1][columna + 1];
    lp = "1";
    centro = numeroString[filacomienzo][columna];
    lf = numeroString[filacomienzo][columna + 1];
    lpdb = "1";
    lb = numeroString[filacomienzo + 1][columna];
    lbdf = numeroString[filacomienzo + 1][columna + 1];
    var retorno0 = [];
    retorno0[0] = lpda;
    retorno0[1] = la;
    retorno0[2] = lad;
    retorno0[3] = lp;
    retorno0[4] = centro;
    retorno0[5] = lf;
    retorno0[6] = lpdb;
    retorno0[7] = lb;
    retorno0[8] = lbdf;
    //console.log(" primer if ")
    //  console.log(lpda + la + lad);
    //  console.log(lp + centro + lf);
    //  console.log(lpdb + lb + lbdf);
    return retorno0;
  } else if ((numeroString[filacomienzo][columna] == "0") && (columna > 0) && (columna !== columnatotal) && (filacomienzo !== (filas - 1))) {
    //console.log(columna)
    lpda = numeroString[filacomienzo - 1][columna - 1];
    la = numeroString[filacomienzo - 1][columna];
    lad = numeroString[filacomienzo - 1][columna + 1];
    lp = numeroString[filacomienzo][columna - 1];
    centro = numeroString[filacomienzo][columna];
    lf = numeroString[filacomienzo][columna + 1];
    lpdb = numeroString[filacomienzo + 1][columna - 1];
    lb = numeroString[filacomienzo + 1][columna];
    lbdf = numeroString[filacomienzo + 1][columna + 1];
    var retorno1 = [];
    retorno1[0] = lpda;
    retorno1[1] = la;
    retorno1[2] = lad;
    retorno1[3] = lp;
    retorno1[4] = centro;
    retorno1[5] = lf;
    retorno1[6] = lpdb;
    retorno1[7] = lb;
    retorno1[8] = lbdf;
    //console.log(" else 1 ")
    //  console.log(lpda + la + lad);
    //  console.log(lp + centro + lf);
    //  console.log(lpdb + lb + lbdf);
    return retorno1;

  } else if ((numeroString[filacomienzo][columna] == "0") && ((columna == columnatotal)) && (filacomienzo !== (filas - 1))) {
    lpda = numeroString[filacomienzo - 1][columna - 1];
    la = numeroString[filacomienzo - 1][columna];
    lad = "3"
    lp = numeroString[filacomienzo][columna - 1];
    centro = numeroString[filacomienzo][columna];
    lf = "3";
    lpdb = numeroString[filacomienzo + 1][columna - 1];
    lb = 0;
    lb = numeroString[filacomienzo + 1][columna];
    lbdf = "3";
    //console.log(" else 2 ")
    var retorno2 = [];
    retorno2[0] = lpda;
    retorno2[1] = la;
    retorno2[2] = lad;
    retorno2[3] = lp;
    retorno2[4] = centro;
    retorno2[5] = lf;
    retorno2[6] = lpdb;
    retorno2[7] = lb;
    retorno2[8] = lbdf;
    return retorno2;
  } else if ((numeroString[filacomienzo][columna] == "1") && (filacomienzo !== filas) && (columna !== columnatotal)) {
    console.log(" else 3 ")
    rema = 7;
    return rema;
  } else if ((numeroString[filacomienzo][columna] == "1") && (filacomienzo == filas)) {
    console.log(" else 4 ")
    rema = 7;
    return rema;
  } else if ((numeroString[filacomienzo][columna] == "1") && (filacomienzo == filas) && (columna == (columnatotal - 1))) {
    console.log(" else 5 ")
    rema = 7;
    return rema;
  } else if ((numeroString[filacomienzo][columna] == "1") && (columna == columnatotal)) {
    console.log(" else 6 ")
    rema = 7;
    return rema;
  } else if (numeroString[filacomienzo][columna] == "2") {
    console.log(" else 6 ")
    rema = 7;
    return rema;
  } else if (filacomienzo == filas || filacomienzo == (filas - 1)) {
    rema = 7;
    return rema;
  };
};  // fin de funcion carga ojo visor

// ----------------- FUNCION CARGA OJO VISOR PARA INDETERMINACIONES ------------------------
function cargaojovisorInde(lpda, la, lad, lp, centro, lf, lpdb, lb, lbdf, filacomienzo, columna, numeroString, columnatotal, rema, filas) {
  console.log(" funcion cargar ojo visor ")
  if (columna < 0 || columna > columnatotal) { console.log("retorno x salida "); return };
  //console.log(numeroString)
  //console.log(columna)
  //console.log(filacomienzo)
  filas = filas - 1;
  lpda = 0
  la = 0;
  lad = 0;
  lp = 0;
  centro = 0;
  lf = 0;
  lpdb = 0;
  lb = 0;
  lbdf = 0;
  if (numeroString[filacomienzo][columna] == "2" && columna == 0) {
    lpda = "1";
    la = numeroString[filacomienzo - 1][columna];
    lad = numeroString[filacomienzo - 1][columna + 1];
    lp = "1";
    centro = numeroString[filacomienzo][columna];
    lf = numeroString[filacomienzo][columna + 1];
    lpdb = "1";
    lb = numeroString[filacomienzo + 1][columna];
    lbdf = numeroString[filacomienzo + 1][columna + 1];
    var retorno0 = [];
    retorno0[0] = lpda;
    retorno0[1] = la;
    retorno0[2] = lad;
    retorno0[3] = lp;
    retorno0[4] = centro;
    retorno0[5] = lf;
    retorno0[6] = lpdb;
    retorno0[7] = lb;
    retorno0[8] = lbdf;
    //console.log(" primer if ")
    //  console.log(lpda + la + lad);
    //  console.log(lp + centro + lf);
    //  console.log(lpdb + lb + lbdf);
    return retorno0;
  } else if (numeroString[filacomienzo][columna] == "2" && columna > 0 && columna !== columnatotal && filacomienzo !== filas) {
    //console.log(columna)
    lpda = numeroString[filacomienzo - 1][columna - 1];
    la = numeroString[filacomienzo - 1][columna];
    lad = numeroString[filacomienzo - 1][columna + 1];
    lp = numeroString[filacomienzo][columna - 1];
    centro = numeroString[filacomienzo][columna];
    lf = numeroString[filacomienzo][columna + 1];
    lpdb = numeroString[filacomienzo + 1][columna - 1];
    lb = numeroString[filacomienzo + 1][columna];
    lbdf = numeroString[filacomienzo + 1][columna + 1];
    var retorno1 = [];
    retorno1[0] = lpda;
    retorno1[1] = la;
    retorno1[2] = lad;
    retorno1[3] = lp;
    retorno1[4] = centro;
    retorno1[5] = lf;
    retorno1[6] = lpdb;
    retorno1[7] = lb;
    retorno1[8] = lbdf;
    //console.log(" else 1 ")
    //  console.log(lpda + la + lad);
    //  console.log(lp + centro + lf);
    //  console.log(lpdb + lb + lbdf);
    return retorno1;
  } else if (numeroString[filacomienzo][columna] == "2" && columna == columnatotal && filacomienzo !== filas) {
    lpda = numeroString[filacomienzo - 1][columna - 1];
    la = numeroString[filacomienzo - 1][columna];
    lad = "3"
    lp = numeroString[filacomienzo][columna - 1];
    centro = numeroString[filacomienzo][columna];
    lf = "3";
    lpdb = numeroString[filacomienzo + 1][columna - 1];
    lb = numeroString[filacomienzo + 1][columna];
    lbdf = "3";
    //console.log(" else 2 ")
    var retorno2 = [];
    retorno2[0] = lpda;
    retorno2[1] = la;
    retorno2[2] = lad;
    retorno2[3] = lp;
    retorno2[4] = centro;
    retorno2[5] = lf;
    retorno2[6] = lpdb;
    retorno2[7] = lb;
    retorno2[8] = lbdf;
    return retorno2;
  } else if (numeroString[filacomienzo][columna] == "1" && filacomienzo !== filas && columna !== columnatotal) {
    //console.log(" else 3 ")
    rema = 7;
    return rema;
  } else if (numeroString[filacomienzo][columna] == "1" && filacomienzo == filas) {
    //console.log(" else 4 ")
    rema = 7;
    return rema;
  } else if (numeroString[filacomienzo][columna] == "1" && filacomienzo == filas && columna == (columnatotal - 1)) {
    //console.log(" else 5 ")
    rema = 7;
    return rema;
  } else if (numeroString[filacomienzo][columna] == "1" && columna == columnatotal) {
    //console.log(" else 6 ")
    rema = 7;
    return rema;
  } else if (numeroString[filacomienzo][columna] == "0") {
    //console.log(" else 6 ")
    rema = 1;
    return rema;
  };
};// fin de funcion carga ojo visor de indeterminaciones

// --------------- FUNCIÓN PARA VERIFICAR AGUJEROS -----------------------------------------------
function verificarCaracteristicas(sumarAgujeros, tablaLimites1, agujerosu, ppp) {
  var cuenta = 0;
  var totalAgu = 0;
  var reconoce = 0;
  var retornaAgu = [];
  var sumoInterpretacion = 0;
  for (var fa2 = 0; fa2 < agujerosu.length; fa2++) {
    if (Number(agujerosu[fa2][4]) == 0) {
    } else { totalAgu = totalAgu + 1; };
  };
  for (var fa = 0; fa < agujerosu.length; fa++) {
    if (Number(agujerosu[fa][4]) == 0) { } else {
      cuenta = ppp + 1;
      if (agujerosu[fa][0] == '1100') {
        cuenta = (cuenta + (((1 - 1) * 9) + Number(agujerosu[fa][6])));
      } else if (agujerosu[fa][0] == '1200') {
        cuenta = (cuenta + (((2 - 1) * 9) + Number(agujerosu[fa][6])));
      } else if (agujerosu[fa][0] == '1000' || agujerosu[fa][0] == '2000') {
        cuenta = (cuenta + (((3 - 1) * 9) + Number(agujerosu[fa][6])));
      };
      if (Number(tablaLimites1[cuenta][4]) !== 0) {
        if (Number(agujerosu[fa][6]) == Number(tablaLimites1[cuenta][2])) {
          if (Number(agujerosu[fa][5]) <= Number(tablaLimites1[cuenta][4])) {  // curva
            if (Number(agujerosu[fa][5]) >= Number(tablaLimites1[cuenta][3])) {   // curva
              sumoInterpretacion = sumoInterpretacion + Number(tablaLimites1[cuenta][13]);
              sumarAgujeros = sumarAgujeros + Number(agujerosu[fa][6]);
              reconoce = reconoce + 1;
            };
          };
        };
      };
    };
  };

  sumoInterpretacion = sumoInterpretacion + Number(tablaLimites1[cuenta][0])
  if (reconoce == totalAgu) {
    if (sumoInterpretacion == 15) { // 0
      //   console.log(" numero 0")
      retornaAgu[0] = 1;
      retornaAgu[1] = sumarAgujeros;
      sumoInterpretacion = 0;
    } else if (sumoInterpretacion == 45 || sumoInterpretacion == 29
      || sumoInterpretacion == 47 || sumoInterpretacion == 43) {  // 1
      //  console.log(" numero 1")
      retornaAgu[0] = 1;
      retornaAgu[1] = sumarAgujeros;
      sumoInterpretacion = 0;
    } else if (sumoInterpretacion == 26) {  // 2
      //  console.log(" numero 2")
      retornaAgu[0] = 1;
      retornaAgu[1] = sumarAgujeros;
      sumoInterpretacion = 0;
    } else if (sumoInterpretacion == 43 || sumoInterpretacion == 25) {  // 3 
      // console.log(" numero 3")
      retornaAgu[0] = 1;
      retornaAgu[1] = sumarAgujeros;
      sumoInterpretacion = 0;
    } else if (sumoInterpretacion == 56) {  // 4 
      //  console.log(" numero 4")
      retornaAgu[0] = 1;
      retornaAgu[1] = sumarAgujeros;
      sumoInterpretacion = 0;
    } else if (sumoInterpretacion == 39) {  // 5 
      //  console.log(" numero 5")
      retornaAgu[0] = 1;
      retornaAgu[1] = sumarAgujeros;
      sumoInterpretacion = 0;
    } else if (sumoInterpretacion == 31) {  // 6 
      //   console.log(" numero 6")
      retornaAgu[0] = 1;
      retornaAgu[1] = sumarAgujeros;
      sumoInterpretacion = 0;
    } else if (sumoInterpretacion == 45) {  // 7 
      //    console.log(" numero 7")
      retornaAgu[0] = 1;
      retornaAgu[1] = sumarAgujeros;
      sumoInterpretacion = 0;
    } else if (sumoInterpretacion == 62 || sumoInterpretacion == 46 || sumoInterpretacion == 50
      || sumoInterpretacion == 34 || sumoInterpretacion == 70 || sumoInterpretacion == 54
      || sumoInterpretacion == 38 || sumoInterpretacion == 58 || sumoInterpretacion == 42) {  // 8
      //   console.log(" numero 8")
      retornaAgu[0] = 1;
      retornaAgu[1] = sumarAgujeros;
      sumoInterpretacion = 0;
    } else if (sumoInterpretacion == 36) {  // 9
      //  console.log(" numero 9")
      retornaAgu[0] = 1;
      retornaAgu[1] = sumarAgujeros;
      sumoInterpretacion = 0;
    } else {
      retornaAgu[0] = 0;
      retornaAgu[1] = sumarAgujeros;
      sumoInterpretacion = 0;
    }
  } else {
    retornaAgu[0] = 0;
    retornaAgu[1] = sumarAgujeros;
    sumoInterpretacion = 0;
  }
  // console.log("retornaAgu " + retornaAgu)
  return retornaAgu;
};
//------------ FUNCIONES DE HISTOGRAMAS --------------------------------------------------------------------------
function Histograma(Filas, CantCC, CantFilas, HistHorizontal) {// histograma horizontal, por filas
  for (var Y = 0; Y <= CantFilas; Y++) {
    for (var X = 0; X <= CantCC; X++) {
      if (Filas[Y][X] == 0) {
        HistHorizontal[Y][0] = HistHorizontal[Y][0] + 1;
      } else {
        HistHorizontal[Y][1] = HistHorizontal[Y][1] + 1;
      };
    };
  };
  var retorno = 1;
  return retorno;
};// fin de funcion Histograma
function HistogramaV(Filas, CantCC, CantFilas, HistVertical) {// histograma vertical, por columnas
  for (var X = 0; X <= CantCC; X++) {
    for (var Y = 0; Y <= CantFilas; Y++) {
      if (Filas[Y][X] == 0) {
        HistVertical[X][0] = HistVertical[X][0] + 1;
      } else {
        HistVertical[X][1] = HistVertical[X][1] + 1;
      };
    };
  };
  var retorno = 2;
  return retorno;
};// fin de funcion HistogramaV
// hacer función de histograma

// ----------------- FUNCION RELLENO POR ZONA -----------------------------
function nuevoRelleno(hacer, g, numero0, fil, colum, zonaz, totalZona) {
  console.log(" ZONA => " + g)
  var numeroNuveo = [];
  var noCorregir1 = 0;
  var acumCerosUno = 0;
  var noCorregir4 = 0;
  var acumCerosCuatro = 0;
  // para no rellenar el agujero de la izquierda arriba en zona 0 del Numero 1
  for (var ft = 0; ft <= 8; ft++) {
    acumCerosUno = 0;
    if (Number(zonaz[ft][8]) == 1 || Number(zonaz[ft][8]) == 4 || Number(zonaz[ft][8]) == 7) {
      acumCerosUno = ((Number(zonaz[ft][1]) * 100) / Number(totalZona));
      if (acumCerosUno > 50) {
        noCorregir1 = noCorregir1 + 1;
      }
    } else if (Number(zonaz[ft][8]) == 2) {
      acumCerosUno = ((Number(zonaz[ft][0]) * 100) / Number(totalZona));
      if (acumCerosUno > 75) {
        noCorregir1 = noCorregir1 + 1;
      }
    }
  }
  // para no rellenar el agujero de la izquierda abajo en zona 6 del Numero 4
  for (var ft = 0; ft <= 8; ft++) {
    acumCerosCuatro = 0;
    if (Number(zonaz[ft][8]) == 2 || Number(zonaz[ft][8]) == 3 || Number(zonaz[ft][8]) == 8) {
      acumCerosCuatro = ((Number(zonaz[ft][1]) * 100) / Number(totalZona));
      if (acumCerosCuatro >= 61) {
        noCorregir4 = noCorregir4 + 1;
      }
    } else if (Number(zonaz[ft][8]) == 5) { // para diferenciar del 6
      if (Number(zonaz[ft][1]) < Number(zonaz[ft][0])) {
        noCorregir4 = noCorregir4 + 1;
      }
    }
  }
  // para borrar zona 8
  var acumCeros7 = 0;
  var borrar7 = 0;
  for (var ft = 0; ft <= 8; ft++) {
    acumCeros7 = 0;
    if (Number(zonaz[ft][8]) == 0 || Number(zonaz[ft][8]) == 2 || Number(zonaz[ft][8]) == 4 || Number(zonaz[ft][8]) == 6) {
      acumCeros7 = ((Number(zonaz[ft][1]) * 100) / Number(totalZona));
      if (acumCeros7 >= 71) {
        //  console.log(noCorregir4)
        borrar7 = borrar7 + 1;
      }
    }
  }
  console.log(totalZona)
  console.log(borrar7)
  for (var k = 0; k <= fil; k++) {
    numeroNuveo[k] = numero0[k];
  }
  var filaSub;
  var des0 = 0;
  // if (noCorregir1 == 3) { return numeroNuveo } // para no rellenar en el numero 1
  // if (noCorregir4 == 3) { return numeroNuveo } // para no rellenar en el numero 4
  if ((Number(zonaz[g][8]) == 0) && (noCorregir1 !== 4) && (Number(zonaz[g][0]) < Number(zonaz[g][1]))) {
    for (var t = 0; t <= fil; t++) {
      for (var n = 0; n <= colum; n++) {
        if ((t >= Number(zonaz[g][6])) && (t < (Number(zonaz[g][7]) - 2))) {
          if ((n >= Number(zonaz[g][4])) && (n <= Number(zonaz[g][5]))) {
            if (numeroNuveo[t][n] == "0") {
              des0 = (n + 1);
              if (n == 0) {
                if (hacer == 7) {
                  filaSub = "1" + numeroNuveo[t].substring(des0);
                } else if (hacer == 8) { numeroNuveo[t][n] = "1"; }
              } else {
                if (hacer == 7) {
                  filaSub = numeroNuveo[t].substring(0, n) + "1" + numeroNuveo[t].substring(des0);
                } else if (hacer == 8) { numeroNuveo[t][n] = "1"; }
              }
              if (hacer == 7) { numeroNuveo[t] = filaSub; }
            }
          }
        }
      }
    }
  } // fin if0
  des0 = 0;
  if ((Number(zonaz[g][8]) == 2) && (noCorregir1 !== 4)) {
    for (var t = 0; t <= fil; t++) {
      for (var n = 0; n <= colum; n++) {
        if ((t >= Number(zonaz[g][6])) && (t <= (Number(zonaz[g][7]) - 2))) {
          if ((n >= Number(zonaz[g][4])) && (n <= colum)) {
            if (numeroNuveo[t][n] == "0") {
              des0 = (n + 1);
              if (n == colum) {
                if (hacer == 7) {
                  filaSub = numeroNuveo[t].substring(0, n) + "1";
                } else if (hacer == 8) { numeroNuveo[t][n] = "1"; }
              } else {
                if (hacer == 7) {
                  filaSub = numeroNuveo[t].substring(0, n) + "1" + numeroNuveo[t].substring(des0);
                } else if (hacer == 8) { numeroNuveo[t][n] = "1"; }
              }
              if (hacer == 7) { numeroNuveo[t] = filaSub; }
            }
          }
        }
      }
    }
  } // fin if2
  des0 = 0;
  console.log(noCorregir4)
  console.log(Number(zonaz[g][8]))
  if ((Number(zonaz[g][8]) == 6) && (noCorregir4 !== 4)) {
    console.log(noCorregir4)
    for (var t = 0; t <= fil; t++) {
      for (var n = 0; n <= colum; n++) {
        if ((t > (Number(zonaz[g][6]) + 2)) && (t <= Number(zonaz[g][7]))) {
          if ((n >= Number(zonaz[g][4])) && (n <= Number(zonaz[g][5]))) {
            if (numeroNuveo[t][n] == "0") {
              des0 = (n + 1);
              if (n == 0) {
                if (hacer == 7) {
                  filaSub = "1" + numeroNuveo[t].substring(des0);
                } else if (hacer == 8) { numeroNuveo[t][n] = "1"; }
              } else {
                if (hacer == 7) {
                  filaSub = numeroNuveo[t].substring(0, n) + "1" + numeroNuveo[t].substring(des0);
                } else if (hacer == 8) { numeroNuveo[t][n] = "1"; }
              }
              if (hacer == 7) { numeroNuveo[t] = filaSub; }
            }
          }
        }
      }
    }
  } // fin if6
  des0 = 0;
  if ((Number(zonaz[g][8]) == 8) && (Number(zonaz[g][1]) > 40)) {
    for (var t = 0; t <= fil; t++) {
      for (var n = 0; n <= colum; n++) {
        if ((t > (Number(zonaz[g][6]) + 2)) && (t <= Number(zonaz[g][7]))) {
          if ((n >= Number(zonaz[g][4])) && (n <= Number(zonaz[g][5]))) {
            if (numeroNuveo[t][n] == "0") {
              des0 = (n + 1);
              if (n == colum) {
                if (hacer == 7) {
                  filaSub = numeroNuveo[t].substring(0, n) + "1";
                } else if (hacer == 8) { numeroNuveo[t][n] = "1"; }
              } else {
                if (hacer == 7) {
                  filaSub = numeroNuveo[t].substring(0, n) + "1" + numeroNuveo[t].substring(des0);
                } else if (hacer == 8) { numeroNuveo[t][n] = "1"; }
              }
              if (hacer == 7) { numeroNuveo[t] = filaSub; }
            }
          }
        }
      }
    }
  } // fin if8
  des0 = 0;
  if ((Number(zonaz[g][8]) == 8) && (Number(zonaz[g][0]) > Number(zonaz[g][1])) && (borrar7 == 4)) {
    for (var t = 0; t <= fil; t++) {
      for (var n = 0; n <= colum; n++) {
        if (t > (Number(zonaz[g][6])) && t <= Number(zonaz[g][7])) {
          if (n >= Number(zonaz[g][4]) && n <= Number(zonaz[g][5])) {
            if (numeroNuveo[t][n] == "1") {
              des0 = (n + 1);
              if (n == colum) {
                if (hacer == 7) {
                  filaSub = numeroNuveo[t].substring(0, n) + "0";
                } else if (hacer == 8) { numeroNuveo[t][n] = "0"; }
              } else {
                if (hacer == 7) {
                  filaSub = numeroNuveo[t].substring(0, n) + "0" + numeroNuveo[t].substring(des0);
                } else if (hacer == 8) { numeroNuveo[t][n] = "0"; }
              }
              if (hacer == 7) { numeroNuveo[t] = filaSub; }
            }
          }
        }
      }
    }
  } // fin if8
  return numeroNuveo;
};// fin de funcion nuevo relleno

//------ENTORNO DEL TAMAÑO DEL DIGITO COMO DIVISOR DE 3 --------------------------------------------------------
function entornar3(unos3, parfilas2, parCantFilas, parCantCC, parunosxzonaYX, archivoNombreAntes, nuevacolumna, nuevafila, tablaFinal) {
  var fila = new Array();
  fila = parfilas2;
  var cc2 = parCantCC + 1;
  var ff2 = parCantFilas + 1;
  var resultadocc = Math.trunc(cc2 / 3);
  var restocantcol = Math.trunc(cc2 % 3);
  var resultadoff = Math.trunc(ff2 / 3);
  var restocantfilas = Math.trunc(ff2 % 3);
  var filawork;
  var X = 0;
  // var cc2work = parCantCC;
  console.log("cc2 " + cc2)
  console.log(restocantcol)
  console.log("ff2 " + ff2)
  console.log(restocantfilas)
  var filaNueva = new Array();
  console.log(fila)
  var ia = 0;
  //------ PERDIDA o AGREGADO DE FILAS || COLUMNAS COMPLETAS DE CEROS PARA LOGRAR UN CANTIDAD MULTIPLO DE 3 -------------------------------------------------
  for (i = 0; i <= parCantFilas; i++) {
    //-- perdida/agregado de filas ------------------------------------------------------- 
    if (restocantcol == 0) {
      //  restocantcol = 0
      filawork = fila[i];
      //cc2 = 0;
    } else if (restocantcol == 1) {
      //  restocantcol = 0
      filawork = fila[i].substring(0, 1) + fila[i].substring(0, parCantCC + 1) + fila[i].substring(parCantCC);
      cc2 = 2;

    } else if (restocantcol == 2) {
      //  restocantcol = 0
      filawork = fila[i].substring(0, 1) + fila[i];
      cc2 = 1;
    };
    //-- perdida/agregado de columnas ------------------------------------------------------- 
    if (restocantfilas == 0) {
      filaNueva[ia] = filawork;
      ia += 1;
    } else if ((restocantfilas == 1) && (i == 0)) {
      //  restocantfilas = 0
      filaNueva[ia] = filawork;
      X = X + 1;
      filaNueva[ia + X] = filawork;
      // X = X + 1;
      ia += 2;
      i = 0;
    } else if ((restocantfilas == 1) && (i == parCantFilas)) {
      console.log(X)
      console.log(ia)
      filaNueva[ia] = filawork;
      X = X + 1;
      filaNueva[ia + 1] = filawork;
      // X = X + 1;
      ia += 2;
      //  i = 0;
      restocantfilas = 0
    } else if ((restocantfilas == 1) && (i < parCantFilas)) {
      //  ia = ia + 1;
      filaNueva[ia] = filawork;
      ia += 1;
      //X = X + 1;
      //filaNueva[ia + X] = filawork;
      //restocantfilas = 0   

      //i = 0;
    };
    if ((restocantfilas == 2) && (i == 0)) {
      restocantfilas = 0
      filaNueva[ia] = filawork;
      X = X + 1;
      filaNueva[ia + X] = filawork;
      ia += 2;
      i = 0;
    } else if ((restocantfilas == 2) && (i <= (ff2 - 1))) {
      restocantfilas = 0
      filaNueva[ia + X] = filawork;
      X = X + 1;
      // filaNueva[ia + X] = filawork;
      ia += 1;
      //  i = 0;
    };
  };
  var nuevacc2 = filaNueva[0].length - 1; // nuevo valor de columnas
  var nuevaff2 = filaNueva.length - 1;  // nuevo valor de filas
  console.log(nuevaff2)
  console.log(nuevacc2)
  console.log(filaNueva)
  //---- SUMA DE LA CANTIDAD DE 1 Y 0 -----------------------------------------------------------
  var unos = 0; // acumulador de 1
  var ceros2 = 0; // acumulador de 0
  for (var x = 0; x <= nuevaff2; x++) {
    for (var y = 0; y <= nuevacc2; y++) {
      var work = filaNueva[x][y];
      if (work == 1) {
        unos = 1 + unos;  // suma de 1
      } else if (work == 0) {
        ceros2 = ceros2 + 1;  // suma de 0
      };
    };
  };

  //----PRINCIPIO Y FINAL DE CADA ZONA---------------------------------------------------------------------------
  // x es cantidad de filas                        
  // y es cantidad de columnas                     
  var x1 = Math.trunc(x / 3); //limite de la zona en filas
  var CantFilasGrupo = x1;
  var y1 = Math.trunc(y / 3); //limite de la zona columnas
  var CantColumGrupo = y1;
  Grupofilas = 0;
  Grupocolum = 0;
  var z = 0;
  console.log(filaNueva)
  var zonaeny = new Array();
  for (var Y = 0; Y <= 2; Y++) {
    zonaeny[Y] = new Array(9);
    zonaeny[Y][0] = 0;  //zona en y
    zonaeny[Y][1] = 0;  // fila de inicio en y
    zonaeny[Y][2] = 0;  // fila de final en y
    zonaeny[Y][3] = 0;  // columna de inico en x zona 0
    zonaeny[Y][4] = 0;  // columna de final en x zona 0
    zonaeny[Y][5] = 0;  // columna de inicio en x zona 1
    zonaeny[Y][6] = 0;  // columna de final en x zona 1
    zonaeny[Y][7] = 0;  // columna de inicio en x zona 2 
    zonaeny[Y][8] = 0;  // columna de final en x zona 2
  };

  //-------------------------------------------------------------------------------
  var p = 0
  for (var u = 0; u <= 2; u++) {                                                   // grupos de filas
    zonaeny[u][0] = z;                                                            // nombre de la zona
    Grupofilas = (CantFilasGrupo * u);                                              // fila de inicio         
    zonaeny[u][1] = Math.trunc(Grupofilas);                                                    // fila de inicio 
    zonaeny[u][2] = Math.trunc((CantFilasGrupo + (CantFilasGrupo * u)) - 1);                   // fila de final
    //--------------------------------------------------------------------
    w = 0;
    for (var t = 0; t <= 2; t++) {                                                // grupos de colu
      Grupocolum = CantColumGrupo * t;
      zonaeny[u][t + 3 + w] = Grupocolum;         // columna de inicio  de cada zona
      zonaeny[u][t + 4 + w] = (CantColumGrupo + (CantColumGrupo * t)) - 1;          // columna de final   de cad  zona
      //--------------------------------------------------------------------------
      w = w + 1;
    };
    z = z + 1;
  };
  //---------------------------------------------------------------------------------------------------------------------
  var num = 0;
  var inicioX = 0;
  var finalX = 0;
  for (var u = 0; u <= 2; u++) {
    num = 0;
    for (var t = 0; t <= 2; t++) {
      var inicioY = zonaeny[u][1];
      var finalY = zonaeny[u][2];
      if (num == 0) {
        num = 3;
        inicioX = zonaeny[u][num];
        finalX = zonaeny[u][num + 1];
        funcionsumaunos(filaNueva, num, parunosxzonaYX, inicioX, finalX, p, u, zonaeny);
        p = p + 1;
      } else if (num == 3) {
        num = 5;
        inicioX = zonaeny[u][num];
        finalX = zonaeny[u][num + 1];
        funcionsumaunos(filaNueva, num, parunosxzonaYX, inicioX, finalX, p, u, zonaeny);
        p = p + 1;
      } else if (num == 5) {
        num = 7;
        inicioX = zonaeny[u][num];
        finalX = zonaeny[u][num + 1];
        funcionsumaunos(filaNueva, num, parunosxzonaYX, inicioX, finalX, p, u, zonaeny);
        p = p + 1;
      };
    };
  };

  unos3 = 0;
  var ceros3 = 0;
  for (var x = 0; x <= nuevaff2; x++) {
    for (var y = 0; y <= nuevacc2; y++) {
      var work2 = filaNueva[x][y];
      if (work2 == 1) {
        unos3 = 1 + unos3;
      } else if (work2 == 0) {
        ceros3 = ceros3 + 1;
      };
    };
  };

  //---ARRAY CON LAS CANTIDADES ---------------------------------------------------------------------------------------------------
  let cant1 = unos3.toString().padStart(2, '0');
  let cant0 = ceros3.toString().padStart(2, '0');
  var tamañoZona = x1 * y1;
  var tablaOcupacion = new Array();
  tablaOcupacion[0] = x;
  tablaOcupacion[1] = y;
  tablaOcupacion[2] = cant0;
  tablaOcupacion[3] = cant1;
  tablaOcupacion[4] = ceros3 + unos3;
  tablaOcupacion[5] = tamañoZona;

  // -------- MUESTRO EN HTML LAS ZONA Y VALORES ------------------------------------------------------------------------------------------
  var totalFilas = tablaOcupacion[0]; // filas del número completo
  var totalColum = tablaOcupacion[1]; // columnas del numero completo
  var totalCeros = tablaOcupacion[2];   // acumulador de 0 x zona (X Y)
  var totalUnos = tablaOcupacion[3];  // acumulador de 1 x zona (X Y)
  var totalNum = tablaOcupacion[4];  // porcentaje de ocupación de la zona
  var tamañozonaTotal = tablaOcupacion[5];  // porcentaje de ocupazión de la zona con respecto al total del número
  var valretorno2 = myFunction2(totalFilas, totalColum, totalCeros, totalUnos, totalNum, tamañozonaTotal)
  function myFunction2(totalFilas, totalColum, totalCeros, totalUnos, totalNum, tamañozonaTotal) {
    var table = document.getElementById("ocupacion");
    var fila = table.insertRow(-1);
    var col1 = table.insertRow(0);
    var col2 = table.insertRow(1);
    var col3 = table.insertRow(2);
    var col4 = table.insertRow(3);
    var col5 = table.insertRow(4);
    var col6 = table.insertRow(5);
    col1.innerHTML = "Filas => " + totalFilas;
    col2.innerHTML = "Columnas => " + totalColum;
    col3.innerHTML = "Total => " + totalNum.toString().padStart(2, '0');
    col4.innerHTML = "Total de Unos => " + totalUnos.toString().padStart(2, '0');
    col5.innerHTML = "Total de Ceros => " + totalCeros.toString().padStart(2, '0');
    col6.innerHTML = "Tamaño de zona => " + tamañozonaTotal.toString().padStart(2, '0');
    var retorno = 0;
    return retorno;
  };

  //-- MUESTRO EL NÚMERO ENTORNADO FINAL EN EL HTML -------------------------------------------------------------------------------
  var numeroEntornado1 = new Array();//  numeroEntornado = filaNueva.join("")
  console.log(filaNueva)
  numeroEntornado1 = filaNueva;
  console.log(numeroEntornado1)
  //----- Numero nuevo ------------------------------------------------------------------------------------------
  var divZona = Math.trunc(Number(tamañozonaTotal) / 4);
  var junto = 7;
  let numeroEntornado = 0;
  console.log(numeroEntornado1[0].length)
  for (var g = 0; g <= 8; g++) {
    //  if (Number(parunosxzonaYX[g][0]) < Number(parunosxzonaYX[g][1])) {

    //  if (numeroEntornado == 0) {
    numeroEntornado1 = (nuevoRelleno(junto, Number(parunosxzonaYX[g][8]), numeroEntornado1, nuevaff2, nuevacc2, parunosxzonaYX, tamañozonaTotal));
    //  } else {
    //     (nuevoRelleno(junto, Number(parunosxzonaYX[g][8]), numeroEntornado, nuevaff2, nuevacc2, parunosxzonaYX, tamañozonaTotal));
    // }
    //  } else { if (numeroEntornado == 0) { numeroEntornado = numeroEntornado1 } }
  }
  totalUnos = 0;
  totalCeros = 0;
  for (var x = 0; x <= nuevaff2; x++) {
    for (var y = 0; y <= nuevacc2; y++) {
      var work2 = numeroEntornado1[x][y];
      if (work2 == 1) {
        totalUnos = 1 + totalUnos;
      } else if (work2 == 0) {
        totalCeros = totalCeros + 1;
      };
    };
  };
  numeroEntornado = numeroEntornado1;
  //  unosxzonaYX[m][0] = 0;  // acumulador de 0 x zona (X Y)
  //  unosxzonaYX[m][1] = 0;  // acumulador de 1 x zona (X Y)
  //  unosxzonaYX[m][2] = 0;  // porcentaje de ocupación de la zona
  //  unosxzonaYX[m][3] = 0;  // porcentaje de ocupazión de la zona con respecto al total del número  10
  //  unosxzonaYX[m][4] = 0;  // columna de inicio de la zona X
  //  unosxzonaYX[m][5] = 0;  // columna de final de la zona X
  //  unosxzonaYX[m][6] = 0;  // fila de inicio de la zona Y
  //  unosxzonaYX[m][7] = 0;  // fila de final de la zona Y
  //  unosxzonaYX[m][8] = 0;  // zona
  //  unosxzonaYX[m][9] = "\r\n"

  //------- ARRAY RETORNOS DE AGUJEROS---------------------------------------------------------
  var cantidadAgugejosA = 0;
  var tablaOcupacionAgujerosA = new Array(); // abiertos
  for (var m = 0; m < 40; m++) {
    tablaOcupacionAgujerosA[m] = new Array(8);
    tablaOcupacionAgujerosA[m][0] = 0;   // 0 Izquierda / 1 Derecha
    tablaOcupacionAgujerosA[m][1] = 0;   // numero de agujero
    tablaOcupacionAgujerosA[m][2] = 0;   // fila principio
    tablaOcupacionAgujerosA[m][3] = 0;   // fila final
    tablaOcupacionAgujerosA[m][4] = 0;   // cantidad de ceros
    tablaOcupacionAgujerosA[m][5] = 0;   // porcentaje
    tablaOcupacionAgujerosA[m][6] = 0;   // zona comienzo del agujero
    tablaOcupacionAgujerosA[m][7] = 0;   // zona final del agujero
  };
  var cantidadAgugejos = 0;
  var tablaOcupacionAgujeros = new Array();  /// cerrados
  for (var m = 0; m < 10; m++) {
    tablaOcupacionAgujeros[m] = new Array(11);
    tablaOcupacionAgujeros[m][0] = 0;   // cantidad de agujeros
    tablaOcupacionAgujeros[m][1] = 0;   // sector
    tablaOcupacionAgujeros[m][2] = 0;   // numero de agujero
    tablaOcupacionAgujeros[m][3] = 0;   // fila principio
    tablaOcupacionAgujeros[m][4] = 0;   // fila final
    tablaOcupacionAgujeros[m][5] = 0;   // columna menor
    tablaOcupacionAgujeros[m][6] = 0;   // columna mayor
    tablaOcupacionAgujeros[m][7] = 0;   // cantidad de ceros
    tablaOcupacionAgujeros[m][8] = 0;   // porcentaje de ocupación conn respecto al numero
    tablaOcupacionAgujeros[m][9] = 0;   // zona comienzo del agujero
    tablaOcupacionAgujeros[m][10] = 0;    // zona final del agujero
  };
  //-- LLAMADAS A FUNCIONES DE AGUJEROS -------------------------------------------------------------------------
  var colucomiz = 0;
  var colufinalz = 0;
  console.log(numeroEntornado);
  tablaOcupacionAgujeros = (buscarAgujerosCerrados(numeroEntornado, nuevaff2, nuevacc2, colucomiz, colufinalz, totalUnos, parunosxzonaYX));// sacar tabla 2
  //tablaOcupacionAgujerosA = (
  tablaOcupacionAgujerosA = (buscarAgujerosAbierto(numeroEntornado, nuevaff2, nuevacc2, totalNum, cantidadAgugejosA, totalUnos, parunosxzonaYX));
  console.log(numeroEntornado);
  console.log(" tablaOcupacionAgujeros ");
  console.log(tablaOcupacionAgujeros);
  console.log(" tablaOcupacionAgujeros A ");
  console.log(tablaOcupacionAgujerosA);
  let numeroEntornado2 = [];
  console.log(numeroEntornado);
  // ----- MOSTRAMOS EL NUMERO FINAL EN EL HTML -------------------------------------------------------
  for (var g = 0; g < numeroEntornado.length; g++) {
    numeroEntornado2[g] = numeroEntornado[g] + '\r\n';
  }
  numeroEntornado2 = numeroEntornado2.join('');
  //let muestroNumero2 = document.getElementById("numero-completo");
  // muestroNumero2.innerHTML = numeroEntornado2;
  for (var m = 0; m < tablaOcupacionAgujeros.length; m++) {
    if (tablaOcupacionAgujeros[m][1] == 0 &&
      tablaOcupacionAgujeros[m][2] == 0 &&
      tablaOcupacionAgujeros[m][3] == 0 &&
      tablaOcupacionAgujeros[m][4] == 0 &&
      tablaOcupacionAgujeros[m][5] == 0 &&
      tablaOcupacionAgujeros[m][6] == 0 &&
      tablaOcupacionAgujeros[m][7] == 0 &&
      tablaOcupacionAgujeros[m][8] == 0) {
      m = m + 99;
    } else {
      var sectoress = tablaOcupacionAgujeros[m][1];
      var numerodeagujero = tablaOcupacionAgujeros[m][2];
      var filaIniciall = tablaOcupacionAgujeros[m][3];
      var filafinall = tablaOcupacionAgujeros[m][4]
      var columnainicial = tablaOcupacionAgujeros[m][5]
      var fcolumnafinal = tablaOcupacionAgujeros[m][6]
      var cantidadDeCeros = tablaOcupacionAgujeros[m][7]
      var porcenOcupacionC = tablaOcupacionAgujeros[m][8]
      var zonaC = tablaOcupacionAgujeros[m][9]
      var zonafin = tablaOcupacionAgujeros[m][10]
      var variableretorno22 = myFunction233(sectoress, numerodeagujero, filaIniciall, filafinall, columnainicial, fcolumnafinal, cantidadDeCeros, porcenOcupacionC, zonaC, zonafin)
    }
  }
  function myFunction233(sectoress, numerodeagujero, filaIniciall, filafinall, columnainicial, fcolumnafinal, cantidadDeCeros, porcenOcupacionC, zonaC, zonafin) {
    var table = document.getElementById("tabla11");
    var fila = table.insertRow(-1);
    var col1 = fila.insertCell(0);
    var col2 = fila.insertCell(1);
    var col3 = fila.insertCell(2);
    var col4 = fila.insertCell(3);
    var col5 = fila.insertCell(4);
    var col6 = fila.insertCell(5);
    var col7 = fila.insertCell(6);
    var col8 = fila.insertCell(7);
    var col9 = fila.insertCell(8);
    var col10 = fila.insertCell(9);
    col1.innerHTML = " sector = " + sectoress.toString().padStart(2, '0');
    col2.innerHTML = " Num = " + numerodeagujero.toString().padStart(2, '0');
    col3.innerHTML = " filaI = " + filaIniciall.toString().padStart(2, '0');
    col4.innerHTML = " filaF = " + filafinall.toString().padStart(2, '0');
    col5.innerHTML = " columnaI = " + columnainicial.toString().padStart(2, '0');
    col6.innerHTML = " columnaF = " + fcolumnafinal.toString().padStart(2, '0');
    col7.innerHTML = " cantceros = " + cantidadDeCeros.toString().padStart(3, '0');
    col8.innerHTML = " porOcupacion =" + porcenOcupacionC.toString().padStart(2, '0');
    col9.innerHTML = " ZonaC = " + zonaC.toString().padStart(2, '0');
    col10.innerHTML = " ZonaF = " + zonafin.toString().padStart(2, '0');
    var retorno = 0
    return retorno
  }

  for (var m = 0; m < tablaOcupacionAgujeros.length; m++) {
    if (tablaOcupacionAgujerosA[m][0] == 0 &&
      tablaOcupacionAgujerosA[m][1] == 0 &&
      tablaOcupacionAgujerosA[m][2] == 0 &&
      tablaOcupacionAgujerosA[m][3] == 0 &&
      tablaOcupacionAgujerosA[m][4] == 0 &&
      tablaOcupacionAgujerosA[m][5] == 0
    ) {
      m = m + 99;
    } else {
      var posicionA = tablaOcupacionAgujerosA[m][0];
      var numerodeagujeroA = tablaOcupacionAgujerosA[m][1];
      var filaInicialA = tablaOcupacionAgujerosA[m][2];
      var filafinalA = tablaOcupacionAgujerosA[m][3]
      var cantidadDeCerosA = tablaOcupacionAgujerosA[m][4]
      var porcenOcupacionA = tablaOcupacionAgujerosA[m][5]
      var zonaCA = tablaOcupacionAgujerosA[m][6]
      var zonaFA = tablaOcupacionAgujerosA[m][7]
      var variableretorno22 = myFunction23(posicionA, numerodeagujeroA, filaInicialA, filafinalA, cantidadDeCerosA, porcenOcupacionA, zonaCA, zonaFA)
    }
  }
  function myFunction23(posicionA, numerodeagujeroA, filaInicialA, filafinalA, cantidadDeCerosA, porcenOcupacionA, zonaCA, zonaFA) {
    var table = document.getElementById("tabla112");
    var fila = table.insertRow(-1);
    var col1 = fila.insertCell(0);
    var col2 = fila.insertCell(1);
    var col3 = fila.insertCell(2);
    var col4 = fila.insertCell(3);
    var col5 = fila.insertCell(4);
    var col6 = fila.insertCell(5);
    var col7 = fila.insertCell(6);
    var col8 = fila.insertCell(7);
    col1.innerHTML = " posicionA = " + posicionA//.toString().padStart(2, '0');
    col2.innerHTML = " NumA = " + numerodeagujeroA//.toString().padStart(2, '0');
    col3.innerHTML = " filaIA = " + filaInicialA//.toString().padStart(2, '0');
    col4.innerHTML = " filaFA = " + filafinalA//.toString().padStart(2, '0');
    col5.innerHTML = " cantCerosA = " + cantidadDeCerosA//.toString().padStart(2, '0');
    col6.innerHTML = " porcenOcupacionA = " + porcenOcupacionA//.toString().padStart(2, '0');
    col7.innerHTML = " zonaInicioA = " + zonaCA//.toString().padStart(2, '0');
    col8.innerHTML = " zonafinalA = " + zonaFA//.toString().padStart(2, '0');
    var retorno = 0
    return retorno
  }
  //------------------------------------------------------------------------------
  var m = 0;
  // muevo verificacion
  for (var p = 0; p < tablaOcupacionAgujeros.length; p++) {
    if (Number(tablaOcupacionAgujeros[p][4] == 0) && // 
      Number(tablaOcupacionAgujeros[p][7] == 0) && //
      Number(tablaOcupacionAgujeros[p][8] == 0)) {
    } else {
      if (tablaOcupacionAgujeros[p][6] != 0 || tablaOcupacionAgujeros[p][7] != 0) {
        tablaFinal[m][0] = tablaOcupacionAgujeros[p][1];
        tablaFinal[m][1] = tablaOcupacionAgujeros[p][2];
        tablaFinal[m][2] = tablaOcupacionAgujeros[p][3];
        tablaFinal[m][3] = tablaOcupacionAgujeros[p][4];
        tablaFinal[m][4] = tablaOcupacionAgujeros[p][7];
        tablaFinal[m][5] = tablaOcupacionAgujeros[p][8];
        tablaFinal[m][6] = tablaOcupacionAgujeros[p][9];
        tablaFinal[m][7] = tablaOcupacionAgujeros[p][10];
        m = m + 1;
      };
    };
  };
  for (var ñ = 0; ñ < tablaOcupacionAgujerosA.length; ñ++) {
    if (Number(tablaOcupacionAgujerosA[ñ][3]) == 0 &&
      Number(tablaOcupacionAgujerosA[ñ][4]) == 0 &&
      Number(tablaOcupacionAgujerosA[ñ][5]) == 0) {
    } else {
      tablaFinal[m][0] = tablaOcupacionAgujerosA[ñ][0];
      tablaFinal[m][1] = tablaOcupacionAgujerosA[ñ][1];
      tablaFinal[m][2] = tablaOcupacionAgujerosA[ñ][2];
      tablaFinal[m][3] = tablaOcupacionAgujerosA[ñ][3];
      tablaFinal[m][4] = tablaOcupacionAgujerosA[ñ][4];
      tablaFinal[m][5] = tablaOcupacionAgujerosA[ñ][5];
      tablaFinal[m][6] = tablaOcupacionAgujerosA[ñ][6];
      tablaFinal[m][7] = tablaOcupacionAgujerosA[ñ][7];
      m = m + 1;
    };
  };


  console.log(' tabla final')
  console.log(tablaFinal)

  // GRABAR ARCHIVO -------------------------------------------------------------------------------------------------------------
  function exportar2(data, nombre2) {
    var space = "\r\n";
    let a = document.createElement("a");
    let contenido = data,
      blob = new Blob([nombre2 + space, numeroEntornado + space, tablaOcupacion + space, parunosxzonaYX + space, cantidadAgugejos + space, tablaOcupacionAgujeros + space, cantidadAgugejosA + space, tablaOcupacionAgujerosA], { type: "octet/stream" })
    url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = nombre2;
    a.click();
    window.URL.revokeObjectURL(url);
  }
  var archivoPorcen = archivoNombreAntes.split(".");
  var nom = archivoPorcen[0] + "_1" + "." + archivoPorcen[1];

  document.querySelector("#exportarOcupacion").onclick = function () {
    let data = document.querySelector("#ocupacion").value; // esto es lo que va en el txt, lo del input
    let nombreArchivo2 = nom;
    exportar2(data, nombreArchivo2);
    console.log(nombreArchivo2);
  };
  //-------------------------------------------------------------------------------------------------------------
  totalUnos = 0;
  totalCeros = 0;
  for (var x = 0; x <= nuevaff2; x++) {
    for (var y = 0; y <= nuevacc2; y++) {
      var work2 = numeroEntornado[x][y];
      if (work2 == 1) {
        totalUnos = 1 + totalUnos;
      } else if (work2 == 0) {
        totalCeros = totalCeros + 1;
      };
    };
  };
  var retorno = [];
  nuevacolumna = nuevacc2;
  retorno[0] = nuevacolumna;
  nuevafila = nuevaff2;
  retorno[1] = nuevafila;
  parfilas2 = numeroEntornado;
  retorno[2] = numeroEntornado;
  retorno[3] = totalUnos;
  return retorno;
};

//  --- FUNCIÓN PARA SUMAR UNOS Y ARMAR EL ARRAY UNOSXZONAYX -------------------------------------------------------
function funcionsumaunos(parfilaNueva, parnum, parunosxzonaYX, parinicioX, parfinalX, parp, paru, parzonaeny) {
  console.log(parfilaNueva)
  var acum1 = 0;
  var acum0 = 0;
  for (var l = parzonaeny[paru][1]; l <= parzonaeny[paru][2]; l++) {
    var zonan = "";
    for (var n = parzonaeny[paru][parnum]; n <= parzonaeny[paru][parnum + 1]; n++) {
      if (parfilaNueva[l][n] == "1") {
        acum1 = acum1 + 1;
      } else {
        acum0 = acum0 + 1;
      }
      zonan = zonan + parfilaNueva[l][n];
    };
    zonan = "";
  };
  l = (parzonaeny[paru][2] - parzonaeny[paru][1]) + 1;
  n = (parzonaeny[paru][parnum + 1] - parzonaeny[paru][parnum]) + 1;
  console.log("acum1 " + acum1)
  console.log(" l " + l)
  console.log(" n " + n)

  parunosxzonaYX[parp][0] = (acum0 + parunosxzonaYX[parp][0]).toString().padStart(3, '0');
  parunosxzonaYX[parp][1] = (acum1 + parunosxzonaYX[parp][1]).toString().padStart(3, '0');
  parunosxzonaYX[parp][2] = (Math.trunc((parunosxzonaYX[parp][1] * 100) / (l * n))).toString().padStart(3, '0');
  console.log(" cant fila " + parfilaNueva.length)
  console.log(" cant col " + (parfilaNueva[1].length - 1))
  var columnaaa = 0;
  var buscoResto = 0; // para saber si hay que restar en columnas 1
  buscoResto = (parfilaNueva[1].length % 3);
  if (buscoResto == 0) { columnaaa = parfilaNueva[1].length; } else { columnaaa = (parfilaNueva[1].length - 1) }
  parunosxzonaYX[parp][3] = (Math.trunc((Number(parunosxzonaYX[parp][1]) / (parfilaNueva.length * columnaaa)) * 100)).toString().padStart(3, '0');
  parunosxzonaYX[parp][4] = parzonaeny[paru][parnum].toString().padStart(3, '0');  // columna de inicio de la zona X
  parunosxzonaYX[parp][5] = parzonaeny[paru][parnum + 1].toString().padStart(3, '0');  // columna de final de la zona X
  parunosxzonaYX[parp][6] = parzonaeny[paru][1].toString().padStart(3, '0');  // fila de inicio de la zona Y
  parunosxzonaYX[parp][7] = parzonaeny[paru][2].toString().padStart(3, '0');  // fila de final de la zona Y
  parunosxzonaYX[parp][8] = parp.toString().padStart(3, '0'); // zona
  acum0 = 0;
  acum1 = 0;
  parp = parp + 1;
  var paraTamañoZona = l * n;
  return paraTamañoZona;
};//  fin de función funcionsumaunos

// FUNCIÓN PARA SUMAR 0 POR FILAS 
function sumoCerosFila(filas, parfila, filaHistograma) {
  var cant0 = 0;
  for (var m = filas; m <= parfila; m++) {
    if (filaHistograma[m] == 1) {
      cant0 = cant0 + 1;
    } else {
      return cant0;
    };
  };
  return cant0
}; // fin de función sumoCerosFila

function buscarAgujerosAbierto(parnumeroEntornado, parfila, parcolumna, partotal, cantidadAgugejosA, partotalUnosSSS, tabladezonas) {
  var nuevasCol = (parcolumna + 1) / 2;
  var columnaInicioI = 0;
  var columnaFinalI = (nuevasCol - 1);
  var columnaInicioD = nuevasCol;
  var columnaFinalD = parcolumna;

  //  ----- DECLARACIÓN DE ARRAYS--------------------------------------------
  var HistogramaI = new Array(parfila);
  for (var i = 0; i <= parfila; i++) {
    HistogramaI[i] = 0;
  };
  var HistogramaD = new Array(parfila);
  for (var i = 0; i <= parfila; i++) {
    HistogramaD[i] = 0;
  };
  var aguAbierI = new Array(parfila);
  var agujeroAbiertoD = new Array(parfila);
  for (var v = 0; v <= parfila; v++) {
    aguAbierI[v] = new Array(3);
    aguAbierI[v][0] = 0;  // fila de inicio
    aguAbierI[v][1] = 0;  // fila final
    aguAbierI[v][2] = 0;  // cantidad de ceros
  };
  for (var m = 0; m <= parfila; m++) {
    agujeroAbiertoD[m] = new Array(3);
    agujeroAbiertoD[m][0] = 0;
    agujeroAbiertoD[m][1] = 0;
    agujeroAbiertoD[m][2] = 0;
  };
  var agujeroIunir = new Array()
  for (var m = 0; m < parfila; m++) {
    agujeroIunir[m] = new Array(3);
    agujeroIunir[m][0] = 0;
    agujeroIunir[m][1] = 0;
    agujeroIunir[m][2] = 0;
  };

  var agujeroDunir = new Array()
  for (var m = 0; m < parfila; m++) {
    agujeroDunir[m] = new Array(3);
    agujeroDunir[m][0] = 0;
    agujeroDunir[m][1] = 0;
    agujeroDunir[m][2] = 0;
  };

  var agujeroAI = new Array();
  var agujeroAD = new Array();
  for (var v = 0; v <= parfila; v++) {
    agujeroAI[v] = new Array(5);
    agujeroAI[v][0] = 0;  // fila de inicio
    agujeroAI[v][1] = 0;  // fila final
    agujeroAI[v][2] = 0;  // cantidad de ceros
    agujeroAI[v][3] = 0;  // porcentaje de ocupación
    agujeroAI[v][4] = 0;  // n° 
    agujeroAD[v] = new Array(5);
    agujeroAD[v][0] = 0;
    agujeroAD[v][1] = 0;
    agujeroAD[v][2] = 0;
    agujeroAD[v][3] = 0;
    agujeroAD[v][4] = 0;  // n° 
  };
  var nagujeroFI = new Array();
  for (var v = 0; v < 20; v++) {
    nagujeroFI[v] = new Array(5);
    nagujeroFI[v][0] = 0;  // fila de inicio
    nagujeroFI[v][1] = 0;  // fila final
    nagujeroFI[v][2] = 0;  // cantidad de ceros
    nagujeroFI[v][3] = 0;  // porcentaje de ocupación
    nagujeroFI[v][4] = 0;  // n° 
  }
  var nagujeroFD = new Array();
  for (var v = 0; v < 20; v++) {
    nagujeroFD[v] = new Array(5);
    nagujeroFD[v][0] = 0;
    nagujeroFD[v][1] = 0;
    nagujeroFD[v][2] = 0;
    nagujeroFD[v][3] = 0;
    nagujeroFD[v][4] = 0;  // n°
  };

  var agujeroAb = new Array();
  for (var v = 0; v < 40; v++) {
    agujeroAb[v] = new Array(8);
    agujeroAb[v][0] = 0;  //  izquierda / derecha
    agujeroAb[v][1] = 0;  //  n°
    agujeroAb[v][2] = 0;  //  fila de inicio
    agujeroAb[v][3] = 0;  //  fila final
    agujeroAb[v][4] = 0;  //  cantidad de ceros
    agujeroAb[v][5] = 0;  //  porcentaje de ocupación
    agujeroAb[v][6] = 0;  //  zona comienzo
    agujeroAb[v][7] = 0;  //  zona final
  };
  //-----------------------------------------------------------------------
  var p = 0;
  var señal = 0;
  var numAgu = 0;
  for (var i = 0; i <= parfila; i++) {
    //---------------- izquierda ----------------
    if (parnumeroEntornado[i][0] == 1) {
      // señal = 2;
    } else {
      HistogramaI[i] = 1;
      sumaCeros(i, parcolumna, parnumeroEntornado, aguAbierI, "I");
      agujeroAI[p][2] = agujeroAI[p][2] + aguAbierI[i][2];
      agujeroAI[p][4] = numAgu;
      if (i == parfila) { } else if (parnumeroEntornado[i + 1][0] == 1) {
        p = p + 1;
        numAgu = numAgu + 1;
        //  señal = 1;
      };
    };
  };
  // ----------------- derecha -------------------------------
  numAgu = 0;
  p = 0;
  señal = 0;
  for (var i = 0; i <= parfila; i++) {
    if (parnumeroEntornado[i][columnaFinalD] == 0 && señal == 0) {
      HistogramaD[i] = 1;
      sumaCeros(i, parcolumna, parnumeroEntornado, agujeroAbiertoD, "D")
      agujeroAD[p][2] = agujeroAD[p][2] + agujeroAbiertoD[i][2];
      agujeroAD[p][4] = numAgu;
    } else if (parnumeroEntornado[i][columnaFinalD] == 1 && señal == 0) {
      if (i !== 0) {
        p = p + 1;
      };
      señal = 1;
    } else if (parnumeroEntornado[i][columnaFinalD] == 0 && señal == 1) {
      señal = 0;
      numAgu = numAgu + 1;
      i = i - 1;
    };
  };

  function sumaCeros(pari, parcol, parnumeroEntornado, paragujeroAbierto, parLetra) {
    var i = pari;
    var col = parcol;
    if (parLetra == "I") {
      for (var x = 0; x <= col; x++) {
        if (parnumeroEntornado[i][x] == 0) {
          paragujeroAbierto[i][2] = paragujeroAbierto[i][2] + 1;
        } else {
          return;
        };
      };
    } else if (parLetra == "D") {
      col = parcol;
      for (var x = col; x >= 0; x--) {
        if (parnumeroEntornado[i][x] == 1) {
          return;
        } else {
          paragujeroAbierto[i][2] = paragujeroAbierto[i][2] + 1;
        };
      };
    };
  };

  console.log(" agujeroAbierto D ")
  console.log(agujeroAbiertoD)
  console.log(" agujeroAbierto I ")
  console.log(aguAbierI)
  console.log("Valores del Histograma Derecha =>" + " 0 , 1");
  HistogramaD.forEach(function (HistogramaD, index) { console.log("derecha " + `${index} : ${HistogramaD}`); })
  console.log("Valores del Histograma izquierda =>" + " 0 , 1");
  HistogramaI.forEach(function (HistogramaI, index) { console.log("izquierda " + `${index} : ${HistogramaI}`) });
  //-------------------------------------------------------------------------------------------
  var t = 0;
  var f = 0;
  for (var i = 0; i <= parfila; i++) {
    if (HistogramaI[i] == 1) {
      var cantFilasI0 = (sumoCerosFila(i, parfila, HistogramaI))
      if (i == 0) {
        aguAbierI[t][0] = 0;  // comienzo de la 1er zona abierta
        agujeroAI[f][0] = Number(aguAbierI[t][0]);
      } else {
        aguAbierI[t][0] = i;  // comienzo de la 2da zona abierta
        agujeroAI[f][0] = Number(aguAbierI[t][0]);
      }
      var paraSuma = i + cantFilasI0;
      aguAbierI[t][1] = paraSuma - 1; // fin de la zona abierta
      agujeroAI[f][1] = aguAbierI[t][1];
      i = i + cantFilasI0;
      f = f + 1;
    } else if (HistogramaI[i] == 0) {
      t = t + 1;
    };
  };
  f = 0;
  t = 0;
  for (var i = 0; i <= parfila; i++) {
    if (HistogramaD[i] == 1) {
      var cantFilasD0 = (sumoCerosFila(i, parfila, HistogramaD))
      if (i == 0) {
        agujeroAbiertoD[t][0] = 0;  // comienzo de la 1er zona abierta
        agujeroAD[f][0] = agujeroAbiertoD[t][0];
      } else {
        agujeroAbiertoD[t][0] = i;  // comienzo de la 2da zona abierta
        agujeroAD[f][0] = agujeroAbiertoD[t][0];
      }
      var paraSuma = i + cantFilasD0;
      agujeroAbiertoD[t][1] = paraSuma - 1;
      agujeroAD[f][1] = agujeroAbiertoD[t][1];
      i = i + cantFilasD0;
      t = t + 1;
      f = f + 1;
    };
  };
  console.log(agujeroAD)

  f = 0;
  for (var i = 0; i < (agujeroAD.length - 1); i++) {
    if ((agujeroAD[i][1] + 1) == (agujeroAD[i + 1][0] - 1)) {
      agujeroDunir[f][0] = agujeroAD[i][0];
      agujeroDunir[f][1] = agujeroAD[i + 1][1];
      agujeroDunir[f][2] = Number(agujeroAD[i][2]) + Number(agujeroAD[i + 1][2]);
      f = f + 1;
      i = i + 1;
    } else {
      agujeroDunir[f][0] = agujeroAD[i][0];
      agujeroDunir[f][1] = agujeroAD[i][1];
      agujeroDunir[f][2] = agujeroAD[i][2];
      f = f + 1;
    };
  };
  console.log(agujeroDunir)
  f = 0;
  for (var i = 0; i < (agujeroAI.length - 1); i++) {
    if ((agujeroAI[i][1] + 1) == (agujeroAI[i + 1][0] - 1)) {
      agujeroIunir[f][0] = agujeroAI[i][0];
      agujeroIunir[f][1] = agujeroAI[i + 1][1];
      agujeroIunir[f][2] = Number(agujeroAI[i][2]) + Number(agujeroAI[i + 1][2]);
      f = f + 1;
      i = i + 1;
    } else {
      agujeroIunir[f][0] = agujeroAI[i][0];
      agujeroIunir[f][1] = agujeroAI[i][1];
      agujeroIunir[f][2] = agujeroAI[i][2];
      f = f + 1;
    };
  };

  var porcent = 0;
  var porcent2 = 0;
  var numAgu2 = 0;
  var numAgu2I = 0;
  var w = 0;
  var w2 = 0;
  for (var i = 0; i < parfila; i++) {
    if (agujeroIunir[i][2] !== 0 && agujeroIunir[i][1] !== 0) {
      porcent = ((agujeroIunir[i][2] / partotalUnosSSS) * 100)//.toString().padStart(2, '0');
      agujeroIunir[i][3] = Number(parseInt(porcent));
    };
    if (agujeroDunir[i][2] !== 0 && agujeroDunir[i][1] !== 0) {
      porcent2 = ((agujeroDunir[i][2] / partotalUnosSSS) * 100)//.toString().padStart(2, '0');
      agujeroDunir[i][3] = parseInt(porcent2);
    };
    if (agujeroDunir[i][2] >= 2) {
      nagujeroFD[w][0] = agujeroDunir[i][0];
      nagujeroFD[w][1] = agujeroDunir[i][1];
      nagujeroFD[w][2] = agujeroDunir[i][2];
      nagujeroFD[w][3] = agujeroDunir[i][3];
      nagujeroFD[w][4] = numAgu2;
      numAgu2 = numAgu2 + 1;
      w = w + 1;
    };
    if (agujeroIunir[i][2] >= 2) {
      nagujeroFI[w2][0] = Number(agujeroIunir[i][0]);
      nagujeroFI[w2][1] = Number(agujeroIunir[i][1]);
      nagujeroFI[w2][2] = Number(agujeroIunir[i][2]);
      nagujeroFI[w2][3] = Number(agujeroIunir[i][3]);
      nagujeroFI[w2][4] = numAgu2I;
      numAgu2I = numAgu2I + 1;
      w2 = w2 + 1;
    };
  };
  var v = 0;
  var cantidadAgugejos = 0;
  var comienzoFilas = 5;
  var finalFilas = (parfila - 5);
  for (var f = 0; f < 20; f++) {
    if (nagujeroFI[f][2] == 0 && nagujeroFI[f][1] == 0) {
    } else {
      if ((nagujeroFI[f][0] < finalFilas)
        && (nagujeroFI[f][0] >= comienzoFilas)
        && (nagujeroFI[f][3] > 0)) {
        cantidadAgugejos = cantidadAgugejos + 1;
        agujeroAb[v][0] = "#I";             //  izquierda
        agujeroAb[v][1] = nagujeroFI[f][4];  // n° 
        agujeroAb[v][2] = nagujeroFI[f][0];  // fila de inicio
        agujeroAb[v][3] = nagujeroFI[f][1];  // fila final
        agujeroAb[v][4] = nagujeroFI[f][2];  // cantidad de ceros
        agujeroAb[v][5] = nagujeroFI[f][3];  // porcentaje de ocupación
        v = v + 1;
      } else {
        if (nagujeroFI[f][3] >= 6) {
          cantidadAgugejos = cantidadAgugejos + 1;
          agujeroAb[v][0] = "#I";             //  izquierda
          agujeroAb[v][1] = nagujeroFI[f][4];  // n° 
          agujeroAb[v][2] = nagujeroFI[f][0];  // fila de inicio
          agujeroAb[v][3] = nagujeroFI[f][1];  // fila final
          agujeroAb[v][4] = nagujeroFI[f][2];  // cantidad de ceros
          agujeroAb[v][5] = nagujeroFI[f][3];  // porcentaje de ocupación
          v = v + 1;
        };
      };
    };
  };

  for (var f = 0; f < 20; f++) {
    if (nagujeroFD[f][2] == 0 && nagujeroFD[f][1] == 0) {
    } else {
      console.log(nagujeroFD[f])
      if ((finalFilas >= nagujeroFD[f][0])
        && (nagujeroFD[f][0] >= comienzoFilas)
        && (nagujeroFD[f][3] > 0)) {
        cantidadAgugejos = cantidadAgugejos + 1;
        agujeroAb[v][0] = "#D";             //  izquierda
        agujeroAb[v][1] = nagujeroFD[f][4];  // n° 
        agujeroAb[v][2] = nagujeroFD[f][0];  // fila de inicio
        agujeroAb[v][3] = nagujeroFD[f][1];  // fila final
        agujeroAb[v][4] = nagujeroFD[f][2];  // cantidad de ceros
        agujeroAb[v][5] = nagujeroFD[f][3];  // porcentaje de ocupación
        v = v + 1;
      } else {
        if (nagujeroFD[f][3] >= 6) {
          cantidadAgugejos = cantidadAgugejos + 1;
          agujeroAb[v][0] = "#D";             //  izquierda
          agujeroAb[v][1] = nagujeroFD[f][4];  // n° 
          agujeroAb[v][2] = nagujeroFD[f][0];  // fila de inicio
          agujeroAb[v][3] = nagujeroFD[f][1];  // fila final
          agujeroAb[v][4] = nagujeroFD[f][2];  // cantidad de ceros
          agujeroAb[v][5] = nagujeroFD[f][3];  // porcentaje de ocupación
          v = v + 1;
        };
      };
    };
  };

  cantidadAgugejosA = cantidadAgugejos;
  //  unosxzonaYX[m][0] = 0;  // acumulador de 0 x zona (X Y)
  //  unosxzonaYX[m][1] = 0;  // acumulador de 1 x zona (X Y)
  //  unosxzonaYX[m][2] = 0;  // porcentaje de ocupación de la zona
  //  unosxzonaYX[m][3] = 0;  // porcentaje de ocupazión de la zona con respecto al total del número  10
  //  unosxzonaYX[m][4] = 0;  // columna de inicio de la zona X
  //  unosxzonaYX[m][5] = 0;  // columna de final de la zona X
  //  unosxzonaYX[m][6] = 0;  // fila de inicio de la zona Y
  //  unosxzonaYX[m][7] = 0;  // fila de final de la zona Y
  //  unosxzonaYX[m][8] = 0;  // zona
  //  unosxzonaYX[m][9] = "\r\n"
  var CerosZona = 0;
  var salvaZona = 0;

  for (var qqq = 0; qqq < agujeroAb.length; qqq++) {
    CerosZona = 0;
    salvaZona = 0;
    if ((agujeroAb[qqq][3] == 0) && (agujeroAb[qqq][4] == 0) && (agujeroAb[qqq][5] == 0)) {
    } else {
      if (agujeroAb[qqq][0] == "#I") {  // agujero de izquierda
        CerosZona = 0;
        salvaZona = 0;
        // zona de comienzo
        for (var mmm = 0; mmm <= 8; mmm++) {
          if (Number(tabladezonas[mmm][8]) == 0) {  // zona 0
            if (((Number(tabladezonas[mmm][6]) <= agujeroAb[qqq][2])
              && (agujeroAb[qqq][2] <= Number(tabladezonas[mmm][7]))
              || (Number(tabladezonas[mmm][7]) >= agujeroAb[qqq][3]))) { // fila de inicio
              if (CerosZona < Number(tabladezonas[mmm][0])) {
                CerosZona = Number(tabladezonas[mmm][0]);// cantidad de ceros
                salvaZona = Number(tabladezonas[mmm][8]);// zona
                agujeroAb[qqq][6] = salvaZona;
                agujeroAb[qqq][7] = salvaZona;
                break;
              };
            };

          };
          if (Number(tabladezonas[mmm][8]) == 3) {
            if ((Number(tabladezonas[mmm][6]) >= agujeroAb[qqq][2])
              || ((Number(tabladezonas[mmm][6]) <= agujeroAb[qqq][2])
                && (agujeroAb[qqq][2] <= Number(tabladezonas[mmm][7])))) { // fila de inicio
              if (CerosZona < Number(tabladezonas[mmm][0])) {
                CerosZona = Number(tabladezonas[mmm][0]);// cantidad de ceros
                salvaZona = Number(tabladezonas[mmm][8]);// zona
                agujeroAb[qqq][6] = salvaZona;
                agujeroAb[qqq][7] = salvaZona;
                break;
              };
            };
          };
          if (Number(tabladezonas[mmm][8]) == 6) {
            if ((Number(tabladezonas[mmm][6]) >= agujeroAb[qqq][2]) ||
              ((Number(tabladezonas[mmm][6]) <= agujeroAb[qqq][2])
                && (agujeroAb[qqq][2] <= Number(tabladezonas[mmm][7])))) { // fila de inicio
              if (CerosZona < Number(tabladezonas[mmm][0])) {
                CerosZona = Number(tabladezonas[mmm][0]);// cantidad de ceros
                salvaZona = Number(tabladezonas[mmm][8]);// zona
                agujeroAb[qqq][6] = salvaZona;
                agujeroAb[qqq][7] = salvaZona;
                break;
              };
            };
          };
        };
      } else if (agujeroAb[qqq][0] == "#D") { // agujero de derecha
        CerosZona = 0;
        salvaZona = 0;
        // zona de comienzo
        for (var mmm = 0; mmm <= 8; mmm++) {
          if (Number(tabladezonas[mmm][8]) == 2) {  // zona 2
            if ((Number(tabladezonas[mmm][6]) >= agujeroAb[qqq][2]) ||
              ((Number(tabladezonas[mmm][6]) < agujeroAb[qqq][2]) &&
                (agujeroAb[qqq][2] <= Number(tabladezonas[mmm][7])))) { // fila de inicio
              if (CerosZona < Number(tabladezonas[mmm][0])) {
                CerosZona = Number(tabladezonas[mmm][0]);// cantidad de ceros
                salvaZona = Number(tabladezonas[mmm][8]);// zona
                agujeroAb[qqq][6] = salvaZona;
                agujeroAb[qqq][7] = salvaZona;
                break;
              };
            };
          };
          if (Number(tabladezonas[mmm][8]) == 5) {
            if ((Number(tabladezonas[mmm][6]) >= agujeroAb[qqq][2]) ||
              ((Number(tabladezonas[mmm][6]) < agujeroAb[qqq][2]) && (
                agujeroAb[qqq][2] <= Number(tabladezonas[mmm][7])))) { // fila de inicio
              if (CerosZona < Number(tabladezonas[mmm][0])) {
                CerosZona = Number(tabladezonas[mmm][0]);
                salvaZona = Number(tabladezonas[mmm][8]);
                agujeroAb[qqq][6] = salvaZona;
                agujeroAb[qqq][7] = salvaZona;

                break;
              };
            };
          };
          if (Number(tabladezonas[mmm][8]) == 8) {
            if ((Number(tabladezonas[mmm][6]) >= agujeroAb[qqq][2]) ||
              ((Number(tabladezonas[mmm][6]) < agujeroAb[qqq][2]) &&
                (agujeroAb[qqq][2] <= Number(tabladezonas[mmm][7])))) { // fila de inicio
              if (CerosZona < Number(tabladezonas[mmm][0])) {
                CerosZona = Number(tabladezonas[mmm][0]);
                salvaZona = Number(tabladezonas[mmm][8]);
                agujeroAb[qqq][6] = salvaZona;
                agujeroAb[qqq][7] = salvaZona;// zona de final
                break;
              };
            };
          };
        };
      };
    };
  };
  console.log(' agujero abiertos ')
  console.log(agujeroAb)
  return agujeroAb;
}; // // fin de función buscarAgujerosAbierto

//  FUNCIÓN PARA BUSCAR LOS AGUJEROS CERRADOS 
function buscarAgujerosCerrados(parnumero, parcantfilas, parcolufinal, colucomiz, colufinalz, totalUnos, arraydezonas) {
  // DECLARACIÓN DE VARIABLES--------------------------------------------------
  var y;// = pary;
  var x;//= parx;
  var cantfilas = parcantfilas;  //cantidad de filas
  var colufinal = parcolufinal + 1;  //cantidad de columnas que tiene la final
  colucomiz = 0;
  colufinalz = 0;

  //----- DECLARACIÓN DE ARRAYS ----------------------------------------------------------------------------------------------------
  var agujero = new Array();
  for (var v = 0; v <= 40; v++) {
    agujero[v] = new Array(4);
    agujero[v][0] = 0; // fila 
    agujero[v][1] = 0; // coluinicio
    agujero[v][2] = 0;  // colufinal
    agujero[v][3] = 0; // cantidad de ceros
  };
  var agujerofilacontigua = new Array();
  for (var v = 0; v <= 40; v++) {
    agujerofilacontigua[v] = new Array(5);
    agujerofilacontigua[v][0] = 0; // fila 
    agujerofilacontigua[v][1] = 0; // coluinicio
    agujerofilacontigua[v][2] = 0; // colufinal
    agujerofilacontigua[v][3] = 0; // cantidad de ceros
    agujerofilacontigua[v][4] = 0; // numero de agujero
  };
  var datosAgujero = new Array();
  for (var v = 0; v <= 40; v++) {
    datosAgujero[v] = new Array(11);
    datosAgujero[v][0] = 0; //  cantidad de agujeros
    datosAgujero[v][1] = 0; //  sector
    datosAgujero[v][2] = 0; //  numero de agujero
    datosAgujero[v][3] = 0; //  fila de comienzo
    datosAgujero[v][4] = 0; //  fila final
    datosAgujero[v][5] = 0; //  columna menor
    datosAgujero[v][6] = 0; //  columna mayor
    datosAgujero[v][7] = 0; //  cantidad de ceros || superficie
    datosAgujero[v][8] = 0; //  porcentaje de ocupación
    datosAgujero[v][9] = 0; // principio de zona
    datosAgujero[v][10] = 0;  // final de zona
  };
  //-------------------------------------------------------------------------------------------------------------------
  var recibo = new Array(2)
  recibo[0] = 0;  // cantidad de ceros
  recibo[1] = 0;  // colufinalz
  var cant0 = 0;
  var t = 0;
  var x = 0;
  var subagu = 0;
  // encuentra agujeros  barriendo el numero por  la fila de izq a derecha y construye un array de agujeros 
  for (y = 0; y <= cantfilas; y++) {
    for (x = 0; x < colufinal; x++) {
      if (parnumero[y][x] == 1) {
        t = x + 1;
        if (parnumero[y][t] == 0) { // la funcion suma0hastaelprimer1 devueldos valores CC CF y retorna cantidad de ceros
          colucomiz = t;          // asignación de valor de columna de inicio
          recibo = (suma0hastaelprimer1(parnumero, y, x, colufinal, colucomiz));
          cant0 = recibo[0];
          colufinalz = recibo[1];
          if (cant0 > 2) {
            agujero[subagu][0] = y; // fila
            agujero[subagu][1] = colucomiz; // columna del primer 0
            agujero[subagu][2] = colufinalz;  // columna del ultimo 0
            agujero[subagu][3] = cant0; // cant de columnas que tienen cant de ceros
            subagu = subagu + 1;
            break
          } else if (cant0 == 0) {
            break
          } else {         // fuerza cambio de fila  por que es una fila que termina con cero
            agujero[subagu][0] = y;
            agujero[subagu][1] = colucomiz;
            agujero[subagu][2] = colufinalz;
            agujero[subagu][3] = cant0; // cant de columnas es pequeno 1 o 2
            subagu = subagu + 1;
            break
          };
          break
        };
      };
    };
  };
  // analisis de los agujeros estan en filas  contiguas (y) 
  // arma el array de filas contiguas

  //--------------------------------------------------------------------------
  var salvosubagu = subagu;
  var proximafila = 0;
  var proximafila1 = 0;
  var filaanterior;
  var ycontiguo = 0;
  var cantAgujeros = 0;
  var sumaAgujerosCerrados = 0;
  var señal = 0;
  var filaInicial = 0;
  var filaFin = 0;
  var kk = 0;
  if ((agujero[kk][1] == 0) && (agujero[kk][3] == 0)) { } else {
    for (var x = 0; x <= subagu; x++) {
      proximafila = agujero[x][0];   //  del primer agujero  saco la fila
      proximafila = proximafila + 1; // es para comparar 
      if ((agujero[x][0] == 0) && (x == 0)) {  // agujero de borde 
        x = saltearAgujeroBorde(agujero);
        x = x - 1;
      } else if ((agujero[x][0] !== 0) &&
        (agujero[x][1] !== 0) &&
        (agujero[x][3] !== 0) &&
        (agujero[x][2] !== 0)) {   // fin del array agujero[x]
        if (proximafila == agujero[x + 1][0]) { //  es fila contigua 
          // copio el primer elemento de la igualdad      
          if (señal == 0) {
            agujerofilacontigua[ycontiguo][0] = agujero[x][0]
            filaInicial = agujero[x][0]
            agujerofilacontigua[ycontiguo][1] = agujero[x][1]
            agujerofilacontigua[ycontiguo][2] = agujero[x][2]
            agujerofilacontigua[ycontiguo][3] = agujero[x][3]
            agujerofilacontigua[ycontiguo][4] = cantAgujeros;
            // copio segundo elemento
            ycontiguo = ycontiguo + 1
            señal = 1;
            if (agujero[x][1] == agujero[x + 1][1]) { // fila comienzo == fila comienzo
              agujerofilacontigua[ycontiguo][0] = agujero[x + 1][0]
              agujerofilacontigua[ycontiguo][1] = agujero[x + 1][1]
              agujerofilacontigua[ycontiguo][2] = agujero[x + 1][2]
              agujerofilacontigua[ycontiguo][3] = agujero[x + 1][3]
              agujerofilacontigua[ycontiguo][4] = cantAgujeros;
              ycontiguo = ycontiguo + 1
            } else if (agujero[x][1] < agujero[x + 1][1]) {
              if (((agujero[x][2] <= agujero[x + 1][2]) && (agujero[x][2] > agujero[x + 1][1]))
                || agujero[x][2] == agujero[x + 1][2]) { // fila comienzo < fila comienzo
                agujerofilacontigua[ycontiguo][0] = agujero[x + 1][0]
                agujerofilacontigua[ycontiguo][1] = agujero[x + 1][1]
                agujerofilacontigua[ycontiguo][2] = agujero[x + 1][2]
                agujerofilacontigua[ycontiguo][3] = agujero[x + 1][3]
                agujerofilacontigua[ycontiguo][4] = cantAgujeros;
                ycontiguo = ycontiguo + 1
              } else {
                señal = 0;
                cantAgujeros = cantAgujeros + 1;
              }
            } else if ((agujero[x][1] > agujero[x + 1][1]) && (agujero[x][1] <= agujero[x + 1][2])) {  // fila comienzo contenida en las columnas del siguiente
              agujerofilacontigua[ycontiguo][0] = agujero[x + 1][0]
              agujerofilacontigua[ycontiguo][1] = agujero[x + 1][1]
              agujerofilacontigua[ycontiguo][2] = agujero[x + 1][2]
              agujerofilacontigua[ycontiguo][3] = agujero[x + 1][3]
              agujerofilacontigua[ycontiguo][4] = cantAgujeros;
              ycontiguo = ycontiguo + 1
            } else {
              if (agujero[x][1] == agujero[x + 2][1]) { // fila comienzo == fila comienzo
                agujerofilacontigua[ycontiguo][0] = agujero[x + 2][0]
                agujerofilacontigua[ycontiguo][1] = agujero[x + 2][1]
                agujerofilacontigua[ycontiguo][2] = agujero[x + 2][2]
                agujerofilacontigua[ycontiguo][3] = agujero[x + 2][3]
                agujerofilacontigua[ycontiguo][4] = cantAgujeros;
                ycontiguo = ycontiguo + 1
              } else if (agujero[x][1] < agujero[x + 2][1]) {
                if (((agujero[x][2] <= agujero[x + 2][2]) && (agujero[x][2] > agujero[x + 2][1]))
                  || (agujero[x][2] == agujero[x + 2][2])) { // fila comienzo < fila comienzo
                  agujerofilacontigua[ycontiguo][0] = agujero[x + 2][0]
                  agujerofilacontigua[ycontiguo][1] = agujero[x + 2][1]
                  agujerofilacontigua[ycontiguo][2] = agujero[x + 2][2]
                  agujerofilacontigua[ycontiguo][3] = agujero[x + 2][3]
                  agujerofilacontigua[ycontiguo][4] = cantAgujeros;
                  ycontiguo = ycontiguo + 1
                } else {
                  señal = 0;
                  cantAgujeros = cantAgujeros + 1;
                }
              } else if ((agujero[x][1] > agujero[x + 2][1]) && (agujero[x][1] <= agujero[x + 2][2])) {  // fila comienzo contenida en las columnas del siguiente
                agujerofilacontigua[ycontiguo][0] = agujero[x + 2][0]
                agujerofilacontigua[ycontiguo][1] = agujero[x + 2][1]
                agujerofilacontigua[ycontiguo][2] = agujero[x + 2][2]
                agujerofilacontigua[ycontiguo][3] = agujero[x + 2][3]
                agujerofilacontigua[ycontiguo][4] = cantAgujeros;
                ycontiguo = ycontiguo + 1
              } else {
                señal = 0;
                cantAgujeros = cantAgujeros + 1;
              }
            }
            // 
          } else {
            agujerofilacontigua[ycontiguo][0] = agujero[x + 1][0]
            agujerofilacontigua[ycontiguo][1] = agujero[x + 1][1]
            agujerofilacontigua[ycontiguo][2] = agujero[x + 1][2]
            agujerofilacontigua[ycontiguo][3] = agujero[x + 1][3]
            agujerofilacontigua[ycontiguo][4] = cantAgujeros;
            ycontiguo = ycontiguo + 1  // es el limite de filas con agujeros encontrados
            //  x = x + 1;
            filaFin = agujero[x + 1][0];
            datosAgujero[cantAgujeros][3] = filaInicial;
            datosAgujero[cantAgujeros][4] = filaFin;
            datosAgujero[cantAgujeros][2] = cantAgujeros;
          };
        } else if (proximafila == 1) {
          // se acabó el agujero y cortó el análisis de continuidad
          // x = x + 1;
        } else if ((proximafila !== agujero[x + 1][0]) && (señal == 1)) {
          proximafila1 = agujero[x + 1][0];   //  del primer agujero  saco la fila
          proximafila1 = proximafila1 + 1; // es para comparar 
          filaanterior = agujero[x][0];
          filaanterior = filaanterior - 1;
          if ((agujero[x + 1][0] == 0) &&
            (agujero[x + 1][1] == 0) &&
            (agujero[x + 1][2] == 0) &&
            (agujero[x + 1][3] == 0)) {
            filaFin = agujero[x][0];
            if (datosAgujero[cantAgujeros][4] !== 0) {
              cantAgujeros = cantAgujeros + 1;
            }
            datosAgujero[cantAgujeros][3] = filaInicial;
            datosAgujero[cantAgujeros][4] = filaFin;
            datosAgujero[cantAgujeros][2] = cantAgujeros;
            break;
          };
        }
        if ((x !== 0) && (proximafila !== agujero[x][0]) && (filaanterior == agujero[x - 1][0])) { // agujeros de dos filas
          filaFin = agujero[x][0];
          datosAgujero[cantAgujeros][3] = filaInicial;
          datosAgujero[cantAgujeros][4] = filaFin;
          datosAgujero[cantAgujeros][2] = cantAgujeros;
          if (datosAgujero[cantAgujeros][4] !== 0) {
            cantAgujeros = cantAgujeros + 1;
            señal = 0;
          };
        };
        if ((proximafila !== agujero[x + 1][0]) && (agujero[x + 2][0] == proximafila1) && ((proximafila1 - 2) == agujero[x][0])) { // para evitar la separación de agujeros en la misma fila
          if ((agujero[x][0] !== agujero[x + 1][0]) && (señal == 1)) {
            señal = 0;
            cantAgujeros = cantAgujeros + 1;
          } else if ((agujero[x][0] !== agujero[x + 1][0]) && (señal == 0) && (datosAgujero[cantAgujeros][4] !== 0)) {
            cantAgujeros = cantAgujeros + 1;
          };
        } else if ((proximafila !== agujero[x + 1][0]) && (agujero[x + 1][0] !== agujero[x + 2][0]) && (señal == 1)) {
          señal = 0;
        };
      };
    };
  }

  console.log(' agujero ')
  console.log(agujero)
  sumaAgujerosCerrados = cantAgujeros + 1;  // cantidad de los agujeros
  console.log("console 2 final " + cantAgujeros)
  datosAgujero[0][0] = sumaAgujerosCerrados;        // guardar la cantidar en el array de salida
  console.log("agujerofilacontigua")
  console.log(agujerofilacontigua)
  console.log(' datos agujero ')
  console.log(datosAgujero)

  //   Analiza de a un agujero con filas contigual y busco        
  // comienzo en el array de filas contiguas
  // final  en el array de filas contiguas 
  var proximoAgujero = 0;
  var yy = 0;
  var coluWork = 0;
  //--------- sector superior || inferior -------------------------------------------------------------------------------
  var s1filafinal = parcantfilas / 2;
  var s1filaprimera = 0;
  var s2filaprimera = s1filafinal;
  var s2filafinal = parcantfilas;
  var sectores = new Array(4);
  //  sector 1 
  sectores[0] = s1filaprimera;  // fila comienzo
  sectores[1] = s1filafinal;    // fila final
  //  sector 2
  sectores[2] = s2filaprimera;  // fila comienzo
  sectores[3] = s2filafinal;    // fila final
  for (var u = 0; u < 40; u++) {
    if ((datosAgujero[u][7] == 0) &&
      (datosAgujero[u][6] == 0) &&
      (datosAgujero[u][5] == 0) &&
      (datosAgujero[u][4] == 0)) {
    } else {
      if (datosAgujero[u][2] !== 0) {
        yy = yy + 1;
      };
      if (datosAgujero[u][3] <= s1filafinal) {
        datosAgujero[yy][1] = " S1 ";
        //  yy = yy + 1;
      } else if (datosAgujero[u][3] >= s2filaprimera) {
        datosAgujero[yy][1] = " S2 ";
        //  yy = yy + 1;
      };
    };
  };
  //-------- columna menor -------------------------------------------------------------
  proximoAgujero = 0;
  yy = 0;
  coluWork = 0;
  var salvaYDA = 0;
  señal = 0;
  for (var xx = 0; xx <= ycontiguo; xx++) {
    if (agujerofilacontigua[xx][0] == 0 &&
      agujerofilacontigua[xx][3] == 0 &&
      agujerofilacontigua[xx][2] == 0 &&
      agujerofilacontigua[xx][1] == 0) {
    } else {
      if (señal == 0) {
        proximoAgujero = agujerofilacontigua[xx][4];
        señal = 1;
        coluWork = agujerofilacontigua[xx][1];
      } else {
        if (agujerofilacontigua[xx][4] == proximoAgujero) {
          if (coluWork < agujerofilacontigua[xx + 1][1]) {
            if (coluWork == 0) {
              coluWork = agujerofilacontigua[xx][1]; // movemos la columna a la nueva tabla
            } else if (coluWork < agujerofilacontigua[xx + 1][1]) {
            } else {
              coluWork = agujerofilacontigua[xx + 1][1]; // movemos la columna a la nueva tabla
            };
          } else {
            if (coluWork == 0) {
              coluWork = agujerofilacontigua[xx][1]; // movemos la columna a la nueva tabla
            } else if (agujerofilacontigua[xx + 1][0] == 0 &&
              agujerofilacontigua[xx + 1][4] == 0 &&
              agujerofilacontigua[xx + 1][3] == 0 &&
              agujerofilacontigua[xx + 1][2] == 0 &&
              agujerofilacontigua[xx + 1][1] == 0) {
              datosAgujero[yy][5] = coluWork;
              salvaYDA = yy;
              yy = yy + 1;
              proximoAgujero = agujerofilacontigua[xx][4];
              xx = ycontiguo + 1;
              señal = 0;
              break;
            } else if (coluWork < agujerofilacontigua[xx + 1][1]) {
              datosAgujero[salvaYDA][5] = coluWork;
              salvaYDA = yy;
              yy = yy + 1;
              proximoAgujero = agujerofilacontigua[xx][4];
              xx = xx - 1;
              señal = 0;
            };
          };
        } else {
          datosAgujero[yy][5] = coluWork;
          salvaYDA = yy;
          yy = yy + 1;
          proximoAgujero = agujerofilacontigua[xx][4]
          xx = xx - 1;
          señal = 0;
        };
      };
    };
  };
  console.log(datosAgujero)
  //-------- columna mayor -------------------------------------------------------------
  proximoAgujero = 0;
  yy = 0;
  for (var xx = 0; xx < ycontiguo; xx++) {
    if ((agujerofilacontigua[xx][0] == 0) &&
      (agujerofilacontigua[xx][4] == 0) &&
      (agujerofilacontigua[xx][3] == 0) &&
      (agujerofilacontigua[xx][2] == 0) &&
      (agujerofilacontigua[xx][1] == 0)) {
    } else {
      if (agujerofilacontigua[xx][4] == proximoAgujero) { // se busca por agujero
        if ((agujerofilacontigua[xx][2] < agujerofilacontigua[xx + 1][2]) &&  // si es menor a la fila siguiente
          (agujerofilacontigua[xx + 1][2] !== 0) && // la fila siguiente es !== de 0
          (agujerofilacontigua[xx + 1][4] !== proximoAgujero)) {  // No tomar la primera fila del próximo agujero
          datosAgujero[yy][6] = agujerofilacontigua[xx + 1][2];
        } else if (agujerofilacontigua[xx][2] > datosAgujero[yy][6]) {    // cuando la fila final es mayor al valor del array
          datosAgujero[yy][6] = agujerofilacontigua[xx][2];
        };
      } else {
        proximoAgujero = agujerofilacontigua[xx][4];
        yy = yy + 1;
        xx = xx - 1;
      };
    };
  };
  //-------- superficie -------------------------------------------------------------
  proximoAgujero = 0;
  yy = 0;
  for (var xx = 0; xx <= ycontiguo; xx++) {
    if (agujerofilacontigua[xx][4] == proximoAgujero) {
      datosAgujero[yy][7] = datosAgujero[yy][7] + agujerofilacontigua[xx][3];
      //--------- porcentaje de ocupación ---------------------------------------------------------      
      datosAgujero[yy][8] = Math.trunc((datosAgujero[yy][7] * 100) / totalUnos);
      //-------------------------------------------------------------------------------------------
    } else {
      proximoAgujero = agujerofilacontigua[xx][4];
      yy = yy + 1;
      datosAgujero[yy][7] = datosAgujero[yy][7] + agujerofilacontigua[xx][3];
    };
  };

  //  unosxzonaYX[m][0] = 0;  // acumulador de 0 x zona (X Y)
  //  unosxzonaYX[m][1] = 0;  // acumulador de 1 x zona (X Y)
  //  unosxzonaYX[m][2] = 0;  // porcentaje de ocupación de la zona
  //  unosxzonaYX[m][3] = 0;  // porcentaje de ocupazión de la zona con respecto al total del número  10
  //  unosxzonaYX[m][4] = 0;  // columna de inicio de la zona X
  //  unosxzonaYX[m][5] = 0;  // columna de final de la zona X
  //  unosxzonaYX[m][6] = 0;  // fila de inicio de la zona Y
  //  unosxzonaYX[m][7] = 0;  // fila de final de la zona Y
  //  unosxzonaYX[m][8] = 0;  // zona
  //  unosxzonaYX[m][9] = "\r\n"

  for (var qqq = 0; qqq < datosAgujero.length; qqq++) {
    CerosZona = 0;
    salvaZona = 0;
    if (datosAgujero[qqq][4] == 0
      && datosAgujero[qqq][6] == 0
      && datosAgujero[qqq][7] == 0
      && datosAgujero[qqq][8] == 0) {
    } else {
      // zona de comienzo
      CerosZona = 0;
      salvaZona = 0;
      for (var mmm = 0; mmm <= 8; mmm++) {
        if (Number(arraydezonas[mmm][8]) == 1) {
          if ((Number(arraydezonas[mmm][6]) <= datosAgujero[qqq][3]
            && datosAgujero[qqq][3] < Number(arraydezonas[mmm][7]))) { // fila de inicio
            if (CerosZona < Number(arraydezonas[mmm][0])) {
              CerosZona = Number(arraydezonas[mmm][0]);// cantidad de ceros
              salvaZona = Number(arraydezonas[mmm][8]);// zona
              datosAgujero[qqq][9] = salvaZona;
              datosAgujero[qqq][10] = salvaZona;
              break;
            };
          };
        };
        if (Number(arraydezonas[mmm][8]) == 4) {
          if ((Number(arraydezonas[mmm][6]) <= datosAgujero[qqq][3]
            && datosAgujero[qqq][3] < Number(arraydezonas[mmm][7]))) { // fila de inicio
            if (CerosZona < Number(arraydezonas[mmm][0])) {
              CerosZona = Number(arraydezonas[mmm][0]);// cantidad de ceros
              salvaZona = Number(arraydezonas[mmm][8]);// zona
              datosAgujero[qqq][9] = salvaZona;
              datosAgujero[qqq][10] = salvaZona;
              break;
            };
          } else if ((Number(arraydezonas[mmm][6]) >= datosAgujero[qqq][3])) {
            if (CerosZona < Number(arraydezonas[mmm][0])) {
              CerosZona = Number(arraydezonas[mmm][0]);// cantidad de ceros
              salvaZona = Number(arraydezonas[mmm][8]);// zona
              datosAgujero[qqq][9] = salvaZona;
              datosAgujero[qqq][10] = salvaZona;
              break;
            };
          };
        };
        if (Number(arraydezonas[mmm][8]) == 7) {
          if ((Number(arraydezonas[mmm][6]) <= datosAgujero[qqq][3] && datosAgujero[qqq][3] < Number(arraydezonas[mmm][7]))) { // fila de inicio
            if (CerosZona < Number(arraydezonas[mmm][0])) {
              CerosZona = Number(arraydezonas[mmm][0]);// cantidad de ceros
              salvaZona = Number(arraydezonas[mmm][8]);// zona
              datosAgujero[qqq][9] = salvaZona;
              datosAgujero[qqq][10] = salvaZona;
              break;
            };
          } else if ((Number(arraydezonas[mmm][6]) >= datosAgujero[qqq][3])) {
            if (CerosZona < Number(arraydezonas[mmm][0])) {
              CerosZona = Number(arraydezonas[mmm][0]);// cantidad de ceros
              salvaZona = Number(arraydezonas[mmm][8]);// zona
              datosAgujero[qqq][9] = salvaZona;
              datosAgujero[qqq][10] = salvaZona;
              break;
            };
          };
        }
      };
    };

  };



  console.log(' ++++++++++++++++++++++++++++++++ ')
  console.log(" datosAgujero ")
  console.log(datosAgujero);

  for (var mt = 0; mt < datosAgujero.length; mt++) {
    if (datosAgujero[mt][8] < 4 || datosAgujero[mt][3] < 3) {
      datosAgujero[mt][0] = 0;
      datosAgujero[mt][1] = 0; //  sector
      datosAgujero[mt][2] = 0; //  numero de agujero
      datosAgujero[mt][3] = 0; //  fila de comienzo
      datosAgujero[mt][4] = 0; //  fila final
      datosAgujero[mt][5] = 0; //  columna menor
      datosAgujero[mt][6] = 0; //  columna mayor
      datosAgujero[mt][7] = 0; //  cantidad de ceros || superficie
      datosAgujero[mt][8] = 0; //  porcentaje de ocupación
      datosAgujero[mt][9] = 0; // principio de zona
      datosAgujero[mt][10] = 0; // final de zona
    };
  };
  console.log(datosAgujero);
  return datosAgujero;
};

//---- FUNCIÓN SALTEAR AGUJERO DE BORDE SUPERIOR ------------------------------------------------------
function saltearAgujeroBorde(paragujero) {
  console.log(" saltear Agujero Borde ")
  var proximafila = 0;
  //  DECLARACIÓN DE ARRAYS --------------------------------------------------------------------------------
  var agujero1 = new Array();
  for (var v = 0; v <= 40; v++) {
    agujero1[v] = new Array(4);
    agujero1[v][0] = paragujero[v][0]; // fila 
    agujero1[v][1] = paragujero[v][1]; // coluinicio
    agujero1[v][2] = paragujero[v][2];  // colufinal
    agujero1[v][3] = paragujero[v][3]; // cantidad de ceros
  };
  //----------------------------------------------------------
  var x = 0;
  for (x = 0; x <= 40; x++) {
    if (agujero1[x][0] == 0) {
      if (agujero1[x][1] == 0) {
        if (agujero1[x][2] == 0) {
          if (agujero1[x][3] == 0) {
            x = x - 1;
            return x;
          };
        };
      };
    };
    proximafila = agujero1[x][0];   //  del primer agujero  saco la fila
    proximafila = proximafila + 1;   // es para comparar 
    if (agujero1[x + 1][0] == proximafila) { // próximo elemento si es fila contigua, lo ignoro
    } else {    // próximo elemento si es fila discontinua
      x = x + 1;
      return x;
    };
  };
};

//  --- FUNCIÓN QUE SUMA 0 HASTA ENCONTRAR EL PRIMER 1
function suma0hastaelprimer1(parnumero, pary, parx, parcolufinal, parcolucomiz) {
  console.log(" Función Suma 0 hasta el primer 1");
  var recibo = new Array(2)
  recibo[0] = 0;  // cantidad de ceros
  recibo[1] = 0;  // colufinalz
  var xx = parx;
  var yy = pary;
  xxt = 0;
  xx = parcolucomiz;
  var parcoluendz = xx;

  for (xx; xx < parcolufinal; xx++) {
    if (parnumero[yy][xx] == 0) {
      parcoluendz = xx;
      xxt = xxt + 1;
      recibo[0] = xxt;
      recibo[1] = parcoluendz;
    } else if (parnumero[yy][xx] == 1) {
      parcoluendz = xx;
      recibo[1] = parcoluendz;
      return recibo;
    } else if (parcoluendz == 0) {
      recibo[0] = 0;
      recibo[1] = 0;
      return recibo;
    };
  };
  if (xx < parcolufinal) { // la fila tiene ceros hasta el final
    parcoluendz = xx;
    recibo[1] = parcoluendz;
    return recibo;
  };
  if (parnumero[yy][xx - 1] == 1) {
    xxt = 0;
    recibo[0] = xxt;
    parcoluendz = xx;
    recibo[1] = parcoluendz;
    return recibo;
  } else if (parnumero[yy][xx - 1] !== 1) {
    xxt = 0;
    recibo[0] = xxt;
    parcoluendz = xx;
    recibo[1] = parcoluendz;
    return recibo;
  };

};  //  fin de función suma0hastaelprimer1

// SE MUESTRA EL CONTENIDO DEL TXT EN EL <pre>
//----------------------- 3RA PARTE -----------------------------------------
document
  .getElementById("file-input")
  .addEventListener("change", leerArchivo, true);
//----------------------- 2da -------------------------------------
//  FUNCIÓN INTEGRADORA DE LAS MATRICES Y CREACIÓN DE LOS EJES

