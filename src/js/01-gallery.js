//* Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. Розбий його на декілька підзавдань:

//? Додай бібліотеку SimpleLightbox як залежність проекту, використовуючи npm(посилання на CDN 
// з твоєї минулої роботи більше не потрібне).

//? Використовуй свій JavaScript код з попередньої домашньої роботи, але виконай рефакторинг з урахуванням того,
// що бібліотека була встановлена через npm(синтаксис import /export).
        
//? Для того щоб підключити CSS код бібліотеки в проект, необхідно додати ще один імпорт, крім того, що описаний в 
// документації.





import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


const galleryListEl = document.querySelector('.gallery');
const markup = createGalleryMarkup(galleryItems);
galleryListEl.insertAdjacentHTML('beforeend', markup);

// rendered items
function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
`;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});