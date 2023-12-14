import DataOfPoints from "./data/DataOfPoints.js";

const PlaceOfPoints = document.getElementById('PlaceOfPoints');


DataOfPoints.forEach(function (item) {
    if (item.src) {
        const PointWrapper = document.createElement("div");
        PointWrapper.classList.add('Point');

        const PointImage = document.createElement("img");
        PointImage.src = item.src;
        PointImage.classList.add('Point__image');

        PointWrapper.appendChild(PointImage);
        PlaceOfPoints.appendChild(PointWrapper);

    } else {
        const PointWrapper = document.createElement("div");
        PointWrapper.classList.add('Point');

        PlaceOfPoints.appendChild(PointWrapper);
    };

});