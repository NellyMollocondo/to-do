import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoRepository } from '../TodoRepository';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

function AppUI(props) {

    const {
        error, 
        loading, 
        searchedTodos, 
        completeTodos, 
        deleteTodos,
        openModal,
        setOpenModal 
        } = React.useContext(TodoContext);
    return (
        <React.Fragment>
            <TodoCounter />     
            <TodoSearch  />      
            <TodoList>
                {error && <p>Hubo un error...</p>}
                {loading && <p>Cargando ...</p>}
                {(!loading && !searchedTodos.length) && <p>Bienvenido@! Cree su primer to-do con el botón que se encuentra en el lado inferior derecho</p>}
            
                {searchedTodos.map((todo, index) => (
                <TodoItem 
                    key={index} 
                    text={todo.text} 
                    completed={todo.completed}
                    onComplete={() => completeTodos(todo.text) }
                    onDelete={() => deleteTodos(todo.text)}
                    id={index}/>
                ))}
            </TodoList>

            {!!openModal && (
            <Modal>
                <TodoForm/>
            </Modal> 
            )}

            <CreateTodoButton
            setOpenModal = {setOpenModal}
            />
            <TodoRepository />
        </React.Fragment>
    );
}

export { AppUI };