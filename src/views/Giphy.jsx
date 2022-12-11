import { useEffect, useState } from 'react'

import { Button, Card, Image } from 'react-bootstrap'
import { connect } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
export async function loader ({ params }) {
  return params.id
}
function Giphy ({ giphies }) {
  const params = useParams()
  const [giphy, setGiphy] = useState(null)
  const navigate = useNavigate()
  useEffect(() => {
    setGiphy(giphies.find(x => x.id === params.id))
    console.log(giphies)
  }, [params, giphies])

  return (
    giphy &&
      <Card>
        <Card.Body>
          <Image src={giphy.url} alt='loading...' fluid />
          <p className='display-5'>Rating: {giphy.rating}</p>
          <Button onClick={() => navigate('/')}>Go back</Button>
        </Card.Body>
      </Card>
  )
}
function mapStateToProps (state) {
  const { giphy } = state
  return {
    giphies: giphy.giphies
  }
}

export default connect(mapStateToProps)(Giphy)
