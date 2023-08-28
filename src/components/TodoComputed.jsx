const TodoComputed = ({ computedItemsLeft, clearCompleted }) => {
    return (
        <section className=" flex justify-between rounded-md bg-white dark:bg-gray-800 px-4 py-4">
            <span className=" text-gray-400">
                {computedItemsLeft}
            </span>
            <button className=" text-gray-400" onClick={clearCompleted}>Clear completed</button>
        </section>
    );
};

export default TodoComputed;
