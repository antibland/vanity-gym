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
  const twoWeeksFromNow = add(new Date(), { days: 14 });

  const vanityClass = await prisma.class.create({
    data: {
      name: "Brutal Cycling Struggle",
      details:
        "Prepare for a grueling hour of non-stop peddling to terrible music. No pain, no cane. Like, you should work out a lot now and then...you won't need a cane later. Heh. Awesome!",
      startDate: weekFromNow,
      cover:
        "https://archive.triblive.com/wp-content/uploads/2018/11/ptrdirtydozen02112716.jpg",
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

  await prisma.class.create({
    data: {
      name: "Strength Training for Weaklings",
      details:
        "Question: Why can't you lift 600 pounds with one arm? Answer: Get in the gym, babe!",
      startDate: twoWeeksFromNow,
      cover:
        "https://d3h9ln6psucegz.cloudfront.net/wp-content/uploads/2006/03/7-Reasons-Youre-a-Weakling.jpg",
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

  await prisma.class.create({
    data: {
      name: "Rope Climbing Simulation",
      details:
        "Our liquid crystal projection system will make you believe there are real lions on your tail, imploring you to climb for your pathetic little life. Don't miss it!",
      startDate: twoWeeksFromNow,
      cover:
        "https://s.yimg.com/uu/api/res/1.2/wyj8ra7kgWSYXoVLjnU6og--~B/aD03ODg7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://o.aolcdn.com/dims-shared/dims3/GLOB/crop/1920x1080+0+0/resize/1400x788!/format/jpg/quality/85/https://o.aolcdn.com/hss/storage/midas/b7c1141173e328e2da3f9ac4fed6322b/203130127/crytek1.jpg",
    },
  });

  await prisma.class.create({
    data: {
      name: "Fitness & Diet",
      details:
        "Which protein powder do I pound down? Should I eat unused dumbbells? Is metal digestable? Join and find out.",
      startDate: twoWeeksFromNow,
      cover:
        "https://media.istockphoto.com/photos/small-portion-of-pasta-picture-id146771811?k=20&m=146771811&s=612x612&w=0&h=oytUzbVuDxZ1gy5TvwLFc5WNmdUbozgrNPCXvtOGCqI=",
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
