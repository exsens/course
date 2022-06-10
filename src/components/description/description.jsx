import c from "./description.module.scss";



const Description = ({ info }) => {
  return (
    <dl className={c.description}>
      {info.map((el) => {
        if (el.title === "lookingForAJob") {
          return (
            <div key={el.title} className="d-flex">
              <dt style={{ marginRight: "10px" }}>{el.title}</dt>
              <dd>{el.info ? "YES" : "NO"}</dd>
            </div>
          );
        }

        return (
          <div key={el.title} className="d-flex">
            <dt style={{ marginRight: "10px" }}>{el.title}</dt>
            <dd>{el.info}</dd>
          </div>
        );
      })}
    </dl>
  );
};

export default Description;
