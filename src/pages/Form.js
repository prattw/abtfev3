import React, {useState} from "react";
import "./Form.css";
// import { Link } from "react-router-dom";

const Form = ({initialComments, history, handleSubmit, buttonLabel}) => {
  const [formData, setFormData] = useState(initialComments)
  
    const input = {
        background: "black",
        width: "20%",
        border: "none",
        borderBottom: "white",
        font: "white",
    }

  // Functions
  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value })
  }

  const handleSubmission = (event) => {
    event.preventDefault()
    handleSubmit(formData)
    history.push("/")
  }

  return (

    <form onSubmit={handleSubmission}>
        <div class="row">
            <img src="https://i.imgur.com/vQsDnaSl.png" alt="wine a" class="center"></img>
            <img src="https://i.imgur.com/3y4oKy0l.png" alt="wine b" class="center"></img>
        </div>
        <div class="column">
            <label for="name">Let us know where to send invites for future Cuvaison events</label>
            <input
                style={input}
                type="text"
                onChange={handleChange}
                value={formData.name}
                name="email"
                text="email"
            />
            <label for="comments">Which label do you like the best?</label>
            <input
                style={input}
                type="text"
                onChange={handleChange}
                value={formData.comments}
                name="comments"
            />
        </div>
        <input type="submit" value={buttonLabel} />
    </form>
  );
};

export default Form;