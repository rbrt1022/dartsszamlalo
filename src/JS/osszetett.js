import "../CSS/osszetett.css";

let g1n, g2n = "alap";

function a12() {
    let a2 = document.getElementById("A2");
    a2.style.display = "block";
    let a1 = document.getElementById("A1");
    a1.style.display = "none";
}

function a2toap() {
    g1n = document.getElementById("gamer1").value;
    document.getElementById("j1nev").innerHTML = g1n;
    g2n = document.getElementById("gamer2").value;
    document.getElementById("j2nev").innerHTML = g2n;
    let ap = document.getElementById("pontvalasztos");
    ap.style.display = "block";
    let a2 = document.getElementById("A2");
    a2.style.display = "none";

    console.log("Jatekos2:"+g2n);
}

function aptogame() {
    //Elemek megjelenítése/eltüntetése
    let game = document.getElementById("ingame");
    game.style.display = "block";
    let ap = document.getElementById("pontvalasztos");
    ap.style.display = "none";
    let pl1 = document.getElementById("j1pb");
    pl1.style.display = "block";

    //Kezdő pontszámok beállítása
    let kivalasztottpontszam = document.getElementById("pontos").value;
    document.getElementById("j1pont").innerHTML = kivalasztottpontszam;
    document.getElementById("j2pont").innerHTML = kivalasztottpontszam;
    
    //Nevek a pontbeírós részbe
    let j1nev = document.getElementById("j1nev").innerHTML;
    console.log(j1nev);
    document.getElementById("j1k").innerHTML = j1nev+" következik";

    let j2nev = document.getElementById("j2nev").innerHTML;
    console.log(j2nev);
    document.getElementById("j2k").innerHTML = j2nev+" következik";
}

function j1vk() {
    //Átváltás a másik játékosra
    let pl1 = document.getElementById("j1pb");
    pl1.style.display = "none";
    let pl2 = document.getElementById("j2pb");
    pl2.style.display = "block";

    //Értékek kiszedése
    var j1psz1 = document.getElementById("j1psz1").value;
    var j1p1 = document.getElementById("j1p1").value;
    var j1psz2 = document.getElementById("j1psz2").value;
    var j1p2 = document.getElementById("j1p2").value;
    var j1psz3 = document.getElementById("j1psz3").value;
    var j1p3 = document.getElementById("j1p3").value;

    var szerzettpont = (j1psz1*j1p1)+(j1psz2*j1p2)+(j1psz3*j1p3);

    console.log("1. játékos "+szerzettpont+" pontot szerzett");

    var j1kellpont = document.getElementById("j1pont").innerHTML;

    if (szerzettpont < Number(j1kellpont)) {
        document.getElementById("j1pont").innerHTML = Number(j1kellpont)-szerzettpont;
    }
    else if (szerzettpont == Number(j1kellpont)) {
        pl2.style.display = "none";
        document.getElementById("vege").style.display = "block";
        document.getElementById("gyozelem").innerHTML = document.getElementById("j1nev").innerHTML+" nyert!";
    }
}

function j2vk() {
    //Átváltás a másik játékosra
    let pl1 = document.getElementById("j1pb");
    pl1.style.display = "block";
    let pl2 = document.getElementById("j2pb");
    pl2.style.display = "none";

    //Értékek kiszedése
    var j2psz1 = document.getElementById("j2psz1").value;
    var j2p1 = document.getElementById("j2p1").value;
    var j2psz2 = document.getElementById("j2psz2").value;
    var j2p2 = document.getElementById("j2p2").value;
    var j2psz3 = document.getElementById("j2psz3").value;
    var j2p3 = document.getElementById("j2p3").value;

    var szerzettpont = (j2psz1 * j2p1) + (j2psz2 * j2p2) + (j2psz3 * j2p3);

    console.log("2. játékos "+szerzettpont+" pontot szerzett");

    var j2kellpont = document.getElementById("j2pont").innerHTML;

    if (szerzettpont < Number(j2kellpont)) {
        document.getElementById("j2pont").innerHTML = Number(j2kellpont) - szerzettpont;
    } 
    else if (szerzettpont === Number(j2kellpont)) {
        pl1.style.display = "none"; // Az pl1 az első játékoshoz tartozó elem, amit éppen láthatatlanná tesz.
        document.getElementById("vege").style.display = "block";
        document.getElementById("gyozelem").innerHTML = document.getElementById("j2nev").innerHTML + " nyert!";
    }

}

