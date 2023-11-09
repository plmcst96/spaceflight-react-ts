import { useEffect, useState } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { Detail } from "../inferences/detail"

const DetailArticle = () => {
  type Params = {
    detailId: string
  }

  const [detail, setDetail] = useState<Detail | null>(null)
  const params = useParams<Params>()

  useEffect(() => {
    getDetail()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getDetail = async () => {
    try {
      const res = await fetch(
        "https://api.spaceflightnewsapi.net/v4/articles/" + params.detailId
      )
      if (res.ok) {
        const dataDetail = await res.json()
        console.log(dataDetail)
        setDetail(dataDetail)
      } else {
        throw new Error("Ritenta che ce la puoi fare")
      }
    } catch (error) {
      console.log("errore", error)
    }
  }
  return (
    <Container fluid className="my-5">
      <Row className="justify-content-center">
        {detail && (
          <Col xs={10} md={6}>
            <Card>
              <Card.Img variant="top" src={detail.image_url} />
              <Card.Body>
                <Card.Title>{detail.title}</Card.Title>
                <Card.Text>{detail.summary}</Card.Text>
                <Card.Text>{detail.url}</Card.Text>
                <Card.Text>
                  {new Date(detail.updated_at).toLocaleString("it-IT", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>
    </Container>
  )
}

export default DetailArticle
