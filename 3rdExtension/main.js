
const isMorning = () => {
  const d = new Date();
  return (d.getHours() > 5 && d.getHours() < 10);
};

const onListPage = () => {
  const here = document.location.pathname;
  const regex = /\/kata\/(latest|search)/;
  return regex.test(here); 
};

const milisecondsUntilRefresh = () => {
  const d = new Date();
  let secs = 0;
  if (d.getHours() < 10) { 
    secs = (10 - (d.getHours() - 1)) * 60 + (60 - d.getMinutes()) * 60 * 1000; 
  } else {
    secs = (24 - (d.getHours() + 4)) * 60 + (60 - d.getMinutes()) * 60 * 1000;
  }
  return secs;
};

const pageRefresh = () => {
  if (onListPage()) window.location.reload;
};

const unwanted = ['https://www.codewars.com/users/g964', 
          'https://www.codewars.com/users/giacomosorbi'];

const beforeBreakfast = () => {

  if (!isMorning() || !onListPage()) return null; 

  const kata = document.querySelectorAll('.items-list');
  const items = kata[0].querySelectorAll('.list-item');
  items.forEach (k => {
    const info = k.querySelector('.info-row');
    const user = info.querySelectorAll('a', '.has-tip')[3];
    if (user && (unwanted.includes(user.href))) k.remove();
  });
};

beforeBreakfast();
document.onscroll = beforeBreakfast;
setTimeout(pageRefresh, milisecondsUntilRefresh());
