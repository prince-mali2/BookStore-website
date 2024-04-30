import Book from '../models/book.model';
import HttpStatus from 'http-status-codes';

//To Get all books
export const getAll = async () => {
  var response;
  // const { page = 1, limit = 5 } = req.query;
  // try {
  //   const data = await Book.find()
  //     .limit(limit * 1)
  //     .skip((page - 1) * limit)
  //     .exec();
  //   const count = await Book.countDocuments();
  //   var res = {
  //     data: data,
  //     totalPages: Math.ceil(count / limit),
  //     currentPage: page
  //   };
  const data = await Book.find();
    if (data != null) {
      response = {
        code: HttpStatus.OK,
        data: data,
        message: 'Data retrieved Successfully.'
      };
    } else {
      response = {
        code: HttpStatus.OK,
        data: data,
        message: 'Empty Stack'
      };
    }
  // } catch (err) {
  //   console.error(err);
  //   res.status(500).json({ message: 'Server error' });
  // }
  return response;
};

//To Get Book By Id
export const getById = async (bookId) => {
  var response;
  const data = await Book.find({ _id: bookId });
  if (data[0] != null) {
    response = {
      code: HttpStatus.OK,
      data: data,
      message: 'Note Retrived successfully'
    };
  } else {
    response = {
      code: HttpStatus.NOT_FOUND,
      data: null,
      message: 'Invalid Note Id'
    };
  }
  return response;
};

export const getBySearch = async (search) => {
  const data = await getAll();
  var response;
  var check;
  data.data.filter((book) => {
    if (book.bookName.toUpperCase() === search.toUpperCase()) {
      return (check = book);
    }

    if (book.author.toUpperCase() === search.toUpperCase()) {
      return (check = book);
    }
    return (check = null);
  });
  if (check != null) {
    response = {
      code: HttpStatus.OK,
      data: check,
      message: 'searched successfully.'
    };
  } else {
    response = {
      code: HttpStatus.BAD_REQUEST,
      data: 'Data Not Found',
      message: 'Not Found, Data not exist.'
    };
  }
  return response;
};

export const getBySortedPriceInAscending = async () => {
  const data = await getAll();
  var books = data.data;
  var sorted = books.sort((a, b) => {
    return a.price - b.price;
  });
  var response;
  return (response = {
    code: HttpStatus.OK,
    data: sorted,
    message: 'data sorted succefully'
  });
};

export const getBySortedPriceInDescending = async () => {
  const data = await getAll();
  var books = data.data;
  var sorted = books.sort((a, b) => {
    return b.price - a.price;
  });
  var response;
  return (response = {
    code: HttpStatus.OK,
    data: sorted,
    message: 'data sorted succefully'
  });
};

export const getBySortedArrivalInAscending = async () => {
  const data = await getAll();
  var books = data.data;
  var sorted = books.sort((a, b) => {
    return a.createdAt - b.createdAt;
  });
  var response;
  return (response = {
    code: HttpStatus.OK,
    data: sorted,
    message: 'data sorted succefully'
  });
};

export const getBySortedArrivalInDescending = async () => {
  const data = await getAll();
  var books = data.data;
  var sorted = books.sort((a, b) => {
    return b.createdAt - a.createdAt;
  });
  var response;
  return (response = {
    code: HttpStatus.OK,
    data: sorted,
    message: 'data sorted succefully'
  });
};
