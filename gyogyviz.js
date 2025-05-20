var betegsegek = [];
betegsegek['cube']="Segíthetnek az alkalikus összetételű vizek, mely segíti lebontani a cukrot. Ez a folyamat azért is nagyon hasznos, mert természetes módon a szervezet saját vércukor leadását segíti elő. A gyógyvizet napi háromszor javasolt fogyasztani, enni 2 órával a víz bevitele után lehet. Akár 17%-kal csökkentheti a cukorszintet, mely jelentős állapot javuláshoz vezethet.";
betegsegek['emza']="Az emésztőrendszeri betegségek kezelésére, szanatóriumi vizsgálatok keretében vizsgálták gyógyvizek hatásait. A vizsgálatok 3 hónapig tartottak, 3 x 1 dl gyógyvizet fogyasztottak, mely hatékonynak bizonyult. Az ivókúrát négy hétig fogyasztották rendszeres hasi panasszal küzdő delikvensek.  Az esetek nagy részében tartós gyógyulás következett be.";
betegsegek['gyfe']="Sokan panaszkodnak evés után égő nyomorra, akár visszaöklendezésre vagy hányingerre. E tünetek hátterében különböző gyomorbetegségek állhatnak. Ezek kezelésében is sikeres eredményeket érhetünk el a megfelelő gyógyvízzel. Az esetek nagy részében a betegek megszűnő fájdalomról, jobb közérzetről számoltak be. A savérték jelentős csökkenését tapasztalták.";
betegsegek['gysa']="Az alkali jótékony hatásai már ismertek, ajánlás szerint étkezés előtt két órával igyunk gyógyvizet, így csökkenti a szekrétum mennyiségét a gyomorban. Csoportokat figyeltek meg, a következőképpen; a kúrát 16 ember végezte el, ebből 14 esetben teljesen megszűnt a gyomorégés. 26 gyomorfájdalommal küzdő egyén vizsgálatánál, 19 esetben többé nem jelentkezett fájdalom. Ajánlott: napi 3x1-2 dl, langyosan fogyasztva.";
betegsegek['vagy']="A vastagbélgyulladás nagyon megkeserítheti életünket. A tűnetek enyhülését gyógyvizes beöntéssel tudjuk elősegíteni. Egy tisztító beöntést szükséges elvégezni, mely kezelést követően harmadnaponként higított gyógyvizes beöntést adunk 1-3 arányban. A testhőmérsékletű víz csökkenti a nyáktartalmat és a nyákos székletet.";
betegsegek['lere']="A különböző légzőrendszeri betegség egy részét belégzőkúrával vagy ivókúrával kezeljük. A légzőkúrát 2 hétig folytatjuk. Az inhalációs terápiát egy inhalátor készülékkel végezzük, mely mikroszemcsékre bontja a gyógyvizet. Az ivókúra fokozza a mirigyek elválasztó tevékenységét. Feloldja a garathoz tapadt nyákot. Naponta 5x 1-2 korty javasolt.";

function mutat(melyik){
    document.getElementById('lapozo').innerHTML=betegsegek[melyik];
}

function kiir(melyik){
    document.write(betegsegek[melyik]);
}
function pucol(){
    document.getElementById('lapozo').innerHTML="Ha kíváncsi valamelyik gyógyhatás részleteire, akkor mozgassa az egérkurzort a megfelelő listaelem fölé!";
}

