import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/signup">SignUp</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
