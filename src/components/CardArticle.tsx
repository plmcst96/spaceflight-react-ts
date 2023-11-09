import { Button, Card, Col } from "react-bootstrap"
import { Result } from "../inferences/article"
import { useNavigate } from "react-router-dom"

const CardArticle = ({ article }: { article: Result }) => {
  const navigate = useNavigate()

  return (
    <Col xs={6} md={4} lg={3}>
      <Card>
        <Card.Img variant="top" src={article.image_url} />
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Text>{article.summary}</Card.Text>
          <Card.Text>
            {new Date(article.published_at).toLocaleString("it-IT", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}{" "}
            | {article.news_site}
          </Card.Text>

          <Button
            variant="primary"
            onClick={() => navigate(`/detail/${article.id}`)}
          >
            Detail
          </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default CardArticle
