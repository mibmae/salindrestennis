export default function taggle() {
  const elements = document.querySelectorAll('.actived');
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < elements.length; i++) {
    const current = document.getElementsByClassName('actived');
    current[0].classList.remove('actived');
    // this.className += '_actived';
  }
}

export const generateUniqueKey = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return (
    `${s4()
      + s4()
    }-${
      s4()
    }-${
      s4()
    }-${
      s4()
    }-${
      s4()
    }${s4()
    }${s4()}`
  );
};