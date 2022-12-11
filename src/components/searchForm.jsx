import { Button, Form } from 'react-bootstrap'

function SearchForm ({ searchTerm, setSearchTerm, onSubmit }) {
  return (
    <Form onSubmit={(e) => {
      e.preventDefault()
      onSubmit()
    }}
    >
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Control type='text' placeholder='Search...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} required />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Search
      </Button>
    </Form>
  )
}

export default SearchForm
