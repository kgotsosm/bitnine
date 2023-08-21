import React from "react";
import '../index.css'

const SocialIcons = () => {
  return (
    <div className="px-4 space-x-4 cursor-pointer">
      <a href="https://github.com/bitnine-oss/agensgraph" target="_blank" className="social-icon">
        <ion-icon name="logo-github"></ion-icon>
      </a>
      <a href="https://www.youtube.com/channel/UCBJNYamALEqrfxiOCgYyP2g/featured?view_as=subscriber" target="_blank" className="social-icon">
        <ion-icon name="logo-youtube"></ion-icon>
      </a>
      <a href="https://www.linkedin.com/company/bitnineglobal/" target="_blank" className="social-icon">
        <ion-icon name="logo-linkedin"></ion-icon>
      </a>
      <a href="https://www.facebook.com/bitninesns/" target="_blank" className="social-icon">
        <ion-icon name="logo-facebook"></ion-icon>
      </a>
      <a href="https://section.blog.naver.com/BlogHome.naver" target="_blank" className="social-icon">
        <ion-icon name="logo-medium"></ion-icon>
      </a>
    </div>
  );
};

export default SocialIcons;
