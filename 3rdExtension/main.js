let d = new Date();
const morning = () => d.getHours() > 5 && d.getHours() < 10;
const unwanted = ['https://www.codewars.com/users/g964', 'https://www.codewars.com/users/giacomosorbi'];

if (morning()) {

  let kata = document.querySelectorAll('.items-list');
  let items = kata[0].querySelectorAll('.list-item');
  items.forEach (k => {
    
    let info = k.querySelector('.info-row');
	let user = info.querySelectorAll('a', '.has-tip')[3];
	if (user && (unwanted.includes(user.href))) k.remove();
  });
}
