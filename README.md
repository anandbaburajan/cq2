<img src="./public/meta.png" alt="CQ2 banner"/>

## Introduction

CQ2 is the free and open source tool for complex discussions. Learn more [here](https://cq2.co).

## Motivation

There are no chat/forum platforms built for complex discussions.

Discussions using existing platforms turn into a mess of unorganised comments. People talk over one another and topics get mixed up. Replies to a particular topic are spread across different comments and you’re forced to mentally manage all the quotes and their replies.

In-person discussions are hit-or-miss, and most often go nowhere. They favour speaking ability. Instead of well-formed thoughts, you often get impulsive responses and hot takes. Many discussions benefit from taking a break to gather evidence or think more but there’s never enough time.

**In CQ2, forget quote hell — create threads around specific quotes and find all replies related to a topic at one place. No more mess of unorganised comments — create threads inside threads so that each thread stays on topic and organised. Never lose context of where you are — see all parent threads of the current thread in the same view.**

## Get in touch

If you have suggestions for how CQ2 could be improved, please add your thoughts on a relevant discussion [here](https://github.com/cq2-co/cq2/discussions/) or start a new discussion. If you have any questions, we would love to hear them too! If you want to report an issue, check if the issue is already opened [here](https://github.com/cq2-co/cq2/issues) otherwise open a new one.

## Self-hosting

### Docker

Coming soon!

### Vercel and MongoDB Atlas

CQ2 is built with MongoDB and Next.js, so for a quick and free setup, you can use a free MongoDB Atlas cluster and Vercel's hobby plan.

You can get started with MongoDB Atlas for free [here](https://www.mongodb.com/basics/mongodb-atlas-tutorial). Make sure to add all IP addresses (0.0.0.0/0) to the IP access list of your Atlas cluster since it is not possible to determine the IP addresses of Vercel deployments.

You can get started with Vercel's hobby plan for free:

1. Fork this repo to your own GitHub account
2. Go to https://vercel.com/dashboard
3. Create a new project
4. Import your forked repository
5. Set the environment variables (according to the instructions in .env.example)
6. Deploy

## Contributing

### Development

First, make sure you have [Node.js](https://nodejs.org/en/) and [MongoDB](https://www.mongodb.com/docs/manual/installation/#mongodb-installation-tutorials) installed. Then, to develop locally:

1. Fork this repo to your own GitHub account and then clone it.

   ```sh
   git clone https://github.com/<your-username>/CQ2.git
   ```

2. Go to the project folder

   ```sh
   cd CQ2
   ```

3. Create a new branch:

   ```sh
   git checkout -b MY_BRANCH_NAME
   ```

4. Install the dependencies with:

   ```sh
   npm i
   ```

5. Copy `.env.example` to `.env`

   ```sh
   cp .env.example .env
   ```

6. Set the env variables according to the instructions in the .env file

7. Start developing and watch for code changes:

   ```sh
   npm run dev
   ```

8. Please make sure that you can make a full production build before opening a PR. You can build the project with:

   ```sh
   npm run build
   ```

## License

CQ2 is distributed under the AGPLv3 [license](https://github.com/cq2-co/cq2/blob/main/LICENSE).
