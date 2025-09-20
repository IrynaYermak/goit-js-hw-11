import SimpleLightbox from 'simplelightbox';
export const gallery = document.querySelector('.gallery');

const loader = document.querySelector('.loader');
const galleryView = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionsDelay: 250,
  captionPosition: 'bottom',
});

export function createGallery(images) {
  const markupGallery = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes = 0,
        views = 0,
        comments = 0,
        downloads = 0,
      }) => `<li class="gallery-item">
  <a href="${largeImageURL}" class="link" target="_blank">
  <img src="${webformatURL}" alt="${tags}" width="360" /></a>
  <ul class="description-list">
    
  <li class="description-item">
      <h3 class="description-title">Likes</h3>
        <p class="description-text">${likes}</p>
    </li>
    
  <li class="description-item">
    <h3 class="description-title">Views</h3>
      <p class="description-text">${views}</p>
  </li>
  <li class="description-item">
    <h3 class="description-title">Comments</h3>
      <p class="description-text">${comments}</p>
  </li>
  <li class="description-item">
    <h3 class="description-title">Downloads</h3>
      <p class="description-text">${downloads}</p>
  </li>
</ul>
</li>`
    )
    .join('');

  gallery.innerHTML = markupGallery;
  galleryView.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.add('loader');
}
export function hideLoader() {
  if (loader.classList.contains('loader')) {
    loader.classList.remove('loader');
  }
}
