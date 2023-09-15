import { useForm } from "../hooks/useForm";

const initialForm = {
  name: "",
  email: ""
}

const Form = () => {

  const { input, handleChangeInput, handleSubmit, nameError, emailErrors, success } = useForm(initialForm)

  return (
    <div>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>

        <label htmlFor="name"> Nombre </label>
        <input
          type="text"
          name="name"
          value={input.name}
          onChange={(e) => handleChangeInput(e)}
        />
        {nameError ? <span style={{ color: "#AA0000", fontWeight: "bold", marginTop: 10 }} >{nameError}</span> : ""}

        <label htmlFor="email"> Email</label>
        <input
          type="email"
          name="email"
          value={input.email}
          onChange={(e) => handleChangeInput(e)}
        />
        {emailErrors ? <span style={{ color: "#AA0000", fontWeight: "bold", marginTop: 10 }} >{emailErrors}</span> : ""}

        <button type="submit" style={{ marginTop: 25, height: 30 }}>Enviar</button>
      </form>

      {success
        ? <div style={{color: "#009000", fontWeight: "bold", textAlign: "center"}}>
          <p>Gracias </p>
          <p>Nos pondremos en contacto a la brevedad</p>
        </div>
        : ""
      }

    </div>
  );
};

export default Form;
