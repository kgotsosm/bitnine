import React from "react";
import { Link } from "react-router-dom";
import { links } from "./Links";

const NavLinks = () => {

  return (
    <div className="bg-white">
      {links.map((link) => (
        <div key={link.name}>
          {" "}
          {/* Added a unique key for each div */}
          <div className="px-3 text-left md:cursor-pointer group">
            <h3 className="py-7">{link.name}</h3>
            {link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:md:block md:hover:block">
                  <div className="p-3.5 bg-white">
                    {link.sublinks.map((sublinks) => (
                      <div key={sublinks.Head}>
                        {" "}
                        {/* Added a unique key for each div */}
                        <h3 className="text-md font-semibold">
                          {sublinks.Head}
                        </h3>
                        <ul>
                          {" "}
                          {sublinks.sublink.map((slink) => (
                            <li
                              key={slink.name}
                              className="text-sm text-gray-600 my-2.5"
                            >
                              {" "}
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
          {/* Mobile menu*/}
          <div>
            {
                link.sublinks.map((slinks) => (
                    <div>
                        <div>
                            <h3 className='py-4 pl-7 font-semibold md:pr-0 pr-5'>
                                {slinks.Head}
                            </h3>
                            <div>
                                {slinks.sublink.map(slink => (
                                    <li>
                                        <Link to={slink.link}>
                                            {slink.name}
                                        </Link>
                                    </li>
                                ))}
                            </div>
                        </div>

                    </div>
                ))
            }
          </div>
        </div>
      ))}
    </div>
  );
};

export default NavLinks;
 