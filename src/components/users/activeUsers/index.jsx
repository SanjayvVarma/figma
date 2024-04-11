import { useMemo } from "react";
import { generateRandomName } from "../../../lib/utils";
import { useOthers, useSelf } from "../../../liveblocks.config";
import { Avatar } from "../avatar";
import styles from "./index.module.css";

const ActiveUsers = () => {
  const users = useOthers();
  const currentUser = useSelf();
  const hasMoreUsers = users.length > 3;

  const memoziedUsers = useMemo(() => {
    return (
      <div className="flex items-center justify-center gap-1 py-2">
        <div className="flex pl-3">
          {users.slice(0, 3).map(({ connectionId }) => {
            return <Avatar key={connectionId} name={generateRandomName()} />;
          })}

          {hasMoreUsers && (
            <div className={styles.more}>+{users.length - 3}</div>
          )}

          {currentUser && (
            <div className="relative ml-8 first:ml-0">
              <Avatar name="You" />
            </div>
          )}
        </div>
      </div>
    );
  }, [users.length]);

  return memoziedUsers;
};

export default ActiveUsers;