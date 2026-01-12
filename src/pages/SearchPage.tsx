import {useSearchParams} from "react-router";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const page = searchParams.get("page");
  // http://localhost:5173/search?query=react&page=2
  return (
    <>
      <h1 className="text-center">Search Results</h1>
      <p><strong>Query: </strong>{query}</p>
      <p><strong>Page: </strong>{page}</p>
    </>
  )
}

export default SearchPage;