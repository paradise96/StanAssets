export function isValidEmail(email) {
  // eslint-disable-next-line
  const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

export const toast = {
  style: {
    wrapper: {
      position: 'fixed',
      left: '40%',
      top: '100px',
      width: '400px',
      zIndex: '10000',
    },
    toast: {
      padding: '15px',
      color: '#fff',
      borderRadius: '5px',
      marginBottom: '10px',
      fontFamily: 'Montserrat',
      fontWeight: 700,
      fontSize: '16px',
      textAlign: 'center',
    }
  },
  show: function(text, type){
    let wrapper = document.getElementById('toast-wrapper');
    if(wrapper === null){
      wrapper = document.createElement('div');
      wrapper.id = 'toast-wrapper';
      for(let prop in this.style.wrapper){
        wrapper.style[prop] = this.style.wrapper[prop];
      }
      document.body.prepend(wrapper);
    }
    switch(type){
      case 'success':
        this.style.toast.backgroundColor = 'rgba(5, 184, 5, .8)';
        break;
      case 'danger':
        this.style.toast.backgroundColor = 'rgba(195, 22, 22, .8)';
        break;
      case 'warning':
        this.style.toast.backgroundColor = 'rgba(255, 184, 30, .8)';
        break;
      case 'info':
        this.style.toast.backgroundColor = 'rgba(30, 199, 255, .8)';
        break;
      default:
        this.style.toast.backgroundColor = 'rgba(30, 199, 255, .8)';
        break;
    }
    const div = document.createElement('div');
    div.id = 'my-toast-'+document.getElementsByClassName('my-toast').length;
    div.classList.add('my-toast');
    div.classList.add(`toast-${type}`);
    for(let prop in this.style.toast){
      div.style[prop] = this.style.toast[prop];
    }
    const divText = document.createElement('div');
    divText.innerText = text;
    div.prepend(divText);

    wrapper.prepend(div);
    div.onclick = div.remove;

    setTimeout(()=>{
      div.remove();
    }, 5000);
  },
  success: function(text=''){
    this.show(text, 'success');
  },
  danger: function(text=''){
    this.show(text, 'danger');
  },
  warning: function(text=''){
    this.show(text, 'warning');
  },
  info: function(text=''){
    this.show(text, 'info');
  }
}

export function formatDate(date){
  const d = new Date(date);
  const addZero = (n)=>n<10?'0'+n:n;
  return `${addZero(d.getDate())}.${addZero(d.getMonth()+1)}.${d.getFullYear()}`
}