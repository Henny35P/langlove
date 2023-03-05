import { PrismaClient } from "@prisma/client";
import fs, { readFileSync } from "fs";
const prisma = new PrismaClient();
import langs from "./langs.json";

interface LangObj {
  name: string;
  url: string;
}

async function createLang(lang: LangObj): Promise<void> {
  await prisma.language.create({
    data: {
      name: lang.name,
      url: lang.url,
    },
  });
}

// Seed the database with programming languages and their
// respective wikipedia urls
function seedLang() {
  for (const lang of langs) {
    createLang(lang)
      .catch((err) => console.log(err))
      .then(() => console.log("Created Lang"))
      .catch(() => "obligatory catch");
  }
}

seedLang();
