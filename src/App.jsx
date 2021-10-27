import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { InCompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  // Stateたち
  //①入力した文字のstate.最初は空なので""にしておく
  const [todoText, setTodoText] = useState("");
  //②未完了のTODOのstate
  const [incompleteTodos, setIncompleteTodos] = useState(["未完了のタスク"]);
  //③完了したTODOのstate
  const [completeTodos, setCompleteTodos] = useState(["完了済のタスク"]);

  //タスクの追加機能
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    // もしTODOが入力されなかった場合は追加しない処理
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  // タスクの削除機能
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  //タスクの完了機能
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  //  タスクの戻す機能
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      {/* input-areaをコンポーネント化 */}
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />

      {/* Todoが5個以上たまると下記が表示される機能 */}
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるtodoは5個までだよ。消化しろ！</p>
      )}

      {/* incomplete-areaをコンポ―ネント化 */}
      <InCompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      {/* complete-areaをコンポーネント化*/}
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
