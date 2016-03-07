var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', getGrafico);
router.get('/tests', getTest);
router.get('/data/line', getDataLine);
router.get('/data/points', getDataPoints);

module.exports = router;

function getTest(req, res) {
  res.render('test');
}


function getGrafico(req, res) {
  res.render('grafico');
}

function getDataPoints(req, res) {
  res.json({"Puntos": [{"Nombre" :"60º 40% microesferas de vidrio", "Esfuerzo_de_fluencia" : 10.49548119, "Consistencia" : 36.395, "Indice_de_flujo" : 0.527724007 },
  {"Nombre" :"60º 30% microesferas de vidrio", "Esfuerzo_de_fluencia" : 18.71787689, "Consistencia" : 49.521, "Indice_de_flujo" : 0.467246325 },
  {"Nombre" :"60º 20% microesferas de vidrio", "Esfuerzo_de_fluencia" : 15.23809168, "Consistencia" : 29.535, "Indice_de_flujo" : 0.491927725 },
  {"Nombre" :"60º manjar", "Esfuerzo_de_fluencia" : 23.769178, "Consistencia" : 32.415, "Indice_de_flujo" : 0.432366386 },
  {"Nombre" :"50º 40% microesferas de vidrio", "Esfuerzo_de_fluencia" : 28.90466746, "Consistencia" : 94.223, "Indice_de_flujo" : 0.399189175 },
  {"Nombre" :"50º 30% microesferas de vidrio", "Esfuerzo_de_fluencia" : 27.38927712, "Consistencia" : 102.149, "Indice_de_flujo" : 0.366672641 },
  {"Nombre" :"50º 20% microesferas de vidrio", "Esfuerzo_de_fluencia" : 23.60080129, "Consistencia" : 65.342, "Indice_de_flujo" : 0.41611762 },
  {"Nombre" :"50º manjar", "Esfuerzo_de_fluencia" : 31.71094585, "Consistencia" : 51.167, "Indice_de_flujo" : 0.352611523 },
  {"Nombre" :"40º 40% microesferas de vidrio", "Esfuerzo_de_fluencia" : 68.75382065, "Consistencia" : 141.485, "Indice_de_flujo" : 0.337405837 },
  {"Nombre" :"40º 30% microesferas de vidrio", "Esfuerzo_de_fluencia" : 48.82924405, "Consistencia" : 139.734, "Indice_de_flujo" : 0.326635066 },
  {"Nombre" :"40º 20% microesferas de vidrio", "Esfuerzo_de_fluencia" : 43.77794294, "Consistencia" : 113.570, "Indice_de_flujo" : 0.321152981 },
  {"Nombre" :"40º manjar", "Esfuerzo_de_fluencia" : 36.48161912, "Consistencia" : 95.157, "Indice_de_flujo" : 0.34590385 },
  {"Nombre" :"30º 40% microesferas de vidrio", "Esfuerzo_de_fluencia" : 118.9862039, "Consistencia" : 120.755, "Indice_de_flujo" : 0.674096154 },
  {"Nombre" :"30º 30% microesferas de vidrio", "Esfuerzo_de_fluencia" : 80.5401899, "Consistencia" : 146.958, "Indice_de_flujo" : 0.369915469 },
  {"Nombre" :"30º 20% microesferas de vidrio", "Esfuerzo_de_fluencia" : 71.84072688, "Consistencia" : 147.070, "Indice_de_flujo" : 0.332739686 },
  {"Nombre" :"35º manjar", "Esfuerzo_de_fluencia" : 53.31928948, "Consistencia" : 129.950, "Indice_de_flujo" : 0.302541829 }]
});
}

