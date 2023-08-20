import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./Links";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  return (
    <div className="sm:border-none border-b-2 mx-6">
      {links.map((link) => (
        <div key={link.name}>
          <div className="px-3 text-left md:cursor-pointer group">
            <h3
              className="py-7 flex justify-between items-center md:pr-0 pr-5"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="text-xl md:mt-1 md:ml-2 md:hidden inline">
                <ion-icon
                  name={`${
                    heading === link.name ? "chevron-up" : "chevron-down"
                  }`}
                ></ion-icon>
              </span>
            </h3>
            {link.submenu && (
              <div>
                <div className="absolute top-26 hidden group-hover:md:block md:hover:block">
                  <div className="p-3.5 bg-white">
                    {link.sublinks.map((sublinks) => (
                      <div key={sublinks.Head}> 
                        <h3 className="text-md font-semibold">
                          {sublinks.Head}
                        </h3>
                        <ul>
                          {sublinks.sublink.map((slink) => (
                            <li
                              key={slink.name} 
                              className="text-sm text-gray-600 my-2.5"
                            >
                              <Link
                                to={slink.link}
                                className="hover:text-blue-600"
                              >
                                {slink.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menu */}
          <div
            className={`
              ${heading === link.name ? "md:hidden" : "hidden"}
            `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div key={slinks.Head}>
                <div>
                  <h3
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold flex justify-between items-center md:pr-0 pr-5"
                  >
                    {slinks.Head}
                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      <ion-icon
                        name={`${
                          subHeading === slinks.Head
                            ? "chevron-up"
                            : "chevron-down"
                        }`}
                      ></ion-icon>
                    </span>
                  </h3>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li key={slink.name} className="py-3 pl-14">
                        <Link to={slink.link} className="hover:text-blue-600">
                          {slink.name}
                        </Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
  
};

export default NavLinks;
