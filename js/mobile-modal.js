(() => {
   const refs = {
     // Додати атрибут data-modal-open на кнопку відкриття
     openModalBtn: document.querySelector('[data-mob-modal-open]'),
     // Додати атрибут data-modal-close на кнопку закриття
     closeModalBtn: document.querySelector('[data-mob-modal-close]'),
     // Додати атрибут data-modal на бекдроп модалки
     modal: document.querySelector('[data-mob-modal]'),
   };
 
   refs.openModalBtn.addEventListener('click', toggleMobModal);
   refs.closeModalBtn.addEventListener('click', toggleMobModal);
 
   function toggleMobModal() {
     // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
     refs.modal.classList.toggle('is-open');
   }
 })();