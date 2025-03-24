import { ArrowDown, CreditCard, ExternalLink } from "lucide-react";
import cards from "./(cards)/card-exports";
import CardGridRenderer from "./(components)/card-grid-renderer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-full">
      <main className="relative h-dvh flex flex-col items-center justify-center">
        <nav className="absolute top-0 w-full h-16 flex items-center justify-between px-5">
          <div className="flex items-center gap-3">
            <CreditCard size={20} strokeWidth={1.5} />
            <div className="text-sm font-medium">Cards UI</div>
          </div>
          <Link href="https://github.com/BasicallyMe/cards-ui.git" className="text-sm font-medium flex items-center gap-3">
            Github
            <ExternalLink size={16} strokeWidth={1.5} />
          </Link>
        </nav>
        <a
          href="#cards"
          className="bottom-3 animate-bounce absolute bg-slate-100 shadow-lg rounded-full w-9 h-9 flex flex-col justify-center items-center"
        >
          <ArrowDown size={20} strokeWidth={1.8} />
        </a>
        <div className="w-4xl">
          <h1 className="text-5xl font-bold text-center mb-5">
            Beautiful, Customizable Bank Card Components for Your Apps
          </h1>
          <p className="text-sm text-center text-gray-500">
            Easily integrate modern, responsive, and customizable bank card
            components into your web applications. Built with Tailwind CSS and
            React, our UI library offers sleek card designs that you can copy
            and use instantly.
          </p>
        </div>
      </main>
      <section id="cards" className="py-5 px-5 flex flex-col items-center">
        <div className="w-5xl text-center flex flex-col items-center mb-10">
          <h2 className="text-3xl font-bold mb-5">How to use this library</h2>
          <p className="text-sm text-gray-500 max-w-2xl">
            There are only two steps involved to use this library. First, you
            choose a card you want to use. Second, you copy the code and paste
            it in your project. That's it
          </p>
        </div>
        <div className="w-4xl grid grid-cols-2 gap-5 mb-5">
          {cards.map(({ name, code, component }) => (
            <CardGridRenderer
              key={name}
              name={name}
              code={code}
              component={component}
            />
          ))}
        </div>
        <div className="text-center text-sm text-gray-500">Adding more cards soon...</div>
      </section>
    </div>
  );
}
