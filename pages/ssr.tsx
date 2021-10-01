import React from 'react';
import {InferGetStaticPropsType} from 'next';
import {ajax} from "../utils/fetch";

type Props = InferGetStaticPropsType<typeof getServerSideProps>;

function Ssr({github}: Props) {
  return (
    <div>
      <p>ここにReactのGitHubレポジトリに付いたスターの数を表示してみよう</p>
      <p>{github.stars} stars</p>
    </div>
  );
}

export const getServerSideProps = async () => {
  const response = await ajax("GET")(
    "https://api.github.com/repos/facebook/react"
  )();
  console.log('requested')
  const data = await response.json();
  const github = {
    subscribers: data.subscribers_count,
    stars: data.stargazers_count
  };
  return {
    props: {
      github,
    }
  };
};

export default Ssr;
