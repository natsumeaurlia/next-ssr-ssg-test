import {useEffect, useState} from "react";
import {ajax} from "../utils/fetch";

export const FetchGithubStar = () => {
  const [data, setData] = useState({
    subscribers: 0,
    stars: 0
  });

  // ここでuseEffectを使ってstar数を取得してみましょう!
  useEffect(() => {
    const star = async () => {
      const response = await ajax("GET")(
        "https://api.github.com/repos/facebook/react"
      )();
      console.log('requested')
      const data = await response.json();
      setData({
        subscribers: data.subscribers_count,
        stars: data.stargazers_count
      });
    };
    star();
  }, []);

  return (
    <div>
      <p>ここにReactのGitHubレポジトリに付いたスターの数を表示してみよう</p>
      <p>{data.stars} stars</p>
    </div>
  );
};
