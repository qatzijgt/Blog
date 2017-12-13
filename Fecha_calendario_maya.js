tiempo = new Array();
tiempo[ 0]="11^8^3114^AC^0^0^0^0^0^0^4^20^8^18";
tiempo[ 1]="11^8^2614^AC^182621^1^5^7^5^1^1^1^4^6";
tiempo[ 2]="11^8^2114^AC^365242^2^10^14^10^2^11^2^5^12";
tiempo[ 3]="11^8^1614^AC^547863^3^16^1^15^3^8^3^6^18";
tiempo[ 4]="11^8^1114^AC^730485^5^1^9^2^5^6^5^3^6";
tiempo[ 5]="11^8^614^AC^913106^6^6^16^7^6^3^6^4^12";
tiempo[ 6]="11^8^114^AC^1095727^7^12^3^12^7^13^7^5^18";
tiempo[ 7]="11^8^114^DC^1178637^8^3^13^17^17^9^17^15^2";
tiempo[ 8]="11^8^614^DC^1361258^9^9^1^4^18^6^18^16^8";
tiempo[ 9]="11^8^1114^DC^1543879^10^14^8^9^19^3^19^17^14";
tiempo[10]="11^8^1614^DC^1726501^11^19^15^15^1^1^1^14^2";
tiempo[11]="11^8^2114^DC^1909122^13^5^3^2^2^11^2^15^8";
tiempo[12]="11^8^2614^DC^2091743^14^10^10^7^3^8^3^16^14";
tiempo[13]="11^8^3114^DC^2274364^15^15^17^12^4^5^4^12^2";

tzolkin = new Array();
tzolkin[ 1]="Imox";
tzolkin[ 2]="Iq'";
tzolkin[ 3]="Aq'bal";
tzolkin[ 4]="K'at";
tzolkin[ 5]="Kan";
tzolkin[ 6]="Keme";
tzolkin[ 7]="Kej";
tzolkin[ 8]="Q'anil";
tzolkin[ 9]="Toj";
tzolkin[10]="Tz'i'";
tzolkin[11]="B'atz'";
tzolkin[12]="Eb";
tzolkin[13]="Aj";
tzolkin[14]="I'x";
tzolkin[15]="Tz'ikin";
tzolkin[16]="Ajmaq";
tzolkin[17]="No'j";
tzolkin[18]="Tijax";
tzolkin[19]="Kawoq";
tzolkin[20]="Ajpu";

haab = new Array()
haab[1]="Pop";
haab[2]="Wo";
haab[3]="Sip";
haab[4]="Sotz'";
haab[5]="Tzek";
haab[6]="Xul";
haab[7]="Yaxk'in";
haab[8]="Mol";
haab[9]="Ch'en";
haab[10]="Yax";
haab[11]="Sak";
haab[12]="Chej";
haab[13]="Mak";
haab[14]="K'ank'in";
haab[15]="Muwan";
haab[16]="Pax";
haab[17]="K'ayab'";
haab[18]="Kumk'u";
haab[19]="Wayeb'";

monthNames = new Array()
monthNames[1] = "Enero"
monthNames[2] = "Febrero"
monthNames[3] = "Marzo"
monthNames[4] = "Abril"
monthNames[5] = "Mayo"
monthNames[6] = "Junio"
monthNames[7] = "Julio"
monthNames[8] = "Agosto"
monthNames[9] = "Septiembre"
monthNames[10] = "Octubre"
monthNames[11] = "Noviembre"
monthNames[12] = "Diciembre"

//*******************************************************************************/

function isbis(a)
{
   var p=Math.ceil(a/4)-(a/4);
   var esbis=1;
   if(p==0)
   {
     esbis=0;
     var ta=a;
     var tae=Math.floor(ta/100);
     var tad=(ta/100)-tae;
     var m41,m42,m43;
     if(tad==0)
     {
        m41=Math.floor(tae/4);
        m42=(tae/4);
        m43=m41-m42;
        if(m43!=0) esbis=1 // es bisiesto
     }
   }
   return esbis;
}

function caltzolhaab(tzo1,tzo2,ha1,ha2,dinicio,tdias)
{
 // tdias total de dias de la cuenta larga en cuestion

 var tzol  =   	 4;
 var itzol =    20;
 var ha    =     8;
 var iha   =	18;
 var way   =     0;
 var cargador = "";

 if(tzo1!=100)
 {
   tzol  =  tzo1;
   itzol =  tzo2;
   ha    =   ha1;
   iha   =	 ha2;
 }

 for(var kin=dinicio;kin<tdias;kin++)
 {
   if(tzol++==13) tzol=1;

   if(iha==19)
   {
      if(way++==4)
      { 
         ha=-1; 
         iha=1;
         way=0;
      }
   }

   if(itzol++==20) itzol=1;

   if(ha++==19)
   {
      ha=0;
      if(iha++==19) iha=1;
   }
 }

 document.all.fechad.innerHTML +="<font size='2' color='#000'><b> / "+tzol+" "+tzolkin[itzol]+" / "+ ha +" "+haab[iha]+".</b> </font>";
}

