const express = require("express");
const createError = require("http-errors");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

// Información para la página
let categoriaAccesorios = [
    {
        id: 1,
        nombre: "ARETES ROSAS",
        img: "https://images.pexels.com/photos/3989579/pexels-photo-3989579.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        descripcion: "Aretes de oro color rosa",
        material:"Material: oro",
        precio:"$359.99",
        tipoRopa: "accesorios",
    },
    {
        id: 2,
        nombre: "ANILLO CORAZON",
        img: "https://images.pexels.com/photos/2879829/pexels-photo-2879829.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        descripcion: "Anilo de piedra en forma de corazón, color blanca",
        material:"Material: oro",
        precio:"$159.99",
        tipoRopa: "accesorios",
    },
    {
        id: 3,
        nombre: "ANILLO DE PLATA",
        img:"https://images.pexels.com/photos/3392860/pexels-photo-3392860.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        descripcion: "Anillo de plata",
        material:"Material: plata",
        precio:"$159.99",
        tipoRopa: "accesorios",
    },
    {
        id: 4,
        nombre: "SET DE ANILLOS",
        img: "https://images.pexels.com/photos/6167403/pexels-photo-6167403.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        descripcion: "Set de 4 anillos",
        material:"Material: plata",
        precio:"$159.99",
        tipoRopa: "accesorios",
    },
    {
        id: 5,
        nombre: "ARETES ROJOS",
        img: "https://images.pexels.com/photos/4974402/pexels-photo-4974402.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        descripcion: "Aretes rojos",
        material:"Material: oro",
        precio:"$259.99",
        tipoRopa: "accesorios",
    },
    {
        id: 6,
        nombre: "COLLAR ORO",
        img:"https://images.pexels.com/photos/6604737/pexels-photo-6604737.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        descripcion: "Collar oro",
        material:"Material: oro",
        precio:"$259.99",
        tipoRopa: "accesorios",
    },
    {
        id: 7,
        nombre: "ARETES PLATA",
        img: "https://images.pexels.com/photos/989967/pexels-photo-989967.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        descripcion: "Aretes largos de plata",
        material:"Material: plata",
        precio:"$159.99",
        tipoRopa: "accesorios",
    },
]

