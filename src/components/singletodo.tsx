import React from 'react';
import { Todo } from '../model';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import './style.css';

type Props = {
	todo: Todo;
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
	const handleDone = (id: number) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
			)
		);
	};

	const handleDelete = (id: number) => {
		setTodos(todos.map((todo) => (todo.id === id ? { ...todo } : todo)));
	};

	return (
		<form className="todos_single">
			{todo.isDone ? (
				<s className="todos_single--text">{todo.todo}</s>
			) : (
				<span className="todos_single--text">{todo.todo}</span>
			)}
			<div>
				<span className="icon">
					<AiFillEdit />
				</span>
				<span className="icon">
					<AiFillDelete onClick={() => handleDelete(todo.id)} />
				</span>
				<span className="icon">
					<MdDone onClick={() => handleDone(todo.id)} />
				</span>
			</div>
		</form>
	);
};

export default SingleTodo;
