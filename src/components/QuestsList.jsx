import { useState, useEffect } from "react";
import { QuestCard } from "./QuestCard";

export function QuestsList() {
  // Initialize state
  const [quests, setQuests] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch quests
  useEffect(() => {
    const fetchQuests = async () => {
      try {
        const response = await fetch("http://localhost:5173/quests.json");
        if (!response.ok) {
          // Throw an error if the response is not ok
          throw new Error("Failed to fetch quests");
        }
        // Parse the response and set the quests state
        const data = await response.json();
        setQuests(data.quests);
      } catch (err) {
        setError(err.message);
      } finally {
        // Set loading to false after fetching the quests
        setLoading(false);
      }
    };
    // Execute the fetchQuests function
    fetchQuests();
  }, []);

  if (loading)
    return <div className="quests-list--center-content">Loading Quests</div>;

  if (error) return <div className="quests-list--center-content">{error}</div>;

  // Render the quests list or a quests complete card
  return (
    <div className="quests-list">
      {quests.length > 0 ? (
        quests.map((q) => <QuestCard key={q.id} quest={q} />)
      ) : (
        <QuestCard quest={{ type: "all_quests_complete" }} />
      )}
    </div>
  );
}
