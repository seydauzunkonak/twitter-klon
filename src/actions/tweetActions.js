export const sendTweet = ({ tweet }) => {
  console.log(tweet);
  return {
    type: "send_tweet",
  };
};
