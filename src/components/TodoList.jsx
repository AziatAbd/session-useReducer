import styled from "styled-components";

const TodoList = ({
  state,
  deleteTodoHandler,
  toggleIsEdit,
  editTodoHandler,
  changeTitleHandler,
}) => {
  return (
    <StyledUl>
      {state.todos && state.todos.length > 0 ? (
        state.todos.map((item) => (
          <StyledLi key={item.id}>
            {item.isEdit ? (
              <div>
                <input
                  type="text"
                  onChange={changeTitleHandler}
                  value={state.editTitle}
                />
                <button
                  onClick={() =>
                    editTodoHandler({
                      editTitle: state.editTitle,
                      ...item,
                    })
                  }
                >
                  Save
                </button>
              </div>
            ) : (
              <div>
                <p>{item.title}</p>
                <p>{item.date}</p>
                <button onClick={() => deleteTodoHandler(item.id)}>
                  Delete
                </button>
                <button onClick={() => toggleIsEdit(item.id)}>Edit</button>
              </div>
            )}
          </StyledLi>
        ))
      ) : (
        <p>Not found 500</p>
      )}
    </StyledUl>
  );
};

export default TodoList;

const StyledUl = styled("ul")`
  list-style: none;
  padding: 0;
  width: 600px;
  margin: 20px auto;
`;

const StyledLi = styled("li")`
  border: 1px solid;
  margin: 0 0 20px 0;
  border-radius: 8px;
  padding: 10px;
`;
