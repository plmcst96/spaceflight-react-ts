import { useEffect, useState } from "react"
import { Result } from "../inferences/article"
import { Row } from "react-bootstrap"
import CardArticle from "./CardArticle"


const ArticleSpace = ()=>{
const [article, setArticle]= useState<Result[]>([])

useEffect(()=>{

getArticles()
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

const getArticles = async ()=>{
    try {
        const res = await fetch('https://api.spaceflightnewsapi.net/v4/articles')
        if(res.ok){
            const dataArticles = await res.json()
            console.log(dataArticles)
            setArticle(dataArticles.results)
            
        } else {
            throw new Error('ahia non ci sono articoli 🥺!')
        }
    } catch (error) {
        console.log('erroe')
    }
}

    return(
   
        <Row className="mt-4"> 
            {
                article.map(art =>{
                   return  <CardArticle article={art} key={art.id}/>
})
            }
         
        </Row>
    
    )
}

export default ArticleSpace