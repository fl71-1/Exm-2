export default function MyBook() {
    const favoriteBooks = [
      { title: 'Logic and critical thinking', author: 'Issam Jameel' },
      { title: '1984', author: 'George Orwell' },
      { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
      { title: 'Believe in yourself and go', author: 'J.D. Salinger' },
      { title: 'Pilot s notes', author: 'Muhammad Al-Sharif' },
    ];
  
    return (
      <div className='w-full h-full flex flex-col justify-center items-center gap-6'>
        <h1 className='text-4xl font-bold text-[#255887] '>My Favorite Books</h1>
        <div className='w-1/2 h-1/2 border-4 border-[#255887] p-4 overflow-y-auto'>
          <ul className='list-disc space-y-4 p-4'>
            {favoriteBooks.map((book, index) => (
              <li key={index} className='text-xl font-semibold text-[#255887]'>
                <span className='block'>{book.title}</span>
                <span className='block text-lg text-gray-600'>by {book.author}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  