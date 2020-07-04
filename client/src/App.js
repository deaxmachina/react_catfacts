import React, {useState, useEffect} from "react";
import axios from "axios";
import BlogCard from "./Components/BlogCard";
import styles from "./App.module.css";
import Footer from "./Components/Footer"
import { BottomNavigation } from '@material-ui/core';


function App() {

  const api =  "https://cat-fact.herokuapp.com/facts"

  //state to hold the random fact 
  const [fact, setFact] = useState("");
  //state to hold the random number for fact 
  const [randomNumber, setRandomNumber] = useState("5");
  //when to get a new fact 
  const [updateFact, setUpdateFact] = useState(0);

  useEffect(() => {
    async function getData() {
      const [fetchedData, randomNumber] = await(fetchData());
      setRandomNumber(randomNumber);
      setFact(fetchedData[randomNumber].text)
    }
    getData();
    }, [updateFact])

  async function fetchData() {
    try {
      const {data: {all: fetchedData}} = await axios.get(api);
      const numberOfFacts = fetchedData.length;
      const randomNumber = Math.floor(Math.random() * numberOfFacts) + 1  
      return [fetchedData, randomNumber];
    } catch (error) {
      console.log(error)
    }
  }

  //get a random cat image
  // image="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg"


  function getCatFact(){
    setUpdateFact(Math.random())
  }

  return( 
    <div className={styles.app} >
      <BlogCard xs={12} className={styles.card}
      text={fact}
      getCatFact={getCatFact}
      image="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
      />
      <Footer />
    </div>
  )
};

export default App;