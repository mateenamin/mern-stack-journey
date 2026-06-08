import { useState } from "react"

function ListsAndKeys() {
  const [skills, setSkills] = useState([
    { id: 1, name: "HTML", level: "Expert" },
    { id: 2, name: "CSS", level: "Expert" },
    { id: 3, name: "JavaScript", level: "Good" },
    { id: 4, name: "React", level: "Learning" },
    { id: 5, name: "Tailwind", level: "Good" },
  ])

  // Item delete karna
  const deleteSkill = (id) => {
    setSkills(skills.filter(skill => skill.id !== id))
  }

  return (
    <div style={{ padding: "30px", fontFamily: "sans-serif" }}>
      <h1>My Skills</h1>

      {skills.map((skill) => (
        <div key={skill.id} style={{
          background: "white",
          padding: "12px 16px",
          marginBottom: "10px",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
        }}>
          <div>
            <h3 style={{ margin: 0 }}>{skill.name}</h3>
            <p style={{ margin: 0, color: "gray" }}>{skill.level}</p>
          </div>
          <button
            onClick={() => deleteSkill(skill.id)}
            style={{
              background: "red",
              color: "white",
              border: "none",
              padding: "6px 12px",
              borderRadius: "6px",
              cursor: "pointer"
            }}>
            Delete
          </button>
        </div>
      ))}

      <p>Total Skills: {skills.length}</p>
    </div>
  )
}

export default ListsAndKeys

