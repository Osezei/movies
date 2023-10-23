import React from "react";
import Link from "next/link";
import { url } from "@/url";
import Image from "next/image";

const Navigation = ({ activePage }) => {
  return (
    <section>
      {url.map((item) => {
        const { id, title, url, button } = item;
        return (
          <Link
            key={id}
            href={url}
            className={`text-4xl ${
              activePage === title ? "text-green-900" : ""
            }`}
          >
            {button}
          </Link>
        );
      })}
    </section>
  );
};

export default Navigation;