const Osszetett =  () => {
    return ( 
        <div>
            <div id="A1">
                <div className="kozepre">
                    <h1>Üdvözöllek a darts pontszámlálóban!</h1>
                    <button onClick={a12}>Tovább</button>
                </div>
            </div>
            <div id="A2">
                <h1>Kérem szépen a játékosok neveit!</h1>
                {/* <h2>Játékos 1</h2> */}
                <input type="text" className="gamers" name="gamer1" id="gamer1" placeholder="Játékos 1"></input>
                <br/>
                <input type="text" className="gamers" name="gamer2" id="gamer2" placeholder="Játékos 2"></input>
                <br/>
                <button onClick={a2toap}>Tovább</button>
            </div>
            <div id="pontvalasztos">
                    <h1>Válaszd ki hány pontos legyen!</h1>
                    <br/>
                    <select id="pontos" name="pontos">
                        <option value="301">301</option>
                        <option value="501">501</option>
                    </select>
                    <br/>
                    <button onClick={aptogame}>Tovább</button>
            </div>
            <div id="ingame">
                <table id="tablazat">
                    <tbody>
                        <tr>
                            <td id="j1nev" className="tabla nevek">EZ</td>
                            <td id="j2nev" className="tabla nevek">AZ</td>
                        </tr>
                        <tr>
                            <td colSpan="2" id="ennyikell" className="tabla">Ennyi pont kell még:</td>
                        </tr>
                        <tr>
                            <td id="j1pont" className="tabla pontszam">111</td>
                            <td id="j2pont" className="tabla pontszam">222</td>
                        </tr>
                    </tbody>
                </table>
                <div id="pontbeiros">
                    <div id="j1pb">
                        <h2 id="j1k">1-es játékos következik!</h2>
                        <br />
                        <p>1. dobás:
                            <select id="j1psz1" name="j1psz1" class="szorzo">
                                <option value="1" class="szszam">1x</option>
                                <option value="2" class="szszam">2x</option>
                                <option value="3" class="szszam">3x</option>
                            </select>
                            <input type="number" id="j1p1" class="pontszambeiros" />
                        </p>
                        <p>2. dobás:
                            <select id="j1psz2" name="j1psz2" class="szorzo">
                                <option value="1" class="szszam">1x</option>
                                <option value="2" class="szszam">2x</option>
                                <option value="3" class="szszam">3x</option>
                            </select>
                            <input type="number" id="j1p2" class="pontszambeiros" />
                        </p>
                        <p>3. dobás:
                            <select id="j1psz3" name="j1psz3" class="szorzo">
                                <option value="1" class="szszam">1x</option>
                                <option value="2" class="szszam">2x</option>
                                <option value="3" class="szszam">3x</option>
                            </select>
                            <input type="number" id="j1p3" class="pontszambeiros" />
                        </p>
                        <button onClick={j1vk}>Tovább</button>
                    </div>
                    <div id="j2pb">
                        <h2 id="j2k">2-es játékos következik!</h2>
                        <br />
                        <p>1. dobás:
                            <select id="j2psz1" name="j2psz1" class="szorzo">
                                <option value="1" class="szszam">1x</option>
                                <option value="2" class="szszam">2x</option>
                                <option value="3" class="szszam">3x</option>
                            </select>
                            <input type="number" id="j2p1" class="pontszambeiros" />
                        </p>
                        <p>2. dobás:
                            <select id="j2psz2" name="j2psz2" class="szorzo">
                                <option value="1" class="szszam">1x</option>
                                <option value="2" class="szszam">2x</option>
                                <option value="3" class="szszam">3x</option>
                            </select>
                            <input type="number" id="j2p2" class="pontszambeiros" />
                        </p>
                        <p>3. dobás:
                            <select id="j2psz3" name="j2psz3" class="szorzo">
                                <option value="1" class="szszam">1x</option>
                                <option value="2" class="szszam">2x</option>
                                <option value="3" class="szszam">3x</option>
                            </select>
                            <input type="number" id="j2p3" class="pontszambeiros" />
                        </p>
                        <button onClick={j2vk}>Tovább</button>
                    </div> 
                    <div id="vege">
                        <h1 id="gyozelem"></h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Osszetett; 