import { useState } from "react";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi 👋 I'm your AI assistant. How can I help you?" }
  ]);

  // 🤖 Dummy AI response (replace with real API later)
  const getBotResponse = (userText) => {
    const text = userText.toLowerCase();

    if (text.includes("job")) return "You can check trending jobs in your dashboard 🔥";
    if (text.includes("resume")) return "Upload your resume to analyze your strength 📄";
    if (text.includes("course")) return "Explore courses in the sidebar 📚";

    return "I'm here to help! Try asking about jobs, resume, or courses 😊";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };

    const botMessage = {
      sender: "bot",
      text: getBotResponse(input),
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  };

  return (
    <>
      {/* 🔵 FLOATING BUTTON */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
        >
          <FaRobot size={20} />
        </button>
      )}

      {/* 💬 CHAT WINDOW */}
      {open && (
        <div className="w-80 h-96 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">

          {/* HEADER */}
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-3 flex justify-between items-center">
            <h3 className="font-semibold">AI Assistant</h3>
            <FaTimes
              className="cursor-pointer"
              onClick={() => setOpen(false)}
            />
          </div>

          {/* MESSAGES */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg max-w-[75%] text-sm ${
                  msg.sender === "user"
                    ? "bg-purple-500 text-white ml-auto"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* INPUT */}
          <div className="p-3 border-t flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask something..."
              className="flex-1 border rounded-lg px-3 py-2 outline-none text-sm"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />

            <button
              onClick={handleSend}
              className="bg-purple-500 text-white p-2 rounded-lg hover:bg-purple-600"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </>
  );
}