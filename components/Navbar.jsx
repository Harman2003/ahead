'use client';
import { Button } from "@material-tailwind/react";
const Navbar = () => (
  <nav className="fixed flex top-0 left-0 right-0 h-24 px-20 items-center justify-center bg-white">
    <div className="mr-auto">Logo</div>
    <ul className="mx-4">Emotions</ul>
    <ul className="mx-4">Manifesto</ul>
    <ul className="mx-4">Self-awareness test</ul>
    <ul className="mx-4">Work With Us</ul>
    <Button className="h-fit rounded-full ml-auto">Download app</Button>
  </nav>
);

export default Navbar;
