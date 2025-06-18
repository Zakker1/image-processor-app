import React, { useState } from "react";
import axios from "axios";

function App() {
  const [image, setImage] = useState(null);
  const [taskId, setTaskId] = useState("");
  const [status, setStatus] = useState("");

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("image", image);

    const res = await axios.post("http://localhost:3000/upload", formData);
    setTaskId(res.data.taskId);
    setStatus("Задача отправлена. Ожидание...");
  };

  const checkStatus = async () => {
    const res = await axios.get(`http://localhost:3000/status/${taskId}`);
    setStatus(res.data.status || "нет данных");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Загрузка изображения</h1>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button onClick={handleUpload}>Загрузить</button>

      {taskId && (
        <div>
          <p>ID задачи: {taskId}</p>
          <button onClick={checkStatus}>Проверить статус</button>
          <p>Статус: {status}</p>
        </div>
      )}
    </div>
  );
}

export default App;
