const newTaskBoard = ({ userId }) => {
	return (
		<>
			<form>
				<label for="newTaskBoardName">
					{" "}
					What would you like to name the new task board?
				</label>
				<input id="newTaskBoardName" />
				<label for="newTaskBoardDescription">
					How would you describe the new board (Optional)
				</label>
				<input id="newTaskBoardDescription" />
				<button id="submitNewTaskBoard">Submit</button>
			</form>
		</>
	);
};

export default newTaskBoard;
