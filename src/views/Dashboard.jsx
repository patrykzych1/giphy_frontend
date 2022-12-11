import { Image } from 'react-bootstrap'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router'
import SearchForm from '../components/searchForm'
import request from '../utils/request'

function Dashboard ({ giphies, setGiphies, searchTerm, setSearchTerm }) {
  const navigate = useNavigate()

  const loadGiphies = () => {
    window.stop()
    setGiphies([])
    request(`${process.env.REACT_APP_API_URL}/Giphy?lang=en&offset=0&limit=50&q=${searchTerm}`).then(data => setGiphies(data)).catch(err => console.error(err))
  }

  return (
    <div id='content'>
      <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} onSubmit={loadGiphies} />
      {giphies && giphies.map(x => (<Image key={'gif' + x.id} className='p-2' src={x.url} alt='loading...' fluid onClick={() => navigate('/' + x.id)} />))}
    </div>
  )
}

function mapStateToProps (state) {
  const { giphy } = state
  return {
    giphies: giphy.giphies,
    searchTerm: giphy.searchTerm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setGiphies: (payload) => dispatch({ type: 'SET_GIPHIES', payload }),
    setSearchTerm: (payload) => dispatch({ type: 'SET_SEARCH_TERM', payload })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
