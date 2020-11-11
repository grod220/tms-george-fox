import * as Sentry from '@sentry/node';

import { NextApiRequest, NextApiResponse } from 'next';

interface fbPost {
  permalink_url: string;
  message: string;
  full_picture: string;
  from: { name: string; id: string };
  id: string;
}

const getMostRecentPost = async () => {
  const response = await fetch(
    `https://graph.facebook.com/v6.0/790534394301792/posts?fields=permalink_url,from,message,full_picture&access_token=${process.env.FB_ACCESS_TOKEN}&format=json`,
  );
  const posts: { data: fbPost[] } = await response.json();
  const postInfo = posts.data.filter((post) => post.from.name === 'The Meatball Stoppe' && post.full_picture)[0];
  postInfo.message = postInfo.message ? postInfo.message.slice(0, 115) + '...' : 'View the latest post on Facebook ⇗';
  return postInfo;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const mostRecentPost = await getMostRecentPost();
    res.status(200).send(mostRecentPost);
  } catch (e) {
    Sentry.captureException(e);
    res.status(500).send(`Exception: ${e}`);
  }
};
