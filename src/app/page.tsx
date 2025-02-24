import { bookFetch } from '@/model/action/bookAction';

const Home = async () => {
  const data = await bookFetch();

  console.log(data);
  return (
    <div>
      <h1>Book Search</h1>
      <ul>
        {data?.map((item) => (
          <li key={item.lending_edition_s}>
            <img src={`https://covers.openlibrary.org/b/id/${item.cover_i}-L.jpg`} alt="bookCover" />
            <h2>{item.title}</h2>
            <p>{item.author_name[0]}</p>
            <p>First Published: {item.first_publish_year}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