let categoriaBlusas = [
    {
        id: 1,
        nombre: "BLUSA BLANCA",
        img: "https://image.freepik.com/foto-gratis/feliz-mujer-rubia-blusa-blanca-falda-mezclilla-juega-cabello_197531-19494.jpg",
        descripcion: "Blusa cuello camisero, manga larga, botones, color blanco",
        material:"Composición: 100% Algodón",
        precio:"$299.99",
        tipoRopa: "blusas",

    },
    {
        id: 2,
        nombre: "PLAYERA MANGA MESH ESTAMPADO",
        img: "https://image.freepik.com/foto-gratis/mujer-joven-blusa-negra-pantalon-negro-posando-frente-mirando-encantador_176474-55526.jpg",
        descripcion: "Playera combinada, cuello redondo, manga mesh larga con diseño estampado al tono FIT REGULAR",
        material:"Composición: 95% Poliéster, 5% Elastano",
        precio:"$159.99",
        tipoRopa: "blusas",

    },
    {
        id: 3,
        nombre: "BLUSA ENCAJE",
        img:"https://image.freepik.com/foto-gratis/mujer-elegante-pelo-corto-jeans-cinturon-sosteniendo-flores-calle-mujer-blusa-blanca-encaje-negro-posando-ciudad_197531-19309.jpg",
        descripcion: "Blusa corte halter con tirantes ajustables, detalle de abertura posterior FIT REGULAR",
        material:"Composición: 100% Rayón",
        precio:"$159.99",
        tipoRopa: "blusas",
    },
    {
        id: 4,
        nombre: "BLUSA LISA",
        img: "https://images.pexels.com/photos/5220433/pexels-photo-5220433.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        descripcion: "Blusa corte halter con tirantes ajustables, detalle de abertura posterior FIT REGULAR",
        material:"Composición: 100% Rayón",
        precio:"$159.99",
        tipoRopa: "blusas",
    },
    {
        id: 5,
        nombre: "BLUSA CROP MANGA TIPO GLOBO",
        img: "https://images.pexels.com/photos/4946405/pexels-photo-4946405.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        descripcion: "Blusa crop, escote en v, manga 3/4 tipo globo, apertura posterior con botón FIT REGULAR",
        material:"Composición: 75% Algodón, 24% Poliéster, 1% Elastano",
        precio:"$219.99",
        tipoRopa: "blusas",
    },
    {
        id: 6,
        nombre: "BLUSA LISA",
        img: "https://images.pexels.com/photos/6347593/pexels-photo-6347593.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        descripcion: "Blusa manga larga con botones",
        material:"Composición: 100% Algodón",
        precio:"$219.99",
        tipoRopa: "blusas",
    },
    {
        id: 7,
        nombre: "PLAYERA ESTAMPADO DE LETRAS",
        img: "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        descripcion: "Playera corta con estampado continuo de letras contraste y cuello redondo y manga corta FIT REGULAR",
        material:"Composición: 97% Viscosa, 3% Elastano",
        precio:"$99.99",
        tipoRopa: "blusas",
    },
]
let categoriaBolsos = [
    {
        id: 1,
        nombre: "BOLSO PEQUEÑO",
        img: "https://images.pexels.com/photos/5321681/pexels-photo-5321681.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        descripcion: "Bolso pequeño color amarillo",
        material:"Material: vinipiel",
        precio:"$199.99",
        tipoRopa: "bolsos",
    },
    {
        id: 2,
        nombre: "BOLSO REDONDO",
        img:"https://images.pexels.com/photos/2878761/pexels-photo-2878761.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        descripcion: "Bolsa de mano con diseño tejido",
        material:"Composición: 100% Paja",
        precio:"$199.99",
        tipoRopa: "bolsos",
    },
    {
        id: 3,
        nombre: "BOLSA AMARILLA",
        img:"https://images.pexels.com/photos/2002717/pexels-photo-2002717.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        descripcion: "Bolsa grande amarilla con estampado",
        material:"Material: vinipiel",
        precio:"$399.99",
        tipoRopa: "bolsos",
    },
    {
        id: 4,
        nombre: "BOLSO BASICA",
        img: "https://images.pexels.com/photos/5490233/pexels-photo-5490233.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        descripcion: "Bolso basico color negro",
        material:"Material: vinipiel",
        precio:"$199.99",
        tipoRopa: "bolsos",
    },
    {
        id: 5,
        nombre: "BOLSO CON ESTAMPADO DE FLORES",
        img: "https://images.pexels.com/photos/904350/pexels-photo-904350.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        descripcion: "Bolso blanco con estampado de flores",
        material:"Material: vinipiel",
        precio:"$399.99",
        tipoRopa: "bolsos",
    },
    {
        id: 6,
        nombre: "COSMETIQUERA",
        img:"https://images.pexels.com/photos/3373739/pexels-photo-3373739.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        descripcion: "Cosmetiquera pequeña",
        material:"Material: piel",
        precio:"$79.99",
        tipoRopa: "bolsos",
    },
    {
        id: 7,
        nombre: "BOLSA ECOLOGICA",
        img: "https://images.pexels.com/photos/4068314/pexels-photo-4068314.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        descripcion: "Bolsa ecologica",
        material:"Composición: 93% Algodón, 7% Elastano",
        precio:"$99.99",
        tipoRopa: "bolsos",
    },
]
let categoriaFaldas = [
    {
        id: 1,
        nombre: "FALDA LARGA",
        img:"https://images.pexels.com/photos/2388237/pexels-photo-2388237.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        descripcion: "Falda larga color amarillo",
        material:"Composición: 95% Poliéster, 5% Elastano",
        precio:"$139.99",
        tipoRopa: "faldas",
    },
    {
        id: 2,
        nombre: "FALDA TABLEADA",
        img: "https://images.pexels.com/photos/1007018/pexels-photo-1007018.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        descripcion: "Falda tableada color azul",
        material:"Composición: 95% Poliéster, 5% Elastano",
        precio:"$129.99",
        tipoRopa: "faldas",
    },
    {
        id: 3,
        nombre: "FALDA FLORES",
        img:"https://images.pexels.com/photos/3796079/pexels-photo-3796079.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        descripcion: "Falda con estampado de flores",
        material:"Composición: 95% Poliéster, 5% Elastano",
        precio:"$259.99",
        tipoRopa: "faldas",
    },
    {
        id: 4,
        nombre: "FALDA MEZCLILLA",
        img:"https://images.pexels.com/photos/1427984/pexels-photo-1427984.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        tipoRopa: "faldas",
        material:"Composición: Mezclilla con rayas",
        precio:"$159.99",
        descripcion: "Accesorios blanco talla L"
    },
    {
        id: 5,
        nombre: "FALDA BEIGE",
        img: "https://images.pexels.com/photos/4219912/pexels-photo-4219912.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        tipoRopa: "faldas",
        material:"Composición: 95% Poliéster, 5% Elastano",
        precio:"$259.99",
        descripcion: "Falda color bage con botones y liston"
    },
    {
        id: 6,
        nombre: "FALDA CORTA",
        img:"https://images.pexels.com/photos/2888211/pexels-photo-2888211.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        tipoRopa: "faldas",
        material:"Composición: 95% Poliéster, 5% Elastano",
        precio:"$239.99",
        descripcion: "Falda corta de rayas"
    },
    {
        id: 7,
        nombre: "FALDA CORTA ROJA",
        img: "https://images.pexels.com/photos/7564366/pexels-photo-7564366.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        tipoRopa: "faldas",
        material:"Composición: 95% Poliéster, 5% Elastano",
        precio:"$159.99",
        descripcion: "Falda corta color rojo"
    },
]
let categoriaPantalones = [
    {
        id: 1,
        nombre: "JEANS CAPRI BÁSICO",
        img: "https://images.pexels.com/photos/6497048/pexels-photo-6497048.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        descripcion: "Jeans capri entubado, tiro medio, pretina delgada, presillas, botón, bolsas, pespunte contraste FIT AJUSTADO",
        material:"Composición: 68% Algodón, 25% Poliéster, 5% Viscosa, 2% Elastano",
        precio:"$199.99",
        tipoRopa: "pantalones",
    },
    {
        id: 2,
        nombre: "JEANS CON VALENCIANA",
        img: "https://images.pexels.com/photos/2343661/pexels-photo-2343661.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        descripcion: "Jeans entubado, tiro medio, pretina ancha, presillas, botón, bolsas, pespunte contraste, valenciana en tobillo FIT AJUSTADO",
        material:"Composición: 68% Algodón, 25% Poliéster, 5% Viscosa, 2% Elastano",
        precio:"$249.99",
        tipoRopa: "pantalones",
    },
    {
        id: 3,
        nombre: "PANTALÓN CON TIRA CONTRASTE",
        img: "https://images.pexels.com/photos/2535173/pexels-photo-2535173.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        descripcion: "Pantalón tiro medio, pretina ancha de elástico, detalle de franja contraste, bolsas, elástico en tobillo FIT REGULAR",
        material:"Composición: 95% Poliéster, 5% Elastano",
        precio:"$159.99",
        tipoRopa: "pantalones",
    },
    {
        id: 4,
        nombre: "JEANS CON TRES BOTONES",
        img: "https://images.pexels.com/photos/1494377/pexels-photo-1494377.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        descripcion: "Jeans entubado básico, tiro medio, pretina ancha, presillas, tres botones, bolsas FIT AJUSTADO",
        material:"Composición: 97% Algodón, 3% Elastano",
        precio:"$199.99",
        tipoRopa: "pantalones",
    },
    {
        id: 5,
        nombre: "JOGGER BÁSICO",
        img: "https://images.pexels.com/photos/5690229/pexels-photo-5690229.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        descripcion: "Jogger básico, tiro medio, pretina ancha de elástico, detalle de elástico en tobillo FIT REGULAR",
        material:"Composición: 60% Poliéster, 40% Algodón",
        precio:"$179.99",
        tipoRopa: "pantalones",
    },
    {
        id: 6,
        nombre: "PANTALÓN VINIPIEL",
        img: "https://images.pexels.com/photos/2343700/pexels-photo-2343700.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        descripcion: "Leggings de cintura alta PU",
        material:"Composición: 65% Poliéster, 35% Algodón",
        precio:"$300.00",
        tipoRopa: "pantalones",
    },
    {
        id: 7,
        nombre: "JEANS BOTONES METÁLICOS",
        img: "https://images.pexels.com/photos/235498/pexels-photo-235498.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        descripcion: "Jeans tiro alto, pretina ancha, presillas, botones, simulación de bolsas FIT AJUSTADO",
        material:"Composición: 76% Algodón, 22% Poliéster, 2% Elastano",
        precio:"$199.99",
        tipoRopa: "pantalones",
    },
]
let categoriaShorts = [
    {
        id: 1,
        nombre: "SHORT DESTROYER",
        img: "https://image.freepik.com/foto-gratis/chica-pin-up-diadema-pone-gafas-sol-forma-corazon-retrato-mujer-pantalones-cortos-mezclilla-camisa-posando-espacio-rosa_197531-15288.jpg",
        descripcion: "Short tiro medio, pretina delgada con presillas para cinturón, bolsas, dobles y decoloración en pierna, detalle de destroyer, perpunte contraste FIT REGULAR",
        material:"Composición: 93% Algodón, 7% Elastano",
        precio:"$199.99",
        tipoRopa: "shorts",
    },
    {
        id: 2,
        nombre: "SHORT DE HOLGADO",
        img: "https://image.freepik.com/foto-gratis/encantadora-mujer-pelo-oscuro-sujetador-estilo-marron-pantalones-cortos-mezclilla-sonrie-acogedor-patio_197531-18161.jpg",
        descripcion: "Short tiro medio, pretina delgada con presillas para cinturón, bolsas, dobles y decoloración en pierna, perpunte contraste FIT REGULAR",
        material:"Composición: 93% Algodón, 7% Elastano",
        precio:"$199.99",
        tipoRopa: "shorts",
    },
    {
        id: 3,
        nombre: "SHORT CUATRO BOTONES",
        img: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        descripcion: "Short tiro medio, pretina ancha con trabas, botones, bolsas, valenciana, pespunte al tono FIT AJUSTADO",
        material:"Composición: 77% Algodón, 21% Poliéster, 2% Elastano",
        precio:"$199.99",
        tipoRopa: "shorts",
    },
    {
        id: 4,
        nombre: "SHORT CON DESHILADO",
        img: "https://images.pexels.com/photos/4519335/pexels-photo-4519335.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        descripcion: "Short tiro medio, pretina delgada, presillas, bolsas, detalle de deshilado FIT REGULAR",
        material:"Composición: 80% Algodón, 18% Poliéster, 2% Elastano",
        precio:"$199.99",
        tipoRopa: "shorts",
    },
    {
        id: 5,
        nombre: "SHORT DESTROYER",
        img: "https://images.pexels.com/photos/1896368/pexels-photo-1896368.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        descripcion: "Short tiro medio, pretina delgada con presillas para cinturón, bolsas, dobles y decoloración en pierna, detalle de destroyer, perpunte contraste FIT REGULAR",
        material:"Composición: 93% Algodón, 7% Elastano",
        precio:"$199.99",
        tipoRopa: "shorts",
    },
    {
        id: 6,
        nombre: "SHORT DE RAYAS",
        img: "https://images.pexels.com/photos/5690225/pexels-photo-5690225.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        descripcion: "Short tiro medio, pretina ancha de elástico con jareta al tono, bolsas, diseño de rayas a dos colores FIT REGULAR",
        material:"Composición: 97% Poliéster, 3% Elastano",
        precio:"$119.99",
        tipoRopa: "shorts",
    },
    {
        id: 7,
        nombre: "SHORT DE POMPONES",
        img: "https://images.pexels.com/photos/2388236/pexels-photo-2388236.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        descripcion: "Short tiro medio, pretina ancha de elástico con jareta al tono, bolsas, diseño de pompones FIT REGULAR",
        material:"Composición: 97% Poliéster, 3% Elastano",
        precio:"$119.99",
        tipoRopa: "shorts",
    },
]
let categoriaSudaderas = [
    {
        id: 1,
        nombre: "SUDADERA CAPUCHA",
        img: "https://images.pexels.com/photos/6311048/pexels-photo-6311048.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        descripcion: "Sudadera con capulla, color gris",
        material:"Composición: 100% Poliéster",
        precio:"$199.99",
        tipoRopa: "sudaderas",
    },
    {
        id: 2,
        nombre: "SUDADERA VERDE",
        img: "https://images.pexels.com/photos/4145039/pexels-photo-4145039.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        descripcion: "Sudadera color verde con capucha",
        material:"Composición: 100% Poliéster",
        precio:"$199.99",
        tipoRopa: "sudaderas",
    },
    {
        id: 3,
        nombre: "SUDADERA AMARILLA",
        img: "https://images.pexels.com/photos/2081435/pexels-photo-2081435.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        descripcion: "Sudadera amarilla con lineas en las mangas",
        material:"Composición: 100% Poliéster",
        precio:"$299.99",
        tipoRopa: "sudaderas",
    },
    {
        id: 4,
        nombre: "SUDADERA DOBLE COLOR",
        img: "https://image.freepik.com/psd-gratis/mujer-joven-llevando-sudadera-capucha_23-2148473842.jpg",
        descripcion: "Sudadera color blaco y rosa",
        material:"Composición: 100% Poliéster",
        precio:"$199.99",
        tipoRopa: "sudaderas",
    },
    {
        id: 5,
        nombre: "SUDADERA FOSFO",
        img: "https://image.freepik.com/foto-gratis/mujer-joven-sudadera-naranja-plantea-techo-edificio-centro-ciudad_1153-4958.jpg",
        descripcion: "Sudadera fosfo color naranja",
        material:"Composición: 100% Poliéster",
        precio:"$199.99",
        tipoRopa: "sudaderas",
    },
    {
        id: 6,
        nombre: "SUDADERA NEGRA",
        img: "https://images.pexels.com/photos/4570779/pexels-photo-4570779.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        descripcion: "Sudadera color negro",
        material:"Composición: 100% Poliéster",
        precio:"$159.99",
        tipoRopa: "sudaderas",
    },
    {
        id: 7,
        nombre: "SUDADERA CON ESTAMPADO",
        img:"https://images.pexels.com/photos/2976686/pexels-photo-2976686.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        descripcion: "Sudadera azul con estampado",
        material:"Composición: 100% Poliéster",
        precio:"$299.99",
        tipoRopa: "sudaderas",
    },
]
let categoriaZapatos = [
    {
        id: 1,
        nombre: "Sandalias de Tacón para Mujer",
        img:"https://images.pexels.com/photos/3782786/pexels-photo-3782786.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        descripcion: "El diseño del calzado es de tacón delgado de 9.5 cm de altura, chinela con acabado brillante y punta descubierta, talón cubierto y ajuste de hebilla tipo pulsera",
        material:"material: sintético",
        precio:"$429",
        tipoRopa: "zapatos",
    },
    {
        id: 2,
        nombre: "Tenis casual Reebok Royal Prime con costuras a detalle",
        img:"https://images.pexels.com/photos/3737918/pexels-photo-3737918.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        descripcion: "Tenis casual Reebok Royal Prime para dama, cuentan con un estilo impactante su diseño tradicional y la suela ancha que ofrece soporte, estabiliza los pivotes y aterrizajes, cuentan con un look clásico y elegante",
        material:"material: Sintético",
        precio:"$799.00",
        tipoRopa: "zapatos",
    },
    {
        id: 3,
        nombre: "Tenis deportivo Spalding tejido con logotipo",
        img: "https://images.pexels.com/photos/2731977/pexels-photo-2731977.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        descripcion: "Tenis deportivo Spalding para dama, que nada te impida disfrutar de tu caminata favorita del día con estos increíbles Spalding los cuales incorporan un suave forro en su interior para brindarte una comodidad incomparable. Su plantilla brinda el confort que tus pies necesitan. Su suela además de ser suave y liviana cuenta con un diseño muy moderno que hace completamente único a este par. Sin duda se convertirán en tus aliados favoritos para caminar",
        material:"material: Textil",
        precio:"$399.00",
        tipoRopa: "zapatos",
    },
    {
        id: 4,
        nombre: "Tenis urbano Charly texturizado con plataforma",
        img: "https://images.pexels.com/photos/2944422/pexels-photo-2944422.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        descripcion: "Tenis Charly para dama, con tira de yute al contorno de la suela y diseño casual",
        material:"material: Sintético",
        precio:"$299.99",
        tipoRopa: "zapatos",
    },
    {
        id: 5,
        nombre: "Sandalias de Tacón Sahara para Mujer",
        img: "https://images.pexels.com/photos/3782788/pexels-photo-3782788.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        descripcion: "El diseño del calzado es de tacón delgado de 9.5 cm de altura, chinela con acabado brillante y punta descubierta, talón cubierto y ajuste de hebilla tipo pulsera",
        material:"material: sintético",
        precio:"$429",
        tipoRopa: "zapatos",
    },
    {
        id: 6,
        nombre: "Tenis Vans para Mujer",
        img: "https://images.pexels.com/photos/3636684/pexels-photo-3636684.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        descripcion: "Este modelo está diseñado especialmente para realizar esta actividad, cuentan con un estilo urbano y clásico en color amarillo, suela blanca y la clásica línea negra a los costados.",
        material:"material: textil",
        precio:"$1,199",
        tipoRopa: "zapatos",
    },
    {
        id: 7,
        nombre: "Zapatillas altas en amarillo girasol Chuck 70 de Convers",
        img:"https://images.pexels.com/photos/3596282/pexels-photo-3596282.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        descripcion: "Zapatillas altas en amarillo girasol Chuck 70 de Converse",
        material:"material: Zapatilla de lona",
        precio:"$1200.99",
        tipoRopa: "zapatos",
    },
]
let categoriaVestidos = [
    {
        id: 1,
        nombre: "VESTIDO AMARILLO",
        img:  "https://images.pexels.com/photos/3645369/pexels-photo-3645369.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        descripcion: "Vestido largo color amarillo",
        material:"Composición: 100% Algodón",
        precio:"$199.99",
        tipoRopa: "vestidos",
    },
    {
        id: 2,
        nombre: "VESTIDO CASUAL",
        img: "https://image.freepik.com/foto-gratis/atractiva-mujer-joven-vestido-azul-sombrero-paja-gafas-sol-rosa-caminar-piscina_285396-1160.jpg",
        descripcion: "Vestido casual color azul marino",
        material:"Composición: 100% Algodón",
        precio:"$159.99",
        tipoRopa: "vestidos",

    },
    {
        id: 3,
        nombre: "VESTIDO CON ESTAMPADO",
        img: "https://image.freepik.com/foto-gratis/chica-rizada-vestido-hermoso_144627-10117.jpg",
        descripcion: "Vestido con estampado de flores",
        material:"Composición: 68% Algodón, 25% Poliéster, 5% Viscosa, 2% Elastano",
        precio:"$199.99",
        tipoRopa: "vestidos",

    },
    {
        id: 4,
        nombre: "VESTIDO RAYAS",
        img: "https://image.freepik.com/foto-gratis/mujer-vestido-verde-sombrero-sobre-fondo-amarillo_1303-10383.jpg",
        descripcion: "Vestido largo verde con rayas",
        material:"Composición: 100% Algodón",
        precio:"$129.99",
        tipoRopa: "vestidos",

    },
    {
        id: 5,
        nombre: "VESTIDO TIRANTES DELGADOS",
        img:"https://image.freepik.com/foto-gratis/hermosa-mujer-vestido-negro_1303-10795.jpg",
        descripcion: "Vestido corto, escote cuadrado, tirantes delgados FIT AJUSTADO",
        material:"Composición: 95% Rayon, 5% Elastano",
        precio:"$129.99",
        tipoRopa: "vestidos",

    },
    {
        id: 6,
        nombre: "VESTIDO NARANJA",
        img: "https://image.freepik.com/foto-gratis/mujer-joven-hermoso-vestido-rojo_1303-17506.jpg",
        descripcion: "Vestido naranja con estampado",
        material:"Composición: 95% Rayon, 5% Elastano",
        tipoRopa: "vestidos",

    },
    {
        id: 7,
        nombre: "VESTIDO CON VOLANTES",
        img: "https://image.freepik.com/foto-gratis/mujer-vestido-rojo-afuera-ciudad_1303-10696.jpg",
        descripcion: "vestido naranja de tirantes con volantes",
        material:"Composición: 100% Algodón",
        precio:"$199.99",
        tipoRopa: "vestidos",

    },
]


