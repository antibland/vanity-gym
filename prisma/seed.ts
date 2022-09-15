import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { add } from "date-fns";

const prisma = new PrismaClient();

const run = async () => {
  await prisma.class.deleteMany({});
  await prisma.classEnrollment.deleteMany({});
  await prisma.user.deleteMany({});

  const salt = bcrypt.genSaltSync();

  // create a test teacher
  const hunter = await prisma.user.create({
    data: {
      email: "hunter@vanitygym.com",
      password: bcrypt.hashSync("password", salt),
      name: "Hunter Guts",
      social: {
        facebook: "hunterguts",
        twitter: "therealhunterguts",
      },
    },
  });

  const weekFromNow = add(new Date(), { days: 7 });
  const twoWeekFromNow = add(new Date(), { days: 14 });

  const vanityClass = await prisma.class.create({
    data: {
      name: "Brutal Cycling Struggle",
      details:
        "Prepare for a grueling hour of non-stop peddling to terrible music. No pain, no cane. Like, you should work out a lot now and then...you won't need a cane later. Heh. Awesome!",
      startDate: weekFromNow,
      members: {
        create: {
          role: "TEACHER",
          user: {
            connect: {
              email: hunter.email,
            },
          },
        },
      },
    },
  });

  await prisma.user.create({
    data: {
      email: "tyler@improv.io",
      name: "Tyler Downie",
      password: bcrypt.hashSync("password", salt),
      classes: {
        create: {
          role: "USER",
          class: {
            connect: { id: vanityClass.id },
          },
        },
      },
    },
  });

  await prisma.user.create({
    data: {
      email: "lily@improv.io",
      name: "Lily Kennedy",
      password: bcrypt.hashSync("password", salt),
      classes: {
        create: {
          role: "USER",
          class: {
            connect: { id: vanityClass.id },
          },
        },
      },
    },
  });

  await prisma.user.create({
    data: {
      email: "loner@improv.io",
      name: "Loner Jones",
      password: bcrypt.hashSync("password", salt),
    },
  });
};

run()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
