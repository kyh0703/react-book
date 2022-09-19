import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import Todos from '../components/Todos';
import useAction from '../lib/useActions';

const TodosContainer = () => {
  const { input, todos } = useSelector(({ tdoos }) => ({
    input: todos.input,
    todos: todos.todos,
  }));

  const [onChangeInput, onInsert, onToggle, onRemove] = useAction(
    [changeInput, insert, toggle, remove],
    []
  );
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
};

export default React.memo(TodosContainer);
