
ch="";

resultat=document.getElementById("result")
function addch(c) {
    ch=ch+c;
    resultat.innerHTML=ch;
    console.log(eval(ch));
};
function del() {
    if (ch!="") {
        ch=ch.slice(0,-1);
        resultat.innerHTML=ch;
    }
};
function resete() {
    ch="";
    resultat.innerHTML=ch;
}
function result() {
    ch=eval(ch);
    resultat.innerHTML=ch;
}