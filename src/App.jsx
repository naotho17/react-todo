import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      {/* input-area */}
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      {/* incomplete-area */}
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          <div className="list-row">
            <li>ああああ</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div className="list-row">
            <li>いいいい</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      {/* complete-area */}
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          <div className="list-row">
            <li>うううう</li>
            <button>もどす</button>
          </div>
        </ul>
      </div>
    </>
  );
};
