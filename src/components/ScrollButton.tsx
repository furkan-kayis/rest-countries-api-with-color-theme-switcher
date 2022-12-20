import { useState } from 'react';
import { BsArrowUpCircleFill } from 'react-icons/bs';

export default function ScrollButton() {
  const [visible, setVisible] = useState(false);
  function toggleVisible() {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 900) {
      setVisible(true);
    } else if (scrolled <= 900) {
      setVisible(false);
    }
  }
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  window.addEventListener('scroll', toggleVisible);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-20 right-20"
      style={{ display: visible ? 'inline' : 'none' }}
    >
      <BsArrowUpCircleFill className="text-6xl lg:text-5xl text-very-dark-blue-2 dark:text-white" />
    </button>
  );
}
