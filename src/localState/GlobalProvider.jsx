import React, { useState } from 'react';

export const GlobalContext = React.createContext()

export const GlobalProvider = (props) => {
  const [hide, setHide] = useState(false)
  const [newPosition, setNewPosition] = useState(-250)
  const [products, setProducts] = useState([
    { id: 1, title: 'Get a grayscale image by appending ?grayscale to the end of the url.', price: '250,00', oldPrice: '300.50', image: 'images/carousel/carousel-01.jpg', solde: false, stockOut: false, blocked: true, category: 'Technology', rating: 4, totalUserRating: 158 },
    { id: 2, title: 'Get a grayscale image by appending ?grayscale to the end of the url.', price: '250,00', oldPrice: '300.50', image: 'images/carousel/carousel-02.jpg', solde: false, stockOut: true, blocked: false, category: 'Technology', rating: 4, totalUserRating: 158 },
    { id: 3, title: 'Get a grayscale image by appending ?grayscale to the end of the url.', price: '250,00', oldPrice: '300.50', image: 'images/carousel/carousel-03.jpg', solde: false, stockOut: false, blocked: false, category: 'Technology', rating: 4, totalUserRating: 158 },
    { id: 4, title: 'Get a grayscale image by appending ?grayscale to the end of the url.', price: '250,00', oldPrice: '300.50', image: 'images/carousel/carousel-04.jpg', solde: false, stockOut: true, blocked: false, category: 'Technology', rating: 4, totalUserRating: 158 },
    { id: 5, title: 'Get a grayscale image by appending ?grayscale to the end of the url.', price: '250,00', oldPrice: '300.50', image: 'images/carousel/carousel-05.jpg', solde: false, stockOut: false, blocked: false, category: 'Technology', rating: 4, totalUserRating: 158 },
    { id: 6, title: 'Get a grayscale image by appending ?grayscale to the end of the url.', price: '250,00', oldPrice: '300.50', image: 'images/carousel/carousel-06.jpg', solde: false, stockOut: false, blocked: true, category: 'Technology', rating: 4, totalUserRating: 158 },
    { id: 7, title: 'Get a grayscale image by appending ?grayscale to the end of the url.', price: '250,00', oldPrice: '300.50', image: 'images/carousel/carousel-07.jpg', solde: false, stockOut: false, blocked: false, category: 'Technology', rating: 4, totalUserRating: 158 },
    { id: 8, title: 'Get a grayscale image by appending ?grayscale to the end of the url.', price: '250,00', oldPrice: '300.50', image: 'images/carousel/carousel-08.jpg', solde: false, stockOut: false, blocked: false, category: 'Technology', rating: 4, totalUserRating: 158 },
  ])
  // const [carousel, setCarousel] = useState([
  //   { id: 1, img: 'images/carousel/carousel-01.jpg', title: 'welcome', description: '' },
  //   { id: 2, img: 'images/carousel/carousel-02.jpg', title: 'YasRShop.com', description: '' },
  //   { id: 3, img: 'images/carousel/carousel-03.jpg', title: 'YasRCode Company', description: '' },
  // ])

  return (
    <GlobalContext.Provider value={{ hide, setHide, newPosition, setNewPosition, products, setProducts }}>
      {props.children}
    </GlobalContext.Provider>
  )
}
