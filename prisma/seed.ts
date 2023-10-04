import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  const kody = await db.user.create({
    data: {
      username: "kody",
      passwordHash:
        "$2b$10$K7L1OJ45/4Y2nIvhRVpCe.FSmhDdWoXehVzJptJ/op0lSsvqNu/1u",
    },
  });
  const jokes = await Promise.all(
    getJokes().map((joke) => {
      const data = { userId: kody.id, ...joke };
      return db.joke.create({ data });
    })
  );
  const firstJoke = jokes[0];

  const comment = await Promise.all(
    getComments().map((c) => {
      const data = { userId: kody.id, jokeId: firstJoke.id, ...c };
      return db.comment.create({ data });
    })
  );
}
seed();
function getComments() {
  return [
    {
      comment: "wow, its too funny!!",
    },
    {
      comment: "I can't stop laughing",
    },
    {
      comment: "Ohh!! I cant resist myself from laughing",
    },
    {
      comment: "hahahahhaahahahaaaaaaa",
    },
    {
      comment: "Ohh my gosh",
    },
    {
      comment: "jiggles and giggles",
    },
  ];
}

function getJokes() {
  return [
    {
      name: "Road worker",
      content: `I never wanted to believe that my Dad was stealing from his job as a road worker. But when I got home, all the signs were there.`,
    },
    {
      name: "Frisbee",
      content: `I was wondering why the frisbee was getting bigger, then it hit me.`,
    },
    {
      name: "Trees",
      content: `Why do trees seem suspicious on sunny days? Dunno, they're just a bit shady.`,
    },
    {
      name: "Skeletons",
      content: `Why don't skeletons ride roller coasters? They don't have the stomach for it.`,
    },
    {
      name: "Hippos",
      content: `Why don't you find hippopotamuses hiding in trees? They're really good at it.`,
    },
    {
      name: "Dinner",
      content: `What did one plate say to the other plate? Dinner is on me!`,
    },
    {
      name: "Elevator",
      content: `My first time using an elevator was an uplifting experience. The second time let me down.`,
    },
  ];
}
