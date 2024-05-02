import styled from "styled-components";

const TodoForm = ({
  state,
  dispatch,
  changeDateHandler,
  changeTitleHandler,
}) => {
  const submitHandler = (e) => {
    e.preventDefault();

    const newData = {
      title: state.title,
      date: state.date,
      isEdit: false,
      id: Date.now(),
    };

    dispatch({ type: "addTodo", payload: newData });
  };

  return (
    <div>
      <StyledForm onSubmit={submitHandler}>
        <div>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            onChange={changeDateHandler}
            value={state.date}
          />
        </div>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            onChange={changeTitleHandler}
            value={state.title}
          />
        </div>
        <button type="submit">Add</button>
      </StyledForm>
    </div>
  );
};

export default TodoForm;

const StyledForm = styled("form")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
