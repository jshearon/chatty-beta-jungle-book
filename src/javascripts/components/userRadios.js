import utils from '../helpers/utils';
import userData from '../helpers/data/userData';

const printRadioButtons = () => {
  const users = userData.getUsers();
  let domString = '';
  users.forEach((user, i) => {
    domString += '<div class="form-check form-check-inline">';
    domString += `<input class="form-check-input radioUsers" type="radio" name="selectedUser" id="${user.id}" value="${user.id}" ${i === 0 ? 'checked' : ''}>`;
    domString += `<label class="form-check-label" for="${user.id}">${user.name}</label>`;
    domString += '</div>';
  });
  utils.printToDom('user-radios', domString);
};

export default {
  printRadioButtons,
};
