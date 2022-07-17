require.context('../assets', false, /\.(png|jpe?g|svg)$/);

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}
let cardsObjArray = importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/));

cardsObjArray = Object.values(cardsObjArray);
cardsObjArray[0] = { link: cardsObjArray[0], name: 'Rick Sanchez' };
cardsObjArray[1] = { link: cardsObjArray[1], name: 'Alan Rails' };
cardsObjArray[2] = { link: cardsObjArray[2], name: 'Albert Einstein' };
cardsObjArray[3] = { link: cardsObjArray[3], name: 'Alexander' };
cardsObjArray[4] = { link: cardsObjArray[4], name: 'Morty Smith' };
cardsObjArray[5] = { link: cardsObjArray[5], name: 'Summer Smith' };
cardsObjArray[6] = { link: cardsObjArray[6], name: 'Beth Smith' };
cardsObjArray[7] = { link: cardsObjArray[7], name: 'Jerry Smith' };
cardsObjArray[8] = { link: cardsObjArray[8], name: 'Abango Cluster Princess' };
cardsObjArray[9] = { link: cardsObjArray[9], name: 'Abradolf Lincler' };
cardsObjArray[10] = { link: cardsObjArray[10], name: 'Adjudicator Rick' };
cardsObjArray[11] = { link: cardsObjArray[11], name: 'Agency Director' };

cardsObjArray.forEach((element, index) => {
  element.wasPicked = true;
  element.isRendering = false;
  element.index = index;
});

export default cardsObjArray;
