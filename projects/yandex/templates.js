export const formTemplate = `
  <form id="add-form" class = "form">
    <div class = "form__header">Отзыв:</div>
    <input class = "form__place" type="text" placeholder="Укажите место" name="place"><br><br>
    <input class = "form__author" type="text" placeholder="Укажите ваше имя" name="author"><br><br>
    <textarea class = "form__review" placeholder="Оставить отзыв" name="review"></textarea><br><br>
    <button class = "form__button" id="add-btn">Добавить</button><br>
  </form>
  `;

export const reviewTemplate = (review) => {
  return `
      <div class="review">
        <div class = "review__info"> 
          <div class = "review__name">${review.author}</div>
          <div class = "review__place">${review.place}</div>
        </div>
        <div class = "review__reviewText">${review.reviewText}</div>
      </div>
    `;
};