app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("pages/index", {});
});
app.get("/categoria_ropa/accesorios", (req, res) => {
    res.render("pages/categoria_ropa/accesorios", {
        categorias: categoriaAccesorios
    });
});
app.get("/categoria_ropa/blusas", (req, res) => {
    res.render("pages/categoria_ropa/blusas", {
        categorias: categoriaBlusas
    });
});
app.get("/categoria_ropa/bolsos", (req, res) => {
    res.render("pages/categoria_ropa/bolsos", {
        categorias: categoriaBolsos
    });
});
app.get("/categoria_ropa/faldas", (req, res) => {
    res.render("pages/categoria_ropa/faldas", {
        categorias: categoriaFaldas
    });
});
app.get("/categoria_ropa/pantalones", (req, res) => {
    res.render("pages/categoria_ropa/pantalones", {
        categorias: categoriaPantalones
    });
});
app.get("/categoria_ropa/shorts", (req, res) => {
    res.render("pages/categoria_ropa/shorts", {
        categorias: categoriaShorts
    });
});
app.get("/categoria_ropa/sudaderas", (req, res) => {
    res.render("pages/categoria_ropa/sudaderas", {
        categorias: categoriaSudaderas
    });
});
app.get("/categoria_ropa/vestidos", (req, res) => {
    res.render("pages/categoria_ropa/vestidos", {
        categorias: categoriaVestidos
    });
});
app.get("/categoria_ropa/zapatos", (req, res) => {
    res.render("pages/categoria_ropa/zapatos", {
        categorias: categoriaZapatos
    });
});

