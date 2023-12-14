import DataOfResources from "./data/DataOfResources.js";

const PlaceOfResources = document.getElementById('PlaceOfResources');


DataOfResources.forEach(function (item) {
    if (item.src) {
        const ResourceWrapper = document.createElement("div");
        ResourceWrapper.classList.add('Resource');

        const ResourceImage = document.createElement("img");
        ResourceImage.src = item.src;
        ResourceImage.classList.add('Resource__image');

        ResourceWrapper.appendChild(ResourceImage);
        PlaceOfResources.appendChild(ResourceWrapper);

    } else {
        const ResourceWrapper = document.createElement("div");
        ResourceWrapper.classList.add('Resource');

        PlaceOfResources.appendChild(ResourceWrapper);
    };

});