function getDataLine(req, res) {
  res.json({
      "Reograma 60grados 40percent": [
        { "strain" : 0.953, "stress" : 	35.48232259 },
        { "strain" : 2.04, "stress" : 	53.02058204 },
        { "strain" : 3.06, "stress" : 	65.67076504 },
        { "strain" : 4.08, "stress" : 	76.43728387 },
        { "strain" : 5.1, "stress" : 	85.98980949 },
        { "strain" : 6.12, "stress" : 	94.67445881 },
        { "strain" : 7.14, "stress" : 	102.6980646 },
        { "strain" : 8.16, "stress" : 	110.1960435 },
        { "strain" : 9.19, "stress" : 	117.3302348 },
        { "strain" : 10.2, "stress" : 	123.9674712 },
        { "strain" : 11.2, "stress" : 	130.2395111 },
        { "strain" : 12.2, "stress" : 	136.2521554 },
        { "strain" : 13.3, "stress" : 	142.6030156 },
        { "strain" : 14.3, "stress" : 	148.1643709 },
        { "strain" : 15.3, "stress" : 	153.5448757 },
        { "strain" : 16.3, "stress" : 	158.7616917 },
        { "strain" : 17.4, "stress" : 	164.3284801 },
        { "strain" : 18.4, "stress" : 	169.246598 },
        { "strain" : 19.4, "stress" : 	174.0400131 },
        { "strain" : 20.4, "stress" : 	178.7180832 },
        { "strain" : 21.4, "stress" : 	183.2890438 },
        { "strain" : 22.4, "stress" : 	187.7601886 },
        { "strain" : 23.5, "stress" : 	192.570893 },
        { "strain" : 24.5, "stress" : 	196.8527611 },
        { "strain" : 25.5, "stress" : 	201.0528521 },
        { "strain" : 26.5, "stress" : 	205.1758464 },
        { "strain" : 27.6, "stress" : 	209.6271513 },
        { "strain" : 28.6, "stress" : 	213.6016174 },
        { "strain" : 29.6, "stress" : 	217.5109751 },
        { "strain" : 30.6, "stress" : 	221.3584385 },
        { "strain" : 31.6, "stress" : 	225.1469638 },
        { "strain" : 32.7, "stress" : 	229.2495158 },
        { "strain" : 33.7, "stress" : 	232.9229011 },
        { "strain" : 34.7, "stress" : 	236.545157 },
        { "strain" : 35.7, "stress" : 	240.1184386 },
        { "strain" : 36.7, "stress" : 	243.6447531 },
        { "strain" : 37.8, "stress" : 	247.4716829 },
        { "strain" : 38.8, "stress" : 	250.905316 },
        { "strain" : 39.8, "stress" : 	254.2974022 },
        { "strain" : 40.8, "stress" : 	257.6494699 },
        { "strain" : 41.8, "stress" : 	260.9629551 },
        { "strain" : 42.9, "stress" : 	264.5648367 },
        { "strain" : 43.9, "stress" : 	267.8016054 },
        { "strain" : 44.9, "stress" : 	271.0037359 },
        { "strain" : 45.9, "stress" : 	274.1723582 },
        { "strain" : 47, "stress" : 	277.6204155 },
        { "strain" : 48, "stress" : 	280.7220849 },
        { "strain" : 49, "stress" : 	283.7933837 },
        { "strain" : 50, "stress" : 	286.8352201 }
      ],
      "Reograma 60grados 30percent": [
        { "strain" : 0.985, "stress" : 	49.17274399 },
        { "strain" : 2.04, "stress" : 	69.09790801 },
        { "strain" : 3.06, "stress" : 	83.51084781 },
        { "strain" : 4.08, "stress" : 	95.52566248 },
        { "strain" : 5.1, "stress" : 	106.0231994 },
        { "strain" : 6.12, "stress" : 	115.4510938 },
        { "strain" : 7.14, "stress" : 	124.0734028 },
        { "strain" : 8.16, "stress" : 	132.0611934 },
        { "strain" : 9.19, "stress" : 	139.6037145 },
        { "strain" : 10.2, "stress" : 	146.5737047 },
        { "strain" : 11.2, "stress" : 	153.120947 },
        { "strain" : 12.2, "stress" : 	159.3635442 },
        { "strain" : 13.3, "stress" : 	165.9231142 },
        { "strain" : 14.3, "stress" : 	171.6397443 },
        { "strain" : 15.3, "stress" : 	177.1471047 },
        { "strain" : 16.3, "stress" : 	182.465829 },
        { "strain" : 17.4, "stress" : 	188.1193279 },
        { "strain" : 18.4, "stress" : 	193.095797 },
        { "strain" : 19.4, "stress" : 	197.930156 },
        { "strain" : 20.4, "stress" : 	202.6334899 },
        { "strain" : 21.4, "stress" : 	207.2155236 },
        { "strain" : 22.4, "stress" : 	211.6848444 },
        { "strain" : 23.5, "stress" : 	216.4799911 },
        { "strain" : 24.5, "stress" : 	220.736468 },
        { "strain" : 25.5, "stress" : 	224.9013548 },
        { "strain" : 26.5, "stress" : 	228.9801025 },
        { "strain" : 27.6, "stress" : 	233.3731104 },
        { "strain" : 28.6, "stress" : 	237.2864933 },
        { "strain" : 29.6, "stress" : 	241.1276349 },
        { "strain" : 30.6, "stress" : 	244.900244 },
        { "strain" : 31.6, "stress" : 	248.607725 },
        { "strain" : 32.7, "stress" : 	252.6144637 },
        { "strain" : 33.7, "stress" : 	256.1950878 },
        { "strain" : 34.7, "stress" : 	259.7195416 },
        { "strain" : 35.7, "stress" : 	263.190288 },
        { "strain" : 36.7, "stress" : 	266.6096162 },
        { "strain" : 37.8, "stress" : 	270.3140302 },
        { "strain" : 38.8, "stress" : 	273.6321521 },
        { "strain" : 39.8, "stress" : 	276.9050188 },
        { "strain" : 40.8, "stress" : 	280.1343618 },
        { "strain" : 41.8, "stress" : 	283.3218058 },
        { "strain" : 42.9, "stress" : 	286.7814207 },
        { "strain" : 43.9, "stress" : 	289.8857402 },
        { "strain" : 44.9, "stress" : 	292.9526104 },
        { "strain" : 45.9, "stress" : 	295.9833025 },
        { "strain" : 46.9, "stress" : 	298.9790176 },
        { "strain" : 48, "stress" : 	302.235261 },
        { "strain" : 49, "stress" : 	305.1611538 },
        { "strain" : 50, "stress" : 	308.0554043 }
      ]
    }
)
}
