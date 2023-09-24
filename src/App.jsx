import { useState, useEffect} from 'react'
import './App.css'
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';
import video from './assets/header.mp4'

const alanKey = '648de25611b95ab5deba0e8d60e1743f2e956eca572e1d8b807a3e2338fdd0dc/stage';

function App() {
  const [newsArticle, setNewsArticle] = useState([]);
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({command, articles}) => {
        if(command === 'newHeadlines'){
          setNewsArticle(articles);
          console.log(setNewsArticle);
        }
      }

    })
  }, [])
  return (
    <div>
      <div className='header'>
        <h1>Alan Ai News Article Project</h1>
        <h2 id='h2'>Give a command to our AI: "Give me the news from CNN"</h2>
        <img className='img' src='https://venturebeat.com/wp-content/uploads/2023/07/cfr0z3n_a_robot_reads_a_paper_newspaper_01951ea7-c1d0-4645-96dd-fa7b6d772d84.png?fit=1456%2C816&strip=all'/>
      </div>
      

      <NewsCards articles={newsArticle}/>
    </div>
  )
}

export default App
