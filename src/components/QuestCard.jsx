import React from "react";
import { questTypeMapping } from "../constants/mappings";
import { DismissIcon } from "./icons/DismissIcon";
import { CheckIcon } from "./icons/CheckIcon";
import { truncate } from "../helpers";

function QuestCardMedia({ icon, img }) {
  // Render the icon or image based on the props
  return (
    <div
      className="quest-card__media"
      style={{ background: icon?.background || "#fff" }}
    >
      {icon ? (
        <div className="quest-card__media__icon">
          <icon.src
            style={{
              color: icon.color,
              background: icon.background,
            }}
          />
        </div>
      ) : img ? (
        <img src={img.src} alt={img.alt} className="quest-card__media__img" />
      ) : null}
    </div>
  );
}

function QuestCardContent({ title, text }) {
  return (
    <div className="quest-card__content">
      <h3 className="quest-card__content__title">{title}</h3>
      <p className="quest-card__content__text">{truncate(text, 200)}</p>
    </div>
  );
}

function QuestCardAction({ action }) {
  return (
    <div className="quest-card__action">
      <action.component
        href={action.href}
        icon={action.icon}
        text={action.text}
      />
    </div>
  );
}

function QuestCardHoverActions({ ...props }) {
  // Destructure the props and render the buttons conditionally
  const { markDone, dismiss } = props;
  return (
    <div className="quest-card__hover-actions">
      {markDone && (
        <button className="quest-card__hover-actions__button">
          <CheckIcon className="quest-card__hover-actions__button__icon" />
        </button>
      )}
      {dismiss && (
        <button className="quest-card__hover-actions__button">
          <DismissIcon className="quest-card__hover-actions__button__icon" />
        </button>
      )}
    </div>
  );
}

export function QuestCard({ quest }) {
  // Get the quest type and its content from the mapping
  const questType = questTypeMapping[quest.type];
  const questContent = questType.content(quest);

  return (
    <div className="quest-card">
      <div className="quest-card--left">
        <QuestCardMedia icon={questContent.icon} img={questContent.img} />
        <QuestCardContent title={questContent.title} text={questContent.text} />
      </div>

      {questType.action && <QuestCardAction action={questType.action} />}

      {questType.hoverActions && (
        <QuestCardHoverActions {...questType.hoverActions} />
      )}
    </div>
  );
}
