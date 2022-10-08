import "./index.css";
import { useState } from "react";
import { useProjectContext } from "../../utils/context/ProjectContext";

const AddProject = () => {
	const { addProject } = useProjectContext();
	const [projectTitle, setProjectTitle] = useState("");
	const [projectDescription, setProjectDescription] = useState("");
	return (
		<div className="add-project-container">
			<input
				placeholder="Title"
				id="projectTitle"
				value={projectTitle}
				onChange={(event) => setProjectTitle(event.target.value)}
			/>
			<input
				placeholder="Description"
				id="projectDescription"
				value={projectDescription}
				onChange={(event) => setProjectDescription(event.target.value)}
			/>
			<button
				className="addProject"
				onClick={() => {
					if (projectTitle.trim().length === 0) {
						alert("Must enter valid title for project!");
						return;
					}

					let newProject = {
						title: projectTitle,
						description: projectDescription,
					};
					addProject(newProject);
					setProjectTitle("");
					setProjectDescription("");
				}}
			>
				Add Project
			</button>
		</div>
	);
};

export default AddProject;
