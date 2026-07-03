const getStoredBook = () => {
    const storedBooksString = localStorage.getItem("readList");

    if (storedBooksString) {
        const storedBooks = JSON.parse(storedBooksString);

        return storedBooks;
    } else {
        return [];
    }
}

const getWishlistBook = () => {
    const wishlistBooksString = localStorage.getItem("wishList");

    if (wishlistBooksString) {
        const wishlistBooks = JSON.parse(wishlistBooksString);

        return wishlistBooks;
    } else {
        return [];
    }
}

const addToLocalStorage = id => {
    const storedBooks = getStoredBook();
    console.log("SB: ", storedBooks);

    if (storedBooks.includes(id)) {
        alert("This ID already exists.");
    } else {
        // console.log(id)
        storedBooks.push(id);
        const books = JSON.stringify(storedBooks);
        localStorage.setItem("readList", books);
    }
}

const addWishlistBookToLS = id => {
    const wishlistBooks = getWishlistBook();
    console.log("SB: ", wishlistBooks);

    if (wishlistBooks.includes(id)) {
        alert("This ID already exists.");
    } else {
        // console.log(id)
        wishlistBooks.push(id);
        const books = JSON.stringify(wishlistBooks);
        localStorage.setItem("wishList", books);
    }
}

export { addToLocalStorage, getStoredBook, addWishlistBookToLS, getWishlistBook };