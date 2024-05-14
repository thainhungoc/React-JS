const books = [
    { id: 1, name: 'Sách A' },
    { id: 2, name: 'Sách B' },
    { id: 3, name: 'Sách C' },
  ];
  
  function byId(bookId) {
    const book = books.find(book => book.id === bookId);
    if (book) {
      console.log(`Tìm thấy sách: ID - ${book.id}, Tên - ${book.name}`);
    } else {
      console.log('Không có kết quả tìm kiếm');
    }
  }
  
  byId(2); 
  