app.get("/categoria_ropa/:tipoRopa/detalles_producto", (req, res, next) => {

    let id = req.query.id;
    let tipoRopa = req.params.tipoRopa;
    let categorias = [];

    switch (tipoRopa) {
        case "bolsos":
            categorias = categoriaBolsos;
            break;

        case "faldas":
            categorias = categoriaFaldas;
            break;

        case "pantalones":
            categorias = categoriaPantalones;
            break;

        case "shorts":
            categorias = categoriaShorts;
            break;

        case "sudaderas":
            categorias = categoriaSudaderas;
            break;

        case "zapatos":
            categorias = categoriaZapatos;
            break;

        case "accesorios":
            categorias = categoriaAccesorios;
            break;

        case "vestidos":
            categorias = categoriaVestidos;
            break;

        case "blusas":
            categorias = categoriaBlusas;
            break;

        default:
            break;
    }

    for (let i = 0; i < categorias.length; i++) {
        const categoria = categorias[i];

        if (categoria.id.toString() === id) { //*
            //return finalizar función actual (req, res)
            return res.render("pages/categoria_ropa/detalles_producto", {
                // postre: postre
                categoria
            });
        }
    }

    return next();

});

app.get("/search", (req, res) => {
    // query -> lo que está en el name del input
    console.log('req.query.query', req.query.query);
    let query = req.query.query;

    // En este arreglo vamos a guardar los resultados de la búsqueda
    let resultados = [];

    // Paso #1 buscar en el primer arreglo de postres
    // - nombre

    for (let i = 0; i < categoriaVestidos.length; i++) {
        const categoria = categoriaVestidos[i];
        // Revisar si el nombre coincide con la búsqueda
        if (categoria.nombre.toLowerCase() === query.toLowerCase()) {
            // Agregar postre al arreglo de resultados
            resultados.push(categoria);
        }
    }


    // TODO: implementar

    // Paso #4 pasar los resultados a la vista
    console.log('resultados', resultados);
    res.render("pages/search", {
        // resultados: resultados
        resultados
    });
});



app.use((req, res, next) => {
    next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
    let message = err.message;
    let error = err;

    res.status(err.status || 500);
    res.render("pages/error", {
        message,
        error
    });
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});