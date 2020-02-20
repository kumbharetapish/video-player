import React from "react";
import listStyle from "./list.module.css";

const List = props => {
  const list = props.listData.map(res => {
    return (
      <div
        className={listStyle.listWrapper}
        onClick={() => {
          props.clickHandel(res.id);
        }}
      >
        <img className={listStyle.thumbnail} src={res.thumbnail} alt="" />
        <p>{res.title}</p>
      </div>
    );
  });
  return <div className={listStyle.videoListWrapper}>{list}</div>;
};

export default List;
