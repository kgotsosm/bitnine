import React from 'react'

const NavLinks = () => {
    const links = [{
        name: 'Graph Database',
        name: 'Relational Database',
    }]

  return (
    <>
    {
        links.map((link) => {
            <div>
                <h1>
                    {link.name}
                </h1>
            </div>
        })
    }
    </>
  )
}

export default NavLinks