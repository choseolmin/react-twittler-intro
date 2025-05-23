import React from 'react';
import './App.css';
import { dummyTweets } from './static/dummyData';

// ! 위 코드는 수정하지 않습니다.
console.log(dummyTweets); // 개발 단계에서 사용하는 더미 데이터입니다.

const Sidebar = () => {
  return (
    <section className="sidebar">
     <i class="far fa-comment-dots"></i>
  
    </section>
  );
};

const Counter = ({total}) => {
  return (
    <div className="tweetForm__input">
      <div className="tweetForm__inputWrapper">
        <div className="tweetForm__count" role="status">
        total: {total}
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return(    
  <footer>
    ⓒ 2025 My Twitter Clone
  </footer>
);
};
// TODO : Footer 함수 컴포넌트를 작성합니다. 시멘틱 엘리먼트 footer가 포함되어야 합니다.

const Tweets = () => {
  return (
    <ul className="tweets">
      {dummyTweets.map((tweet) => {
        return (
          <li className="tweet" key={tweet.id}>
               <div className="tweet__profile">
             
              <img src={tweet.picture} alt={`${tweet.username}의 프로필`} />
            </div>

              <div className="tweet__content">
              <div className="tweet__userInfo">
             
                <span
                className={
                tweet.username === "Bob"
                ? "tweet__name tweet__username--purple"
                : "tweet__username"
                }
>
                
                  {tweet.username}
                </span>

                <span className="tweet__createdAt">{tweet.createdAt}</span>
              </div>

              <div className="tweet__message">{tweet.content}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const Features = () => {
  return (
    <section className="features">
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile"></div>
          <Counter />
        </div>
      </div>
      <Tweets />
      <Footer/>
    </section>
  );
};

const App = () => {
  return (
    <div className="App">
      <main>
        <Sidebar />
        <Counter total={dummyTweets.length} />

        <Features />
      </main>
    </div>
  );
};

// ! 아래 코드는 수정하지 않습니다.
export { App, Sidebar, Counter, Tweets, Features, Footer };
