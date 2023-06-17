import styles from "./Users.module.css";

export default function Users({ users, width, height, offset, overlap }) {
  const renderUsers = users.length > 4 ? users.slice(0, 4) : users;
  const count = users.length > 4 ? users.length - 4 : 0;

  return (
    <div className={styles.usersList}>
      {renderUsers.map((user, idx) => {
        const styles =
          overlap === "right"
            ? {
                zIndex: 100 - idx,
                marginLeft: offset === "4" ? "-4px" : "-8px",
              }
            : {
                zIndex: 100 + idx,
                marginRight: offset === "4" ? "-4px" : "-8px",
              };
        return (
          <img
            src={`${process.env.BASE_URL}/public/images/${user}.png`}
            alt={user}
            className={styles.profile}
            width={width}
            height={height}
            style={styles}
            key={user}
          />
        );
      })}
      {count !== 0 && (
        <span className={styles.count} style={{ width: width, height: height }}>
          +{count}
        </span>
      )}
    </div>
  );
}
