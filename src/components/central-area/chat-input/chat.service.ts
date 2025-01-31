export const usePromptService = () => {
  const apiUrl = import.meta.env.VITE_API_KEY;
  const sendPrompt = async (prompt: string) => {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "deepseek-r1:1.5b",
        prompt,
      }),
    });

    const reader = response.body!.getReader();
    const decoder = new TextDecoder();
    let result = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      result += decoder.decode(value, { stream: true });
    }

    const responses = result
      .split("\n")
      .filter((line) => line.trim() !== "")
      .map((line) => {
        try {
          return JSON.parse(line);
        } catch (e) {
          console.error("Erro ao parsear JSON:", line, e);
          return null;
        }
      })
      .filter(Boolean);

    return responses.map((item) => item.response).join("");
  };

  return {
    sendPrompt,
  };
};
