let allProducts = document.getElementsByClassName("product");
let product1 = allProducts[0];
let product2 = allProducts[1];
let product3 = allProducts[2];
let productDescription = {
    "produkt1": "Skjermstørrelse: 6,5 tommer, OLED-skjerm med 120 Hz oppdateringsfrekvens og 4K oppløsning. Kamera: Triple-linse kamera-system med 108 MP hovedsensor, 16 MP ultra-wide sensor og 12 MP telefoto sensor. Kan ta opp 8K-videoer. Prosessor: A17 bionic chip med 12 GB RAM og 512 GB intern lagring. Batteri: 4500 mAh batteri med trådløs lading og reversert trådløs lading. Operativsystem: iOS 15 med forbedret AI-støtte og integrasjon med Apple AR-briller. Design: Full-skjerm design med minimal ramme og innebygd fingeravtrykkssensor. Tilgjengelig i forskjellige farger og materialer, inkludert keramikk og titan. Annet: Vanntett og støvtett med IP68-sertifisering, støtte for 5G, og forbedret lydkvalitet med innebygde Dolby Atmos-høyttalere.",
    "produkt2": "Skjermstørrelse: 6,5 tommer, OLED-skjerm med 120 Hz oppdateringsfrekvens og 4K oppløsning. Kamera: Triple-linse kamera-system med 108 MP hovedsensor, 16 MP ultra-wide sensor og 12 MP telefoto sensor. Kan ta opp 8K-videoer. Prosessor: A17 bionic chip med 12 GB RAM og 512 GB intern lagring. Batteri: 4500 mAh batteri med trådløs lading og reversert trådløs lading. Operativsystem: iOS 15 med forbedret AI-støtte og integrasjon med Apple AR-briller. Design: Full-skjerm design med minimal ramme og innebygd fingeravtrykkssensor. Tilgjengelig i forskjellige farger og materialer, inkludert keramikk og titan. Annet: Vanntett og støvtett med IP68-sertifisering, støtte for 5G, og forbedret lydkvalitet med innebygde Dolby Atmos-høyttalere.",
    "produkt3": "Skjermstørrelse: 6,5 tommer, OLED-skjerm med 120 Hz oppdateringsfrekvens og 4K oppløsning. Kamera: Triple-linse kamera-system med 108 MP hovedsensor, 16 MP ultra-wide sensor og 12 MP telefoto sensor. Kan ta opp 8K-videoer. Prosessor: A17 bionic chip med 12 GB RAM og 512 GB intern lagring. Batteri: 4500 mAh batteri med trådløs lading og reversert trådløs lading. Operativsystem: iOS 15 med forbedret AI-støtte og integrasjon med Apple AR-briller. Design: Full-skjerm design med minimal ramme og innebygd fingeravtrykkssensor. Tilgjengelig i forskjellige farger og materialer, inkludert keramikk og titan. Annet: Vanntett og støvtett med IP68-sertifisering, støtte for 5G, og forbedret lydkvalitet med innebygde Dolby Atmos-høyttalere."
};
let productPrice = {
    "produkt1": "999,-",
    "produkt2": "999,-",
    "produkt3": "999,-"
};

product1.addEventListener("click", function(){changeStyleToProduct(product1, productDescription.produkt1, productPrice.produkt1, "Iphone 1 16GB Purple");});
product2.addEventListener("click", function(){changeStyleToProduct(product2, productDescription.produkt2, productPrice.produkt2, "Iphone 2 16GB Purple");});
product3.addEventListener("click", function(){changeStyleToProduct(product3, productDescription.produkt3, productPrice.produkt3, "Iphone 3 16GB Purple");});
document.getElementById("arrow").addEventListener("click", function(){changeStyleToHomePage();});

function changeStyleToHomePage(){
    document.getElementById("searchMenu").style.display = "flex";
    for (i = 0; i < allProducts.length; i++){
        allProducts[i].style.display = "flex";
    };
    document.getElementById("arrow").style.display = "none";
    document.getElementById("productInfo").style.display = "none";
    document.getElementById("navbarBottom").style.display = "flex";
    document.getElementById("productNameDiv").style.display = "none";
}
function changeStyleToProduct(product, description, cost, name) {
    document.getElementById("searchMenu").style.display = "none";
    for (i = 0; i < allProducts.length; i++){
        allProducts[i].style.display = "none";
    };
    product.style.display = "flex";
    document.getElementById("arrow").style.display = "block";
    document.getElementById("productPrice").style.display = "block";
    document.getElementById("productPrice").innerHTML = cost;
    document.getElementById("productDescription").innerHTML = description;
    document.getElementById("navbarBottom").style.display = "none";
    document.getElementById("productNameDiv").style.display = "block";
    document.getElementById("productName").innerHTML = name;
    document.getElementById("productInfo").style.display = "block";
};