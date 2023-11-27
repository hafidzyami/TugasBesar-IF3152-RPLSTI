import React from "react";
import Image from "next/image";

const Menu = ({ menu, onAddToCart }) => {
  return (
    <div>
      <Image src={menu.gambar} alt="" srcset="" width={57}
            height={57}/>
      <div>{menu.nama}</div>
      <div>{menu.deskripsi}</div>
      <div>{menu.harga}</div>
      <button onClick={() => onAddToCart(menu)}>Add</button>
    </div>
  );
};

export default Menu;
