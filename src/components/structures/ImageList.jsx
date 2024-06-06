import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import '../styles/ImageList.module.css';


function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <div className="ImageList-container">
        <ImageList
        sx={{ width: "100%", height: "100%" }}
        variant="woven"
        cols={4}
        gap={20}
        rowHeight={100}
        >
        {itemData.map((item) => (
            <ImageListItem key={item.img} cols={item.cols || 3} rows={item.rows || 1}>
            <div className="Image">
                <img
                    {...srcset(item.img, 121, item.rows, item.cols)}
                    alt={item.title}
                    loading="lazy"
                    style = {{width: "25vw", height: "30vw", objectFit: "cover"}}
                />
            </div>    
            </ImageListItem>
        ))}
        </ImageList>
    </div>    
  );
}

const itemData = [
  {
    img: 'https://i.ibb.co/2qcQmXz/DSC-6547.jpg',
    title: 'Campus Aberto',
    rows: 1,
    cols: 1,
  },
  {
    img: 'https://i.ibb.co/cyYp3td/IMG-20231122-171200.jpg',
    title: 'Burger',
    rows: 1,
    cols: 1,
  },
  {
    img: 'https://i.ibb.co/q1YXqg4/IMG-20231122-150452.jpg',
    title: 'Camera',
    rows: 1,
    cols: 1,
  },
  {
    img: 'https://i.ibb.co/JtcxSCC/IMG-20231122-154139.jpg',
    title: 'Coffee',
    rows: 1,
    cols: 1,
  },
  {
    img: 'https://i.ibb.co/Tb4QjFD/Bucket-Panter-o.png',
    title: 'Hats',
    rows: 1,
    cols: 1,
  },
  {
    img: 'https://i.ibb.co/XSDJttt/DSCN7589.jpg',
    title: 'Honey',
    author: '@arwinneil',
    rows: 1,
    cols: 1,
  },
  {
    img: 'https://i.ibb.co/4SgQyCy/DSCN7607.jpg',
    title: 'Basketball',
    rows: 1,
    cols: 1,
  },
  {
    img: 'https://i.ibb.co/6vhMQVX/DSCN7609.jpg',
    title: 'Fern',
    rows: 1,
    cols: 1,
  },
  {
    img: 'https://i.ibb.co/6nPSXjt/IMG-1062.jpg',
    title: 'Mushrooms',
    rows: 1,
    cols: 1,
  },
  {
    img: 'https://i.ibb.co/cyYp3td/IMG-20231122-171200.jpg',
    title: 'Tomato basil',
    rows: 1,
    cols: 1,
  },
  {
    img: 'https://i.ibb.co/Z15hzP5/IMG-0844.jpg',
    title: 'Sea star',
    rows: 1,
    cols: 1,
  },
  {
    img: 'https://i.ibb.co/TbHYTYm/1698198702124.jpg',
    title: 'Bike',
    rows: 1,
    cols: 1,
  },
];
