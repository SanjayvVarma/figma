import React from "react";
import styles from "./avatar.module.css";
import { Tooltip } from "@nextui-org/react";

export function Avatar({ name, otherStyles }) {
  return (
    <Tooltip content={name}>
      <div className={`${styles.avatar} ${otherStyles} h-9 w-9`}>
        <img
          src={`https://liveblocks.io/avatars/avatar-${Math.floor(
            Math.random() * 30
          )}.png`}
          className={styles.avatar_picture}
          alt={name}
        />
      </div>
    </Tooltip>
  );
}