import React from "react";
import { InfoIcon } from "./icons/InfoIcon";
import { QuestsList } from "./QuestsList";

export function QuestContainer() {
  return (
    <div className="quest-container">
      <div className="quest-container__title">
        <h2 className="quest-container__title__text">Quests</h2>
        <button className="quest-container__title__button">
          <InfoIcon className="quest-container__title__button__icon" />
        </button>
      </div>
      <QuestsList />
    </div>
  );
}
