
const scroll = (content, style) => {
  const serviceOptons = {
    rootMargin: '-150px 0px -150px 0px'
  };
  
  const serviceObsever = new IntersectionObserver((entries, serviceObsever, appearOnScroll) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {

        if (style === 'bottom') {
          content.style.animation = 'bottom .7s forwards ease-in-out';
          content.style.visibility = 'visible';
          serviceObsever.unobserve(content);
        }

        if (style === 'top') {
          content.style.animation = 'top .7s forwards ease-in-out';
          content.style.visibility = 'visible';
          serviceObsever.unobserve(content);
        }

        if (style === 'left') {
          content.style.animation = 'left .7s forwards ease-in-out';
          content.style.visibility = 'visible';
          serviceObsever.unobserve(content);
        }

        if (style === 'right') {
          content.style.animation = 'right .7s forwards ease-in-out';
          content.style.visibility = 'visible';
          serviceObsever.unobserve(content);
        }

        if (style === 'pop') {
          content.style.animation = 'pop .7s forwards ease-in-out';
          content.style.visibility = 'visible';
          serviceObsever.unobserve(content);
        }

        if (style === 'rotate') {
          content.style.animation = 'rotate .7s forwards ease-in-out';
          content.style.visibility = 'visible';
          serviceObsever.unobserve(content);
        }
  
      } else {
        content.style.animation = 'none';
        content.style.visibility = 'hidden';
      }
    })
  
  }, serviceOptons);
  
    serviceObsever.observe(content);
};




