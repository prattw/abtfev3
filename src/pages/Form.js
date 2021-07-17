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
            <img src="https://i.imgur.com/vQsDnaSm.png" alt="wine a" class="center flex-grow md:flex-grow-0"></img>
            <img src="https://i.imgur.com/3y4oKy0m.png" alt="wine b" class="center md:flex-grow-0"></img>
        </div>
        <div class="column">
          <div class="text-center">
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
            {/* <input
                style={input}
                type="text"
                onChange={handleChange}
                value={formData.comments}
                name="comments"
            /> */}
            <select name="comments" style={input} type="text" onChange={handleChange} value={formData.comments}>
              <option value="a">A</option>
              <option value="b">B</option>
            </select>
          </div>
        </div>
      <div class="text-center">
        <input type="submit" value={buttonLabel} />
      </div>
    </form>
  );
};

export default Form;