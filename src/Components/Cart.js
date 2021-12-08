import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Cart({ Token }) {
  const [ticArr, setTicArr] = useState([]);

  useEffect(async () => {
    try {
      const res = await axios.get("https://tuwaiq-goldevent-backend.herokuapp.com/oneEvent", {
        headers: { authorization: `Bearer ${Token}` },
      });
      console.log(res.data[0].cart);

      setTicArr(res.data[0].cart);
    } catch (error) {
      // console.log(res.data[0].cart)
    }
  }, []);

  const dalateEvent = async (id) => {
    const resDel = await axios.delete(`https://tuwaiq-goldevent-backend.herokuapp.com/Activitie/${id}`, {
      headers: { authorization: `Bearer ${Token}` },
    });
     setTicArr(resDel.data.cart);
    console.log(resDel.data, "khaled");
  };

  return (
    <div>
      {ticArr.map((ele) => {
        console.log(ele);

        return (
          <div >
            <h2>{ele.title}</h2>
            <p>{ele.des}</p>
            <p>{ele.deta}</p>
            <div style={{display:"flex" }}>
            <img style={{width:"320px" ,height:"320px",borderRadius:"10px "}}src={ele.img} />
            <button  style={{width:"", height:"150px"}}
              onClick={() => {
                dalateEvent(ele._id);
              }} 
            >
              DELET EVENT
            </button>
            </div>
          </div>
        )
      })}
    </div>
  );
}
