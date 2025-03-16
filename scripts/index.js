const popupContainer = document.querySelector('.popup');
const btnAboutProject = document.querySelector('.header__about-project');
const btnOpenImage = popupContainer.querySelector('.popup__btn-image-open');
const image = popupContainer.querySelector('.popup__image');

function openPopup(evt) {
    evt.preventDefault();
    popupContainer.classList.add('popup_opened');
};
function closePopup() {
    popupContainer.classList.remove('popup_opened');
    closeImage();
};
function closeImage() {
    btnOpenImage.classList.remove('popup__hide-object');
    image.classList.add('popup__hide-object');
};
function OpenImage(evt) {
    evt.preventDefault();
    btnOpenImage.classList.add('popup__hide-object');
    image.classList.remove('popup__hide-object');
};

btnAboutProject.addEventListener('click', openPopup);
btnOpenImage.addEventListener('click', OpenImage);

popupContainer.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
        closePopup();
    };
    if (evt.target.classList.contains('popup__close')) {
        closePopup();
    };
    if (evt.target.classList.contains('popup__image-close')) {
        closeImage();
    };
});