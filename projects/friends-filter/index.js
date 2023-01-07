import './index.html';
import './style.css';
import FriendsFilter from './friendsFilter';

new FriendsFilter(
  document.querySelector('.list.all-friends'),
  document.querySelector('.list.best-friends')
);
