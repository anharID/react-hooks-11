import React from "react";

function NewHook() {
  const [state, setState] = React.useState({
    nama: "",
    nim: "",
    kelompok: "",
  });
  const namaRef = React.useRef();
  const nimRef = React.useRef();
  const kelompokRef = React.useRef();

  function handleCheck() {
    if (state.nama === "") {
      alert("Nama harus diisi");
      namaRef.current.focus();
    } else if (state.nim === "") {
      alert("Nim harus diisi");
      nimRef.current.focus();
    } else if (state.kelompok === "") {
      alert("Kelompok harus diisi");
      kelompokRef.current.focus();
    } else {
      setState({
        ...state,
        ["nama"]: "",
        ["nim"]: "",
        ["kelompok"]: "",
      });
      alert("Semua Telah Terisi!");
    }
  }

  return (
    <div
      style={{
        flex: 1,
        flexDirection: "row",
      }}
    >
      <h1>Use Ref</h1>
      <input
        type="text"
        style={{ width: 300 }}
        ref={namaRef}
        value={state.nama}
        placeholder="Nama"
        onChange={(value) =>
          setState({ ...state, ["nama"]: value.target.value })
        }
      />
      <br />
      <input
        type="text"
        style={{ width: 300 }}
        ref={nimRef}
        value={state.nim}
        placeholder="Nim"
        onChange={(value) =>
          setState({ ...state, ["nim"]: value.target.value })
        }
      />
      <br />
      <input
        type="text"
        style={{ width: 300 }}
        ref={kelompokRef}
        value={state.kelompok}
        placeholder="Kelompok"
        onChange={(value) =>
          setState({ ...state, ["kelompok"]: value.target.value })
        }
      />
      <br />
      <input type="button" value="Check" onClick={() => handleCheck()} />
    </div>
  );
}

export default NewHook
