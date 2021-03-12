import React, { useState } from 'react';

const TodoForm: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => setTitle(event.target.value);
  const keyPressHandler = (event: React.KeyboardEvent): void => {
    if (event.key === 'Enter') {
      // eslint-disable-next-line no-console
      console.log(title);
    }
  };
  return (
    <div className="input-field mt2">
      <input
        onChange={changeHandler}
        value={title}
        type="text"
        id="title"
        placeholder="Введите название дела"
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">
        Введите название дела
      </label>
    </div>
  );
};

export default TodoForm;
