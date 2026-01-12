const editProfileBtn = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");

const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileForm.querySelector(
  "#profile-name-input"
);
const editProfileDescriptionInput = editProfileForm.querySelector(
  "#profile-description-input"
);

const profileEl = document.querySelector(".profile__column");
const profileNameEl = profileEl.querySelector(".profile__name");
const profileDescriptionEl = profileEl.querySelector(".profile__description");

function profileFill() {
  editProfileModal.classList.add("modal_is-opened");
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
}

editProfileBtn.addEventListener("click", profileFill);

function closeProfileEditModal() {
  editProfileModal.classList.remove("modal_is-opened");
}

editProfileCloseBtn.addEventListener("click", closeProfileEditModal);

function ProfileSubmissionHandler(event) {
  event.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  closeProfileEditModal();
}

editProfileForm.addEventListener("submit", ProfileSubmissionHandler);

const addPostBtn = document.querySelector(".profile__add-button");
const addPostModal = document.querySelector("#new-post-modal");
const addPostCloseBtn = addPostModal.querySelector(".modal__close-btn");

const addPostForm = addPostModal.querySelector(".modal__form");
const addPostLinkInput = addPostForm.querySelector("#new-post-link");
const addPostCaptionInput = addPostForm.querySelector("#new-post-caption");

addPostBtn.addEventListener("click", function () {
  addPostModal.classList.add("modal_is-opened");
});

function closeAddPostModal() {
  addPostModal.classList.remove("modal_is-opened");
}

addPostCloseBtn.addEventListener("click", closeAddPostModal);

function addPostSubmissionHandler(event) {
  event.preventDefault();
  console.log(addPostLinkInput.value);
  console.log(addPostCaptionInput.value);
  closeAddPostModal();
}

addPostForm.addEventListener("submit", addPostSubmissionHandler);