function acuentalarga()
{
 var tdias =     0; // total de dias de la cuenta larga en cuestion
 var a     =  3114; // año 0.0.0.0.0
 var m     =     8; // corresponde al 11 de agosto del -3114
 var d     =    11; // segun GMT
 var ec    =  "AC"; // ac antes de Cristo, dc despues de Cristo
 var entrar=     1;
 var tzol  =   	 4;
 var itzol =    20;
 var ha    =     8;
 var iha   =	18;


 var oneDate= new Date();
 var af = oneDate.getFullYear();
 var mf = oneDate.getMonth()+1;
 var df = oneDate.getDate();
 var ef = "DC"

 ef=ef.toUpperCase();

 if(ef=="AC"||ef=="DC")
 { 
   entrar=0;
 }else alert("debe escojer una era correcta")

//************************************************************
 var coeficiente;
 var dinicio=0,tzo1=100,tzo2=100,ha1=100,ha2=100;

 for(var coe=0;coe<13;coe++)
 { 
    coeficiente=tiempo[coe].split('^');
    if(ef=="AC"&&coeficiente[3]=="AC")
    {
      if((af*1)<(coeficiente[2]*1))
      {
        a  = coeficiente[2];
        ec = coeficiente[3];
        dinicio = coeficiente[4];
        tzo1 = coeficiente[10];
        tzo2 = coeficiente[11];
        ha1  = coeficiente[12];
        ha2  = coeficiente[13];
      }
    }
    if(ef=="DC"&&coeficiente[3]=="DC")
    {
      if((af*1)>(coeficiente[2]*1))
      {
        a  = coeficiente[2];
        ec = coeficiente[3];
        dinicio = coeficiente[4];
        tzo1 = coeficiente[10];
        tzo2 = coeficiente[11];
        ha1  = coeficiente[12];
        ha2  = coeficiente[13];
      }
    }
 }

tdias = dinicio;

//************************************************************
if(entrar==0)
{
 var fin=0;

 while(fin==0)
 {
   if(a==af&&m==mf&&d==df&&ec==ef) fin=1;
   else tdias++;

   switch(m)
   {
      case 1://enero
         if(d==31){d=1; m++;}
         else d=d+1
      break;
      case 2://febrero
         if(ec=="AC")
         {
            if(isbis(a-1)==0) // es 0 solo si el año es bisiesto
            {
               if(d==29){d=1; m++;} //febrero tiene 29 dias si el año es bisiesto
               else d=d+1
            }
            else if(d==28){d=1; m++;} //febrero tiene 28 dias si el año no es bisiesto
                 else d=d+1
         }
         if(ec=="DC")
         {
            if(isbis(a)==0) // es 0 solo si el año es bisiesto
            {
               if(d==29){d=1; m++; } //febrero tiene 29 dias si el año es bisiesto
               else d=d+1
            }
            else if(d==28){d=1; m++;} //febrero tiene 28 dias si el año no es bisiesto
                 else d=d+1
         }
      break;
      case 3://marzo
         if(d==31){d=1; m++;}
         else d=d+1
      break;
      case 4://abril
         if(d==30){d=1; m++;}
         else d=d+1
      break;
      case 5://mayo
         if(d==31){d=1; m++;}
         else d=d+1
      break;
      case 6://junio
         if(d==30){d=1; m++;}
         else d=d+1
      break;
      case 7://julio
         if(d==31){d=1; m++;}
         else d=d+1
      break;
      case 8://agosto
         if(d==31){d=1; m++;}
         else d=d+1
      break;
      case 9://septiembre
         if(d==30){d=1; m++;}
         else d=d+1
      break;
      case 10://octubre
         if(d==31){d=1; m++;}
         else d=d+1
      break;
      case 11://noviembre
         if(d==30){d=1; m++;}
         else d=d+1
      break;
      case 12://diciembre
         if(d==31)
         {
          d=1;
          m=1; // termina el año y 
          if(ec=="AC")
          {
             if(a==1)
             { 
                ec="DC";
                a=0;
             }
             else a--; // se incrementa en uno
          }
          if(ec=="DC") a++;

         }
         else d=d+1
      break;
   }
 }
}

var tdiasn=tdias;
var fechamaya="<font size='2' color='#000'><b>Iximulew ";

var bktn=Math.floor(tdias/144000);
fechamaya+= " "+bktn+"."
tdias=tdias-bktn*144000;

var ktn=Math.floor(tdias/7200);
fechamaya+=ktn+".";
tdias=tdias-ktn*7200;

var tn=Math.floor(tdias/360);
fechamaya+= tn+".";
tdias=tdias-tn*360

var wn=Math.floor(tdias/20);
fechamaya+= wn+".";
tdias=tdias-wn*20;

var kn=tdias;
fechamaya+= kn + "</b></font>";
document.all.fechad.innerHTML += fechamaya;

caltzolhaab(tzo1,tzo2,ha1,ha2,dinicio,tdiasn);
//************************************************************
}

function hacefecha()
{
  var oneDate= new Date();

  document.all.chol.innerHTML += "<font size='1.7' color='#000'><b>Guatemala "+oneDate.getDate()+" "+ monthNames[oneDate.getMonth()+1]+" de "+ oneDate.getFullYear()+"<br>";
  acuentalarga();
}