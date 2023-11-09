import { Button, Card, Col } from "react-bootstrap"
import { Result } from "../inferences/article"
import { useNavigate } from "react-router-dom"

const CardArticle = ({article}:{article:Result})=>{
    const navigate = useNavigate()

    return(
        <Col xs={6} md={4}>
        <Card>
        <Card.Img variant="top" src={article.image_url} />
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Text>
            {article.summary}
          </Card.Text>

          <Button variant="primary" onClick={()=> navigate(`/${article.id}`)}>Detail</Button>
        </Card.Body>
      </Card>
      </Col>
    )
}

export default CardArticle