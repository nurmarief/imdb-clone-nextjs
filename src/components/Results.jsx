import Card from './Card'

const Results = ({ results }) => {
  return (
    <div className='mx-auto py-4 max-w-6xl sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
      {
        results.map(result => (
          <Card key={result.id} result={result}>{ result.original_title }</Card>
        ))
      }
    </div>
  )
}

export default Results