import "./index.css";
import { useState } from "react";
import { useProjectContext } from "../../utils/context/ProjectContext";

const AddProject = () => {
	const { addProject } = useProjectContext();
	const [projectTitle, setProjectTitle] = useState("");
	const [projectDescription, setProjectDescription] = useState("");
	return (
		<div className="add-project-container text-center">
			<input className="form .form-input mx-3"
				placeholder="Title"
				id="projectTitle"
				value={projectTitle}
				onChange={(event) => setProjectTitle(event.target.value)}
			/>
			<input className="form .form-input mx-3"
				placeholder="Description"
				id="projectDescription"
				value={projectDescription}
				onChange={(event) => setProjectDescription(event.target.value)}
			/>
			<button
				className="btn btn-add ml-5 addProject"
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
