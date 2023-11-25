function imprimirwindow(objeto){
    var objetosselec = document.getElementById(objeto);
    var imprimirobjeto = window.open('','Impresion')
    imprimirobjeto.document.write(objetosselec.innerHTML);
    imprimirobjeto.close();
    imprimirobjeto.print();
    imprimirobjeto.close();
}