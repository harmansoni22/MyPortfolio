"use client";

import StaggeredMenu from "./StaggeredMenu";

const Navbar = () => {
  const menuItems = [
    {
      label: "Home",
      ariaLabel: "Go to Home Page",
      link: "/",
    },
    {
      label: "About",
      ariaLabel: "Know More About Us",
      link: "/about",
    },
    {
      label: "Projects",
      ariaLabel: "Explore Our Courses",
      link: "/projects",
    },
    {
      label: "Contact",
      ariaLabel: "Contact Us",
      link: "/contact",
    },
  ];

  const socialItems = [
    {
      label: "X",
      link: "https://x.com",
    },
    {
      label: "Github",
      link: "https://github.com/harmansoni22",
    },
    {
      label: "LinkedIn",
      link: "https://linkedin.com/harmansoni",
    },
  ];

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials
        displayItemNumbering={false}
        isFixed={true}
        menuButtonColor="#ffffff"
        openMenuButtonColor="#ffffff"
        changeMenuColorOnOpen={true}
        colors={["#9ea5ef", "#2739ff"]}
        logoUrl="/logo-white_no-bg.png"
        accentColor="#3075ff"
      />
    </div>
  );
};

export default Navbar;
