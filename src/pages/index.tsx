import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { type NextPage } from "next";
import { api } from "../utils/api";

const Home: NextPage = () => {
  const sampleimg = "/python.png";
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  // Another way to create uneven rows
  // grid-rows-[1fr,3fr,3fr,1fr]

  return (
    <div className=" grid h-screen w-screen grid-rows-6 justify-center gap-8 py-4">
      <h1 className="row-span-1 text-center text-3xl text-slate-50">
        {" "}
        ¿Qué lenguaje prefieres?{" "}
      </h1>
      <div id="firstChoice" className="relative row-span-2">
        <Image fill className="mx-auto object-contain" src={sampleimg} alt="" />
      </div>
      <div id="secondChoice" className="relative row-span-2">
        <Image fill className="mx-auto object-contain" src={sampleimg} alt="" />
      </div>
      <footer className="row-span-1 mx-4 flex flex-row gap-4">
        <div className="mx-auto">
          <Link href="https://github.com/Henny35P">
            <img
              src="https://avatars.githubusercontent.com/u/59944004?v=4"
              alt=""
              className="h-24 w-24 rounded-full"
            />
          </Link>
        </div>
        <p className="my-2 break-before-auto text-justify text-xs text-slate-50">
          Creado por Hans Villarroel - 2022 utilizando el T3 stack.
          <br />
          El repositorio con el codigo fuente se puede encontrar aquí.
        </p>
      </footer>
    </div>
  );
};

export default Home;
