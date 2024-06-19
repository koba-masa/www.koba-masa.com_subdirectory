import { useState, useEffect } from 'react';
import styles from "./Character.module.css";

export default function Character(props: { character: string, skills: { [key: string]: string } }) {
  const initialCheckedState = () => {
    const savedState = localStorage.getItem(`hvn-orb-skill-${props.character}`);
    return savedState ? JSON.parse(savedState) : {};
  };

  const [checkedState, setCheckedState] = useState<{ [key: string]: boolean }>(initialCheckedState);

  useEffect(() => {
    localStorage.setItem(`hvn-orb-skill-${props.character}`, JSON.stringify(checkedState));
  }, [checkedState, props.character]);

  const handleCheckboxChange = (skill: string) => {
    setCheckedState(prevState => ({
      ...prevState,
      [skill]: !prevState[skill]
    }));
  };

  return (
    <div className={styles["character-row"]}>
      <div className={styles["character-name"]}><span>{props.character}</span></div>
      {
        Object.keys(props.skills).map((skill: string, index: number) => {
          return (
            <div key={index} className={styles["skill-checkbox-row"]}>
              {props.character !== "" &&
                <div className={styles["skill-checkbox"]}>
                  <label
                    htmlFor={`${props.character}-${skill}`}
                    className={styles["skill-label"]}
                  >
                    {props.skills[skill]}
                  </label>
                  <input
                    type="checkbox"
                    id={`${props.character}-${skill}`}
                    checked={checkedState[skill] || false}
                    onChange={() => handleCheckboxChange(skill)}
                  />
                </div>
              }
            </div>
          );
        })
      }
    </div>
  );
}
